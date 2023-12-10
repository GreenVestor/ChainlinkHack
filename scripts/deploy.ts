import { ethers } from "hardhat";
const fs = require("fs");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const greenVestor = await ethers.deployContract("GreenVestor");
  console.log("Greenvestor deployed to:", await greenVestor.getAddress());

  fs.writeFileSync(
    "./config.js",
    `
  export const greenVestorContract = "${await greenVestor.getAddress()}"
  `
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
