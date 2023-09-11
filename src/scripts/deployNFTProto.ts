import { ethers } from "hardhat";

// nftproto contract deployed at: 0x676153a15D51C2De75de8FC4bb6E2eBaED82E1Bb
async function main() {
  const NFTProto = await ethers.deployContract('NFTProto', []);

  await NFTProto.waitForDeployment();

  console.log(`NFTProto deployed to ${NFTProto.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
