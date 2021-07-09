import React, { useState } from "react";
import "./styles.css";
import { v4 as uuidv4 } from 'uuid';

// * components essentially being programmer-defined elements
const Dashboard = (props) => {
  // * initial state of application when reloaded
  const [list, setList] = useState([
    {name: "Hang out washing",
     completed: false,
     created: new Date().getTime(),
     id:uuidv4()
    }
  ]);
  // * gaining access to component state with useState hook
  const [inputValue, setInputValue] = useState("");

  //  * Create new item object, call addItem
  // * Clear inputValue and input field after addition
  function handleButtonClick(e) {
    console.log("testing reading value: ", inputValue);
    // ! Creating new item
    const newItem = {
      name: inputValue,
      completed: false,
      created: new Date().getTime(),
      id: uuidv4()
    }
    // ! Setting the new list by spreading old one, plus new item
    const newList = [...list, newItem];
    setList(newList);

    // * clearing the input value so as not to reuse past values
    setInputValue("");
    // * clearing the input box
    const input = document.querySelector("input");
    input.value = "";
  }

  function updateItemStatus(item, e) {
    console.log(item.id)
    // TODO look inside current state list
    // TODO compare item.id to listItems.id
    // TODO update complete value of matching element to true
    // * this list array will be available to me with updated values
    //  * as long as no refreshing occurs
    console.log(list)
    
  }

  // TODO read the select element's value, render based on
  // TODO completed boolean value
  const [menuChoice, setMenuChoice] = useState("both");
  function handleMenuChange(e) {
    setMenuChoice(e.target.value);
    console.log(menuChoice)
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
            <select
              name="select-status"
              id="status"
              onChange={(e) => {
                handleMenuChange(e);
              }}
            >
              <option value="completed">Completed</option>
              <option value="todo">TO DO</option>
              <option value="both">All Todos</option>
            </select>
          </div>
          <h2>In Progress</h2>
          <ol>
            {/* 
                calling .map() on the toDos array
                appending the list tags onto each string
                rendering the whole list unto a parent element (ordered list)
              */}
            {list.map((item) => (
              <li key={item.id} onClick={(e) => updateItemStatus(item, e)}>
                {item.name}
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
