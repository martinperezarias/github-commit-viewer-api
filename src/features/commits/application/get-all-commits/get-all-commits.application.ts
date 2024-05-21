import { Inject, Injectable } from '@nestjs/common';
import { IGetAllCommitsApplication } from './get-all-commits.interface';
import { ApiResponse } from '@/src/features/shared/common/domain/entities/api-response.entity';
import { ApiResponseOk } from '@/src/features/shared/common/domain/entities/api-response-ok.entity';
import { ApiResponseError } from '@/src/features/shared/common/domain/entities/api-response-error.entity';
import { Octokit } from 'octokit';
import { ConfigType } from '@nestjs/config';
import { CommitData } from '../../domain/entities/commit.entity';
import { GetCommitDto } from '../../infrastructure/get-commits.dto';
import configs from '@/src/configs/configs';

@Injectable()
export class GetAllCommitsApplication implements IGetAllCommitsApplication {
  constructor(
    @Inject(configs.KEY)
    private readonly configService: ConfigType<typeof configs>,
  ) { }

  public async execute({ perPage, page, username, repo }: GetCommitDto): Promise<ApiResponse<CommitData[]>> {
    try {
      const octokit = new Octokit({
        auth: this.configService.octokit.GITHUB_TOKEN
      });

      const userToSearch = username ? username : this.configService.octokit.username;
      const repoToSearch = repo ? repo : this.configService.octokit.repo;

      const githubReq = {
        headers: { 'X-GitHub-Api-Version': '2022-11-28' },
        owner: 'OWNER',
        repo: 'REPO',
        per_page: perPage,
        page,
      };

      const res = await octokit.request(`GET /repos/${userToSearch}/${repoToSearch}/commits`, githubReq)

      githubReq.per_page = 1;
      githubReq.page = 1;

      const { headers } = await octokit.request(`GET /repos/${userToSearch}/${repoToSearch}/commits`, githubReq)

      const lastPageMatch = headers.link.match(/page=(\d+)>; rel="last"/);
      const totalCount = parseInt(lastPageMatch[1], 10);

      return new ApiResponseOk({
        status: 200,
        message: 'All commits',
        info: {
          totalCount: totalCount,
          perPage: +perPage || 30,
          page: +page || 1,
        },
        data: res.data,
      });
    } catch (error) {
      throw new ApiResponseError(
        error,
        'Error getting all commits'
      );
    }
  }
}
