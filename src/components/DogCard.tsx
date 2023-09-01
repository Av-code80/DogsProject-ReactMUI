import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Box
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/FavoriteBorder";

interface DogCardProps {
  url: string;
  alt: string;
  breed: string;
  addToFavorite: (breed: string) => void;
}

export const DogCard: React.FC<DogCardProps> = ({
  url,
  alt,
  breed,
  addToFavorite
}) => {
  return (
    <Card sx={{ width: 400 }}>
      <CardMedia component="img" height={300} image={url} alt={alt} />
      <CardContent>
        <Typography variant="h2" component="div" sx={{}}>
          <Box
            sx={{
              background: "linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block"
            }}
          >
            {breed}
          </Box>
        </Typography>
        <IconButton
          onClick={() => addToFavorite(breed)}
          style={{ color: "red" }}
        >
          <FavoriteIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};
