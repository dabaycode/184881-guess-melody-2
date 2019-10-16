import React from 'react';
import ReactDOM from 'react-dom';
import WelcomeScreen from 'Components/welcome-screen/welcome-screen';

const App = () => (
  <WelcomeScreen/>
);

const init = () => {
  ReactDOM.render(<App/>, document.getElementById(`root`));
};

init();
