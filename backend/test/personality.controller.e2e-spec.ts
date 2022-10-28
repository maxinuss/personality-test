import request from 'supertest';
import { Test } from '@nestjs/testing';
import { PersonalityModule } from '../src/modules/personality/personality.module';
import { INestApplication } from '@nestjs/common';
import { readFileSync } from "fs";

describe('Personality', () => {
    let app: INestApplication;

    beforeAll(async () => {
        jest.mock('../src/common/services/inMemoryDb.service', () => ({
            getDataFromFile: () => JSON.parse(readFileSync(`${__dirname}/questions-test.json`, "utf8"))
        }));
        const moduleRef = await Test.createTestingModule({
            imports: [PersonalityModule],
        }).compile();

        app = moduleRef.createNestApplication();
        await app.init();
    });

    it(`/GET questions`, async () => {
        const result = await request(app.getHttpServer())
            .get('/personality/questions')
            .expect(200);

        expect(result.body.length).toBe(4);
    });

    it(`/POST answers`, async () => {
        const result = await request(app.getHttpServer())
            .post('/personality/')
            .send({answers: '1,2,3,4'})
            .expect(201);

        expect(result.body.personality).toBe('Extrovert')
    });

    afterAll(async () => {
        await app.close();
    });
});