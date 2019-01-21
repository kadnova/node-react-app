const express = require('express');
const fetchHtmlFromUrl = require('../helpers');
const fetchElemInnerText = require('../helpers');
const Article = require('../models/article.model');
const axios = require('axios');


let router = express.Router();


router.get('/fetch', function(req, res, next) {
    let articleURL = req.query.articleURL;

    let $ = fetchHtmlFromUrl(articleURL); // fetchHtmlFromUrl is not a function. idkw

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

    article.save()
        .then(article => {
            res.json(article)
        })
        .catch(next)

});


module.exports = router;

