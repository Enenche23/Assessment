import { ethers } from "hardhat";

async function main() {
  const W3NFT = await ethers.getContractFactory("W3NFT");
  const [owner, addr1]= await ethers.getSigners();
  const w3nft = await W3NFT.deploy();
  await w3nft.deployed()
  
  console.log(`The NFT contract address is: ${w3nft.address}`)
  const IPFS = "QmcL5YbbVrL6TBF98NjCADfxRQnipNxWZ3uX72zRaReX1J";
  const uri = "ipfs://" + IPFS
  const Hills = await w3nft.Mint(owner.address, uri);
  console.log(Hills)
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});