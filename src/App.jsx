import React from "react";
import Table from "./components/table/Table";
import Agregar from "./components/agregar/Agregar";
import "./app.css";

export default function App() {
  return (
    <div className="container">
      <header className="section-header">
        <h1>Crud PHP + React</h1>
      </header>
      <main className="section-main">
        <section className="section-agregar">
          <Agregar />
        </section>
        <aside className="aside-table">
          <Table />
        </aside>
      </main>
    </div>
  );
}
