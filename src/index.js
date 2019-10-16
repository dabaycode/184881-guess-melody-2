import React from "react";
import ReactDOM from "react-dom";
import WelcomeScreen from './componetns/welcome-screen/welcome-screen.jsx';

const App = () => (
  <WelcomeScreen/>
);

const init = () => {
  ReactDOM.render(<App/>, document.getElementById(`root`));
};

init();
