import { Body, Controller, Post } from '@nestjs/common';
import { PersonalityService } from "./personality.service";
import { ValidationPipe } from '../../common/validation.pipe';
import { PersonalityDto } from "./personality.dto";

@Controller('personality')
export class PersonalityController {
  constructor(private personalityService: PersonalityService) {}

  @Post('/')
  answer(@Body(new ValidationPipe()) body: PersonalityDto) {
    return this.personalityService.getPersonality(body);
  }
}
