import { CommitModule } from './features/commits/commit.module';
import { Module } from '@nestjs/common';
import configs from './configs/configs';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [configs],
      isGlobal: true,
    }),
    CommitModule,
  ]
})
export class AppModule { }
