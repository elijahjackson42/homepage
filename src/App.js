
import './App.css';
import Weather from './components/Weather/Weather.js'
import CountdownList from './components/Countdown/CountdownList';
import TimeTable from './components/Time/TimeTable';
// weather card for LJ, Austin, Tokyo, Akita
// expand to planning??? 
// make this the site for your personal use
// link to portfolio
// links to useful sites



function App() {
  return (
    <div className="App">
      <head></head>
      <body>
        <TimeTable/>
        <CountdownList/>
      </body>
    </div>
  );
}

export default App;
