import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getAllParagraphs, getArticleURL, getArticleTitle, getArticleParagraphs } from '../store/article.reducer'
import Article from './article';
import queryStringHelper from './queryStringHelper'

@connect(
    state => ({
        url: getArticleURL(state),
        title: getArticleTitle(state),
        paragraphs: getArticleParagraphs(state),
    })
    , {getAllParagraphs})

class Feedback extends Component {

    componentDidMount () {
        const {location, getAllParagraphs} = this.props;
        const articleURL = queryStringHelper.getURL(location.search, 'articleURL');
        getAllParagraphs(articleURL) // TypeError: (0 , e.getAllParagraphs) is not a function
    }

    render () {
        const {url, title, paragraphs} = this.props;

        return (
            <Article
                title={title}
                paragraphs={paragraphs}
                url={url}
            />
        )
    }
}

export default Feedback;
