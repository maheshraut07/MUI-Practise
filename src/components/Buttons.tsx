import {
  Button,
  Stack,
  ButtonGroup,
//   ToggleButtonGroup,
//   ToggleButton,
} from "@mui/material";

// import FormatBoldIcon from '@mui/icons-material/FormatBold'
// import FormatItalicIcon from '@mui/icons-material/FormatItalic'
// import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'
// import { useState } from "react";



function Buttons() {
  return (
    <div>
      <Button>
        <Button variant="text">text</Button>
        <Button variant="contained">contained</Button>
        <Button variant="outlined">outlined</Button>
      </Button>

      {/* with the help of  stack component  */}

      <Stack spacing={4}>
        <Stack spacing={2} direction="row">
          <Button variant="text" href="https://www.google.com">
            text
          </Button>
          <Button variant="contained">contained</Button>
          <Button variant="outlined">outlined</Button>
        </Stack>

        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            color="primary"
            onClick={() => alert("Hello")}
          >
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            secondary
          </Button>
          <Button variant="contained" color="warning">
            warning
          </Button>
          <Button variant="contained" color="info">
            info
          </Button>
          <Button variant="contained" color="success">
            success
          </Button>
          <Button variant="contained" color="error">
            error
          </Button>
        </Stack>

        <Stack display="block" spacing={2} direction={"column"}>
          <Button variant="contained" size="small">
            small
          </Button>
          <Button variant="contained" size="medium">
            medium
          </Button>
          <Button variant="contained" size="large">
            large
          </Button>
        </Stack>

        {/* <Stack direction='row'>

        <Button variant="contained" endIcon={<SendIcon/>}>
            send 
        </Button>
        <IconButton aria-label="send" color="success" size="small" >
            <SendIcon/>
        </IconButton>
       
        </Stack> */}

        <ButtonGroup
          variant="text"
          orientation="vertical"
          size="small"
          color="secondary"
        >
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
    </div>
  );
}

export default Buttons;
