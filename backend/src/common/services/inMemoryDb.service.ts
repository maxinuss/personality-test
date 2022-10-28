import { Injectable } from '@nestjs/common';
import { readFile } from 'fs/promises';

@Injectable()
export class InMemoryDbService {

  async getDataFromFile() {
    return JSON.parse(await readFile(`${__dirname}/../../questions.json`, "utf8"));
  }

  async findAnswerByIds(answerIds: string[]): Promise<[{ score: number, text: string, id: number }] | null> {
    const questions = await this.getDataFromFile();
    const result = questions.map((question: { answers: any[]; }) =>
        question.answers.filter((answer) => answerIds.find(elm => parseInt(elm) === parseInt(answer.id)))
    )

    return result[0] || null;
  }

  async findQuestions(limit: number): Promise<string[] | null>{
    const questions = await this.getDataFromFile();
    const shuffled = questions.sort(() => 0.5 - Math.random());

    return shuffled.slice(0, limit) || null;
  }
}
