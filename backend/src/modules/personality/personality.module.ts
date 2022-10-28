import { Module } from '@nestjs/common';
import { PersonalityController } from './personality.controller';
import { LogService } from "../../common/services/log.service";
import { PersonalityService } from "./personality.service";
import { InMemoryDbService } from "../../common/services/inMemoryDb.service";

@Module({
    imports: [],
    controllers: [PersonalityController],
    providers: [PersonalityService, LogService, InMemoryDbService],
    exports: [],
})
export class PersonalityModule {}
