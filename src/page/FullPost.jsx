import React, { useEffect, useState } from "react";
import  { Post } from "../component/Post";
import { useParams } from "react-router-dom";
import axios from "../axios";

export const FullPost = () => {
  
  const {id}=useParams()

  const [data, setData]=useState();
  const [isLoading, setIsLoading]=useState(true);
  console.log(data)

  useEffect(()=>{
    axios.get(`/posts/${id}`).then(res=>{
      setData(res.data)
      setIsLoading(false)
      console.log(data)
    })
    .catch((err)=>{
      console.log(err);
      alert('ошибка при получении статьи')
    })
  },[])

  if(isLoading){
    return <Post isLoading={isLoading} isFullPost/>
  }


  return (
    <>
      <Post
        // id={data._id}
        title={data.title}
        imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--UnAfrEG8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icohm5g0axh9wjmu4oc3.png"
        user={{
          avatarUrl:
            "https://res.cloudinary.com/practicaldev/image/fetch/s--uigxYVRB--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/187971/a5359a24-b652-46be-8898-2c5df32aa6e0.png",
          fullName: "Keff",
        }}
        createdAt={"12 июня 2022 г."}
        viewsCount={150}
        commentsCount={3}
        tags={["react", "fun", "typescript"]}
        isFullPost
      >
        <p>
          {/* {data.text} */}
        </p>
      </Post>
      {/* <CommentsBlock
        items={[
          {
            user: {
              fullName: "Вася Пупкин",
              avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
            },
            text: "Это тестовый комментарий 555555",
          },
          {
            user: {
              fullName: "Иван Иванов",
              avatarUrl: "https://mui.com/static/images/avatar/2.jpg",
            },
            text: "When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top",
          },
        ]}
        isLoading={false}
      >
        <Index />
      </CommentsBlock> */}
    </>
  );
};