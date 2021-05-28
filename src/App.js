import React from 'react';
import Header from './components/Header/Header';
import MainBlock from './components/MainBlock/MainBlock';
import Features from './components/Features/Features';
import ContactBlock from './components/ContactBlock/ContactBlock';
import Footer from './components/Footer/Footer';
import './scss/components/app.scss';

// eslint-disable-next-line func-style
function App() {
    return (
        <>
            <Header />
            <MainBlock />
            <Features />
            <ContactBlock />
            <Footer />
        </>
    );
}

export default App;


// <div className="App">
// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <p>
//     Edit <code>src/App.js</code> and save to reload.
//   </p>
//   <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Learn React
//   </a>
// </header>
// </div>