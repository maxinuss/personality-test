import * as React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepComponent from "./stepComponent";
import QuestionsComponent from "./questionsComponent";
import axios from "axios";
import {Container} from "@mui/material";
import {useEffect, useState} from "react";

const steps = ['Welcome', 'Questions', 'Result'];

export default function StepsComponent() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [selectedAnswers, setSelectedAnswers] = React.useState([]);
    const [testResult, setTestResult] = React.useState(null);
    const [nextDisabled, setNextDisabled] = useState(false);

    useEffect(() => {
        if (activeStep === 1) setNextDisabled(true);
    }, [activeStep])

    const handleSelectedAnswer = (questionId, answerId) => {
        selectedAnswers[questionId] = answerId;
        setSelectedAnswers(selectedAnswers);

        if (activeStep === 1 && selectedAnswers && Object.keys(selectedAnswers).length >= 4) {
            setNextDisabled(false)
        }
    }

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);

        if (activeStep === 1) {
            const filteredAnswers = selectedAnswers.filter(function (el) {
                return el != null;
            });

            axios.post(`${process.env.REACT_APP_API_URL}/personality/`, {
                answers: filteredAnswers.join(',')
            })
            .then(function (response) {
                setTestResult(response.data.personality);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Container sx={{ width: '100%', padding: '20px' }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};

                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>

            <Container fixed sx={{ width: '100%', padding: '50px' }}>
                {activeStep === 0 ? (<StepComponent
                    content={'Welcome, please answer the questions for getting your personality type'}
                    steps={steps}
                    activeStep={activeStep}
                    handleNext={handleNext}
                    nextDisabled={nextDisabled}
                />) : ''}

                {activeStep === 1 ? (<StepComponent
                    content={<QuestionsComponent
                        handleSelectedAnswer={handleSelectedAnswer}
                    />}
                    steps={steps}
                    activeStep={activeStep}
                    handleNext={handleNext}
                    nextDisabled={nextDisabled}
                />) : ''}

                {activeStep === 2 ? (<StepComponent
                    content={`Your result is: ${testResult}`}
                    steps={steps}
                    activeStep={activeStep}
                    handleNext={handleNext}
                    handleReset={handleReset}
                />) : ''}
            </Container>
        </Container>
    );
}
