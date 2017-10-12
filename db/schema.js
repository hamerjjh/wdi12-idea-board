const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const IdeasSchema = new Schema({
    title: {
        type: String,
        default: 'New Idea Title',
        
    },
    description: {
        type: String,
        default: 'New Idea Description'
    },
    created: {
        type: Date,
        default: Date.now
    }
})

const UserSchema = new Schema({
    usnerName: {
        type: String,
    },
    password: {
        type: String,
    },
    ideas: [IdeasSchema]
})



const UserModel = mongoose.model('User', UserSchema)
const IdeaModel = mongoose.model('Idea', IdeasSchema)

module.exports = {
    UserModel: UserModel,
    IdeaModel: IdeaModel
}