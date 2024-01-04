import { Button, Container, Grid } from "@mui/material"
import { CardComponent, HeaderComponent } from "../../components/indexComponents"
import React, { useState } from "react"
import { characters } from "../../api/characters"
import { TypeCharacter } from "./interface/character.interface"


export const HomePage:React.FC = ()=>{

  const [allCharacter, setAllCharacter] = useState<TypeCharacter[] | null>(null)

  React.useEffect(()=>{
     characters.getAll({page:1}).then((res)=>{
         setAllCharacter(res.data .results)
         /*console.log(res.data .results)*/
     }).catch((error:Error)=>{
         console.log(error)
     })
  }, []);


    return(

      <Container maxWidth='xl'>

           <HeaderComponent 
           title="Rick and Morty" 
           description="Bienvenidos a la APP de Rick & Morty "
           element={<Button variant="contained">Button Prop element</Button>}
           
           /> 

          <div>
          {
            allCharacter?.length !== 0 
            ? (
              <Grid container spacing={2} direction={'row'}>
                {allCharacter!.map((character)=>(

                  <Grid item xs={3}>
                  <CardComponent 
                                key={character.id} 
                                image={character.image}
                                name={character.name}
                                species={character.species}
                                status={character.status}
                  />
                 </Grid>

                ))}
              </Grid>
            ) 
            : ""
          }
         </div>

      </Container>
    )
}