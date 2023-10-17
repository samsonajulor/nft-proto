# uniswap-proto

## Deploying to localhost

This Contract was deployed to sepolia testnet via the following commands

- RUN `cd src`
- RUN `npx hardhat compile`
- RUN `npx hardhat run scripts/deployNFTProto.ts --network  localhost`
- RUN `npx hardhat run scripts/uploadNFTToIPFS.ts --network  localhost`

#### Mint the nft with the contract to localhost
- RUN `npx hardhat run scripts/mintNFT.ts --network localhost`

#### Burn the nft with the contract from localhost
- RUN `npx hardhat run scripts/burnNFT.ts --network localhost`

#### Get Balance of the nft with the contract from localhost
- RUN `npx hardhat run scripts/getBalance.ts --network localhost`

#### Get Total Number of Tokens of the nft with the contract from localhost
- RUN `npx hardhat run scripts/getTokenTotal.ts --network localhost`

#### Check Existence of the nft with the contract from localhost
- RUN `npx hardhat run scripts/checkExists.ts --network localhost`

#### Check owner of the nft with the contract from localhost
- RUN `npx hardhat run scripts/getOwner.ts --network localhost`

## Deploying to sepolia

This Contract was deployed to sepolia testnet via the following commands

- RUN `cd src`
- RUN `npx hardhat compile`
- RUN `npx hardhat run scripts/deployNFTProto.ts --network sepolia`
- RUN `npx hardhat run scripts/uploadNFTToIPFS.ts --network sepolia`

#### Verifying the tokens
- RUN `npx hardhat verify --contract contracts/nftProto.sol:NFTProto  --network sepolia 0x47FEbbeBABF490d28874bf6936b7bB05595D1B00` to verify the nftTok
- verification url: [nftProto url](https://sepolia.etherscan.io/address/0x47FEbbeBABF490d28874bf6936b7bB05595D1B00#code)

#### Mint the nft with the contract to sepolia testnet
- RUN `npx hardhat run scripts/mintNFT.ts --network sepolia`

#### Find the minted nft here
[minted nft on opensea testnet](https://testnets.opensea.io/assets?search[query]=0x47FEbbeBABF490d28874bf6936b7bB05595D1B00)


#### Burn the nft with the contract to sepolia testnet
- RUN `npx hardhat run scripts/burnNFT.ts --network  sepolia`

#### Burn the nft with the contract from sepolia
- RUN `npx hardhat run scripts/burnNFT.ts --network sepolia`

#### Get Balance of the nft with the contract from sepolia
- RUN `npx hardhat run scripts/getBalance.ts --network sepolia`

#### Get Total Number of Tokens of the nft with the contract from sepolia
- RUN `npx hardhat run scripts/getTokenTotal.ts --network sepolia`

#### Check Existence of the nft with the contract from sepolia
- RUN `npx hardhat run scripts/checkExists.ts --network sepolia`

#### Check owner of the nft with the contract from sepolia
- RUN `npx hardhat run scripts/getOwner.ts --network sepolia`

## Deploying to base

This Contract was deployed to sepolia testnet via the following commands

- RUN `cd src`
- RUN `npx hardhat compile`
- RUN `npx hardhat run scripts/deployNFTProto.ts --network  base-goerli`
- RUN `npx hardhat run scripts/uploadNFTToIPFS.ts --network  base-goerli`

#### Verifying the tokens
- RUN `npx hardhat verify --contract contracts/nftProto.sol:NFTProto  --network base-goerli 0x1d4ea9d40Bee47C33CDB6017Db60d2fd6A6f71fF` to verify the NFTProto
- verification url: [nftProto url](https://goerli.basescan.org/address/0x1d4ea9d40Bee47C33CDB6017Db60d2fd6A6f71fF#code)


#### Mint the nft with the contract to base-goerli
- RUN `npx hardhat run scripts/mintNFT.ts --network  base-goerli`

#### Find the minted nft here
[minted nft on opensea testnet](https://testnets.opensea.io/assets?search[query]=0x1d4ea9d40Bee47C33CDB6017Db60d2fd6A6f71fF)

#### Burn the nft with the contract from base-goerli
- RUN `npx hardhat run scripts/burnNFT.ts --network base-goerli`

#### Get Balance of the nft with the contract from base-goerli
- RUN `npx hardhat run scripts/getBalance.ts --network base-goerli`

#### Get Total Number of Tokens of the nft with the contract from base-goerli
- RUN `npx hardhat run scripts/getTokenTotal.ts --network base-goerli`

#### Check Existence of the nft with the contract from base-goerli
- RUN `npx hardhat run scripts/checkExists.ts --network base-goerli`

#### Check owner of the nft with the contract from base-goerli
- RUN `npx hardhat run scripts/getOwner.ts --network base-goerli`
