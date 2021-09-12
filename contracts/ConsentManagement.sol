pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract ConsentManagement {
    mapping (bytes32 => Consent) public consents;

    struct Consent {
        address owner;
        bytes32 fingerprint;
    }

    constructor() {
        console.log("Deploying consent management contract");
    }

    function addConsent(bytes32 fingerprint) public {
        require(consents[fingerprint].owner == address(0), "This consent has been already been signed!");
        consents[fingerprint] = Consent(msg.sender, fingerprint);
    }

    function getConsent(bytes32 fingerprint) public view returns (Consent memory) {
        return consents[fingerprint];
    }
}
