import { NestFactory } from '@nestjs/core';
import { RestModule } from './rest.module';
import { LogService } from './common/services/log.service';

const logger = new LogService();

async function bootstrapRest() {
  const app = await NestFactory.create(RestModule);
  app.enableCors();
  await app.listen(process.env.APP_HTTP_PORT!);
}

bootstrapRest().then(() => logger.info('Rest started'));
