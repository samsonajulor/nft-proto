import { ethers } from 'hardhat';
import { nftContractAddress } from "../../secrets.json";

async function main() {
  const id = 1;
  
  const NFTProtoContract = await ethers.getContractAt('INFTProto', nftContractAddress);

  const token_exists = await NFTProtoContract.checkExists(id);

  if (!token_exists) {
    console.log(`token with id ${id} does not exist`);
    return;
  }

  const owner_is = await NFTProtoContract.getOwner(id);

  console.log(owner_is, '<<<<owner_is>>>>');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

