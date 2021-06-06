import React from 'react';
import { connect, useSelector } from 'react-redux';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Film = () => {
  const films = useSelector((state) => state.allFilms.films);

  const renderList = films.map((film) => {
    const { id, head, body, image, link } = film;
    return (
      < div key={id} className='cardContainer'>
        <Card className='card'>
          <Card.Img variant="top" src={image.url} />
          <Card.Body>
            <Card.Title>{head}</Card.Title>
            <Card.Text className='module lineClamp'>
              {body}
            </Card.Text>
            <Button variant="primary" target='_blank' href={link}>
              Ver detalle
            </Button>
          </Card.Body>

        </Card>
      </div >
    );
  });

  return (
    <div className='containerFilms col-md-12'>
      {renderList}
    </div>
  );
};

export default connect()(Film);