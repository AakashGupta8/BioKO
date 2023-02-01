import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import MiniDrawer from "./Drawer/Minidrawer";
import { Routes, Route, Link } from "react-router-dom";
import OffeneAufgaben from "./Drawer/OffeneAufgaben";
import Login from "./User/Login";
function App() {
  return (
    <div className="App">
      <MiniDrawer />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/xy" element={<OffeneAufgaben />} />
        <Route exact path="/Ubersicht" element={<OffeneAufgaben />} />
        {/* <Route exact path="/Ubersicht" element={<Dashboard />} />
          <Route exact path="/Produket" element={<Produkte />} />
          <Route exact path="/Reagenzien" element={<Science />} />
          <Route exact path="/Anlieferungen" element={<Shipping />} />
          <Route exact path="/Aufbereitung" element={<DataTable />} />
          <Route
            exact
            path="/production/:selectedLabel"
            element={<Dashboard />}
          />
          <Route
            exact
            path="/productionB/:unit"
            element={<ProductionUnitB />}
          />
          <Route
            exact
            path="/production-unit-B"
            element={<ProductionUnitB1 />}
          />
          <Route exact path="/Daten" element={<Daten />} /> */}
      </Routes>
    </div>
  );
}

export default App;
