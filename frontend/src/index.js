import React from 'react';
import ReactDOM from 'react-dom/client';
import {Container} from "@mui/material";
import StepsComponent from "./components/stepsComponent";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Container fixed>
          <StepsComponent />
      </Container>
  </React.StrictMode>
);
