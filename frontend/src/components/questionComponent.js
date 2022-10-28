import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function QuestionComponent({ question, answers, handleSelectedAnswer }) {
    return (
        <Card sx={{ minWidth: 275, marginBottom: '20px' }}>
            <CardContent>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">
                        <Typography component={'span'} color={'primary'}>{question.title}</Typography>
                    </FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                    >
                        { answers.map(answer => (
                            <FormControlLabel
                                onClick={() => handleSelectedAnswer(question.id, answer.id)}
                                value={answer.id}
                                control={<Radio size="small" />}
                                label={<Typography component={'span'} variant="body2" color="textSecondary">{answer.text}</Typography>}
                                key={`answer_${answer.id}`}
                            />
                            )
                        )}
                    </RadioGroup>
                </FormControl>

            </CardContent>
        </Card>
    );
}
