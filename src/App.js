import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Phương";
  const age = "45";
  const isMale = true;
  const student = {
    name: "Phan Phuong"
  };
  const colorList = ['red', 'green', 'blue'];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi {name} - {age} - {isMale ? 'male' : 'female'}
        </p>

        <p>
          student.name = {student.name}
        </p>

        <ul class="nav justify-content-center">
          {
            colorList.map(color => (
              <li key={color} style={{ color }}>{color}</li>
            ))
          }
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Học React
        </a>
      </header>
    </div>
  );
}

export default App;
