import { Body, Controller, Post, Get } from '@nestjs/common';
import { PersonalityService } from "./personality.service";
import { ValidationPipe } from '../../common/validation.pipe';
import { PersonalityDto } from "./personality.dto";

@Controller('personality')
export class PersonalityController {
  constructor(private personalityService: PersonalityService) {}

  @Post('/')
  sendAnswer(@Body(new ValidationPipe()) body: PersonalityDto) {
    return this.personalityService.getPersonality(body);
  }

  @Get('/questions')
  getQuestions() {
    return this.personalityService.getQuestions();
  }
}
