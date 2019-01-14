const _ = require('lodash');
const axios = require("axios");
const cheerio = require("cheerio");

/**
 Enforces the scheme of the URL is https and returns the new URL
 */
 const enforceHttpsUrl = url =>
 _.isString(url) ? url.replace(/^(https?:)?\/\//, "https://") : null;

/**
 Loads the html string returned for the given URL
 and sends a Cheerio parser instance of the loaded HTML
 */
const fetchHtmlFromUrl = async url => {
    return await axios
        .get(enforceHttpsUrl(url))
        .then(response => cheerio.load(response.data))
        .catch(error => {
            error.status = (error.response && error.response.status) || 500;
            throw error;
        });
};


/**
 Fetches the inner text of the element
 and returns the trimmed text
 */
const fetchElemInnerText = elem => (elem.text && elem.text().trim()) || null;

module.exports = {
    enforceHttpsUrl,
    fetchHtmlFromUrl,
    fetchElemInnerText,
};