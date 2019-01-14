import React, {Component} from 'react';
import Typography from "@material-ui/core/Typography/Typography";
import TextField from '@material-ui/core/TextField';


class Paragraph extends Component {

    render () {
        const {text} = this.props;
        return (
            <Wrapper>
                <div className={classNames(classes.layout, classes.cardGrid)}>
                    {/* End hero unit */}
                    <Grid container spacing={40}>
                        {cards.map(card => (
                            <Grid item key={card}>
                                <Card className={classes.card}>
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Paragraph Text
                                        </Typography>
                                        <Form
                                            onSubmit={this.submit}
                                            render={({handleSubmit, pristine, invalid, submitting}) => (
                                                <form onSubmit={handleSubmit}>
                                                    <TextField
                                                        name="suggestion"
                                                        label="Your Suggestion"
                                                        rowsMax="5"
                                                        className={classes.textField}
                                                        margin="normal"
                                                    />
                                                    <SubmitWrapper>
                                                        <SubmitBtn type="submit" disabled={pristine || invalid}>
                                                            {submitting ? 'Submitting' : 'Submit'}
                                                        </SubmitBtn>
                                                    </SubmitWrapper>
                                                </form>
                                            )}
                                        />
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            View
                                        </Button>
                                        <Button size="small" color="primary">
                                            Edit
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </div>
                <Text/>
                <Divider/>
            </Wrapper>
        )
    }
}

export default Paragraph;

