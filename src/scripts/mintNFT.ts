import { ethers } from 'hardhat';

// const storedNFTOnIPFS = {
//   ipnft: 'bafyreiblrs3ktv36q3o2ssatubyfndoo4z3dg3agn3qpgdsmuao7a5sqoy',
//   url: 'ipfs://bafyreiblrs3ktv36q3o2ssatubyfndoo4z3dg3agn3qpgdsmuao7a5sqoy/metadata.json'
// } // with sepolia

const storedNFTOnIPFS = {
  ipnft: 'bafyreiblrs3ktv36q3o2ssatubyfndoo4z3dg3agn3qpgdsmuao7a5sqoy',
  url: 'ipfs://bafyreiblrs3ktv36q3o2ssatubyfndoo4z3dg3agn3qpgdsmuao7a5sqoy/metadata.json',
}; // with base-goerli

async function main() {
  // get caller address
  const [signer] = await ethers.getSigners()
  const NFTProtoAddress = '0x8601b06357C033F1fcD538E3dA17c7e54d7dB81a'; //base

  const NFTProtoContract = await ethers.getContractAt('INFTProto', NFTProtoAddress);

  const setTokenData = await NFTProtoContract.mintNFT(
    signer.address,
    'bafyreiblrs3ktv36q3o2ssatubyfndoo4z3dg3agn3qpgdsmuao7a5sqoy'
  );
  // @ts-ignore
  const setTokenDataLog = (await setTokenData.wait())?.logs;
  console.log(setTokenDataLog);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
