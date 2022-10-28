import * as React from 'react';
import Typography from '@mui/material/Typography';
import QuestionComponent from "./questionComponent";
import axios from "axios";
import {useEffect, useState} from "react";

export default function QuestionsComponent({ handleSelectedAnswer }) {
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://localhost:3401/personality/questions');
            setQuestions(response.data);
        }

        fetchData().then();
    }, []);

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
