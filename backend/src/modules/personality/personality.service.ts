import { Injectable } from '@nestjs/common';
import { PersonalityDto } from './personality.dto';
import { LogService } from '../../common/services/log.service';
import { InMemoryDbService } from "../../common/services/inMemoryDb.service";

@Injectable()
export class PersonalityService {
  constructor(
    private readonly log: LogService,
    private readonly database: InMemoryDbService
  ) {}

  readonly QUESTIONS_QTY = 4;
  readonly INTROVERT = 'Introvert';
  readonly EXTROVERT = 'Extrovert';

  async getPersonality({ answers }: PersonalityDto) {
    try {
      let score = 0;
      const result = this.database.findAnswerByIds(answers.split(','))
      result?.map(answer => {
        score = score + answer.score;
      })

      return { personality: score > 10 ? this.EXTROVERT : this.INTROVERT };
    } catch (error: any) {
      this.log.error(error).then();

      return error?.response;
    }
  }

  async getQuestions() {
    try {
      return this.database.findQuestions(this.QUESTIONS_QTY)
    } catch (error: any) {
      this.log.error(error).then();

      return error?.response;
    }
  }
}
