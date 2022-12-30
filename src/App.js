
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from './components/page/Home'
import Account from './components/page/Account'
import Extension from './components/page/Extension'
import MenuData from "./data/MenuData";
import './App.css';


function App() {
  return (
    <div>
        <Router>

            <Navigation/>
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/account" component={Account}/>
              <Route path="/extension" component={Extension}/>
              
            </Switch>

        </Router>
    </div>
  
      
    
  );
}

export default App;
