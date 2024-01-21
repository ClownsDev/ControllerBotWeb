import React, { useState } from 'react'
import Router from './components/Router/Router';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
function App() {
  const [discord,setDiscord] = useState(false)
  return (
    <>
      <Header />
      <Router/>
      <Footer />
    </>
  );
}

export default App;
