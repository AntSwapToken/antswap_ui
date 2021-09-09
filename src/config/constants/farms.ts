import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  
  // Pool 0 - (ANT-USDC)  - Active
  // ----------------------------------------------------------
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

  // Pool 14 - (ANT) - Active
  // ----------------------------------------------------------
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

  

  // Pool 23 - ANT-RBAG - Inactive 90%
  // ----------------------------------------------------------
// {
//  pid: 23,
//  risk: 3,
//  lpSymbol: 'ANT-RBAG',
//  lpAddresses: {
//    97: '',
//    56: '',  
//    137: '0x85d52451ddfabcbd0835de1ced02b2a194916ea7', // ANT-RBAG
//  },
//  tokenSymbol: 'ANT',
//  tokenAddresses: {
//    97: '',
//    56: '',
//    137: '0xefFCa2dBB2D9F3816ceE07aE2134574FA9210dcb', // RBAG
//  },
//  quoteTokenSymbol: QuoteToken.RBAG,
//  quoteTokenAdresses: contracts.usdc,
//  tokenDecimals: 18,
// },



// Pool 25 - RBAG-USDC - Inactive 90%
// ----------------------------------------------------------
//  {
//  pid: 25,
//  risk: 3,
//  lpSymbol: 'RBAG-USDC',
//  lpAddresses: {
//    97: '',
//    56: '',  
//    137: '0x27185b8adf22eec93e8e2310730d909e6f1edfc5', // RBAG-USDC
//  },
//  tokenSymbol: 'RBAG',
//  tokenAddresses: {
//    97: '',
//    56: '',
//    137: '0xefFCa2dBB2D9F3816ceE07aE2134574FA9210dcb', // RBAG
//  },
//  quoteTokenSymbol: QuoteToken.USDC,
//  quoteTokenAdresses: contracts.usdc,
//  tokenDecimals: 18,
// },


// Pool 24 - RBAG - Inactive 90%
// ----------------------------------------------------------

// {
//  pid: 24,
//  isTokenOnly: true,
//  risk: 3,
//  lpSymbol: 'RBAG',
//  lpAddresses: {
//    97: '',
//   56: '',
//    137: '0x27185b8adf22eec93e8e2310730d909e6f1edfc5', // RBAG - USDC
//  },
//  tokenSymbol: 'RBAG',
//  tokenAddresses: {
//    97: '',
//    56: '',
//    137: '0xeffca2dbb2d9f3816cee07ae2134574fa9210dcb', // RBAG
//  },
//  quoteTokenSymbol: QuoteToken.RBAG,
//  quoteTokenAdresses: contracts.usdc,
//  tokenDecimals: 18,
// },


// Pool 1 - WMATIC-USDC
// ----------------------------------------------------------
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


// Pool 2 - WMATIC
// ----------------------------------------------------------
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

// Pool 3 - WBTC
// ----------------------------------------------------------
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

// Pool 4 - WETH
// ----------------------------------------------------------

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

 // Pool 5 - QUICK
// ----------------------------------------------------------

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

 // Pool 6 - YLD - Inactive 95 %
// ----------------------------------------------------------
// {
//   pid: 6,
//   isTokenOnly: true,
//   risk: 3,
//   lpSymbol: 'YLD',
//   lpAddresses: {
//     97: '',
//     56: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
//     137: '0xead4c2d8859b2cb0698aeb7d0cf56a00468a4f5c', // YLD - MATIC
//   },
//   tokenSymbol: 'YLD',
//   tokenAddresses: {
//     97: '',
//     56: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
//     137: '0x4cebdbcb286101a17d3ea1f7fe7bbded2b2053dd', // YLD
//   },
//   quoteTokenSymbol: QuoteToken.BUSD,
//   quoteTokenAdresses: contracts.busd,
//   tokenDecimals: 18,
// },

 // Pool 7 - USDT
// ----------------------------------------------------------
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

 // Pool 8 - USDC
