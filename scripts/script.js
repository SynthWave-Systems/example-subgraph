const { ethers } = require("hardhat");

async function FactoryDeploy() {
    const Factory = await ethers.getContractFactory("GravatarRegistry");
    const factory = await Factory.deploy();

    console.log('Factory deployed at:', factory.address);
    console.log('Transaction hash:', factory.deployTransaction.hash);
}

FactoryDeploy()
    .then
    (function () {
        process.exit(0);
    })