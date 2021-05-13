# Pets-Shop-Aurora-Example

Originally cloned from [truffle-box-pet-shop](https://github.com/truffle-box/pet-shop-box).

Your first dapp- an adoption tracking system for a pet shop. The complete tutorial from Truffle can be found [here](http://truffleframework.com/tutorials/pet-shop).

# Setting up the development environment
There are a few technical requirements before we start. Please install the following:

    Node.js v6+ LTS and npm (comes with Node)
    Git

# Environment
```bash
$ node -v
v8.11.1

$ npm -v
5.6.0

$ truffle version

Truffle v4.1.8 (core: 4.1.8)

Solidity v0.4.23 (solc-js)
```
# Ganache
Latest

# MetMask version
Latest

# Instructions:
1. Download the complete repository and go to the folder in your terminal.

3. Compile and migrate the smart contracts. Note inside the development console we don't preface commands with truffle.
```bash
npm run compile
npm run deploy:aurora
```

4. Open another ternminal and Run the `liteserver` development server (outside the development console) for front-end hot reloading. Smart contract changes must be manually recompiled and migrated. It serves the front-end on http://localhost:3000

```bash
npm run dev
```


