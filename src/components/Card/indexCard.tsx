import { Button, 
         Card, 
         CardActions, 
         CardContent, 
         CardMedia, 
         Divider, 
         Typography } from "@mui/material";

type CardProps = {
    image: string,
    name: string,
    status: string,
    species:string
};


export const CardComponent:React.FC<CardProps> = ({image, name, species, status}) => {

    return (
            
        <Card /*sx={{maxWidth:345}}*/>
               <CardMedia
                    component="img"
                    height="194"
                    image={image}
                    alt="Paella dish"
                />

                <CardContent>
                    <Typography variant="h6" sx={{marginBottom:1, textAlign:'center'}}>Hola</Typography>
                    <Typography> {name}</Typography>
                    <Divider/>
                    <Typography sx={{marginTop:3}} style={{textAlign:'left'}} >Especie: {species}</Typography>
                    <Typography sx={{marginTop:3}} style={{textAlign:'left'}} >Estado: {status}</Typography>

                </CardContent>

                <CardActions>
                    <Button fullWidth sx={{margin:'0em 3em 1em 3em'}} variant="contained" size="small"> Learn More</Button>
                </CardActions>

        </Card>
            
          
    );
};