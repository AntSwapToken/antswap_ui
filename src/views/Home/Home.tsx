import React from 'react'
import styled from 'styled-components'
import {LinkExternal, Button, Heading, Text, BaseLayout } from 'antswap-uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
import LotteryCard from './components/LotteryCard'
import CakeStats from './components/CakeStats'
import ProfitStats from './components/ProfitStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'

const Hero = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 32px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const ExternalLinkWrap = styled(LinkExternal)`
  align-items: center;
  display: flex;
  height: 48px;
  justify-content: center;
  text-decoration: none;
  width: 100%;
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <Hero>
          <img src="/images/Title Bar.png" alt="cake logo" width={950} height={225} />

          <Heading size="l" mb="24px">
          {TranslateString(10007, '-----------------------------------------------------------------------------------------------------------------------------')}
          </Heading>

          <Heading size="xl" mb="24px">
          {TranslateString(10006, 'Important Announcements')}
          </Heading>

          <Heading size="l" mb="20px">
          {TranslateString(10007, '02-Aug-2021')}
          </Heading>
          <Heading size="l" mb="24px">
          {TranslateString(10007, '-----------------------------------------------------------------------------------------------------------------------------')}
          </Heading>

          <p>{TranslateString(1, 'In the wake of the price drop of ANT Current Price ($0.78)')}</p>
          <p>{TranslateString(1, 'we are seeing that people in LAD, BONE, ICE, TITAN and DINO pools are just minting and dumping ANT\n')}</p>
          <p>{TranslateString(1, 'These pools are not helping but contributing in the ANT price drop.' )}  </p>
          <p>{TranslateString(1, 'We are plnanning to make following changes now.' )}  </p>
          <p>{TranslateString(1, '1. We are planning to reduce emission rate of ANT to  0.001 from 0.025')}  </p>
          <p>{TranslateString(1, '2. We are planning to remove the following Pools - LAD, ICE, DINO, TITAN, RBAG, BONE')}  </p>
          <p>{TranslateString(1, '3. We are planning to remove the following farms - ANT-LAD, ANT-RBAG, RBAG-USDC, ANT-ICE, ANT-BONE, ANT-TITAN, ANT-DINO')}  </p>
          <p>{TranslateString(1, 'Please remove your liquidity from these pools and farms in next 24 hrs.')}  </p>
          <p>{TranslateString(1, '4. We are planning to keep farming and develop strategy to bring more liquidity in coming days and recover ANT price.')}  </p>

          <Heading size="l" mb="24px">
          {TranslateString(10007, '-----------------------------------------------------------------------------------------------------------------------------')}
          </Heading>

      </Hero>
      <div>
        <Cards>
          <FarmStakingCard />
          <TwitterCard />
          <CakeStats />
          <TotalValueLockedCard />
        </Cards>
      </div>
    </Page>
  )
}

export default Home
