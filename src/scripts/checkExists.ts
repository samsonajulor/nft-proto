import { ethers } from 'hardhat';
import { nftContractAddress } from "../../secrets.json";

async function main() {
  const NFTProtoContract = await ethers.getContractAt('INFTProto', nftContractAddress);

  const token_exists = await NFTProtoContract.checkExists(1);

  console.log(token_exists, '<<<<token_exists>>>>');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

