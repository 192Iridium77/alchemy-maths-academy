import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface CountingProps {
  level: number;
}

export default function Counting({ level }: CountingProps) {
  // const navigate = useNavigate();
  // const navToBook = (bookId) => {
  //   navigate(`/book/${bookId}`);
  // };
  const { width, height } = useWindowSize();
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
          {/* Celebration Here */}
          <Confetti width={width} height={height} />
        </>
      </div>
    </div>
  );
}
