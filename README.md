# uniswap-proto

## Deploying to sepolia

This Contract was deployed to sepolia testnet via the following commands

- RUN `cd src`
- RUN `npx hardhat compile`
- RUN `npx hardhat run scripts/deployNFTProto.ts --network sepolia`
- RUN `npx hardhat run scripts/uploadNFTToIPFS.ts --network sepolia`

#### Verifying the tokens
- RUN `npx hardhat verify --contract contracts/nftProto.sol:NFTProto  --network sepolia 0x168Ca561E63C868b0F6cC10a711d0b4455864f17` to verify the ethTok
- verification url: [nftProto url](https://sepolia.etherscan.io/address/0x168Ca561E63C868b0F6cC10a711d0b4455864f17#code)


#### Mint the nft with the contract to sepolia testnet
- RUN `npx hardhat run scripts/mintNFT.ts --network sepolia`

#### Find the minted nft here
[minted nft on opensea testnet](https://testnets.opensea.io/assets?search[query]=0x168Ca561E63C868b0F6cC10a711d0b4455864f17)

## Deploying to base

This Contract was deployed to sepolia testnet via the following commands

- RUN `cd src`
- RUN `npx hardhat compile`
- RUN `npx hardhat run scripts/deployNFTProto.ts --network  base-goerli`
- RUN `npx hardhat run scripts/uploadNFTToIPFS.ts --network  base-goerli`

#### Verifying the tokens
- RUN `npx hardhat verify --contract contracts/nftProto.sol:NFTProto  --network base-goerli 0x8601b06357C033F1fcD538E3dA17c7e54d7dB81a` to verify the NFTProto
- verification url: [nftProto url](https://goerli.basescan.org/address/0x8601b06357C033F1fcD538E3dA17c7e54d7dB81a#code)


#### Mint the nft with the contract to base testnet
- RUN `npx hardhat run scripts/mintNFT.ts --network  base-goerli`

#### Find the minted nft here
[minted nft on opensea testnet](https://testnets.opensea.io/assets?search[query]=0x8601b06357C033F1fcD538E3dA17c7e54d7dB81a)