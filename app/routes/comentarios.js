var express = require('express');
var axios = require('axios');   
var router = express.Router();
var isLogged = require('../auth/auth'); // verificar se user tem token de login, senão redireciona para /login
const addTokenToHeaders = require('../auth/headerToken'); // acrescentar o token ao header, para ter acesso aos recursos do backend

router.post('/:id', isLogged, addTokenToHeaders, function(req, res, next){
    axios.put(`http://backend:3000/comentarios/${req.params.id}`, req.body, addTokenToHeaders)
        .then( response => {
            console.log("Comment edit submitted successfully")
            res.status(201).json(response.data)
        })
        .catch(error => {
            console.log("Error occurred while updating the comment: ", error);
            res.status(500).json(response.data)
    })
});

router.delete('/:id', isLogged, addTokenToHeaders, function(req, res, next){
    axios.delete(`http://backend:3000/comentarios/${req.params.id}`, req.body, addTokenToHeaders)
        .then( response => {
            console.log("Comment deleted successfully")
            res.status(201).json(response.data)
        })
        .catch(error => {
            console.log("Error occurred while deleting the comment: ", error);
            res.status(500).json(response.data)
    })
});

router.put('/:id/gostos', isLogged, function(req, res, next){
    axios.put(`http://backend:3000/comentarios/${req.params.id}/gostos`, req.body, addTokenToHeaders)
        .then( response => {
            console.log("Updated comment like status successfully to:", req.body.status)
            res.status(201).json(response.data)
        })
        .catch(error => {
            console.log("Error occurred while updating comment like status: ", error);
            res.status(500).json(response.data)
    })
});

router.put('/:id/desgostos', isLogged, function(req, res, next){
    axios.put(`http://backend:3000/comentarios/${req.params.id}/desgostos`, req.body, addTokenToHeaders)
        .then( response => {
            console.log("Updated comment dislike status successfully to: ",req.body.status)
            res.status(201).json(response.data)
        })
        .catch(error => {
            console.log("Error occurred while updating comment dislike status: ", error);
            res.status(500).json(response.data)
    })
});
module.exports = router;