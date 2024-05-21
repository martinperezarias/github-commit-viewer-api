import { Module } from '@nestjs/common';
import { CommitController } from 'src/api/commits/commit.controller';
import { GetAllCommitsProvider } from './application/get-all-commits/get-all-commits.provider';

@Module({
    controllers: [CommitController],
    imports: [],
    providers: [GetAllCommitsProvider],
})
export class CommitModule {}
