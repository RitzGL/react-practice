import React, { useState } from "react";
import "./styles.css";
const Dashboard = (props) => {
  const [toDos, setToDos] = useState([
    "Hang out washing",
    "do this code assessment",
    "make a grilled cheese sandwich",
    "ugh, take the washing back in",
    "yell at someone online",
  ]);
  const [inputValue, setInputValue] = useState("");

  function logSomething(todo) {
    console.log(todo);
  }
  // function takes in new data and adds it to the existing array
  function addToDo(addedToDo) {
    // spread syntax to avoid overwriting the exising array
    const newToDos = [...toDos, addedToDo];
    // function received from destructuring on line 4
    setToDos(newToDos);
  }
  //   this function logs the inputValue (line 11) from the input element
  function handleButtonClick() {
    console.log("testing reading value: ", inputValue);
    // calling the function to update the array
    addToDo(inputValue);
    // clearing the input value so as not to reuse past values
    setInputValue("");
  }
  return (
    <>
      <nav>
        <button>Settings</button>
        <h4>Not Another Todo List</h4>
        <button>logout</button>
      </nav>
      <main>
        <aside>
          <div>
            <label htmlFor="select-status">TODOS</label>
            <select name="select-status" id="status">
              <option value="completed">Completed</option>
              <option value="todo">TODO :'</option>
              <option value="both">All Todos</option>
            </select>
          </div>
          <ol>
            {toDos.map((todo) => (
              <li key={todo} onClick={() => logSomething(todo)}>
                {todo}
              </li>
            ))}
          </ol>
        </aside>
        {/* <!--Main content--> */}
        <section>
          <form>
            <label>Add todo</label>
            <div className="input-wrapper">
              <input
                placeholder="type todo here..."
                type="text"
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button type="button" onClick={(e) => handleButtonClick(e)}>
                +
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
};

export default Dashboard;
