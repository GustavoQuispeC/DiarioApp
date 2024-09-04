import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";

export const NoteView = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          04 de septiembre, 2024
        </Typography>
      </Grid>
      <Grid item>
        <Button color="primary" sx={{ padding: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField
            type="text"
             variant="filled"
            fullWidth
            label="Título"
            placeholder="Ingrese Titulo"
            sx={{ mb: 1, border:'none' }}
           
            />
             <TextField
            type="text"
             variant="filled"
            fullWidth
            multiline
            minRows={5}
            placeholder="¿Que sucedió hoy?" 
            sx={{ mb: 1, border:'none' }}
           
            />

            <ImageGallery />
        
      </Grid>
    </Grid>
  );
};
