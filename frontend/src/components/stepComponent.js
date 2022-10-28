import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import * as React from "react";

export default function StepComponent({ content, steps, activeStep, handleNext, handleReset}) {
    return (
        <React.Fragment>
            <Typography component={'span'} sx={{mt: 2, mb: 1}}>{content}</Typography>
            <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
                <Box sx={{flex: '1 1 auto'}}/>
                { handleReset ?
                    (<Button onClick={handleReset}>Reset</Button>) :
                    (<Button onClick={handleNext}>
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>)
                }

            </Box>
        </React.Fragment>
    )
}