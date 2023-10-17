import { ethers } from "hardhat";

// nftproto contract deployed at: 0xD4C42e502669947139D736b693C97b82D4d01F48 for sepolia
// nftproto contract deployed at: 0x8601b06357C033F1fcD538E3dA17c7e54d7dB81a for base-goerli

async function main() {
  const NFTProto = await ethers.deployContract('NFTProto', []);

  await NFTProto.waitForDeployment();

  console.log(`NFTProto deployed to ${NFTProto.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
