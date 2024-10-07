import { Stack , Link, Typography} from "@mui/material"

Stack

function MuiLink() {
  return (
    <Stack spacing={2} direction = "row">
        <Link href="https://www.instagram.com/maheshraut_07">Instagram</Link>

        <Typography variant="h6">
          <Link href = "#" color = "secondary" underline="none">Secondary</Link>
        </Typography>
    </Stack>

  )
}

export default MuiLink