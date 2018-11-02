# Lowbot mail
Mail adapter for lowbot

## This is a work in progress

## Installation

NPM
```bash
    npm i --save lowbot-mail
```

Yarn
```bash
    yarn add lowbot-mail
```

## Usage
Node
```js
    const LowBot = require('lowbot');
    const mail = require('lowbot-mail');

    let botInstance = new LowBot()
      .useAdapter(mail);
```
