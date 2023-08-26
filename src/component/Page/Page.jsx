import React from 'react';
import { Typography, Paper, Grid, Avatar, IconButton, Chip } from '@mui/material';
import { FavoriteBorderOutlined, ModeCommentOutlined } from '@mui/icons-material';

const Page = ({ id, title, text,avatarUrl, imageUrl, user, createdAt, viewsCount, commentsCount, tags, fixedSize }) => {

  
  const styles = {
    paper: {
      padding: 20,
      margin: '50px',
      width: '1200px',
      height: '1000px'
    },
    image: {
      width: '100%',
      height: 'auto',
    },
    authorInfo: {
      display: 'flex',
      alignItems: 'center',
      marginTop: 10,
    },
    authorAvatar: {
      marginRight: 10,
    },
    tagContainer: {
      marginTop: 10,
    },
    tag: {
      marginRight: 5,
    },
    likeCommentContainer: {
      display: 'flex',
      alignItems: 'center',
      marginTop: 10,
    },
    likeCommentIcon: {
      marginRight: 5,
    },
  };

  return (
    <Paper elevation={3} style={styles.paper}>
      <img src={imageUrl} alt={title} style={styles.image} />
      <div style={styles.authorInfo}>
        {/* <Avatar src={user.avatarUrl} style={styles.authorAvatar} /> */}
        <div>
          {/* <Typography variant="subtitle1">user.fullName</Typography>
          <Typography variant="caption">{createdAt}</Typography> */}
        </div>
      </div>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <div style={styles.tagContainer}>
        {/* {tags.map((tag) => (
          <Chip key={tag} label={tag} style={styles.tag} />
        ))} */}
      </div>
      <div style={styles.likeCommentContainer}>
        <IconButton size="small" style={styles.likeCommentIcon}>
          <FavoriteBorderOutlined />
        </IconButton>
        <Typography variant="caption">{viewsCount}</Typography>
        <IconButton size="small" style={styles.likeCommentIcon}>
          <ModeCommentOutlined />
        </IconButton>
        <Typography variant="caption">{commentsCount}</Typography>
      </div>
    </Paper>
  );
};

export default Page;
