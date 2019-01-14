import React, { Component } from 'react';
import  Article from './article';

class Feedback extends Component {

    render () {
        const {article, url} = this.props;

        return (
            <Article
                article={article}
                url={url}
            />
        )
    }
}

export default Feedback;
