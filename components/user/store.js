const Model = require('./model');

async function getUsers() {
    const messages = await Model.find();
    return messages;
}

function addUser(user) {
    const myUser = new Model(user);
    return myUser.save();
}

module.exports = {
    add: addUser,
    list: getUsers,
};
