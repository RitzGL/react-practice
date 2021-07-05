import React from 'react';
import "./styles.css";
const Dashboard = (props) => {
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
        <li>Hang out washing</li>
        <li>do this code assessment</li>
        <li>make a grilled cheese sandwich</li>
        <li>ugh, take the washing back in</li>
        <li>yell at someone online</li>
      </ol>
    </aside>
    {/* <!--Main content--> */}
    <section>
      <form>
        <label>Add todo</label>
        <div className="input-wrapper">
          <input placeholder="type todo here..." type="text" />
          <button type="submit">+</button>
        </div>
      </form>
    </section>
  </main>
  </>
  )
}

export default Dashboard;

