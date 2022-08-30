// we change app js component in class to function based components.
import './App.css';

//create react app using class based component.
import React, { useState } from 'react' //its a hook for class based components.
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
const App = () => {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API;
  // s = "subho" here we declare a variable whioch asign a string called subho.
  const [progress, setProgress] = useState(0)
  // constructor() {
  //   super();
  //   this.state = {
  //     progress: 0
  //   }
  // }

  // setProgress = (progress) => {
  //   setProgress(progress);
  // }
  //render() { render function use to help for show jsx components in class base components.
  return (
    <>
      {/* <div>
         we use {this.app} because "s" is a variable of class App Based
         hello world {this.s}
       </div> */}
      <Router>
        <Navbar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}

        />
        <Switch>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="general" />} />
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="business" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="entertainment" />} />
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="health" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="sports" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="technology" />} />
        </Switch>
      </Router>
    </>
  )
  //}
}
export default App
