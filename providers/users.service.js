const userModel = require('../models/users')

class UserService {
    constructor() {}

    getUsers(query) {
        console.log(userModel.modelName)
        const email = query.email;
        const name = query.name;

        let cond = {};

        if(email) cond['email'] = email;
        if(name) cond['name'] = name;

        return userModel.find(cond);
    };
    
    createUser(body) {
        const payload = {
            name: body.name,
            email: body.email,
            role: body.role,
            access_level: body.access_level
        };
        if(body.projects) payload['projects'] = body.projects;

        return userModel.create(payload);
    };

    bulkCreateUser(body) {
        let promises = [];

        body.forEach(el => {
            const payload = {
                name: el.name,
                email: el.email,
                role: el.role,
                access_level: el.access_level
            };
            if(el.projects) payload['projects'] = el.projects;
            
            promises.push(userModel.create(payload));
        });

        return Promise.all(promises);
    };

    searchUser(query) {
        const email = query.email;
        const name = query.name;

        let cond = {
            $or: [
                {
                    name: new RegExp(`${query.search}`, 'i')
                },
                {
                    email: new RegExp(`${query.search}`, 'i')
                },
            ]
        };

        console.log(cond)

        return userModel.find(cond);
    }
};

module.exports = UserService;