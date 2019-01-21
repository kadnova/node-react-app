import axios from 'axios'
import { createActions, handleActions } from 'redux-actions'

const initialState = {
    url: null,
    title: null,
    paragraphs: []
}

// create actions
const {article} = createActions({
    GET_ARTICLE: {
        REQUEST: (url) => ({url}),
        SUCCESS: (article) => ({article}),
        FAILURE: (error) => ({error})
    }
});


export const getAllParagraphs = (url) => {
  return (dispatch) => {
      dispatch(article.GET_ARTICLE.REQUEST(url));

      axios.get(`/server/article/fetch?url=${url}`)
          .then(res => dispatch(
              article.GET_ARTICLE.SUCCESS(res.data)
          ))
          .catch(error => dispatch(
              article.GET_ARTICLE.FAILURE(error)
          ))
  }
};

export const sendSuggestion = (url) => {
    return (dispatch) => {

    }
};

// reducers
export const reducer = handleActions({
    GET_ARTICLE: {
        REQUEST: (state, action) => ({
            ...state,
            url: action.payload.url
        }),
        SUCCESS: (state, action) => ({
            ...state,
            title: action.payload.article.title,
            paragraphs: action.payload.article.paragraphs
        }),
        FAILURE: (state, action) => ({
            ...state,
            error: action.payload.error,
        })
    }
}, initialState);

// actions
export const getArticleURL = (state) => state.article.url;
export const getArticleTitle = (state) => state.article.title;
export const getArticleParagraphs = (state) => state.article.paragraphs;
