const { request, response } = require('express');


const usersGet = (req = request, res = response) => {
    res.json({
        msg: 'User GET'
    })
}

const usersPost = (req = request, res = response) => {
    // const body = req.body;
    const { name, email } = req.body;
    res.json({
        msg: 'User POSTasd',
        name,
        email
    })
    // res.json({
    //     msg: 'User POSTasd',
    //     ...req.body,
    // })
}

const usersPut = (req, res = response) => {
    const { id } = req.params
    const { filter } = req.query
    res.json({
        msg: 'User PUT',
        id,
        filter
    })
}

const usersDelete = (req, res = response) => {
    res.json({
        msg: 'User Delete'
    })
}

const usersPatch = (req, res = response) => {
    res.json({
        msg: 'User Patch'
    })
}

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete,
    usersPatch
}