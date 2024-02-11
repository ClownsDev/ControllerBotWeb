import React, { useState } from "react";
import Router from "./components/Router/Router";
import VisitPage from "./pages/Visit/VisitPage";
import global from "./components/assets/styles/_global.module.scss";

function App() {
  const [user, setUser] = useState(true);

  return (
    <>
      {!user ? (
        <VisitPage setUser={setUser} />
      ) : (
        // <div className={global.containerSecond}>
        <Router />
        // </div>
      )}
    </>
  );
}

export default App;
