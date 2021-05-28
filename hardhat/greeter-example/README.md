# Hardhat Greeter Example

## Configuration

Add your Aurora Private key (from Metamask) to __.env__ file: <br/>
`$ echo "AURORA_PRIVATE_KEY=YOUR_AURORA_PRIVATE_KEY_HERE" >> .env`

## Interaction

To deploy the contract run: <br/>
`$ make deploy`

Optionally you can specify any of the following networks: __testnet_aurora__, __develop_aurora__, __ropsten__ like this:
`$ make deploy NETWORK=testnet_aurora`

