class EncryptionCode {

    /**
     * 
     * @param {Number} id The encryption code's ID
     * @param {Number} code The encryption code's Code
     * @param {...Number} power The encryption code's Power
     * @param {String} sequence The encryption code's Sequence
     */
    constructor (id, code, sequence, ...power) {
        this.id = id
        this.code = code
        this.sequence = sequence
        this.power = power
    }
}

export { EncryptionCode }