import React from 'react';
import { Helmet } from 'react-helmet';

import { getPageTitle } from 'utils';
import { H1, H2, H3, P } from 'components/layout/Text';
import TextContainer from './TextContainer';

export default () => (
    <TextContainer flex='1 0 auto' flexDirection="column" py={5}>
        <Helmet><title>{getPageTitle('Skycoin')}</title></Helmet>
        <H1>Skycoin</H1>


        <H2>Skycoin History</H2>
        <P>The year was 2012 and while it was business as usual for most of the world, a small group of visionaries were busy catalyzing a revolution. While analyzing the Bitcoin source code, they identified several design flaws which would ultimately cause Satoshi’s vision of a decentralized  currency to fail. So,  they set out to rectify them and the rest is history</P>
        <P>Mining rewards and transaction fees were identified as the primary drivers of network centralization as is evident with Bitcoin today where a few large mining pools control the entire network. Obelisk – Skycoin’s Consensus algorithm was created to eliminate these flaws by negating the need for POW or POS. As such, SKY has no transcation fees and no mining. All of the coins were created on the genesis block were sealed into a series of timelocked multisig wallets to be made available via a per-determined release schedule</P>
        <P>In the fledgling world of cryptocurrency, a coin’s value is almost exclusively derived from speculation. This leaves it vulnerable to price manipulation by whales. Sky is a commodity backed coin, a type of asset which derives its value from an actual good and service rather than the whims of speculators. In the case of sky, the commodity is the new Internet. Skywire is a meshnet, a peer to peer data carrier network running on it’s own privacy protocol and open source hardware. Participants are rewarded with Skycoin for offering services on the Skywire network.</P>
        <P>Being experienced Bitcoin veterans, the skycoin devs saw through the marketing gimmicks that are smart contracts. They wanted a real solution and they created it with the blockchain programming language CX and distributed object storage CXO. These integral pieces of the puzzle facilitate the development of a truly decentralized, private and secure blockchain based application.</P>


        <H2 style={{ marginTop: '10px' }}>What's the big deal? </H2>
        <H3>Skycoin is Lightning Fast and Secure</H3>
        <P>Skycoin does away with miners strangle hold over users which makes transactions virtually free. It also eliminates centralization and ensures no one will ever hold back advancements. All of this allows Skycoin to be the fastest, cheapest and most secure cryptocurrency on the market. On top of all of that – Skycoin is 51% attack PROOF and transactions are cleared in 2-3 seconds.</P>

        <H3>Skycoin is Infinitely Scalable</H3>
        <P>In order to advance in the crypto space, it’s important to be able to think outside the block. Many projects haven’t been able to do this and therefore have boxed themselves in. Skycoin plans on being the coin everyone uses. That being said, the entire world’s data cannot fit onto one blockchain. By allowing businesses, governments and people to create their own blockchains on the Fiber platform, we free up valuable resources and therefore don’t have to pay an arm and a leg to confirm a transaction.</P>

        <H3>Skycoin is Smart and Programmable</H3>
        <P>Ethereum was revolutionary for its time. In fact, the original Ethereum author wrote the Skycoin white papers! The problem with Ethereum though is that the system is based on smart contracts. Cool idea, but not at all practical. A cryptocurrency cannot limit itself in this way and expect to stay relevant. Skycoin created its very own programming language which allows literally anything to be built on top of it. Games, Programs, Websites and more – All decentralized!</P>


        <H3>Privacy and Security</H3>
        <P>In the ever-expanding surveillance state, the ability to communicate and transact privately and securely has become vital. Not only to activists, dissidents and others resisting tyranny, but also to the average citizen who requires protection from corporate data mining and identity theft. Skycoin transactions are made anonymous by the natively supported coinjoin protocol. Skywire was built to be encrypted by default ensuring everyone’s data is private. This entire system is designed to be unbreakable, even by quantum computers!</P>
    </TextContainer>
);
