import { Box, Grid, Typography } from "@mui/material";

type HeaderProps = {
    title: string,
    description:string,
    element?: React.ReactNode | null, //null propiedad inicial
}

export const HeaderComponent:React.FC <HeaderProps>= ({title,description,element}) =>{

    return (

            <Box sx={{width:'100%', height:'350px', marginTop:'2em', border:'1px solid white'}}>
             <Grid 
                container 
                direction={'row'} 
                justifyContent={'center'} 
                alignItems={'center'}
                sx={{height:'100%'}}
             >
                <Grid item xs={9}>

                 <Grid
                  container 
                  direction={'column'} 
                  justifyContent={'center'} 
                  alignItems={'center'}
                  sx={{height:'100%'}}
                 >

                    {/*Item 1: title */}
                    <Grid item>
                    <Typography variant={'h2'}>
                            {title}
                          </Typography>

                    </Grid>
                    
                    {/*Item 2: description*/}
                    <Grid item>
                        <Typography>
                            {description}
                        </Typography>
                    </Grid>

                    {/*Item 3: Si existe element lo renderizamos */}
                    {element !== undefined && <Grid item sx={{marginTop:4}}> {element}</Grid>}

                    </Grid>
                </Grid>
           
             </Grid>
           </Box>
  
    )

}
