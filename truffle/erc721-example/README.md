# ERC721

This example is originally forked from [OpenZeppelin examples](https://docs.openzeppelin.com/contracts/4.x/erc721). However it implements a simple COVID-19 vaccine ticket token 💊💊. For more details about the non-fungible token standard (ERC721), please refer to [OpenZeppelin ERC721 implementation](https://github.com/OpenZeppelin/openzeppelin-contracts/tree/1b37c21da58f6379cfe09c0140cf56d67b19a0bc/contracts/token/ERC721).


Only `minter` address can distribute the vaccine tickets (tokens 💊💊💊) to the people who are part of the vaccination program. When a person receives the vaccine 💊, automatically transfers the vaccine ticket 🎫 to the `minter` address which in turn will redistribute that ticket 🎫 to new person in the line.


