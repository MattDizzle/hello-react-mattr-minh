import React from 'react';
import './App.css';
import Header from './Header'
import Bio from './Bio';
import Education from './Education';
import Work from './Work';
import Footer from './Footer'

function App() {
  const name = "Blake";

  return (
    <div className="App">
      <main>
      <Header />
      <Bio />
      <Education />
      <Work />
      <Footer />
      </main>
    </div>
  );
}

export default App;