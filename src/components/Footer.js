import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Typography color="textSecondary">
        Copyright &copy; 2021 Tomáš Růžička
      </Typography>
      <Link to="/about">
        <Button variant="contained">About</Button>
      </Link>
    </footer>
  );
};

export default Footer;
