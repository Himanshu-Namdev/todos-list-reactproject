import { useState, useEffect } from "react";
import "./App.css";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import AddTodos from "./MyComponents/AddTodos";
import About from "./MyComponents/About";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  let Element;

  if (localStorage.getItem("Data") === null) {
    Element = [];
  } else {
    Element = JSON.parse(localStorage.getItem("Data"));
  }

  const onDelete = (todo) => {
    setData(
      Data.filter((i) => {
        return i !== todo;
      })
    );
    localStorage.setItem("Data", JSON.stringify(Data));
  };

  const addTodos = (title, desc) => {
    let sno;
    Data.length === 0 ? (sno = 0) : (sno = Data[Data.length - 1].sno + 1);
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setData([...Data, myTodo]);
    localStorage.setItem("Data", JSON.stringify(Data));
  };

  const [Data, setData] = useState(Element);

  useEffect(() => {
    localStorage.setItem("Data", JSON.stringify(Data));
  }, [Data]);
  return (
    <>
      <Router>
        <Header title="Todos List" searchbar={true} />
        <Switch>
          <Route
            exect
            path="/"
            render={() => {
              return (
                <>
                  <AddTodos addTodos={addTodos} />
                  <Todos Data={Data} onDelete={onDelete} />
                </>
              )
            }}
          ></Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
