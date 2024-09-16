
# Proxy Contract Deployment with OpenZeppelin, Hardhat, and Alchemy

This guide will walk you through deploying a proxy contract using OpenZeppelin's upgradeable contract framework with Hardhat on the Ethereum Sepolia network. We will use Alchemy for connecting to the network.
### Proxy Admin Contract

 This contract responsible for the proxy's implementation address

### Proxy Contract
It contains the contract storage & balance. This is an EIP 1967 standard proxy contract.

### Execution contract
It stores the contract logic used in the executing functions

#### USER -> Proxy Contract -> Executing Contract v1/v2/v3.

#### Admin -> Proxy Admin Contract -> Proxy Contract

Admin will set which execution contract to choose in the proxy contract.



## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Hardhat](https://hardhat.org/)
- An [Alchemy](https://www.alchemy.com/) account and API key
- An Ethereum wallet and private key (e.g., MetaMask)
- An [Etherscan](https://etherscan.io/) API key for contract verification

## Project Setup

1. **Initialize Your Project**

   ```bash
   mkdir my-upgradeable-contract
   cd my-upgradeable-contract
   npm install
   ```
2. **Create the `.env` File**

   Create a file named `.env` in the root of your project and add the following content:

   ```plaintext
   ALCHEMY_API_KEY=your-alchemy-api-key
   PRIVATE_KEY=your-ethereum-wallet-private-key
   ETHERSCAN_API_KEY=your-etherscan-api-key
   ```

   Replace the placeholders with your actual keys.

## Deployment Steps

1. **Deploy the Initial Version**

   Run the following command to deploy the initial version of your contract:

   ```bash
   npx hardhat run --network sepolia ./scripts/deploy_box_v1.js
   ```

   After running this script, note the contract addresses from the output.

2. **Verify the Contract on Etherscan**

   Verify the proxy contract on Etherscan with:

   ```bash
   npx hardhat verify --network sepolia <YOUR_CONTRACT_ADDRESS>
   ```

3. **Upgrade to the New Version**

   To upgrade to the new version of your contract, run:

   ```bash
   npx hardhat run --network sepolia ./scripts/upgrade_box_v2.js
   ```
