import './App.css';
import Header from './components/Header';
import AddStudent from './components/AddStudent';
import {BrowserRouter as Router, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <h1>Hello React</h1>   
        <Header/>
        <Route path="/add" exact component={AddStudent}/>
      </div>
    </Router>
  );
}

export default App;
