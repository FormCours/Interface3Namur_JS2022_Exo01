import './App.css';
import WelcomeReact from './components/welcome-react/welcome-react';

function App() {
  return (
    <div className="App">
      <WelcomeReact firstname='Della' age={29} />
    </div>
  );
}

export default App;
