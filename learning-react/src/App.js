import React from 'react';
import './Tailwind.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
} from 'react-router-dom';
import Header from './components/Header';
import Home from './views/Home';
import About from './views/About';
import Photos from './views/Photos';
import Logo from './views/Logo';
import Footer from './components/Footer';
// import HooksCouterEx from './components/HooksCouterEx';
// import StateFull from './components/StateFull'
// import StateLess from './components/StateLess'



function App() {
  return (
    <div>
      {/* <StateLess type="StateLess"/> */}
      {/* <StateFull type="StateFull" /> */}
      {/* <HooksCouterEx /> */}
      <Router>
        <Header />
        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/photos/:id">
            <Photos />
          </Route>
        </Switch>
        
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