// ----------------------------------------------------------
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
   quoteTokenSymbol: QuoteToken.USDC,
   quoteTokenAdresses: contracts.usdc,
   tokenDecimals: 6,
 },


 // Pool 9 - USDT-USDC
// ----------------------------------------------------------

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
   quoteTokenSymbol: QuoteToken.USDC,
   quoteTokenAdresses: contracts.usdc,
 },

 // Pool 10 - WBTC-USDC
// ----------------------------------------------------------

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

 // Pool 11 - Quick-WMATIC
// ----------------------------------------------------------


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

 // Pool 26 - MRBALV3-USDC
// ----------------------------------------------------------
{
  pid: 26,
  risk: 3,
  lpSymbol: 'MRBALV3-USDC',
  lpAddresses: {
    97: '',
    56: '',
    137: '0xf7d0b63733e57d42c04445b6ab85baa903534b13', // MRBALV3 - USDC
  },
  tokenSymbol: 'MRBALV3',
  tokenAddresses: {
    97: '',
    56: '',
    137: '0xc38EdAB117BE5CDaF1ba90A34F5F07e3c2BAf430', // MRBALV3
  },
  quoteTokenSymbol: QuoteToken.USDC,
  quoteTokenAdresses: contracts.usdc,
},

// Pool 27 - ANT-MRBALV3
// ----------------------------------------------------------
{
  pid: 27,
  risk: 3,
  lpSymbol: 'ANT-MRBALV3',
  lpAddresses: {
    97: '',
    56: '',
    137: '0x1ed96fe36a9c57634135980e5251335c10d305d9', // ANT-MRBALV3
  },
  tokenSymbol: 'ANT',
  tokenAddresses: {
    97: '',
    56: '',
    137: '0xc38EdAB117BE5CDaF1ba90A34F5F07e3c2BAf430', // MRBALV3
  },
  quoteTokenSymbol: QuoteToken.MRBALV3,
  quoteTokenAdresses: contracts.mrbalv3,
},



 // Pool 12 - LAD
// ----------------------------------------------------------

// {
//  pid: 12,
//  isTokenOnly: true,
//  risk: 3,
// lpSymbol: 'LAD',
//  lpAddresses: {
//    97: '',
//    56: '',
//    137: '0x3995fb93384a8907e949c072d41808cbaca4038f', // LAD - WMATIC
//  },
//  tokenSymbol: 'LAD',
//  tokenAddresses: {
//    97: '',
//    56: '',
//    137: '0x8465d41d66ce05bde12fd3320f260e01aa4ced3f', // LAD
//  },
//  quoteTokenSymbol: QuoteToken.LAD,
//  quoteTokenAdresses: contracts.lad,
//  tokenDecimals: 18,
// },

// Pool 13 - ANT-LAD
// ----------------------------------------------------------


// {
//   pid: 13,
//   risk: 3,
//   lpSymbol: 'ANT-LAD',
//   lpAddresses: {
//     97: '',
//     56: '',  
//     137: '0x0cd1d499f9106b8dd49d54aae89c7b3bfbc417bb', // ANT-LAD
//   },
//   tokenSymbol: 'ANT',
//   tokenAddresses: {
//     97: '',
//     56: '',
//     137: '0x8465d41d66ce05bde12fd3320f260e01aa4ced3f', // LAD
//   },
//   quoteTokenSymbol: QuoteToken.LAD,
//   quoteTokenAdresses: contracts.busd,
//   tokenDecimals: 18,
// },

//  ICE ---------------------------------------------------------

// Pool 15 - ANT-ICE  - Inactive 90%
// ----------------------------------------------------------

// {
//  pid: 15,
//  risk: 3,
//  lpSymbol: 'ANT-ICE',
//  lpAddresses: {
//    97: '',
//    56: '',  
//    137: '0xd46b17069c57475afe82a567793e134cd3376d1b', // ANT-ICE
//  },
//  tokenSymbol: 'ANT',
//  tokenAddresses: {
//    97: '',
//    56: '',
//    137: '0x4A81f8796e0c6Ad4877A51C86693B0dE8093F2ef', // ICE
//  },
//  quoteTokenSymbol: QuoteToken.ICE,
//  quoteTokenAdresses: contracts.ice,
//  tokenDecimals: 18,
//   },


