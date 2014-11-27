
var test = require('tape')
var once = require('./index')
var EE = require('events')
var go = require('gocsp-go')
var timeout = require('gocsp-timeout')

test('once', function (t) {
    t.plan(1)
    var e = new EE()

    go(function* () {
        yield timeout(100)
        e.emit('hi', 123)
    })

    go(function* () {
        t.equal(yield once(e, 'hi'), 123)
    })
})
