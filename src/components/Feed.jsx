import { Favorite, FavoriteBorder, Label, MoreVert, Share } from '@mui/icons-material'
import { Box, Card, CardHeader, Avatar, IconButton, CardMedia, CardContent, Typography, CardActions, Checkbox } from '@mui/material'
import React from 'react'
import { Post } from './Post'

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Post />
      <Post />
      <Post />
    </Box>
  )
}

export default Feed