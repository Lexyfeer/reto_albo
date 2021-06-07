import React from 'react';
import { connect, useSelector } from 'react-redux';

import PostForm from './PostForm';
import Post from './Post';

const AllPosts = () => {

  return (
    <div className='containerFilms col-md-12'>
      <h1>Comentarios</h1>
      <PostForm />
      <Post />

    </div>
  );
};

export default connect()(AllPosts);