import { ethers } from 'hardhat';
import { nftContractAddress } from "../../secrets.json";

async function main() {
  const [signer] = await ethers.getSigners();

  const NFTProtoContract = await ethers.getContractAt('INFTProto', nftContractAddress);

  const taken_value = await NFTProtoContract.getBalance(signer.address);

  console.log(taken_value, '<<<<taken_value>>>>');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

