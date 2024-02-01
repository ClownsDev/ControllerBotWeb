import React, { useState } from "react";
import Router from "./components/Router/Router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import VisitPage from "./pages/Visit/VisitPage";
function App() {
  const [user, setUser] = useState(false);
  return (
    <>
      {!user ? (
        <VisitPage setUser={setUser} />
      ) : (
        <>
          <Header />
          <Router />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
