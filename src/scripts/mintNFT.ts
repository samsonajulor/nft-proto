import { ethers } from 'hardhat';
import {nftContractAddress} from "../../secrets.json";

// const storedNFTOnIPFS = {
//   ipnft: 'bafyreiblrs3ktv36q3o2ssatubyfndoo4z3dg3agn3qpgdsmuao7a5sqoy',
//   url: 'ipfs://bafyreiblrs3ktv36q3o2ssatubyfndoo4z3dg3agn3qpgdsmuao7a5sqoy/metadata.json'
// } // with sepolia

// {
//   ipnft: 'bafyreidy7c2bj5esazcttbadhbxrjmeq72k7mj25xiuqlxfmqxtboynmay',
//   url: 'ipfs://bafyreidy7c2bj5esazcttbadhbxrjmeq72k7mj25xiuqlxfmqxtboynmay/metadata.json'
// }

async function main() {
  // get caller address
  const [signer] = await ethers.getSigners();

  const NFTProtoContract = await ethers.getContractAt('INFTProto', nftContractAddress);

  const setTokenData = await NFTProtoContract.mintNFT(
    signer.address,
    'ipfs://bafyreidy7c2bj5esazcttbadhbxrjmeq72k7mj25xiuqlxfmqxtboynmay/metadata.json'
  );
  // @ts-ignore
  const setTokenDataLog = (await setTokenData.wait())?.logs;
  console.log(setTokenDataLog);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
