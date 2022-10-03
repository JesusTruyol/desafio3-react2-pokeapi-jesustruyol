import { BrowserRouter, Routes, Route } from "react-router-dom";
import React,{useState, useEffect} from 'react'
import Navbar from './components/Navbar';
import Home from './views/Home'
import Pokemones from './views/Pokemones'
import Description from './views/Description'
import NotFound from './views/NotFound'
import ContextApi from './ContextApi'

function App() {
  const [listPokemones, setListPokemones]= useState(null);
  const [namePokemon, setNamePokemon]= useState(null);
  const dataGlobal={listPokemones,setListPokemones, namePokemon, setNamePokemon}
  
  
  const getPokemones= async ()=>{
    const response= await fetch('https://pokeapi.co/api/v2/pokemon/');
    const {results}= await response.json();
    const list= results?.map(({name})=> name);
    
    setListPokemones(list)
  }

  useEffect(()=>{
    getPokemones()
    setNamePokemon('Pokemonessss')
  },[])

  return (
    <div className="App">
      <ContextApi.Provider value={dataGlobal}>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/pokemones" element={<Pokemones/>}/>
            <Route path="/pokemones/:name" element={<Description/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>       
        </BrowserRouter>
     </ContextApi.Provider>
    </div>
  );
}

export default App;
