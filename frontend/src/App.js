import './App.css';

function App() {
  const getData = async () => {
    const res = await fetch("http://localhost:5000/");
    const data = await res.json();
    console.log(data);
  }

  return (
    <div className="App">
      <button onClick={getData}>Click Me</button>
    </div>
  );
}

export default App;
