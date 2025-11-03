// Build and deploy a smart contract using hardhat.

//   mkdir eth-dev-env && cd eth-dev-env
// npm init -y # Creates package.json

// Install Node.js and npm (if you haven't already)

// install hardhat 
// npm install --save-dev hardhat

// Initialize a new Hardhat project by running 
// npx hardhat init.

// Install the necessary dependencies for our project by running 
// npm install ethers hardhat- deploy

// Open the hardhat.config.js file and add the following lines of code to the networks section:
 module.exports = {
    networks: {
        hardhat: {
            chainId: 1337
        }
    }
 };


// Create a new file called WavePortal.sol in the contracts directory and add the following code:

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract WavePortal {
    uint256 public totalWaves;

    function wave() public {
        totalWaves += 1;
    }
}

// This smart contract has a totalWaves variable that keeps track of the number of waves sent to the contract, and a wave function that increments this variable by 1 every time it's called
// Compile the smart contract by running 
// npx hardhat compile.

// Create a new file called deploy.js in the scripts directory and add the following code:

const {ethers} = require("hardhat");

async function main() {
    const WavePortal = await ethers.getContractFactory("WavePortal");
    const wavePortal = await WavePortal.deploy();

    console.log("WavePortal deployed to: ", wavePortal.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });


    // This script deploys the WavePortal smart contract to the local network.

    // Deploy the smart contract by running 
    // npx hardhat run scripts/deploy.js --network hardhat.

    // Now we can interact with the contract using the Hardhat console. 
    // Run npx hardhat console to start the console, and then run the following commands to send a wave to the contract and check the current number of waves:

    const WavePortal = await ethers.getContractFactory("WavePortal");
    const wavePortal = await WavePortal.attach("CONTRACT_ADDRESS_HERE")
    await wavePortal.wave();
    console.log(await wavePortal.totalWaves());

    