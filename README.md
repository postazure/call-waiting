# Call Waiting

Call Waiting allows a user pass around a function and build up a set of arguments before invoking
the function.

## Code Example

```
import CallWaiting from 'call-waiting'

let greatPerson = (salutation, name) => {
    console.log(`Hello ${saluation} ${name}.`)
}

let delayedGreeting = CallWaiting.init(greatPerson)

delayedGreeting.args('Colonel')
delayedGreeting.args('Mustard')

delayedGreeting() //console.log('Hello Colonel Mustard')

```
```
...

let delayedGreeting = CallWaiting.init(greatPerson, 'Mrs.')

delayedGreeting.args('Peacock')

delayedGreeting() //console.log('Hello Mrs. Peacock')

```
```
...

let delayedGreeting = CallWaiting.init(greatPerson, 'Miss')
delayedGreeting('Scarlet') //console.log('Hello Miss Scarlet')

```

## Motivation

Cleanly wrap functions to be invoked with params. These functions can be provided
additional arguments before being invoked.

This can be especially useful in the context of React and JSX:

```
...

let item = { name: 'Candlestick', id: 3 }

<ItemButton
    text={item.name}
    onClick={ () => {this.selectItem, item.id)} }
/>

// ------------------ vs. ------------------

let item = { name: 'Candlestick', id: 3 }

<ItemButton
    text={ item.name }
    onClick={ CallWaiting.init(this.selectItem, item.id) }
/>

```

```
...
let item = { name: 'Candlestick', id: 3 }

let selectItem = (id, itemName, roomName, suspectName) => {
    console.log( `${suspectName} comited the murder in the ${roomName} with the ${itemName}`)
    console.log( `weaponId was ${id}`
}

<ItemButton
    text={ item.name }
    onClick={ CallWaiting.init(this.selectItem, item.id) }
/>

...
// ItemButton's Click Handler
onClick = () => {
    let handleClick = this.props.onClick
    handleClick.args('Conservatory')('Mr. Green')
}

```

## Installation

`npm install --save call-waiting`

## API Reference

__init__
Initialize a function with a Call Waiting wrapper.

* Arguments can be provided

```
CallWaiting.init(function[, ...args])
```

__.args__
Add additional arguments to pass when invoking a function.

```
.args(arg[, ...args])
```


## Tests

Execute the tests with `npm run test`

> Requires Mocha `npm install -g mocha`


## License

MIT