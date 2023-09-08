import { EncryptionCode } from "./enc_code.js"
class EncyptionSet {

    /**
     * 
     * @param {Number} id The encrption set's ID
     * @param {String} name The encrption set's Name
     */
    constructor (id, name) {
        this.id = id
        this.name = name
    }

    enc_codes = []

    /**
     * 
     * @param {Number} id The Encryption Code's ID
     * @param {Number} code The Encryption Code's Code
     * @param {String} sequence The Encryption Code's Sequence's Name
     * @param  {...Number} power The Encryption Code's Power
     */
    createEncCode = (id, code, sequence, ...power) => {
        let enc_code = new EncryptionCode(id, code, sequence, ...power)
        this.enc_codes.push(enc_code)
    }
}

export { EncyptionSet }