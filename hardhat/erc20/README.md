---
title: "Aurora: Getting Started with Hardhat"
---

# Getting Started with Hardhat
## Introduction
[HardHat](https://hardhat.org/) is yet another Ethereum development environment. It is known for debugging the Solidity code and the explicit error messages. The main objective for this tutorial is 
show how deploy and interact with Solidity smart contracts on Aurora.

This tutorial assumes that you are familiar
with `HardHat` and `Solidity`.

## Installing Prerequisites 
This tutorial assumes that you have Node.js 12+ and Yarn. Please refer to the Yarn installation how-to if you don't yet have the yarn command installed locally.

To install the prerequisite packages, clone the examples repository and then run yarn:

- Add your Aurora Private key (from Metamask) to __.env__ file: <br/>

```bash
$ echo "AURORA_PRIVATE_KEY=YOUR_AURORA_PRIVATE_KEY_HERE" >> .env`
yarn install
```

## Deploy ERC20 
To deploy the `ERC20` token contract, use the following command:
```bash
$ make deploy NETWORK=testnet_aurora
```
