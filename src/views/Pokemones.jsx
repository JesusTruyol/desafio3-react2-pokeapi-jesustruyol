import React, { useContext, useEffect } from 'react'
import ContextApi from '../ContextApi'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'

export default function Pokemones() {

  const {listPokemones, namePokemon, setNamePokemon}= useContext(ContextApi);
  const navigate = useNavigate();

  const detallePokemon= () =>{
    navigate(`/pokemones/${namePokemon}`);
  }
  

  
  useEffect(()=>{
    console.log(listPokemones)
    
  },[listPokemones])

  return (
    <div className='container-select'>

      <h1 className='my-3'>Selecciona un pokemon</h1>
      <Form.Select className='w-auto my-4' name="" id=""
      value={namePokemon}
      onChange={({target})=> setNamePokemon(target.value) }
      >
       
        <option disabled>Pokemonessss</option>
        {listPokemones?.map((pokemon)=> 
          <option key={pokemon} value={pokemon}>{pokemon[0].toUpperCase()+pokemon.substring(1)}</option>
        
        )}
      </Form.Select>

      <Button onClick= {detallePokemon}  disabled={namePokemon=== 'Pokemonessss'? true:false}>Ver Detalle</Button>

    </div>
  )
}
