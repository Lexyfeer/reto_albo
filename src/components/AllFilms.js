import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { getFilms } from '../redux/actions/filmsActions';
import Film from './Film';

const AllFilms = () => {
  const films = useSelector((film) => film);
  const dispatch = useDispatch();

  const fetchFilms = async () => {

    const options = {
      method: 'GET',
      url: 'https://imdb8.p.rapidapi.com/title/get-news',
      params: { tconst: 'tt0944947', limit: '28' },
      headers: {
        'x-rapidapi-key': '8a7abe1ec5mshdcf23905d96b22cp1cb823jsndf9c3f12526d',
        'x-rapidapi-host': 'imdb8.p.rapidapi.com'
      }
    };

    await axios.request(options)
      .then(response => {
        dispatch(getFilms(response.data.items));
      }).catch(error => {
        console.error(error);
      });

  };

  useEffect(() => {
    fetchFilms();
  }, []);

  console.log('All FILMS', films);
  return (
    <div>
      <h2>Espectáculos</h2>
      <Film />
    </div>
  );
};

export default AllFilms;