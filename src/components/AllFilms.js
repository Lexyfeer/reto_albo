import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { getFilms } from '../redux/actions/filmsActions';
import Film from './Film';
import { MY_API_KEY } from '../config';

const AllFilms = () => {
  const films = useSelector((film) => film);
  const dispatch = useDispatch();

  const fetchFilms = async () => {

    const options = {
      method: 'GET',
      url: 'https://imdb8.p.rapidapi.com/title/get-news',
      params: { tconst: 'tt0944947', limit: '8' },
      headers: {
        'x-rapidapi-key': MY_API_KEY,
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

  // console.log('All FILMS', films);
  return (
    <div>
      <h2>Espectáculos</h2>
      <Film />
    </div>
  );
};

export default AllFilms;