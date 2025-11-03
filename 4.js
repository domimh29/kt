//  mkdir eth-dev-env && cd eth-dev-env
// npm init -y # Creates package.json

//  install hardhat
// npm install --save-dev hardhat@2.22.15 

//  Initialize Hardhat Project
// npx hardhat
// • Select Create a JavaScript project.
// • Accept defaults for project root, .gitignore, and Install sample project.
// Output:
// • hardhat.config.js: Configuration file.
// • contracts/, scripts/, test/: Folders for smart contracts, deployment scripts,
// and tests.

// Start Local Ethereum Node
// npx hardhat node 

// Configure MetaMask
// 1. Add Hardhat Network to MetaMask:
// a. Open MetaMask → Network → "Add Network".
// b. Enter:
// i. Network Name: Hardhat Local
// ii. RPC URL: http://127.0.0.1:8545
// iii. Chain ID: 31337 (default for Hardhat).
// iv. Currency Symbol: ETH
// c. Click "Save".
// 2. Import Test Accounts:
// • Copy a private key from npx hardhat node output (e.g., Account 0’s
// private key).
// • In MetaMask: Account → "Import Account" → Paste private key.
// • Result: Account appears with 10,000 ETH balance.

// Create a Transaction
// 1. In MetaMask, select the imported account.
// 2. Click "Send" → Enter recipient address (e.g., Account 1:
// 0x70997970C51812dc3A010C7d01b50e0d17dc79C8).
// 3. Amount: 1 ETH → Confirm transaction.
// 4. Output:
// • Transaction appears in MetaMask history instantly (mined by Hardhat).