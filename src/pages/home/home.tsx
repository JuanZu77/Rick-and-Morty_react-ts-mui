import { Button, Container } from "@mui/material"
import { HeaderComponent } from "../../components/indexComponents"
import React from "react"
import { characters } from "../../api/characters"


export const HomePage:React.FC = ()=>{

  React.useEffect(()=>{
     characters.getAll({page:1}).then((res)=>{
         console.log(res.data /*.results*/)
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

      </Container>
    )
}