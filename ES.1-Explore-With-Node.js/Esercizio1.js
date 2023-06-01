const Crypto = require('crypto')

function randomId(size = 8) {
    return Crypto
    .randomBytes(size)
    .toString('base64')
    .slice(0, size)
}

console.log(randomId())