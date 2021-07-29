import { MenuEntry } from 'antswap-uikit'


const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://quickswap.exchange/#/swap?outputCurrency=0x7f06185200a9BbFbaaDFDAC0DFbA7ac4e0Ba1494',
      },
      {
        label: 'Liquidity',
        href: 'https://quickswap.exchange/#/add/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174/0x7f06185200a9BbFbaaDFDAC0DFbA7ac4e0Ba1494',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/nests',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  {
    label: 'Dividends',
    icon: 'TicketIcon',
    href: '/profit',
  },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/AntSwapToken/',
      },
      {
        label: 'Docs',
        href: 'https://antswaptoken.gitbook.io/antswap-token/',
      },
      {
        label: 'Medium',
        href: 'https://medium.com/@antswaptoken',
      }
    ],
  },
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: [
              {
                  label: "English",
                  href: "https://t.me/AntSwapToken",
              },
              
              {
                  label: "Announcements",
                  href: "https://t.me/AntSwapToken",
              },
           ],
  },
  {
        label: "Twitter",
        icon: "TwitterIcon",
        href: "https://twitter.com/RebalanceT",
  },
]

export default config
