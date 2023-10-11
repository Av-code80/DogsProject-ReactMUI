import React from "react";
import { IconButton, List, ListItem, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface FavoriteDogsListProps {
  favoriteDogs: string[];
  onDogClick: (dog: string) => void;
  onRemove: (dog: string) => void;
}
export const FavoriteDogsList: React.FC<FavoriteDogsListProps> = ({
  favoriteDogs = [],
  onDogClick,
  onRemove
}) => {
  return (
    <div>
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          background: "linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)",
          color: "white"
        }}
      >
        Your favorite dogs
      </Typography>
      {favoriteDogs.length > 0 && (
        <List sx={{ overflowY: "auto", height: "200px" }}>
          {favoriteDogs.map((dog, index) => (
            <ListItem
              key={index}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <span
                style={{
                  cursor: "pointer",
                  fontSize: "20px",
                  color: "#ff6d00"
                }}
                onClick={() => onDogClick(dog)}
              >
                {dog}
              </span>
              <IconButton
                onClick={() => onRemove(dog)}
                style={{ color: "#880e4f" }}
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};
