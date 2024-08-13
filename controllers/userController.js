const fs = require('fs').promises;
const path = require('path');
const filePath = path.join(__dirname, '../database.json');

//util functions
async function readData(){
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        throw new Error('Internal Server Error: ', error);        
    }
}

async function writeData(data){
    try {
        await fs.writeFile(filePath, JSON.stringify(data, null, 2));
    } catch (error) {
        throw new Error('Internal Server Error: ', error);        
    }
}

//route handler controller function
async function createUser(req, res){
    try {
        const data = await readData();
        const lastUser = data.users[data.users.length - 1];
        const nextId = lastUser ? lastUser.id + 1 : 1;

        const newUser = {
            id: nextId,
            username: req.body.username,
            first_name: req.body.first_name,
            email: req.body.email,
        }

        data.users.push(newUser);
        await writeData(data);

        res.send("User added sucessfully!");

    } catch (error) {
        res.status(500).send(`Internal Server Error: ${error.message}`);
    }
}

module.exports = {
    createUser
}