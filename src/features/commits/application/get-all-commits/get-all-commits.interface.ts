import { ApiResponse } from "@/src/features/shared/common/domain/entities/api-response.entity";
import { CommitData } from "../../domain/entities/commit.entity";
import { GetCommitDto } from "../../infrastructure/get-commits.dto";

export interface IGetAllCommitsApplication {
  execute(req: GetCommitDto): Promise<ApiResponse<CommitData[]>>;
}