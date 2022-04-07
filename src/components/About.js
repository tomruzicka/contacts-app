import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <Typography variant="h5" component="h2">
        Version 1.0.0
      </Typography>
      <Link to="/">
        <Button variant="contained">Go Back</Button>
      </Link>
    </div>
  );
};

export default About;
