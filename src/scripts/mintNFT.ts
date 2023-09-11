import { ethers } from 'hardhat';

const storedNFTOnIPFS = {
  ipnft: 'bafyreiblrs3ktv36q3o2ssatubyfndoo4z3dg3agn3qpgdsmuao7a5sqoy',
  url: 'ipfs://bafyreiblrs3ktv36q3o2ssatubyfndoo4z3dg3agn3qpgdsmuao7a5sqoy/metadata.json'
}

async function main() {
  // get caller address
  const [signer] = await ethers.getSigners()
  console.log(signer)
  const NFTProtoAddress = '0x676153a15D51C2De75de8FC4bb6E2eBaED82E1Bb';

  const NFTProtoContract = await ethers.getContractAt('INFTProto', NFTProtoAddress);

  const setTokenData = await NFTProtoContract.mintNFT(signer.address as string, storedNFTOnIPFS.url);
  // @ts-ignore
  (await setTokenData.wait())?.logs[0]?.args[0];
  console.log(setTokenData);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
