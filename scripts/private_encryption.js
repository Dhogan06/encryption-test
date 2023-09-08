class PrivateEncrypter {
    encrypt = function(msg) {
        var msgArr = msg.toString().split("")
        var enMsgArr = []
        var i
        for (i = 0; i < msgArr.length; i++) {
            var letter
            switch (msgArr[i]) {
                case "a":
                    letter = "s"
                    break;
                case "b":
                    letter = "e"
                    break;
                case "c":
                    letter = "t"
                    break;
                case "d":
                    letter = "w"
                    break;
                case "e":
                    letter = "q"
                    break;
                case "f":
                    letter = "y"
                    break;
                case "g":
                    letter = "u"
                    break;
                case "h":
                    letter = "i"
                    break;
                case "i":
                    letter = "o"
                    break;
                case "j":
                    letter = "r"
                    break;
                case "k":
                    letter = "z"
                    break;
                case "l":
                    letter = "c"
                    break;
                case "m":
                    letter = "b"
                    break;
                case "n":
                    letter = "a"
                    break;
                case "o":
                    letter = "d"
                    break;
                case "p":
                    letter = "g"
                    break;
                case "q":
                    letter = "p"
                    break;
                case "r":
                    letter = "m"
                    break;
                case "s":
                    letter = "v"
                    break;
                case "t":
                    letter = "f"
                    break;
                case "u":
                    letter = "n"
                    break;
                case "v":
                    letter = "h"
                    break;
                case "w":
                    letter = "k"
                    break;
                case "x":
                    letter = "l"
                    break;
                case "y":
                    letter = "x"
                    break;
                case "z":
                    letter = "j"
                    break;
                case "0":
                    letter = "!"
                    break;
                case "1":
                    letter = "&"
                    break;
                case "2":
                    letter = "#"
                    break;
                case "3":
                    letter = ")"
                    break;
                case "4":
                    letter = "^"
                    break;
                case "5":
                    letter = "$"
                    break;
                case "6":
                    letter = "*"
                    break;
                case "7":
                    letter = "("
                    break;
                case "8":
                    letter = "@"
                    break;
                case "9":
                    letter = "~"
                    break;
                default:
                    letter = msgArr[i]

            }

            enMsgArr.push(letter)
        }

        var enMsg = enMsgArr.join("")

        return enMsg
    }
    decrypt = function(msg) {
        var msgArr = msg.split("")
        var deMsgArr = []
        var i
        for (i = 0; i < msgArr.length; i++) {
            var letter
            switch (msgArr[i]) {
                case "s":
                    letter = "a"
                    break;
                case "e":
                    letter = "b"
                    break;
                case "t":
                    letter = "c"
                    break;
                case "w":
                    letter = "d"
                    break;
                case "q":
                    letter = "e"
                    break;
                case "y":
                    letter = "f"
                    break;
                case "u":
                    letter = "g"
                    break;
                case "i":
                    letter = "h"
                    break;
                case "o":
                    letter = "i"
                    break;
                case "r":
                    letter = "j"
                    break;
                case "z":
                    letter = "k"
                    break;
                case "c":
                    letter = "l"
                    break;
                case "b":
                    letter = "m"
                    break;
                case "a":
                    letter = "n"
                    break;
                case "d":
                    letter = "o"
                    break;
                case "g":
                    letter = "p"
                    break;
                case "p":
                    letter = "q"
                    break;
                case "m":
                    letter = "r"
                    break;
                case "v":
                    letter = "s"
                    break;
                case "f":
                    letter = "t"
                    break;
                case "n":
                    letter = "u"
                    break;
                case "h":
                    letter = "v"
                    break;
                case "k":
                    letter = "w"
                    break;
                case "l":
                    letter = "x"
                    break;
                case "x":
                    letter = "y"
                    break;
                case "j":
                    letter = "z"
                    break;
                case "!":
                    letter = "0"
                    break;
                case "&":
                    letter = "1"
                    break;
                case "#":
                    letter = "2"
                    break;
                case ")":
                    letter = "3"
                    break;
                case "^":
                    letter = "4"
                    break;
                case "$":
                    letter = "5"
                    break;
                case "*":
                    letter = "6"
                    break;
                case "(":
                    letter = "7"
                    break;
                case "@":
                    letter = "8"
                    break;
                case "~":
                    letter = "9"
                    break;
                default:
                    letter = msgArr[i]

            }

            deMsgArr.push(letter)
        }

        var deMsg = deMsgArr.join("")

        return deMsg
    }
}

export { PrivateEncrypter }