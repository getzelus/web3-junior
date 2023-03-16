const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
//const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants");

// local
//  0x5FbDB2315678afecb367f032d93F642f64180aa3


async function main() {

  const contractFactory = await ethers.getContractFactory("Greeter");

  // deploy the contract
  const contract = await contractFactory.deploy(
    "Hi"
  );

  // Wait for it to finish deploying
  await contract.deployed();

  // print the address of the deployed contract
  console.log(
    "contract address: ",
    contract.address
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });