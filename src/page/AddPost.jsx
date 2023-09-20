import React, { useCallback, useMemo, useState } from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import SimpleMDE from 'react-simplemde-editor';
import {Link, Navigate, useNavigate } from 'react-router-dom';
import 'easymde/dist/easymde.min.css';
import styles from '../style/AddPost.css';
import { selectIsAuth } from '../redux/slices/auth';
import { useSelector } from 'react-redux';
import { useRef } from 'react';
import axios from '.././axios';

export const AddPost = () => {
  const isAuth = useSelector(selectIsAuth)
  const navigate=useNavigate() 

  // const imageUrl = '';
  const [text, setText] =useState('');
  const [title, setTitle] =useState('');
  const [isLoading, setLoading] =useState(false);
  const [tags, setTags] =useState('');
  const [imageUrl, setImageUrl]=useState('')
  const inputFileRef =useRef(null)

  const handleChangeFile = async(event) => {
    try{
      const formData=new FormData();
      const file=event.target.files[0]
      console.log(file)
      formData.append('image', file );
      const {data}=await axios.post('/upload', formData)
      setImageUrl(data.url)
    }catch(err){
      console.log("ошибка при загрузке файла")
    }
  };

  const onClickRemoveImage = () => {
   setImageUrl('')
  };

  const onChange = useCallback((text) => {
    setText(text);
  }, []);

  const onSubmit=async()=>{
    try{
      setLoading(true);

      const fields={ 
        title,
        imageUrl,
        tags,
        text
      }
      const {data}=await axios.post('/posts', fields)
      const id=data._id
      navigate(`/posts/${id}`)
    }catch(err){
      console.warn('Ошибка при создании статьи')
    }
  }

  const options =useMemo(
    () => ({
      spellChecker: false,
      maxHeight: '400px',
      autofocus: true,
      placeholder: 'Введите текст...',
      
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
      },
    }),
    [],
  );

  if (!window.localStorage.getItem('token') && !isAuth) {
    return <Navigate to="/" />
  }


  return (
    
    <Paper style={{ padding: 30 }}>
      <Button onClick={()=> inputFileRef.current.click()} variant="outlined" size="large">
        Загрузить превью
      </Button>
      <input ref={inputFileRef} type="file" onChange={handleChangeFile} hidden />
      {imageUrl && (
        <>
        <Button variant="contained" color="error" onClick={onClickRemoveImage}>
          Удалить
        </Button>
        <img className="image" src={`http://localhost:4444${imageUrl}`} alt="Uploaded" />
        </>
      )}
      
      
      <br />
      <br />
      <TextField
        className="title"
        variant="standard"
        placeholder="Заголовок статьи..."
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        fullWidth
      />
      <TextField className="tags" variant="standard" placeholder="Тэги" fullWidth value={tags} onChange={(e)=>setTags(e.target.value)}/>
      <SimpleMDE className={styles.editor} value={text} onChange={onChange} options={options} />
      <div className={styles.buttons}>
        <Button onClick={onSubmit} size="large" variant="contained">
          Опубликовать
        </Button>
        <Link to="/">
          <Button size="large">Отмена</Button>
        </Link>
      </div>
    </Paper>
  );
};