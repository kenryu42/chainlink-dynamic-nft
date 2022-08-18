// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
    const interval = 25200;
    const priceFeed = "0xECe365B379E1dD183B20fc5f022230C044d51404";
    const vrfCoordinator = "0x6168499c0cFfCaCD319c818142124B7A15E857ab";
    const BullBear = await hre.ethers.getContractFactory("BullBear");
    const bullBear = await BullBear.deploy(interval, priceFeed, vrfCoordinator);

    await bullBear.deployed();

    console.log("BullAndBear address:", bullBear.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
