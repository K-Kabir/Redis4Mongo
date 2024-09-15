const {Schema, model} = require('mongoose')

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        required: true,
    },
    access_level: {
        type: Number,
        required: true,
    },
    projects: {
        type: [{
            ref_id: Schema.Types.ObjectId,
            title: String,
            date_joined: Number,
        }],
        _id: false,
        default: undefined,
    },
    project_count: {
        type: Number,
        default: 0,
    }
});

const userModel = model(
    'user',
    UserSchema,
    'user',
);

module.exports = userModel;

