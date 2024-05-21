
import { CommitTypes } from "../../commit.types";
import { GetAllCommitsApplication } from "./get-all-commits.application";

export const GetAllCommitsProvider = {
  provide: CommitTypes.APPLICATION.GET_ALL_COMMITS,
  useClass: GetAllCommitsApplication,
};
