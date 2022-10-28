import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepComponent from "./stepComponent";
import QuestionsComponent from "./questionsComponent";
import axios from "axios";

const steps = ['Welcome', 'Questions', 'Result'];

export default function StepsComponent() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [selectedAnswers, setSelectedAnswers] = React.useState([]);
    const [testResult, setTestResult] = React.useState(null);

    const handleSelectedAnswer = (questionId, answerId) => {
        selectedAnswers[questionId] = answerId;
        setSelectedAnswers(selectedAnswers);
    }

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);

        if (activeStep === 1) {
            const filteredAnswers = selectedAnswers.filter(function (el) {
                return el != null;
            });

            axios.post('http://localhost:3401/personality/', {
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
        <Box sx={{ width: '100%' }}>
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

            {activeStep === 0 ? (<StepComponent
                content={'Welcome, please answers the questions for getting your personality type'}
                steps={steps}
                activeStep={activeStep}
                handleNext={handleNext}
            />) : ''}

            {activeStep === 1 ? (<StepComponent
                content={<QuestionsComponent
                    handleSelectedAnswer={handleSelectedAnswer}
                />}
                steps={steps}
                activeStep={activeStep}
                handleNext={handleNext}
            />) : ''}

            {activeStep === 2 ? (<StepComponent
                content={`Your result is: ${testResult}`}
                steps={steps}
                activeStep={activeStep}
                handleNext={handleNext}
                handleReset={handleReset}
            />) : ''}
        </Box>
    );
}
