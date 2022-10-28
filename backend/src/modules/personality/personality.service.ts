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
  readonly SCORE_THRESHOLD = 10;
  readonly INTROVERT = 'Introvert';
  readonly EXTROVERT = 'Extrovert';

  async getPersonality({ answers }: PersonalityDto): Promise<object> {
    try {
      let score = 0;
      const result = await this.database.findAnswerByIds(answers.split(','))
      result?.map(answer => {
        score = score + answer.score;
      })

      return { personality: score > this.SCORE_THRESHOLD ? this.EXTROVERT : this.INTROVERT };
    } catch (error: any) {
      this.log.error(error).then();

      return error?.response;
    }
  }

  async getQuestions(): Promise<string[]|null> {
    try {
      return this.database.findQuestions(this.QUESTIONS_QTY)
    } catch (error: any) {
      this.log.error(error).then();

      return error?.response;
    }
  }
}
