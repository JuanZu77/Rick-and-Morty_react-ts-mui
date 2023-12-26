import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"

type ThemeProp = {
   children: JSX.Element
};

 enum themePalette {
    BG = '#12181b',
    LIME = '#C8FA5F',
    FONT_GLOBAL = "'jetBrains Mono', monospace",
    //Alert styles
    ERROR_MAIN = '#f44336',
    BG_ERROR_MAIN='rgba(244,67,54,0,1)',
    //Success
    SUCCESS_MAIN = '#66bb6a',
    BG_SUCCESS_MAIN='rgba(102,187,106,0.1)',

}

const theme = createTheme({
 palette:{
    mode:'dark',
    background:{
        default:themePalette.BG,
    },
    primary:{
        main: themePalette.LIME
    },
 },

  typography:{
    fontFamily:themePalette.FONT_GLOBAL,
  },

  components:{
    MuiButton:{
        defaultProps:{
            style:{
                textTransform:'none',
                boxShadow:'none',
                borderRadius:'0.5em'
            }
        }
    },

    MuiAlert:{
        defaultProps:{ //definimos propiedades por default
            style:{
                   borderRadius:'0.8em',
                   fontSize:'1em',
            }
        },
        //llamar a estilos parciales (ERROR, info, success, etc)
        styleOverrides:{
            standardError:{
                border:`1px ${themePalette.ERROR_MAIN}`,
                background: themePalette.BG_ERROR_MAIN,
            },

            standardSuccess:{
                border:`1px solid ${themePalette.SUCCESS_MAIN}`,
                background:themePalette.BG_SUCCESS_MAIN,
            },
        },
    },
    
  }

});

export const ThemeConfig:React.FC<ThemeProp> = ({children}) =>{

    return (
         <ThemeProvider theme={theme}>
             <CssBaseline/> 
             {children}       
         </ThemeProvider>
    )
}