// Pool 16 - ICE - Inactive 90%
// ----------------------------------------------------------


 // {
 // pid: 16,
 // isTokenOnly: true,
 // risk: 3,
 // lpSymbol: 'ICE',
 // lpAddresses: {
 //   97: '',
 //   56: '',
 //   137: '0x6be0dc66e5a88ce652f3ad89237e59257d6eb0f2', // ICE - USDC
 // },
 // tokenSymbol: 'ICE',
 // tokenAddresses: {
 //   97: '',
 //   56: '',
 //   137: '0x4A81f8796e0c6Ad4877A51C86693B0dE8093F2ef', // ICE
 // },
 // quoteTokenSymbol: QuoteToken.ICE,
 // quoteTokenAdresses: contracts.ice,
 // tokenDecimals: 18,
 // },

// BONE ---------------------------------------------------------

// Pool 17 - ANT-BONE - Inactive 90%
// ----------------------------------------------------------



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
//  quoteTokenAdresses: contracts.bone,
//  tokenDecimals: 18,
// },


// Pool 18 - BONE - Inactive 90%
// ----------------------------------------------------------

// {
//  pid: 18,
//  isTokenOnly: true,
//  risk: 3,
//  lpSymbol: 'BONE',
//  lpAddresses: {
//   97: '',
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
//  quoteTokenAdresses: contracts.bone,
//  tokenDecimals: 18,
// },

// TITAN ---------------------------------------------------------


// Pool 19 - ANT-TITAN - Inactive 90%
// ----------------------------------------------------------

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
//  quoteTokenAdresses: contracts.titan,
//  tokenDecimals: 18,
// },

// Pool 20 - TITAN - Inactive 90%
// ----------------------------------------------------------

 
// {
//  pid: 20,
//  isTokenOnly: true,
//  risk: 3,
//  lpSymbol: 'TITAN',
//  lpAddresses: {
//    97: '',
//   56: '',
//    137: '0x893ae376cd8c02a005ee45f6ed6a7df05ab381e3', // ANT - TITAN
//  },
//  tokenSymbol: 'TITAN',
//  tokenAddresses: {
//     97: '',
//     56: '',
//     137: '0xaaa5b9e6c589642f98a1cda99b9d024b8407285a', // TITAN
//   },
//   quoteTokenSymbol: QuoteToken.TITAN,
//   quoteTokenAdresses: contracts.titan,
//   tokenDecimals: 18,
// },

// DINO ---------------------------------------------------------

// Pool 21 - ANT-DINO - Inactive 90%
// ----------------------------------------------------------


// {
//  pid: 21,
//  risk: 3,
//  lpSymbol: 'ANT-DINO',
//  lpAddresses: {
//    97: '',
//    56: '',  
//    137: '0xe02749996aa5234d1385cbde763fe5a21d553d71', // ANT-DINO
//  },
// tokenSymbol: 'ANT',
//  tokenAddresses: {
//    97: '',
//    56: '',
//   137: '0xaa9654becca45b5bdfa5ac646c939c62b527d394', // DINO
//  },
//  quoteTokenSymbol: QuoteToken.DINO,
//  quoteTokenAdresses: contracts.dino,
//  tokenDecimals: 18,
// },


// Pool 22 - DINO - Inactive 90% Fee
// ----------------------------------------------------------

// {
//  pid: 22,
//  isTokenOnly: true,
//  risk: 3,
//  lpSymbol: 'DINO',
//  lpAddresses: {
//    97: '',
//    56: '',
//    137: '0xe02749996aa5234d1385cbde763fe5a21d553d71', // ANT - DINO
//  },
//  tokenSymbol: 'DINO',
//  tokenAddresses: {
//    97: '',
//    56: '',
//    137: '0xaa9654becca45b5bdfa5ac646c939c62b527d394', // DINO
//  },
//  quoteTokenSymbol: QuoteToken.DINO,
//  quoteTokenAdresses: contracts.dino,
//  tokenDecimals: 18,
// },

