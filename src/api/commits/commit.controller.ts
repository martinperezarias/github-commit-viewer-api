import { IGetAllCommitsApplication } from "@/src/features/commits/application/get-all-commits/get-all-commits.interface";
import { CommitTypes } from "@/src/features/commits/commit.types";
import { GetCommitDto } from "@/src/features/commits/infrastructure/get-commits.dto";
import { Body, Controller, Inject, Post } from "@nestjs/common";

@Controller('commit')
export class CommitController {
    constructor(
        @Inject(CommitTypes.APPLICATION.GET_ALL_COMMITS)
        private readonly getAllCommits: IGetAllCommitsApplication
    ) {}

    @Post('get-all')
    returnCommitsList(@Body() getCommitDto: GetCommitDto) {
        return this.getAllCommits.execute(getCommitDto);
    }
}