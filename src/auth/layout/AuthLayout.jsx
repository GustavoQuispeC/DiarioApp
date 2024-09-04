import { Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";

export const AuthLayout = ({ children, title = "" }) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", bgcolor: "primary.main", padding: 4 }}
    >
      <Grid
        item
        className="box-shadow"
        xs={3}
        sx={{ bgcolor: "white", borderRadius: 2, padding: 3, width:{md: 450} }}
      >
        <Typography variant="h5" xs={{ mt: 2 }}>
          {title}
        </Typography>
        {children}
      </Grid>
    </Grid>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};
