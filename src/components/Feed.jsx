import FeedDetails from '../DummyData.json/'
import FeedItems from "./FeedItems";
import { Box } from "@mui/material";

export default function Feed() {
  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
        {FeedDetails.products.map(product=>{
            <FeedItems key={product.id} name={product.name} desc={product.desc} img={product.img} price={product.price} />
        })}
    </Box>
  );
}
