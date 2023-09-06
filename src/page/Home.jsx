import React from 'react';
import axios from '../axios';
import {useDispatch, useSelector} from "react-redux"
import { fetchPosts } from '../redux/slices/post';
import { Grid, Tab, Tabs } from '@mui/material';
import Page from '../component/Page.jsx';

// import { Grid } from '@mui/material';


export const Home = () => {
  const dispatch=useDispatch() 
  const {posts, tags }=useSelector(state=>state.posts) 

  const isPostsLoading=posts.status==='loading'
  
  React.useEffect(()=>{
    
    dispatch(fetchPosts())
  },[])

  
  console.log(posts)
  return (
    <div className='Home'>
      <Tabs style={{ marginBottom: 15 }} value={0} aria-label="basic tabs example">
        <Tab label="Новые" />
        <Tab label="Популярные" />
      </Tabs>
      <Grid container spacing={4}>
        <Grid xs={8} item>
          {(isPostsLoading ? [...Array(5)]: posts.item).map((obj, index) => 
          isPostsLoading ? (
            <Page key={index} isLoading={true} fixedSize={true}/>
            
          ):(
            <Page 
            id={obj._id}
            title={obj.title}
            text={obj.text}
            imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--UnAfrEG8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icohm5g0axh9wjmu4oc3.png"
            user={obj.user}
            createdAt={obj.createdAt}
            viewsCount={150}
            commentsCount={3}
            tags={['react', 'fun', 'typescript']}
            isEditable
            />
            ))}
        </Grid>    
      </Grid>
    </div>
  );
};