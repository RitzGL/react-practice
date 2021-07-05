import React, { useState } from "react";
import "./styles.css";
// defining a component
// components essentially being programmer-defined elements
const Dashboard = (props) => {
  // hardcoded values into the toDos, strings being passed in to
  // useState() as array of strings
  const [toDos, setToDos] = useState([
    "Hang out washing",
    "do this code assessment",
    "make a grilled cheese sandwich",
    "ugh, take the washing back in",
    "yell at someone online",
  ]);
  //   destructuring to access inputValue and setInputValue from useState
  const [inputValue, setInputValue] = useState("");

  function removeToDo(todo) {
    const updatedToDos = toDos.filter((element) => element !== todo);
    console.log("individual todo being clicked", todo);
    console.log("all the todos inside array:", updatedToDos);
    setToDos(updatedToDos);
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
            {/* 
                calling .map() on the toDos array
                appending the list tags onto each string
                rendering the whole list unto a parent element (ordered list)
              */}
            {toDos.map((todo) => (
              <li key={todo} onClick={() => removeToDo(todo)}>
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
              {/* 
                this button submits the information inside the input
                handleButtonClick will then invoke addToDo in order to update 
                the array of todos, which is then rendered above in the .map()
              */}
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
