const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

// pics : 
// https://ipfs.io/ipfs/QmQBHarz2WFczTjz5GnhjHrbUPDnB48W5BM2v2h6HbE1rZ/

// metadata : 
// https://ipfs.io/ipfs/Qmbygo38DWF1V8GttM1zy89KzyZTPU2FLUzQtiDvB7q6i5/

// contract : 
// 0x1C82312706cE9ac34fbc39464c8A3Aa5862B5da0

async function main() {
  // URL from where we can extract the metadata for a LW3Punks
  const metadataURL = "ipfs://Qmbygo38DWF1V8GttM1zy89KzyZTPU2FLUzQtiDvB7q6i5/";
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so lw3PunksContract here is a factory for instances of our LW3Punks contract.
  */
  const lw3PunksContract = await ethers.getContractFactory("LW3Punks");

  // deploy the contract
  const deployedLW3PunksContract = await lw3PunksContract.deploy(metadataURL);

  await deployedLW3PunksContract.deployed();

  // print the address of the deployed contract
  console.log("LW3Punks Contract Address:", deployedLW3PunksContract.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });