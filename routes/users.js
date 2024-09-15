const UserService = require("../providers/users.service");
const userService = new UserService();

const express = require('express');
const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const data = await userService.getUsers(req.query);
        return res.status(200).json(data);
    } catch(e) {
        return res.status(400).send(e);
    }
});

router.post("/", async (req, res, next)=>{
    try {
        const data = await userService.createUser(req.body);
        return res.status(200).send('User created successfuly');
    } catch(e) {
        console.log(e);
        return res.status(400).send(e);
    }
});

router.post("/bulk_upload", async (req, res, next)=>{
    try {
        const data = await userService.bulkCreateUser(req.body.users);
        return res.status(200).send(`${req.body.users.length} users created successfuly`);
    } catch(e) {
        console.log(e);
        return res.status(400).send(e);
    }
});

router.get("/search", async (req, res, next)=>{
    try {
        const data = await userService.searchUser(req.query);
        return res.status(200).json(data);
    } catch(e) {
        console.log(e);
        return res.status(400).send(e);
    }
});

module.exports = router;