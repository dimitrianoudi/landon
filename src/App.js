import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
