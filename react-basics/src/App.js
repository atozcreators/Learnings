import './App.css';
import { useState } from 'react';

function App() {
  const shoot = () => {
    alert("Good shoot!!!")
  }

  const shootarg = (arg) => {
    alert(arg)
  }

  const shootevt = (evtmsg,evt) => {
    alert(evt.type)
  }

  const myfirendslist = ["Anish", "saravana", "Muthu"]

  function MyFirends(props) {
    return <li>{props.friend}</li>;
  }

  //forms
  function Reactforms() {
    const [inputs, setinputs] = useState({})

    //select
    const [myCar, setMyCar] = useState("Volvo")

    const handleSelect = (event) => {
      setMyCar(event.target.value)
    }

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setinputs(values => ({...values,[name]: value}))
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      alert(JSON.stringify(inputs, null, 2)); // Pretty print
    }

    return(
      <div>
        <form onSubmit={handleSubmit}>
          <label>Name: <input type='text' name='username' value={inputs.username || ""} onChange={handleChange}/></label><br/>
          <label>Age: <input type='number' name='age' value={inputs.age || ""} onChange={handleChange}/></label><br/>
          <input type='submit'/>
        </form>

        <h2>Select</h2>
        <select value={myCar} onChange={handleSelect}>
            <option value="Ford">Ford</option>
            <option value="Volvo">Volvo</option>
            <option value="Audi">Audi</option>
          </select><br/>
      </div>
    )
  }

  return (
    <div className="App">
      <h1>events</h1>
      <button onClick={shoot}>Shootout via onclick event</button>

      <h2>passing argument</h2>
      <button onClick={() => shootarg("Good shoot!!")}>Shoot via arg</button>

      <h2>React event object</h2>
      <button onClick={(event) => shootevt("Good shoot!", event)}>Event object</button>

      <h2>React list</h2>
      <ul>
        {myfirendslist.map((myfirend) => <MyFirends friend = {myfirend}/> )}
      </ul>

      <h2>React Forms</h2>
      <Reactforms></Reactforms>
    </div>
  );
}

export default App;
