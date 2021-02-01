const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname,'/views/index.html'));
    res.render('index', {title: 'First Website Node'});
});

router.get('/contact', (req, res) => {
    //res.sendFile(path.join(__dirname,'/views/index.html'));
    res.render('contact', {title: 'First Website Node'});
});

module.exports = router;