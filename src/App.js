import './App.css';


function AboutUs(props) {
    return (
        <div>{props.title}</div>
    );
}


function App() {
  return (
    <div className="App">
        <AboutUs title={<h1>HELLO WORLD</h1>}/>
    </div>
  );
}

export default App;
