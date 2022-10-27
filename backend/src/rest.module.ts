import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PersonalityModule } from './modules/personality/personality.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PersonalityModule,
  ],
})
export class RestModule { }
