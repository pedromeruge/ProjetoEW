var express = require('express');
var axios = require('axios')
var router = express.Router();


router.get('/', function(req, res, next){
    axios.get('http://localhost:3000/datas')
        .then(response => {
            res.render('list', {
                title: 'Índice das Datas',
                voltar: '/',
                listElements: response.data})
        })
        .catch(error => res.render('error', {error: error}))
});


module.exports = router;