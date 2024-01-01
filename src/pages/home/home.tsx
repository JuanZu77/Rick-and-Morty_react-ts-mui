import { Button, Container } from "@mui/material"
import { HeaderComponent } from "../../components/indexComponents"


export const HomePage:React.FC = ()=>{

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