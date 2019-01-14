import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';

class Home extends Component {
    render () {
        return (
            <div className="home">
                <Typography variant="subheading" gutterBottom>
                    To add suggestions for the article paste <code> /fb?articleURL=​url_parameter​ </code> after host name, where <code> url_parameter </code> is the url of the article
                </Typography>
            </div>
        )
    }
}

export default Home;