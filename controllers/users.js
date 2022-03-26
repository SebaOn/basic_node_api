const { response , request} = require('express'); 
 
const usersGet = (req = request, res = response) => {


    const query_params = req.query;

    res.json({
        msg: 'get API - Controller',
        q: query_params
    })
 }

 const usersPost = (req, res = response) => {

    const body = req.body;

    res.json({
        msg: 'post API - Controller',
        params: body
    })
 }

 const usersPut = (req, res = response) => {

    const id = req.params.id;

    res.json({
        msg: 'put API - Controller',
        id: id
    })
 }

 const usersPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - Controller'
    })
 }

 const usersDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - Controller'
    })
 }



 module.exports = {
     usersGet,
     usersPost,
     usersPut,
     usersPatch,
     usersDelete
 }