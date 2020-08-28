const fs = require('fs');
const path = require('path');

const env = () => {
    let dotenvPath = path.resolve(process.cwd(), '.env'), data;
    try {        
        data = fs.readFileSync(dotenvPath, 'utf8');
    }
    catch (err) {
        process.env.IP = '127.0.0.1';
        process.env.PORT = 3000
        return 'Could\'t load .env file. Using default IP and PORT';
    }
    importEnv(data);
    return 'Found .env file. OK';
}

const importEnv = data => {
    data.split('\n').forEach(variable => {
        let keyVal = variable.trim().split('=');
        let value;
        try {
            value = JSON.parse(keyVal[1]);
        } catch {
            value = keyVal[1]
        }
        process.env[keyVal[0]] = value;
    });
}

module.exports = env;