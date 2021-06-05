const initialState = {
  films: [],
};


export const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_FILMS':
      return { ...state, films: action.payload };

    default:
      return state;
  }
};

