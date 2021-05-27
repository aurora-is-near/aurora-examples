# ERC721

This example is originally forked from [OpenZeppelin examples](https://docs.openzeppelin.com/contracts/4.x/erc721). However it implements a simple COVID-19 vaccine ticket token 💊💊. This tutorial assumes that you are familiar with non-fungible tokens (NFT) concept. For more details about the non-fungible token standard (ERC721), please refer to [OpenZeppelin ERC721 implementation](https://github.com/OpenZeppelin/openzeppelin-contracts/tree/1b37c21da58f6379cfe09c0140cf56d67b19a0bc/contracts/token/ERC721).


Only `minter` address can distribute the vaccine tickets (NFT tokens 💊💊💊) to the people who are part of the vaccination program. When a participant receives the vaccine 💊, automatically transfers the vaccine ticket 🎫 to the `minter` address which in turn will redistribute that ticket 🎫 to new person in the line.

### Installation
```
yarn
```

### Getting Started

- Deploy
```
yarn deploy:aurora
....
_deploy_contracts.js
=====================

   Deploying 'CovidVaccineToken'
   -----------------------------
   > transaction hash:    0x282012c791d65d0ce2fd1fd9fcc41179dba5bd06c3b02e31e53dbe9cc8af62c1
   > Blocks: 7            Seconds: 5
   > contract address:    0x3635D999d8CdA2fAf304b390fb26a9c2f364dFbd
   > block number:        49151611
   > block timestamp:     1622034185
   > account:             0x6A33382de9f73B846878a57500d055B981229ac4
   > balance:             0
   > gas used:            2576274 (0x274f92)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.05152548 ETH
....
```

- Play with Truffle console:

1. Minter mints tokens for the vaccine program participants:

```bash
% truffle console --network aurora
truffle(aurora)> const cvt = await CovidVaccineToken.deployed()
truffle(aurora)> await cvt.minter()
'0x6A33382de9f73B846878a57500d055B981229ac4'
truffle(aurora)> await cvt.mint('0x2531a4D108619a20ACeE88C4354a50e9aC48ecfe')
{
  tx: '0xe7aa5ff636ccb9bf112c0276b91dfdb6645a63f196b67f712eaf03aa73742d95',
  receipt: {
    blockNumber: 49152543,
    blockHash: '0x82276d66db8ac0a79db1bfd8f8ab6462b5014214ffc0c92e31e6a80a29e6478e',
    transactionIndex: 0,
    transactionHash: '0xe7aa5ff636ccb9bf112c0276b91dfdb6645a63f196b67f712eaf03aa73742d95',
    from: '0x6a33382de9f73b846878a57500d055b981229ac4',
    to: '0x3635d999d8cda2faf304b390fb26a9c2f364dfbd',
    gasUsed: 88916,
    cumulativeGasUsed: 0,
    contractAddress: null,
    logs: [ [Object] ],
    logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    status: true,
    nearTransactionHash: '0xf4146ebb8984a0ab4042e1343cc533e16cb825d5611cd90c0d9f803d0aa0da0d',
    nearReceiptHash: '0xc0a9eadf542d3021b6532cd6ddc2ffc8f9ecc0f01c18e1b2901d3550c5a1527f',
    rawLogs: [ [Object] ]
  },
  logs: [
    {
      blockNumber: 49152543,
      blockHash: '0x82276d66db8ac0a79db1bfd8f8ab6462b5014214ffc0c92e31e6a80a29e6478e',
      transactionIndex: 0,
      transactionHash: '0xe7aa5ff636ccb9bf112c0276b91dfdb6645a63f196b67f712eaf03aa73742d95',
      logIndex: 0,
      address: '0x3635D999d8CdA2fAf304b390fb26a9c2f364dFbd',
      removed: false,
      id: 'log_903bf1a1',
      event: 'Transfer',
      args: [Result]
    }
  ]
}
```

You should notice that participants are not allowed to transfer their tokens. Only minter can do for them, so lets try to 
use a participant address to validate that no one can transfer this token except the minter. So first you should exit from the 
truffle terminal then in the `aurora` network configuration in `truffle-config.js`, change the value of `from` field to a new address (the participant address `0x2531a4D108619a20ACeE88C4354a50e9aC48ecfe`).

```
{
    ...
    aurora: {
      provider: () => setupWallet('https://testnet.aurora.dev'),
      network_id: 0x4e454153,
      gas: 10000000,
      from: '0x2531a4D108619a20ACeE88C4354a50e9aC48ecfe'
    },
}
```

Connect to Aurora network throught Truffle console again:

```bash
% truffle console --network aurora
truffle(aurora)> const cvt = await CovidVaccineToken.deployed()
truffle(aurora)> await cvt.mint('0x3531a4D108619a20ACeE88C4354a50e9aC48ecf5') // a random address
Uncaught:
Error: Unknown address - unable to sign transaction for this address: "0x2531a4d108619a20acee88c4354a50e9ac48ecfe"
...
reason: 'Invalid Transfer',
  hijackedStack: 'Error: Unknown address - unable to sign transaction for this address: "0x2531a4d108619a20acee88c4354a50e9ac48ecfe"\n'
```

- Participant can transfer to the `minter` after receiving the vaccine:

Participant can only send this token if the receiver for this token is the minter (`0x6A33382de9f73B846878a57500d055B981229ac4`). So let the participant sign the transaction and send the ticket back to the minter.

```bash 
truffle(aurora)> await cvt.mint('0x6A33382de9f73B846878a57500d055B981229ac4') // minter
```

### Conculsion:

This simple NFT example shows how to deploy a contract with Truffle and invoke transactions on Aurora testnet.