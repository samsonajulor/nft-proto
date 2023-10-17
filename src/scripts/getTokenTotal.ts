import { ethers } from 'hardhat';
import { nftContractAddress } from "../../secrets.json";

async function main() {
  const NFTProtoContract = await ethers.getContractAt('INFTProto', nftContractAddress);

  const total = await NFTProtoContract.getTokenIdTotal();

  console.log(total, '<<<<total>>>>');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

