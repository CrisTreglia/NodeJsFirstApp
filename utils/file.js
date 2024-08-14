const fs = require('fs').promises;
const filePath = './database.json';


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

module.exports = { 
    readData, 
    writeData 
}