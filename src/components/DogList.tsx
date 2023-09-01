import { ImageList, ImageListItem } from "@mui/material";

interface DogListProps {
  itemData: string[];
  cols?: number;
}

export const DogList: React.FC<DogListProps> = ({ itemData, cols = 2 }) => {
  return (
    <ImageList
      variant="woven"
      sx={{ width: "100%" }}
      cols={cols}
      rowHeight={164}
    >
      {itemData.map((item) => (
        <ImageListItem key={item} sx={{ maxWidth: "800px", margin: "auto" }}>
          <img
            src={`${item}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
