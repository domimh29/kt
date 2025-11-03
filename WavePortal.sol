// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract WavePortal {
 struct Wave {
 address waver; // The address of the user who waved
 string message; // The message the user sent
 uint256 timestamp; // The timestamp when the user waved
 }

 Wave[] public waves; // Array to store all waves

 uint256 public totalWaves; // Counter for total waves

 event NewWave(address indexed from, string message, uint256 timestamp);

 constructor() {
 totalWaves = 0;
 }

 function wave(string memory _message) public {
 waves.push(Wave(msg.sender, _message, block.timestamp));
 totalWaves += 1;
 emit NewWave(msg.sender, _message, block.timestamp);
 }

 function getAllWaves() public view returns (Wave[] memory) {
 return waves;
 }

 function getTotalWaves() public view returns (uint256) {
 return totalWaves;
 }
}

//////////////////////

// compile -> deploy & run transactions -> injected provider - metamask
// -> check sepolia network -> deploy & verify -> 
// under deployed contract -> wave portal -> in wave send wave and transact