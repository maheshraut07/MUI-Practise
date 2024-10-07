import {AppBar,Toolbar, Typography , IconButton, Stack, Button} from "@mui/material"
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'




// we can build navbar by using Appbar and toolbar 
//typography is usually used for the manipulation of the text

function NavBar() {
  return (
    <AppBar position="static">

    <Toolbar>
        <IconButton size = "large" edge ="start" color= "inherit" aria-label="logo">
            <CatchingPokemonIcon/>
        </IconButton>
        <Typography variant="h6"  component="div" sx={{flexGrow: 1}} >
            ConnectWise
        </Typography>

        <Stack direction="row" spacing={2}>
            <Button color = "inherit">Features</Button>
            <Button color = "inherit">Pricing</Button>
            <Button color = "inherit">About</Button>
            <Button color = "inherit">Login</Button>
        </Stack>
    </Toolbar>
    </AppBar>
  )
}

export default NavBar