// Pool 28 - aUSD
// ----------------------------------------------------------
{
  pid: 28,
  isTokenOnly: true,
  risk: 3,
  lpSymbol: 'aUSD',
  lpAddresses: {
    97: '',
    56: '0xf2e35d286f4d6a443b3aac754e4325477f01fa81',
    137: '0xf2e35d286f4d6a443b3aac754e4325477f01fa81', // aUSD - USDC
  },
  tokenSymbol: 'aUSD',
  tokenAddresses: {
    97: '',
    56: '0x2256a8a8D912519740f240cDfEeBf06F9DB14485',
    137: '0x2256a8a8D912519740f240cDfEeBf06F9DB14485', // aUSD
  },
  quoteTokenSymbol: QuoteToken.USDC,
  quoteTokenAdresses: contracts.ausd,
  tokenDecimals: 6,
},

// Pool 29 - ANT-aUSD
// ----------------------------------------------------------
{
  pid: 29,
  risk: 3,
  lpSymbol: 'ANT-aUSD',
  lpAddresses: {
    97: '',
    56: '',
    137: '0x5ab25cb63ced4bfa2fd29601862d5d31eae461ee', // ANT-AUSD
  },
  tokenSymbol: 'ANT',
  tokenAddresses: {
    97: '',
    56: '',
    137: '0x2256a8a8D912519740f240cDfEeBf06F9DB14485', // aUSD
  },
  quoteTokenSymbol: QuoteToken.AUSD,
  quoteTokenAdresses: contracts.ausd,
},

// Pool 30 - aWETH
// ----------------------------------------------------------
{
  pid: 30,
  isTokenOnly: true,
  risk: 3,
  lpSymbol: 'aWETH',
  lpAddresses: {
    97: '',
    56: '0x1aa20bca17fc20070192f228bcdf0845a86b7c03',
    137: '0x1aa20bca17fc20070192f228bcdf0845a86b7c03', // aWETH - WETH
  },
  tokenSymbol: 'aWETH',
  tokenAddresses: {
    97: '',
    56: '0x50cf886925c780269941639862b510a3fa6e9a66',
    137: '0x50cf886925c780269941639862b510a3fa6e9a66', // aWETH
  },
  quoteTokenSymbol: QuoteToken.AWETH,
  quoteTokenAdresses: contracts.aweth,
  tokenDecimals: 18,
},


// Pool 31 - aUSD-LAD
// ----------------------------------------------------------
{
  pid: 31,
  risk: 3,
  lpSymbol: 'aUSD-LAD',
  lpAddresses: {
    97: '',
    56: '',
    137: '0x5331de28f815a0a6eaf272e4aa4bebf241829048', // aUSD-LAD
  },
  tokenSymbol: 'aUSD',
  tokenAddresses: {
    97: '',
    56: '',
    137: '0x2256a8a8D912519740f240cDfEeBf06F9DB14485', // aUSD
  },
  quoteTokenSymbol: QuoteToken.LAD,
  quoteTokenAdresses: contracts.lad,
},

// Pool 32 - aUSD-BONE
// ----------------------------------------------------------
{
  pid: 32,
  risk: 3,
  lpSymbol: 'aUSD-BONE',
  lpAddresses: {
    97: '',
    56: '',
    137: '0x42aad2972fec7fae70acdca2cb24e4cb3585c628', // aUSD-BONE
  },
  tokenSymbol: 'aUSD',
  tokenAddresses: {
    97: '',
    56: '',
    137: '0x2256a8a8D912519740f240cDfEeBf06F9DB14485', // aUSD
  },
  quoteTokenSymbol: QuoteToken.BONE,
  quoteTokenAdresses: contracts.bone,
},

