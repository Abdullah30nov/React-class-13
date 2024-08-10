import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function MediaCard({title,image,desc,price ,rating,rate,id}) {
    const navigate = useNavigate()
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {desc}
        </Typography>
        <Typography variant="h5" color="text.secondary">
         Price {price}
        </Typography>
        <Typography variant="p" color="text.secondary">
         {rating } 
         { rate}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='contained' onClick={()=>navigate(`/product/${id}`)} size="small">Add</Button>
      </CardActions>
    </Card>
  );
}
