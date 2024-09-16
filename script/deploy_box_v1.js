const { ethers, upgrades } = require("hardhat");

async function main() {
  const Box = await ethers.getContractFactory("Box");

  const proxyContract = await upgrades.deployProxy(Box, [768], {
    initializer: "setValue",
  });

  await proxyContract.waitForDeployment();
  // from openzapllin
  const proxyContractAddress = await proxyContract.getAddress();
  // box contract
  const implementationAddress = await upgrades.erc1967.getImplementationAddress(
    proxyContractAddress
  );
  // from openzapllin
  const adminAddress = await upgrades.erc1967.getAdminAddress(
    proxyContractAddress
  );

  console.log("Proxy contract address:", proxyContractAddress);
  console.log("Implementation contract address:", implementationAddress);
  console.log("Admin contract address:", adminAddress);
}

// Execute the main function and catch any errors
main().catch((error) => {
  console.error(error);
  process.exit(1);
});
