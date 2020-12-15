require('dotenv').config();
const crypto = require('crypto');
const algorithm = 'aes-256-gcm';
const keyIv = require(process.env.ENCIPHER);
const key = keyIv.key;
const iv = keyIv.iv;

class Encrypt {
    constructor() { }
    encrypt(str, tempKey = key, tempIv = iv) {
        let cipher = crypto.createCipheriv(algorithm, tempKey, tempIv);
        let encrypted = cipher.update(str);
        encrypted = Buffer.concat([encrypted, cipher.final()]);
        console.log()
        return encrypted.toString('hex');
    }
}
module.exports = Encrypt;