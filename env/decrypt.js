require('dotenv').config();
const crypto = require('crypto');
const algorithm = 'aes-256-gcm';
const keyIv = require(process.env.ENCIPHER);
const key = keyIv.key;
const iv = keyIv.iv;

class Decrypt {
    constructor() { }
    decrypt(str, tempkey = key, tempiv = iv) {
        try {
            let decipher = crypto.createDecipheriv(algorithm, tempkey, tempiv);
            decipher.setAutoPadding(true);
            let decrypted = decipher.update(str, 'hex', 'utf8');
            return decrypted;
        }
        catch (err) {
            return err;
        }

    }
}

module.exports = Decrypt;


