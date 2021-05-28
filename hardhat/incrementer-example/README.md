# Hardhat Incrementer Example

## Configuration

Add your Aurora Private key (from Metamask) to __.env__ file: <br/>
`$ echo "AURORA_PRIVATE_KEY=YOUR_AURORA_PRIVATE_KEY_HERE" >> .env`

## Interaction

To deploy the contract run: <br/>
`$ make deploy`

Take the address of the deployed Incrementer from the output to use it in next steps.

To get the current counter value run: <br/>
`$ make get-counter INCREMENTER_ADDRESS=YOUR_INCREMENTER_ADDRESS_HERE`

To increment the current counter value run: <br/>
`$ make increment-counter INCREMENTER_ADDRESS=YOUR_INCREMENTER_ADDRESS_HERE`

## Advanced

Optionally you can specify any of the following networks for any command: __testnet_aurora__, __develop_aurora__, __ropsten__ like this:
`$ make deploy NETWORK=testnet_aurora`
