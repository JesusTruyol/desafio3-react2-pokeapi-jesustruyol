import React,{useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom";

export default function Description() {

  const {name}=useParams();
  const url= `https://pokeapi.co/api/v2/pokemon/${name}`;
  
  const [description, setDescription]= useState(null)

  const getdescriptionPokemon= async()=>{
    
    const res= await fetch(url);
    const getData= await res.json();
      
    const dataPokemon= [{
      name :getData.name,
      img: getData.sprites.other.dream_world.front_default,
      stats: getData.stats.map((data)=> [{statNumber: data.base_stat, statName:data.stat.name}]),
      types: getData.types.map((data)=> [data.type.name[0].toUpperCase() + data.type.name.substring(1)]).join(' ')

    }]
    console.log(dataPokemon)
    setDescription(dataPokemon)
  }

  useEffect(()=>{
    getdescriptionPokemon()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className='conatiner-description'>
      
       
      {description?.map((data)=>
      
        <Card key="card" className='w-50 my-4 mx-5'>
        <Card.Body key='card-body'>
        <div key='container-card' className='container-card'>
          <div key="card-img" className="card-img"> 
            <img key={data.name} className='img-pokemon' src= {data.img} alt=''/>
          </div> 
          <div key="card-description" className='card-description'>
            <h3 key='title-name' >{data.name[0].toUpperCase()+data.name.substring(1)}</h3>
            <ul>
            {data.stats?.map((sta,i)=>
            <li key={i}>{sta[0].statName[0].toUpperCase()+sta[0].statName.substring(1)}: {sta[0].statNumber}</li>
            )}
            </ul>
            
            <p className='types' key={data.types}>{data.types}</p>
          </div>
        </div>
        </Card.Body>
        </Card>
      
      )}
      
      


    </div>

  )
}
