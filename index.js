
module.exports = exports = once

var thunk = require('gocsp-thunk')

// yield co.once(socket, 'connect')
//
// yield select(s => 0
//     || s(once(socket, 'end'  ))
//     || s(once(socket, 'close'), function () {
//
//     })
//     || s(once(socket, 'error'), function (_, err) {
//
//     })
// )

// check if any ...

// for browser
// element.attachEvent
// element.addEventListenr
// element.removeEventListener
// s(once(el, 'onclick'), function () {
//
// })

// yield co.once(ws, 'open')
function once(event, type, opts) {
    var listener
    return thunk(function (cb) {
        event.on(type, listener = function (data) {
            if (opts && opts.all) {
                cb(null, Array.prototype.slice.call(arguments))
            } else {
                cb(null, data)
            }
        })
    }, function () {
        event.removeListner(listener)
    })
}
exports.once = once
