# personality-test

### Assignment

```
Build a simple personality test application, that takes 3-5 different questions, maps them into a score and produces a personality trait of either Introvert or Extrovert.

You can find examples of questions here: https://www.psychologies.co.uk/self/are-you-an-introvert-or-an-extrovert.html

An example could be
Landing screen
Start personality test
Dynamic screen, that reads question and answers from a the backend (Just build CRUD, with in memory DB)
Finish screen, where you can see your personality trait.


It is a plus if you write some unit-tests.
```

---
### Project structure
- Backend: personality API developed in TypeScript.
- Frontend: Front for Landing, answers selection and result.

---
### Stack

* Docker & Docker compose
* NodeJs
* NestJs Framework
* React Library

---
### Run it with docker

#### Requirements:
* [docker](https://docs.docker.com/get-docker/)
* [docker-compose](https://docs.docker.com/compose/install/)

#### Instructions:
* Clone this repo
* Go to the repo root
* Inside ```backend``` folder Copy the .env.example file to .env (default params will work)
* Inside ```frontend``` folder Copy the .env.example file to .env (default params will work)
* Run ```make up``` if you use Linux or Mac (if not you can run ``` docker-compose up -d```).
* Wait until app is ready. You can check it using ```make logs``` (```docker-compose logs -f```)
* If you didn't change .env default values the frontend will be accessible in: ```http://localhost:4401```

#### Internal / External Ports

|  Service  | Internal | External |
|:---------:|:--------:|:--------:|
| Node/Rest |   3000   |   3401   |
|   React   |   3001   |   4401   |

#### Endpoints
Get questions: ```GET http://localhost:3401/personality/questions```

---
Get personality: ```POST http://localhost:3401/personality/```

With body:
```json
{
    "answers": "1,2,3,4"
}
```

#### Testing
Some E2E testing is included in backend.
To run it execute ```make back``` (```docker exec -it node-pt-back-container bash```) and then ```npm run test:e2e```

---
#### Some improvements to do in a real world application:
* Database instead JSON file for questions.
* Cache, for example: Redis
* Hooks for running linter and testing in local before commit/push
* Pipelines configuration file (Bitbucket, Github)
* Complete testing with some UNIT testing
* Unified format for API responses