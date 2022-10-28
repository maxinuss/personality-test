import * as React from 'react';
import Typography from '@mui/material/Typography';
import QuestionComponent from "./questionComponent";

const questions = [
    {
        id: 1,
        title: "You’re really busy at work and a colleague is telling you their life story and personal woes. You:",
        answers: [
            {
                text: "Don’t dare to interrupt them",
                id: 1
            },
            {
                text: "Think it’s more important to give them some of your time; work can wait",
                id: 2
            },
            {
                text: "Listen, but with only with half an ear",
                id: 3
            },
            {
                text: "Interrupt and explain that you are really busy at the moment",
                id: 4
            }
        ]
    },
    {
        id: 2,
        title: "You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:",
        answers: [
            {
                text: "Look at your watch every two minutes",
                id: 5
            },
            {
                text: "Bubble with inner anger, but keep quiet",
                id: 6
            },
            {
                text: "Explain to other equally impatient people in the room that the doctor is always running late",
                id: 7
            },
            {
                text: "Explain to other equally impatient people in the room that the doctor is always running late",
                id: 8
            }
        ]
    }
]

export default function QuestionsComponent({ handleSelectedAnswer }) {
    return (
        <React.Fragment>
            <Typography component={'span'} variant='h5' color={'secondary'}>Are you an introvert or an extrovert?</Typography>
            <br />
            {
                questions.map((question) => {
                    return <QuestionComponent
                        key={`question_${question.id}`}
                        question={question}
                        answers={question.answers}
                        handleSelectedAnswer={handleSelectedAnswer}
                    />
                })
            }
        </React.Fragment>
    );
}
