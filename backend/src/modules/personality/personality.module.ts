import { Module } from '@nestjs/common';
import { PersonalityController } from './personality.controller';
import { LogService } from "../../common/services/log.service";
import { PersonalityService } from "./personality.service";

@Module({
    imports: [],
    controllers: [PersonalityController],
    providers: [PersonalityService, LogService],
    exports: [],
})
export class PersonalityModule {}
