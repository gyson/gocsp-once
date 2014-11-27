
# gocsp-once

Wrap event listener as cancellable thunk.

## Example

```js
var go = require('gocsp-go')
var once = require('gocsp-once')
var select = require('gocsp-select')

go(function* () {
    var socket = new Socket('...')
    yield select(function (s) {
        s(once(socket, 'connect'))
        ||
        s(once(socket, 'error'), function (_, error) {
            // handle error here
        })
    })
})
```

## License

MIT
