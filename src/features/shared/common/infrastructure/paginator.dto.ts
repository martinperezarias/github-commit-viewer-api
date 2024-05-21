import { IsNumber } from "class-validator";

export class PaginatorDto {
    @IsNumber()
    perPage: number;

    @IsNumber()
    page: number;
}