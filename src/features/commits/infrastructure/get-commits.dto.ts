import { IsOptional, IsString } from "class-validator";
import { PaginatorDto } from "../../shared/common/infrastructure/paginator.dto";

export class GetCommitDto extends PaginatorDto {
    @IsString()
    @IsOptional()
    username: string;

    @IsString()
    @IsOptional()
    repo: string;
}