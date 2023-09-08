import { EncyptionSet } from "./enc_set.js"
import { EncryptionSequence } from "./enc_sequence.js"
import { PrivateEncrypter } from "./private_encryption.js"
class Encryption {

    constructor () {
        this.penc = new PrivateEncrypter()
    }

    encyption_sets = []

    encryption_sequences = []

    /**
     * 
     * @param {Number} id The Encryption Set's ID
     * @param {String} name The Encryption Set's Name
     */
    createEncSet = (id, name) => {
        let encSet = new EncyptionSet(id, name)
        this.encyption_sets.push(encSet)
    }

    createEncSeq = (name) => {
        let encSeq = new EncryptionSequence(name)
        this.encryption_sequences.push(encSeq)
    }

    /**
     * 
     * @param {String} data The Value to encrypt
     * @param {String} code The Encryption Code. Example: alpha-1211
     * @returns {String}
     */
    encrypt = (data, type, code) => {

        code = code.split("-")
        var output = null

        this.encyption_sets.forEach(set => {        

            if (set.name == code[0]) {

                set.enc_codes.forEach(enc_code => {

                    if (enc_code.code == code[1]) {

                        this.encryption_sequences.forEach(seq => {

                            if (enc_code.sequence == seq.name) {
                                output = seq.encrypt(data, type, ...enc_code.power)
                            }
                
                        })
                        

                    }

                })

            }

        })
        return output

    }
}

export { Encryption }