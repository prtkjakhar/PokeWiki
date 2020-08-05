import React, {useEffect , useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Navbar';
import Result from './Result';
import Info from './Info';

function App() {

  const [name, setName] = useState('ditto');
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState(0);
  const [data3, setData3] = useState('');
  const [data4, setData4] = useState('');
  const [data5, setData5] = useState('');


  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async () => {
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const json = await result.json();
    console.log(json);
    setData1(json.stats);
    setData2(json.height);
    setData3(json.name);
    setData4(json.weight);
    setData5(json.sprites.front_default);
    
  };

  return (
    <div className="App">
      <Navbar/>
      <p>Write name of pokemon and find out information about them</p>
      <p>(Enter name without capital letters)</p>
      <input onChange={(event)=> setName(event.target.value)} className="mb-3 pl-2 pr-2" placeholder="ditto" /><br/>
      <button onClick={()=> fetchData()} className="btn btn-info btn-lg mb-2">GO!</button><hr/>
      <Info height={data2} name={data3} weight={data4} pic={data5} />
      {data1.map((data,ind) => (
        <Result
          val={data.base_stat}
          statName={data.stat.name}
          key={ind}
        />
      ))}
      <hr/>
      <p style={{fontSize:"13px", color:"white"}}>Made by <a style={{color:"white"}} href="https://www.linkedin.com/in/prateek-jakhar-a64a04197/">Prateek Jakhar</a> using Poke API</p>
    </div>
  );
}

export default App;
