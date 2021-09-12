const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ConsentManagement", function() {
  it("Should sign consent", async function() {
    const ConsentManagement = await ethers.getContractFactory("ConsentManagement");
    const consentDeployed = await ConsentManagement.deploy();
    await consentDeployed.deployed();

    const fingerprint = "0x668fafd32f454937c2032a77eb955f17c6d3d00c2f50b3e1e0c41a5d61fe3d9d";

    const addConsentTx = await consentDeployed.addConsent(fingerprint);

    // wait until the transaction is mined
    await addConsentTx.wait();

    const consent = await consentDeployed.getConsent(fingerprint);
    console.log(consent);

    expect(consent).to.include(fingerprint);
  });
});
