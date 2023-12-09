const hre = require("hardhat");
const fs = require("fs");

async function main() {
  // contract deployment
  // const greenVestor = await hre.ethers.getContractFactory("GreenVestor");
  // const greenVestorContract = await greenVestor.deploy();
  // await greenVestorContract.deployed();

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

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
