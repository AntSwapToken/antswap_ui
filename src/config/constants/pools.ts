import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  //  // old ANT Dividend contract - Closed
  /* {
     sousId: 1,
     tokenName: 'WMATIC',
     stakingTokenName: QuoteToken.ANT,
     stakingTokenAddress: '0x7f06185200a9BbFbaaDFDAC0DFbA7ac4e0Ba1494',
     contractAddress: {
       97: '0xfc1C7A6b938Ab2f61C830f942C6cB0bac0832c4e',
       56: '0xfc1C7A6b938Ab2f61C830f942C6cB0bac0832c4e',
      137: '0xfc1C7A6b938Ab2f61C830f942C6cB0bac0832c4e'
     },
     poolCategory: PoolCategory.COMMUNITY,
     projectLink: 'https://antswap.club/',
     harvest: true,
     tokenPerBlock: '.00055',
     sortOrder: 1,
     isFinished: false,
     tokenDecimals: 18,
   }

   */

  
  // {
  //   sousId: 1,
  //   tokenName: 'TWT',
  //   stakingTokenName: QuoteToken.SYRUP,
  //   stakingTokenAddress: '0x009cF7bC57584b7998236eff51b98A168DceA9B0',
  //   contractAddress: {
  //     97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
  //     56: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://trustwallet.com/',
  //   harvest: true,
  //   tokenPerBlock: '20',
  //   sortOrder: 999,
  //   isFinished: true,
  //   tokenDecimals: 18,
  // },

  /* {
    sousId: 1,
    tokenName: 'WETH',
    stakingTokenName: QuoteToken.WETH,
    stakingTokenAddress: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
    contractAddress: {
      97: '0x6131D6F7d433D8CDDA68EB8d57E9710E664a3Be5',
      56: '0x6131D6F7d433D8CDDA68EB8d57E9710E664a3Be5',
     137: '0x6131D6F7d433D8CDDA68EB8d57E9710E664a3Be5'
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https://antswap.club/',
    harvest: true,
    tokenPerBlock: '.0025',   // 2500000000000000
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  }
  */
/*
  {
    sousId: 2,
    tokenName: 'WMATIC',
    stakingTokenName: QuoteToken.WMATIC,
    stakingTokenAddress: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    contractAddress: {
      97: '0x8EDaF51e0F3b62dc86675aea97Aff6f73E34eB92',
      56: '0x8EDaF51e0F3b62dc86675aea97Aff6f73E34eB92',
     137: '0x8EDaF51e0F3b62dc86675aea97Aff6f73E34eB92'
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https://antswap.club/',
    harvest: true,
    tokenPerBlock: '.002',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
 
*/

  {
    sousId: 1,
    tokenName: 'DAI',
    stakingTokenName: QuoteToken.DAI,
    stakingTokenAddress: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
    contractAddress: {
      97: '0xF968B7BB58F424d5a3B6e0bBcd05b7F93f100AC9',
      56: '0xF968B7BB58F424d5a3B6e0bBcd05b7F93f100AC9',
     137: '0xF968B7BB58F424d5a3B6e0bBcd05b7F93f100AC9'
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https://antswap.club/',
    harvest: true,
    tokenPerBlock: '.0025',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  }
  
]

export default pools
