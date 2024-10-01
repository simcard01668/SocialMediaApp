import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Box, Card, CardHeader, Avatar, IconButton, CardMedia, CardContent, Typography, CardActions, Checkbox } from '@mui/material'
import React from 'react'

export const Post = () => {
  return (
        <Card sx={{margin:5}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} >
              R
            </Avatar>
          }
          action={
            <IconButton >
              <MoreVert />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="300"
          image="https://images.pexels.com/photos/27669807/pexels-photo-27669807.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}}/>} />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>

        </CardActions>

      </Card>
  )
}
