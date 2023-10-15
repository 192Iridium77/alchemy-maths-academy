import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";
import {
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function Dashboard() {
  // const navigate = useNavigate();
  // const navToBook = (bookId) => {
  //   navigate(`/book/${bookId}`);
  // };
  return (
    <div>
      <DrawerHeader />
      <div>
        <>
          <Typography
            variant="body1"
            sx={{ p: 1 }}
            style={{ marginLeft: "-2rem", marginRight: "-2rem" }}
          >
            Welcome to Alchemy Maths Academy!
          </Typography>
          <div>Your Avatar</div>
          <div>Grade Level: Progress Breakdown</div>
          <div>Your Party of Pets</div>
          <div>Start/Continue</div>
        </>
      </div>
    </div>
  );
}
