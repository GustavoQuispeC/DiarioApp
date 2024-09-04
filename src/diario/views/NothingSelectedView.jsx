import { StarOutlined } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";

export const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", bgcolor: "primary.main", borderRadius: 2 }}
    >
        <Grid item xs={12}>
            <StarOutlined sx={{ fontSize: 100, color:'white' }} />

        </Grid>
        <Grid item xs={12}>
            <Typography color="white" variant="h5">Selecciona o crea una entrada</Typography>

        </Grid>
        </Grid>
  )
}
