import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./routes";

const loading = () => <h1>Loading ...</h1>;

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={loading()}>
        <Router />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
