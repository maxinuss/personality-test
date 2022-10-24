import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { LogService } from "../../common/services/log.service";

@Module({
    imports: [],
    controllers: [HealthController],
    providers: [LogService],
    exports: [],
})
export class HealthModule {}
