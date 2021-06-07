export const ADD_POST = 'ADD_POST';

export const setItem = (title, message) => {
  const data =
  {
    id: new Date().toUTCString(),
    title: title,
    message: message
  };

  return {
    type: ADD_POST,
    payload: data
  };
};
