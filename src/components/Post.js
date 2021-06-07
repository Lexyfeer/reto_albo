import React from 'react';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';

const Post = () => {

  const data = useSelector(state => state.allPosts.posts);

  return (
    <div className='containerPosts col-md-12'>
      {
        data.map((posts, index) => {
          const { id, title, message } = posts;
          return (
            <>
              <Card key={index} border="info" className='cardPost'>
                <Card.Header className='headerPost'>Fecha de Publicación: {id}</Card.Header>
                <Card.Body>
                  <Card.Title className='cardTxt'>{title}</Card.Title>
                  <Card.Text className='cardTxt'>
                    {message}
                  </Card.Text>
                </Card.Body>
              </Card></>
          );
        })
      }
    </div>
  );
};

export default Post;