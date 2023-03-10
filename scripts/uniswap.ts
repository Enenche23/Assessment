// import { ethers } from "hardhat";
// async function main() {

//   // Setting state variables
//   console.log(`********* Setting up state variables ******************`)
//   const ROUTER = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
//   const DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
//   const WETH = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
// async function main() {


//   // Getting contract implementation
//   console.log(`************ Setting up contract implementations *************`)
//   const Uniswap = await ethers.getContractAt("IUniswap", ROUTER);
//   const UsdcContract = await ethers.getContractAt("IERC20", DAI);
//   const WETHContract = await ethers.getContractAt("IERC20", WETH);
//   const MaticContract = await ethers.getContractAt("IERC20", UNI);
//   const DaiContract = await ethers.getContractAt("IToken", DAI);
//   const WETHContract = await ethers.getContractAt("IToken", WETH);
//   const UniContract = await ethers.getContractAt("IToken", UNI);


//   // Setting up impersonator
//   console.log(`********* Setting up Impersonator account ************`)
//   const helpers = require("@nomicfoundation/hardhat-network-helpers");
//   await helpers.impersonateAccount(IMPACC);
//   const impersonatedSigner = await ethers.getSigner(IMPACC);

//   // Setting up transaction variables
//   console.log(`********** Setting up transaction variables ************`)

//   // First transaction
//   const tx1 = {
//       tokenA: "",
//       tokenB: "",
//       amountADesired: "",
//       amountBDesired: "",
//       amountAMin: "",
//       amountBMin: "",
//       to: "",
//       deadline: "",
//       tokenA: DAI,
//       tokenB: UNI,
//       amountADesired: ethers.utils.parseEther("100"),
//       amountBDesired: ethers.utils.parseEther("40"),
//       amountAMin: 0,
//       amountBMin: 0,
//       to: impersonatedSigner.address,
//       deadline: 1686588399
//   }

//   // Second transaction
//   const tx2 = {
//     token: "",
//     amountTokenDesired: "",
//     amountTokenMin: "",
//     amountETHMin: "",
//     to: "",
//     deadline: "",
//     token: DAI,
//     amountTokenDesired: ethers.utils.parseEther("100"),
//     amountTokenMin: 0,
//     amountETHMin: 0,
//     to: impersonatedSigner.address,
//     deadline: 1686588399,
//     value: ethers.utils.parseEther("1")
//   }

//   // Third transaction
//   const tx3 = {
//       tokenA: "",
//       tokenB: "",
//       liquidity: "",
//       amountAMin: "",
//       amountBMin: "",
//       to: "",
//       deadline: "",
//       tokenA: DAI,
//       tokenB: UNI,
//       liquidity: ethers.utils.parseEther("0"),
//       amountAMin: 0,
//       amountBMin: 0,
//       to: impersonatedSigner.address,
//       deadline: 1686588399
//   }



//   // Transactions

//   console.log(`First transaction`)
//   // First Transaction
//   Uniswap.connect(impersonatedSigner).addLiquidity()
//   // Approving DAI and UNI
//   console.log(`Approving tokens`)
//   await DaiContract.connect(impersonatedSigner).approve(ROUTER, tx1.amountADesired)
//   await UniContract.connect(impersonatedSigner).approve(ROUTER, tx1.amountBDesired)

//   console.log(`Adding DAI and UNI liquidity`)
//   // Adding Liquidity for DAI and UNI
//   Uniswap.connect(impersonatedSigner).addLiquidity(tx1.tokenA, tx1.tokenB, tx1.amountADesired, tx1.amountBDesired, tx1.amountAMin, tx1.amountBMin, tx1.to, tx1.deadline);




//   // Second Transaction
//   Uniswap.connect(impersonatedSigner).addLiquidityETH()
//   console.log(`Second Transaction`)
//   // Approving DAI
//   console.log(`Approving token`)
//   await DaiContract.connect(impersonatedSigner).approve(ROUTER, tx2.amountTokenDesired)

//   console.log(`Adding DAI and ETH liquidity`)
//   // Adding Liquidity for DAI and ETH
//   Uniswap.connect(impersonatedSigner).addLiquidityETH(tx2.token, tx2.amountTokenDesired, tx2.amountTokenMin, tx2.amountETHMin, tx2.to, tx2.deadline, {value: tx2.value})




//   // Third Transaction
//   Uniswap.connect(impersonatedSigner).removeLiquidity()
//   console.log(`Third transaction`)
//   // Removing Liquidity for DAI and UNI
//   console.log(`Removing DAI and UNI liquidity`)
//   Uniswap.connect(impersonatedSigner).removeLiquidity(tx3.tokenA, tx3.tokenB, tx3.liquidity, tx3.amountAMin, tx3.amountBMin, tx3.to, tx3.deadline)

// }
// }