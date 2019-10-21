import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Aboutus from './components/aboutus';
import Contactus from './components/contactus';
import Services from './components/myservices';
import Footer from './components/footer';
import './style/mystyle.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/aboutus" component={Aboutus} />
          <Route path="/contactus" component={Contactus} />
          <Route path="/myservices" component={Services} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
