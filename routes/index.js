var express = require('express');
var router = express.Router();

/* GET home page. */
router.get(['/', 'index'], function (req, res) {
    res.render('index', { layout: 'home.handlebars' });
});

router.get('/aboutus', function (req, res) {
    res.render('aboutus', {
        layout: 'main.handlebars',
        title: 'About Us',
        subtitle: 'Why our Clients love to work with us.'
    });
});

router.get('/shortcodes', function (req, res) {
    res.render('shortcodes', {
        layout: 'main.handlebars',
        title: 'Shortcodes',
        subtitle: 'A Cool Collection of Bootstrap Shortcodes'
    });
});

module.exports = router;