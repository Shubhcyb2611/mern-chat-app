import { Route } from "react-router-dom";

import "./App.css";
import Homepage from "./Pages/Homepage";
import Chatpage from "./Pages/Chatpage";
function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact></Route>
      <Route path="/chats" component={Chatpage} exact></Route>
    </div>
  );
}

export default App;
