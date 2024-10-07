import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Stack,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { useState } from "react";


// we can build navbar by using Appbar and toolbar
//typography is usually used for the manipulation of the text

function MyMenu() {

  // set the anchor element to act as a anchor tag for the menu which will be fired by clicking on the resources button 

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleclick = (event:React.MouseEvent<HTMLButtonElement>) =>{
      setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <CatchingPokemonIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          ConnectWise
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button color="inherit">Features</Button>
          <Button color="inherit">Pricing</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit" 
                  id="resources-button" 
                  onClick={handleclick} 
                  aria-controls = {open ? 'resources-menu':undefined}
                  aria-haspopup = 'true'
                  endIcon ={<KeyboardArrowDownIcon/>}
                 
                  >
                  Resources
          </Button>
          <Button color="inherit">Login</Button>
        </Stack>

        <Menu
           id="resources-menu" 
           anchorEl = {anchorEl} 
           open ={open} 
           MenuListProps={{
          'aria-labelledby':'resources-button',
          }}
          onClose={handleClose}
          anchorOrigin = {{      
            vertical:'bottom',
            horizontal:'center'
          }}
          // transformOrigin = {{
          //   vertical:'bottom',
          //   horizontal:'right'
          // }}
          >
            <MenuItem onClick={handleClose}>Blog</MenuItem>
            <MenuItem onClick={handleClose}>PodCasts</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default MyMenu;
