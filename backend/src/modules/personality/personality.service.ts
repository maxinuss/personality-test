import { Injectable } from '@nestjs/common';
import { PersonalityDto } from './personality.dto';
import { LogService } from '../../common/services/log.service';

@Injectable()
export class PersonalityService {
  constructor(
    private readonly log: LogService
  ) {}

  readonly INTROVERT = 'Introvert';
  readonly EXTROVERT = 'Extrovert';

  async getPersonality({ answer1, answer2, answer3, answer4 }: PersonalityDto) {
    try {
      const score =  answer1 + answer2 + answer3 + answer4;

      return { personality: score > 10 ? this.EXTROVERT : this.INTROVERT };
    } catch (error: any) {
      this.log.error(error).then();

      return error?.response;
    }
  }
}
