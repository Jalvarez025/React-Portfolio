import * as React from 'react';
import ReactDOM from 'react-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import NavTabs from './components/NavTabs';

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <NavTabs />
  </StyledEngineProvider>,
  document.querySelector("#root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
