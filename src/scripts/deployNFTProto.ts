import { ethers } from "hardhat";

async function main() {
  const NFTProto = await ethers.deployContract('NFTProto', []);

  await NFTProto.waitForDeployment();

  console.log(`NFTProto deployed to ${NFTProto.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
