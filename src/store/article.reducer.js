import axios from 'axios'

const initialState = {
  url: null,
  title: null,
  paragraphs: []
};

export const getAllParagraphs = (url) => {
  return (dispatch) => {
    axios.get(`/api/article/fetch?url=${url}`)
      .then(res => dispatch(res))
      .catch(error => dispatch(error))
  }
};

export const sendSuggestion = (url) => {
    return (dispatch) => {

    }
};

export const reducer = (state = initialState, action) => {

};
