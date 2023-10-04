import React, { useState } from 'react';
// import axios from '../axios';
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts, fetchTags } from '../redux/slices/post';
import { Grid, Tab, Tabs } from '@mui/material';
import {Post} from '../component/Post';
import { TagsBlock } from '../component/TagsBlock';
import { CommentsBlock } from '../component/CommentsBlock';

export const Home = () => {
  const dispatch = useDispatch()
  const userData = useSelector((state) => state.auth.data)
  const { posts, tags } = useSelector((state) => state.posts)

  const [selectedTab, setSelectedTab] = useState(0);

  const isPostsLoading = posts.status === 'loading'
  const isTagsLoading = tags.status === 'loading'

  React.useEffect(() => {
    dispatch(fetchPosts())
    dispatch(fetchTags())
  }, [])


  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };


  return (
    <>
      <Tabs style={{ marginBottom: 15 }} value={selectedTab}
        onChange={handleTabChange} aria-label="basic tabs example">
        <Tab label="Новые" />
        <Tab label="Популярные" />
      </Tabs>
      <Grid container spacing={4}>
      <Grid xs={8} item>
    {isPostsLoading
      ? [...Array(5)]
      : posts.item
          .slice() // Create a shallow copy of the array
          .sort((a, b) => {
            if (selectedTab === 0) {
              return new Date(b.createdAt) - new Date(a.createdAt);
            } else {
              return b.viewsCount - a.viewsCount;
            }
          })
          .map((obj, index) => (
            <Post
              key={obj._id}
              id={obj._id}
              title={obj.title}
              text={obj.text}
              imageUrl={obj.imageUrl ? `http://localhost:4444${obj.imageUrl}` : ''}
              user={obj.user}
              createdAt={obj.createdAt}
              viewsCount={obj.viewsCount}
              commentsCount={3}
              tags={obj.tags}
              isOwner={obj.user}
              isEditable={userData?._id === obj.user._id}
            />
          ))}
  </Grid>
        <Grid xs={4} item>
          <TagsBlock items={tags.item} isLoading={isTagsLoading} />
          <CommentsBlock
            items={[
              {
                user: {
                  fullName: 'Вася Пупкин',
                  avatarUrl: 'https://mui.com/static/images/avatar/1.jpg',
                },
                text: 'Это тестовый комментарий',
              },
              {
                user: {
                  fullName: 'Иван Иванов',
                  avatarUrl: 'https://mui.com/static/images/avatar/2.jpg',
                },
                text: 'When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top',
              },
            ]}
            isLoading={false}
          />
        </Grid>
      </Grid>
    </>
  );
};