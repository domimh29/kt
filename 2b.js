// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.0;

contract WavePortal { 
    struct Wave {
        address sender; 
        string message; 
        uint256 timestamp;
    }

uint256 totalWaves;
Wave[] waves;

event NewWave(address indexed sender, string message, uint256 timestamp);

function wave(string memory _message) public { 
    totalWaves += 1;
    waves.push(Wave(msg.sender, _message, block.timestamp)); 
    emit NewWave(msg.sender, _message, block.timestamp);
}

function getTotalWaves() public view returns (uint256) {
 
return totalWaves;
}

function getWaves() public view returns (Wave[] memory) {
     return waves;
}
}


