import React, { Component } from 'react';
import Paragraph from './paragraph';

class Article extends Component {
    render () {
        const {url, title, paragraphs} = this.props;
        return (
            <div>
                <p>
                    Article url: <a href={url}>{url}</a>
                </p>

                <h2>{/*title*/}</h2>
                <div>
                    {/*paragraphs*/}
                </div>
            </div>
        )
    }
}

export default Article;