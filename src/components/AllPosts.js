import React from 'react';
import { connect, useSelector } from 'react-redux';

import PostForm from './PostForm';
import Post from './Post';

const AllPosts = () => {

  return (
    <div className='containerPosts col-md-12'>
      <h1>Comentarios</h1>
      <p>Aquí puedes agregar tú opinión o comentario sobre alguna de las notas que estas leyendo.</p>
      <PostForm />
      <Post />

    </div>
  );
};

export default connect()(AllPosts);