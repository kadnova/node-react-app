import axios from 'axios'

const initialState = {
  suggestions: [],
};


export const getResults = (query) => {
  return (dispatch) => {
    axios.get(`/api/article/${query}`)
      .then(res)
  }
};


export const reducer = (state = initialState, action) => {

};

