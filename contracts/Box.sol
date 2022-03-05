// contracts/Box.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import "hardhat/console.sol";

contract Box {
    uint256 private value;

    // Emitted when the stored value changes
    event ValueChanged(uint256 newValue);

    // Stores a new value in the contract
    function store(uint256 newValue) public {
        value = newValue;
        emit ValueChanged(newValue);
    }

    // Reads the last stored value
    function retrieve() public view returns (uint256) {
        return value;
    }

    function version() public pure returns (uint256) {
        return 1;
    }

    // What would you need to be careful of if this had a selfdestruct function?
}
