import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form>
      <div className="input-wrapper">
        <label>name</label>
        <input placeholder="4+ characters" type="text" />
      </div>
      <div className="input-wrapper">
        <label>password</label>
        <input placeholder="password" type="password" />
      </div>
      <button type="submit">login</button>
    </form>
    </div>
  );
}

export default App;
