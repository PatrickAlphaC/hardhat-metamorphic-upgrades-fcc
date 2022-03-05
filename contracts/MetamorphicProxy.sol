// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

// See import "@openzeppelin/contracts/proxy/Proxy.sol"; for full example
import "@openzeppelin/contracts/proxy/Proxy.sol";

contract MetamorphicProxy is Proxy {
    // Don't do this!!
    // You'll get storage clashes!
    // address public s_implementation;

    // This is the keccak-256 hash of "eip1967.proxy.implementation" subtracted by 1
    bytes32 private constant _IMPLEMENTATION_SLOT =
        0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc;

    function setImplementation(address newImplementation) public {
        assembly {
            sstore(_IMPLEMENTATION_SLOT, newImplementation)
        }
    }

    function _implementation() internal view override returns (address implementationAddress) {
        assembly {
            implementationAddress := sload(_IMPLEMENTATION_SLOT)
        }
    }

    function destroy() public {
        selfdestruct(payable(msg.sender));
    }
}
