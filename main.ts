function display_freq () {
    radio.setGroup(radio_freq)
    basic.showNumber(radio_freq)
    basic.pause(200)
    basic.clearScreen()
}
function toLowercase (text: string) {
    lowerMsg = ""
    for (let index = 0; index <= text.length - 1; index++) {
        if ("ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(text.charAt(index))) {
            spot = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(text.charAt(index))
            lowerMsg = "" + lowerMsg + alpha.charAt(spot)
        } else {
            lowerMsg = "" + lowerMsg + text.charAt(index)
        }
    }
}
function display_key () {
    basic.showNumber(shiftNum)
    basic.pause(200)
    basic.clearScreen()
}
input.onButtonPressed(Button.A, function () {
    if (mode == 0) {
        radio_freq += -1
        display_freq()
    } else {
        shiftNum += -1
        display_key()
    }
})
function shiftText (message: string) {
    toLowercase(message)
    if (shiftNum < 0) {
        shiftNum = 26 + shiftNum
    }
    for (let index2 = 0; index2 <= message.length - 1; index2++) {
        if (alpha.includes(lowerMsg.charAt(index2))) {
            spot = (alpha.indexOf(lowerMsg.charAt(index2)) + shiftNum) % 26
            secretMsg = "" + secretMsg + alpha.charAt(spot)
        } else {
            secretMsg = "" + secretMsg + message.charAt(index2)
        }
    }
}
input.onButtonPressed(Button.AB, function () {
    if (mode == 0) {
        mode = 1
        basic.showString("Set Key")
    } else {
        mode = 0
        basic.showString("Set Channel")
    }
})
radio.onReceivedString(function (receivedString) {
    their_message = receivedString
    basic.showString(their_message)
})
input.onButtonPressed(Button.B, function () {
    if (mode == 0) {
        radio_freq += 1
        display_freq()
    } else {
        shiftNum += -1
        display_key()
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString(my_message)
})
let their_message = ""
let secretMsg = ""
let spot = 0
let lowerMsg = ""
let radio_freq = 0
let my_message = ""
let alpha = ""
let shiftNum = 0
let mode = 0
mode = 0
shiftNum = 0
alpha = "abcdefghijklmnopqrstuvwxyz"
shiftNum = 1
my_message = "Hello, I am Derek"
radio_freq = 0