// Pool 33 - aUSD-ICE
// ----------------------------------------------------------
{
  pid: 33,
  risk: 3,
  lpSymbol: 'aUSD-ICE',
  lpAddresses: {
    97: '',
    56: '',
    137: '0xe3a17b70fc24666a0bfef3916011b75a662bf1b9', // aUSD-ICE
  },
  tokenSymbol: 'aUSD',
  tokenAddresses: {
    97: '',
    56: '',
    137: '0x2256a8a8D912519740f240cDfEeBf06F9DB14485', // aUSD
  },
  quoteTokenSymbol: QuoteToken.ICE,
  quoteTokenAdresses: contracts.ice,
},

// Pool 34 - aUSD-DINO
// ----------------------------------------------------------
{
  pid: 34,
  risk: 3,
  lpSymbol: 'aUSD-DINO',
  lpAddresses: {
    97: '',
    56: '',
    137: '0xb9f33a8f0f091b2bf7641ea122ec88064c1a97b0', // aUSD-DINO
  },
  tokenSymbol: 'aUSD',
  tokenAddresses: {
    97: '',
    56: '',
    137: '0x2256a8a8D912519740f240cDfEeBf06F9DB14485', // aUSD
  },
  quoteTokenSymbol: QuoteToken.DINO,
  quoteTokenAdresses: contracts.dino,
},

// Pool 35 - aUSD-TITAN
// ----------------------------------------------------------
{
  pid: 35,
  risk: 3,
  lpSymbol: 'aUSD-TITAN',
  lpAddresses: {
    97: '',
    56: '',
    137: '0xa4c1a9111704af012e1f41ab77b94d14d244854f', // aUSD-TITAN
  },
  tokenSymbol: 'aUSD',
  tokenAddresses: {
    97: '',
    56: '',
    137: '0x2256a8a8D912519740f240cDfEeBf06F9DB14485', // aUSD
  },
  quoteTokenSymbol: QuoteToken.TITAN,
  quoteTokenAdresses: contracts.titan,
},

// Pool 36 - WMATIC-LAD
// ----------------------------------------------------------
{
  pid: 36,
  risk: 3,
  lpSymbol: 'WMATIC-LAD',
  lpAddresses: {
    97: '',
    56: '',
    137: '0x3995fb93384a8907e949c072d41808cbaca4038f', // WMATIC-LAD
  },
  tokenSymbol: 'WMATIC',
  tokenAddresses: {
    97: '',
    56: '',
    137: '0x8465d41d66ce05bde12fd3320f260e01aa4ced3f', // LAD
  },
  quoteTokenSymbol: QuoteToken.LAD,
  quoteTokenAdresses: contracts.lad,
},


// Pool 37 - USDC-WETH
// ----------------------------------------------------------
{
  pid: 37,
  risk: 3,
  lpSymbol: 'USDC-WETH',
  lpAddresses: {
    97: '',
    56: '',
    137: '0x853ee4b2a13f8a742d64c8f088be7ba2131f670d', // USDC-WETH
  },
  tokenSymbol: 'USDC',
  tokenAddresses: {
    97: '',
    56: '',
    137: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619', // WETH
  },
  quoteTokenSymbol: QuoteToken.WETH,
  quoteTokenAdresses: contracts.weth,
},



// Pool 38 - QUICK-LAD
// ----------------------------------------------------------
{
  pid: 38,
  risk: 3,
  lpSymbol: 'QUICK-LAD',
  lpAddresses: {
    97: '',
    56: '',
    137: '0x809534fbeaa323c656e48572a211f8e5f411a300', // QUICK-LAD
  },
  tokenSymbol: 'QUICK',
  tokenAddresses: {
    97: '',
    56: '',
    137: '0x8465d41d66ce05bde12fd3320f260e01aa4ced3f', // LAD
  },
  quoteTokenSymbol: QuoteToken.LAD,
  quoteTokenAdresses: contracts.lad,
},








  
]

export default farms
