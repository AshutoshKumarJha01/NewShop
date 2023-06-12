// import  { Component } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

const FeedItems =()=>{
    const { name, desc, img } = this.props;
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={img} // Updated here to use the 'img' prop value
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name} {/* Use the 'name' prop value */}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {desc} {/* Use the 'desc' prop value */}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  }


export default FeedItems;