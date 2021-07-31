import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'ANT-USDC',
    lpAddresses: {
      97: '',
      56: '',
      137: '0xe15A73D86E4e6A20a2D066D48a69D69f99631155', // ANT - USDC
    },
    tokenSymbol: 'ANT',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0x7f06185200a9bbfbaadfdac0dfba7ac4e0ba1494',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
   pid: 14,
   isTokenOnly: true,
   risk: 3,
   lpSymbol: 'ANT',
   lpAddresses: {
    97: '',
    56: '',
    137: '0xe15a73d86e4e6a20a2d066d48a69d69f99631155', // ANT - USDC
   },
   tokenSymbol: 'ANT',
   tokenAddresses: {
    97: '',
    56: '',
    137: '0x7f06185200a9BbFbaaDFDAC0DFbA7ac4e0Ba1494', // ANT
   },
   quoteTokenSymbol: QuoteToken.ANT,
   quoteTokenAdresses: contracts.ant,
   tokenDecimals: 18,
  },
  {
    pid: 1,
    risk: 3,
    lpSymbol: 'WMATIC-USDC',
    lpAddresses: {
      97: '',
      56: '',
      137: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827', // WMATIC - USDC
    },
    tokenSymbol: 'WMATIC',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270', // WMATIC
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    isTokenOnly: true,
    risk: 3,
    lpSymbol: 'WMATIC',
    lpAddresses: {
      97: '',
      56: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',  // 0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827
      137: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827', // WMATIC - USDC
    },
    tokenSymbol: 'WMATIC',
    tokenAddresses: {
      97: '',
      56: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
      137: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270', // WMATIC
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    tokenDecimals: 18,
  },
  {
    pid: 3,
    isTokenOnly: true,
    risk: 3,
    lpSymbol: 'WBTC',
    lpAddresses: {
      97: '',
      56: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
      137: '0xf6a637525402643b0654a54bead2cb9a83c8b498', // WBTC - USDC
    },
    tokenSymbol: 'WBTC',
    tokenAddresses: {
      97: '',
      56: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
      137: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6', // WBTC
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    tokenDecimals: 18,
  },
  {
   pid: 4,
   isTokenOnly: true,
   risk: 3,
   lpSymbol: 'WETH',
   lpAddresses: {
     97: '',
     56: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
     137: '0x853ee4b2a13f8a742d64c8f088be7ba2131f670d', // ETH - USDC
   },
   tokenSymbol: 'WETH',
   tokenAddresses: {
     97: '',
     56: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
     137: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619', // ETH
   },
   quoteTokenSymbol: QuoteToken.BUSD,
   quoteTokenAdresses: contracts.busd,
   tokenDecimals: 18,
 }, 
 {
   pid: 5,
   isTokenOnly: true,
   risk: 3,
   lpSymbol: 'QUICK',
   lpAddresses: {
     97: '',
     56: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
     137: '0x1f1e4c845183ef6d50e9609f16f6f9cae43bc9cb', // QUICK - USDC
   },
   tokenSymbol: 'QUICK',
   tokenAddresses: {
     97: '',
     56: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
     137: '0x831753dd7087cac61ab5644b308642cc1c33dc13', // QUICK
   },
   quoteTokenSymbol: QuoteToken.BUSD,
   quoteTokenAdresses: contracts.busd,
   tokenDecimals: 18,
 },
 {
   pid: 6,
   isTokenOnly: true,
   risk: 3,
   lpSymbol: 'YLD',
   lpAddresses: {
     97: '',
     56: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
     137: '0xead4c2d8859b2cb0698aeb7d0cf56a00468a4f5c', // YLD - MATIC
   },
   tokenSymbol: 'YLD',
   tokenAddresses: {
     97: '',
     56: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
     137: '0x4cebdbcb286101a17d3ea1f7fe7bbded2b2053dd', // YLD
   },
   quoteTokenSymbol: QuoteToken.BUSD,
   quoteTokenAdresses: contracts.busd,
   tokenDecimals: 18,
 },
 {
   pid: 7,
   isTokenOnly: true,
   risk: 3,
   lpSymbol: 'USDT',
   lpAddresses: {
     97: '',
     56: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
     137: '0x2cf7252e74036d1da831d11089d326296e64a728', // USDT - USDC
   },
   tokenSymbol: 'USDT',
   tokenAddresses: {
     97: '',
     56: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
     137: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f', // USDT
   },
   quoteTokenSymbol: QuoteToken.BUSD,
   quoteTokenAdresses: contracts.busd,
   tokenDecimals: 18,
 },
 {
   pid: 8,
   isTokenOnly: true,
   risk: 3,
   lpSymbol: 'USDC',
   lpAddresses: {
     97: '',
     56: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
     137: '0x2cf7252e74036d1da831d11089d326296e64a728', // USDT - USDC
   },
   tokenSymbol: 'USDC',
   tokenAddresses: {
     97: '',
     56: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
     137: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174', // USDC
   },
   quoteTokenSymbol: QuoteToken.BUSD,
   quoteTokenAdresses: contracts.busd,
   tokenDecimals: 18,
 },
 {
   pid: 9,
   risk: 3,
   lpSymbol: 'USDT-USDC',
   lpAddresses: {
     97: '',
     56: '',
     137: '0x2cF7252e74036d1Da831d11089D326296e64a728', // USDT- USDC
   },
   tokenSymbol: 'USDT',
   tokenAddresses: {
     97: '',
     56: '',
     137: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f', // USDT
   },
   quoteTokenSymbol: QuoteToken.BUSD,
   quoteTokenAdresses: contracts.usdc,
 },
 {
   pid: 10,
   risk: 3,
   lpSymbol: 'WBTC-USDC',
   lpAddresses: {
     97: '',
     56: '',
     137: '0xf6a637525402643b0654a54bead2cb9a83c8b498', // WBTC USDC
   },
   tokenSymbol: 'WBTC',
   tokenAddresses: {
     97: '',
     56: '',
     137: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6', // WBTC
   },
   quoteTokenSymbol: QuoteToken.BUSD,
   quoteTokenAdresses: contracts.usdc,
 },
 {
   pid: 11,
   risk: 3,
   lpSymbol: 'Quick-WMATIC',
   lpAddresses: {
     97: '',
     56: '',  
     137: '0x019ba0325f1988213d448b3472fa1cf8d07618d7', // Quick- WMatic
   },
   tokenSymbol: 'Quick',
   tokenAddresses: {
     97: '',
     56: '',
     137: '0x831753dd7087cac61ab5644b308642cc1c33dc13', // Quick
   },
   quoteTokenSymbol: QuoteToken.BUSD,
   quoteTokenAdresses: contracts.busd,
 },
 {
  pid: 12,
  isTokenOnly: true,
  risk: 3,
  lpSymbol: 'LAD',
  lpAddresses: {
    97: '',
    56: '',
    137: '0x3995fb93384a8907e949c072d41808cbaca4038f', // LAD - WMATIC
  },
  tokenSymbol: 'LAD',
  tokenAddresses: {
    97: '',
    56: '',
    137: '0x8465d41d66ce05bde12fd3320f260e01aa4ced3f', // LAD
  },
  quoteTokenSymbol: QuoteToken.LAD,
  quoteTokenAdresses: contracts.lad,
  tokenDecimals: 18,
},

 {
   pid: 13,
   risk: 3,
   lpSymbol: 'ANT-LAD',
   lpAddresses: {
     97: '',
     56: '',  
     137: '0x0cd1d499f9106b8dd49d54aae89c7b3bfbc417bb', // ANT-LAD
   },
   tokenSymbol: 'ANT',
   tokenAddresses: {
     97: '',
     56: '',
     137: '0x8465d41d66ce05bde12fd3320f260e01aa4ced3f', // LAD
   },
   quoteTokenSymbol: QuoteToken.LAD,
   quoteTokenAdresses: contracts.busd,
   tokenDecimals: 18,
 },

 // ICE ---------------------------------------------------------
 {
  pid: 15,
  risk: 3,
  lpSymbol: 'ANT-ICE',
  lpAddresses: {
    97: '',
    56: '',  
    137: '0xd46b17069c57475afe82a567793e134cd3376d1b', // ANT-ICE
  },
  tokenSymbol: 'ANT',
  tokenAddresses: {
    97: '',
    56: '',
    137: '0x4A81f8796e0c6Ad4877A51C86693B0dE8093F2ef', // ICE
  },
  quoteTokenSymbol: QuoteToken.ICE,
  quoteTokenAdresses: contracts.usdc,
  tokenDecimals: 18,
},

{
  pid: 16,
  isTokenOnly: true,
  risk: 3,
  lpSymbol: 'ICE',
  lpAddresses: {
    97: '',
    56: '',
    137: '0x6be0dc66e5a88ce652f3ad89237e59257d6eb0f2', // ICE - USDC
  },
  tokenSymbol: 'ICE',
  tokenAddresses: {
    97: '',
    56: '',
    137: '0x4A81f8796e0c6Ad4877A51C86693B0dE8093F2ef', // ICE
  },
  quoteTokenSymbol: QuoteToken.ICE,
  quoteTokenAdresses: contracts.usdc,
  tokenDecimals: 18,
},

// BONE ---------------------------------------------------------

// {
//  pid: 17,
//  risk: 3,
//  lpSymbol: 'ANT-BONE',
//  lpAddresses: {
//    97: '',
//    56: '',  
//    137: '0x8b874aafb9ac4b92e2a298289e00601b704f5bb8', // ANT-BONE
//  },
//  tokenSymbol: 'ANT',
//  tokenAddresses: {
//    97: '',
//    56: '',
//    137: '0x80244c2441779361f35803b8c711c6c8fc6054a3', // BONE
//  },
//  quoteTokenSymbol: QuoteToken.BONE,
//  quoteTokenAdresses: contracts.usdc,
//  tokenDecimals: 18,
// },

// {
//  pid: 18,
//  isTokenOnly: true,
//  risk: 3,
//  lpSymbol: 'BONE',
//  lpAddresses: {
//    97: '',
//    56: '',
//    137: '0x8b874aafb9ac4b92e2a298289e00601b704f5bb8', // ICE - USDC
//  },
//  tokenSymbol: 'BONE',
//  tokenAddresses: {
//    97: '',
//    56: '',
//    137: '0x80244c2441779361f35803b8c711c6c8fc6054a3', // BONE
//  },
//  quoteTokenSymbol: QuoteToken.BONE,
//  quoteTokenAdresses: contracts.usdc,
//  tokenDecimals: 18,
// },

// TITAN ---------------------------------------------------------

// {
//  pid: 19,
//  risk: 3,
//  lpSymbol: 'ANT-TITAN',
//  lpAddresses: {
//    97: '',
//    56: '',  
//    137: '0x893ae376cd8c02a005ee45f6ed6a7df05ab381e3', // ANT-TITAN
//  },
//  tokenSymbol: 'ANT',
//  tokenAddresses: {
//    97: '',
//    56: '',
//    137: '0xaaa5b9e6c589642f98a1cda99b9d024b8407285a', // TITAN
//  },
//  quoteTokenSymbol: QuoteToken.TITAN,
//  quoteTokenAdresses: contracts.usdc,
//  tokenDecimals: 18,
// },

 // {
 // pid: 20,
 // isTokenOnly: true,
 // risk: 3,
 // lpSymbol: 'TITAN',
 // lpAddresses: {
 //   97: '',
  //  56: '',
 //   137: '0x893ae376cd8c02a005ee45f6ed6a7df05ab381e3', // ANT - TITAN
 // },
  // tokenSymbol: 'TITAN',
  // tokenAddresses: {
  //   97: '',
  //   56: '',
  //   137: '0xaaa5b9e6c589642f98a1cda99b9d024b8407285a', // TITAN
  // },
  // quoteTokenSymbol: QuoteToken.TITAN,
  // quoteTokenAdresses: contracts.usdc,
  // tokenDecimals: 18,
// },

// DINO ---------------------------------------------------------

{
  pid: 21,
  risk: 3,
  lpSymbol: 'ANT-DINO',
  lpAddresses: {
    97: '',
    56: '',  
    137: '0xe02749996aa5234d1385cbde763fe5a21d553d71', // ANT-DINO
  },
  tokenSymbol: 'ANT',
  tokenAddresses: {
    97: '',
    56: '',
    137: '0xaa9654becca45b5bdfa5ac646c939c62b527d394', // DINO
  },
  quoteTokenSymbol: QuoteToken.DINO,
  quoteTokenAdresses: contracts.usdc,
  tokenDecimals: 18,
},

{
  pid: 22,
  isTokenOnly: true,
  risk: 3,
  lpSymbol: 'DINO',
  lpAddresses: {
    97: '',
    56: '',
    137: '0xe02749996aa5234d1385cbde763fe5a21d553d71', // ANT - DINO
  },
  tokenSymbol: 'DINO',
  tokenAddresses: {
    97: '',
    56: '',
    137: '0xaa9654becca45b5bdfa5ac646c939c62b527d394', // DINO
  },
  quoteTokenSymbol: QuoteToken.DINO,
  quoteTokenAdresses: contracts.usdc,
  tokenDecimals: 18,
},




  
]

export default farms
