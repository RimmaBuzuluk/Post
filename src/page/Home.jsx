import React from 'react';
import axios from '../axios';
import {useDispatch, useSelector} from "react-redux"
import { fetchPosts } from '../redux/slices/post';
import { Grid, Tab, Tabs } from '@mui/material';
import Page from '../component/Page/Page.jsx';

// import { Grid } from '@mui/material';


export const Home = () => {
  const dispatch=useDispatch() 
  const {posts, tags }=useSelector(state=>state.posts) 

  const isPostsLoading=posts.status==='loading'
  
  React.useEffect(()=>{
    // axios.get('/posts')
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
            <Page key={index} isLoading={true}/>
            
          ):(
            <Page 
            id={obj._id}
            title={obj.title}
            imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--UnAfrEG8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icohm5g0axh9wjmu4oc3.png"
            user={{
              avatarUrl:
                'https://res.cloudinary.com/practicaldev/image/fetch/s--uigxYVRB--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/187971/a5359a24-b652-46be-8898-2c5df32aa6e0.png',
              fullName: 'Keff',
            }}
            createdAt={'12 июня 2022 г.'}
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