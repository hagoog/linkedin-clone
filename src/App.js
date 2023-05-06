import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import Feed from "./Components/Feed";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <SideBar />
        <Feed />
        {/* widgets */}
      </div>
    </div>
  );
}

export default App;
