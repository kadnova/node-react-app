import express from 'express';
import {fetchElemInnerText, fetchHtmlFromUrl} from '../helpers';
const Article = require('../models/article.model');

let router = express.Router();

router.get('/fetch', function(req, res, next) {
    let articleURL = req.query.articleURL;

    let $ = fetchHtmlFromUrl(articleURL);

    const title = fetchElemInnerText($('.headline'));

    const paragraphs = [];

    $('article p').each(function (elem) {
        paragraphs.push(fetchElemInnerText($(elem)));
    });

    res.json({
        title,
        paragraphs
    })

});

router.post('/', async function (req, res, next) {
    const body = req.body;

    const article = new Article({
        url: body.url,
        original_paragraph: body.original_paragraph,
        user_suggestion: body.user_suggestion
    });


});


module.exports = router;

