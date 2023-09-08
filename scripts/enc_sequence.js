class EncryptionSequence {

    /**
     * 
     * @param {String} name 
     */
    constructor(name) {
        this.name = name
    }

    /**
     * 
     * @param {*} data The Data to be encrypted
     * @param {String} type The Encryption Type (Encrypt, Decrypt)
     * @param  {...Number} power The power of the encrpytion
     * @returns {String} Base64 String
     */
    sequence = (data, type, ...power) => {}

    /**
     * 
     * @param {String} data The Data to be encrypted
     * @param  {...Number} power The power of the encrpytion
     * @returns {String} Base64 String
     */
    encrypt = (data, type, ...power) => {

        let output = this.sequence(data, type, ...power)

        return output
    }
}

export { EncryptionSequence }