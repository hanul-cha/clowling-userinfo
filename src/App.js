import './App.css';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Header from './components/Header';
import { UserInfo } from './components/UserInfo';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
        <Route exact path="/">
          
        </Route>
        <Route path="/info_page/:userName" >
          <UserInfo />
        </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
