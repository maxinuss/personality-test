import { Injectable } from '@nestjs/common';
import fs from 'fs'

@Injectable()
export class InMemoryDbService {
  private readonly questions;

  constructor() {
    this.questions = JSON.parse(fs.readFileSync(`${__dirname}/../../questions.json`, 'utf8'));
  }

  findAnswerByIds(answerIds: string[]): [{ score: number, text: string, id: number }]|null {
    const result = this.questions.map((question: { answers: any[]; }) =>
        question.answers.filter((answer) => answerIds.find(elm => parseInt(elm) === parseInt(answer.id)))
    )

    return result[0] || null;
  }
}
