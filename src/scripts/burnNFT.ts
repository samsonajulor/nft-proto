import { ethers } from 'hardhat';
import { nftContractAddress } from '../../secrets.json';

async function main() {
  // get caller address
  const [signer] = await ethers.getSigners()

  const NFTProtoContract = await ethers.getContractAt('INFTProto', nftContractAddress);

  const setTokenData = await NFTProtoContract.burnNFT(1);
  // @ts-ignore
  const setTokenDataLog = (await setTokenData.wait())?.logs;
  console.log(setTokenDataLog);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
