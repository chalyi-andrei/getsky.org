import React from 'react';
import { Helmet } from 'react-helmet';

import { getPageTitle } from 'utils';
import { H1, H2, H3, P } from 'components/layout/Text';
import TextContainer from './TextContainer';

export default () => (
    <TextContainer flex='1 0 auto' flexDirection="column" py={5}>
        <Helmet><title>{getPageTitle('Why skycoin')}</title></Helmet>
        <H1>Why Skycoin?</H1>

        <H2>WHAT IS SKYCOIN?</H2>
        <P>The year was 2012 and while it was business as usual for most of the world, a small group of visionaries were busy catalyzing a revolution. While analyzing the Bitcoin source code, they identified several design flaws which would ultimately cause Satoshi’s vision of a decentralized  currency to fail. So,  they set out to rectify them and the rest is history</P>
        <P>Mining rewards and transaction fees were identified as the primary drivers of network centralization as is evident with Bitcoin today where a few large mining pools control the entire network. Obelisk – Skycoin’s Consensus algorithm was created to eliminate these flaws by negating the need for POW or POS. As such, SKY has no transcation fees and no mining. All of the coins were created on the genesis block were sealed into a series of timelocked multisig wallets to be made available via a per-determined release schedule</P>
        <P>In the fledgling world of cryptocurrency, a coin’s value is almost exclusively derived from speculation. This leaves it vulnerable to price manipulation by whales. Sky is a commodity backed coin, a type of asset which derives its value from an actual good and service rather than the whims of speculators. In the case of sky, the commodity is the new Internet. Skywire is a meshnet, a peer to peer data carrier network running on it’s own privacy protocol and open source hardware. Participants are rewarded with Skycoin for offering services on the Skywire network.</P>
        <P>Being experienced Bitcoin veterans, the skycoin devs saw through the marketing gimmicks that are smart contracts. They wanted a real solution and they created it with the blockchain programming language CX and distributed object storage CXO. These integral pieces of the puzzle facilitate the development of a truly decentralized, private and secure blockchain based application.</P>

        <H2>VALUES</H2>
        <P>Sky was spawned from a primordial soup of ideals and values centered around personal liberty and freedom. We see our technology as a tool with which we can promote these ideals for the betterment of society and the world at large.</P>
        <H3>Environmentally friendly decentralization</H3>
        <P>True democratization of the network can only be achieved through true decentralization. No blockchain that relies on Proof of Work  can ever be truly decentralized. The cost of doing proof of work coupled with mining rewards will invariably result in the centralization of mining by a small few who has the resources to acquire the most efficient mining hardware.  Proof of Stake by it’s very nature fails at decentralization. The largest stakeholders will continue accumulating exponentially larger stakes. Obelisk ensures true decentralized while using a fraction of the energy consumed by POW.</P>
        <H3>Privacy and Security</H3>
        <P>In the ever-expanding surveillance state, the ability to communicate and transact privately and securely has become vital. Not only to activists, dissidents and others resisting tyranny, but also to the average citizen who requires protection from corporate data mining and identity theft. Skycoin transactions are made anonymous by the natively supported coinjoin protocol and Skywire was built to be encrypted by default ensuring everyone’s data is private. This system is designed to be unbreakable, even by quantum computers!</P>

        <H2>PURPOSE and ATTRIBUTES</H2>
        <P>Skycoin is a next generation cryptocurrency with a focus on being the end all be all cryptocurrency.</P>
        <P>Most existing cryptocurrencies do one thing well. Bitcoin is great as a store of value, Ethereum focused on smart contracts, Monero is privacy oriented, Stellar is focusing on the unbanked… etc. Skycoin’s developers knew this trend wouldn’t last long.</P>
        <P>People do not want 600 different coins inside 600 different wallets all with a different purpose. We need one coin to replace them all. A coin that is fast and secure, smart and programmable, scalable, but most important of all anonymous and decentralized.</P>

        <H2>SKYCOIN IS LIGHTNING FAST AND SECURE</H2>
        <P>Skycoin was founded by original bitcoin developers who saw the problems inherent in bitcoin could not be fixed in the current political environment & ecosystem. The centralization of bitcoin not only makes it vulnerable to attacks, but holds back advancements and keeps transaction fees high.</P>
        <P>Skycoin does away with miners strangle hold over users which makes transactions virtually free. It also eliminates centralization and ensures no one will ever hold back advancements. All of this allows Skycoin to be the fastest, cheapest and most secure cryptocurrency on the market. On top of all of that – Skycoin is 51% attack PROOF and transactions are cleared in 2-3 seconds.</P>

        <H2>SKYCOIN IS INFINITLY SCALABLE</H2>
        <P>In order to advance in the crypto space, it’s important to be able to think outside the block. Many projects haven’t been able to do this and therefore have boxed themselves in. Skycoin plans on being the coin everyone uses. That being said, the entire world’s data cannot fit onto one blockchain. Even if it were possible, would we really want it to? By allowing businesses, governments and people to create their own blockchains on the Fiber platform, we free up valuable resources and therefore don’t have to pay an arm and a leg to confirm a transaction.</P>

        <H2>SKYCOIN IS SMART & PROGRAMMABLE</H2>
        <P>Ethereum was revolutionary for its time. In fact, the original Ethereum author wrote the Skycoin white papers! The problem with Ethereum though is that the system is based on smart contracts. Cool idea, but not at all practical. A cryptocurrency cannot limit itself in this way and expect to stay relevant. Skycoin created its very own programming language which allows literally anything to be built on top of it. Games, Programs, Websites and more – All decentralized!</P>

        <H2>SKYCOIN IS ANONYMOUS AND DECENTRALIZED</H2>
        <P>We all love Satoshi, especially our founders, but what bitcoin has become is not what he intended. Skycoin was created to fulfill Satoshi’s original vision of a truly decentralized and anonymous cryptocurrency. No matter how decentralized a coin is if it relies on traditional ISPs it will never be decentralized. Skycoin aims to change this.</P>
    </TextContainer>
);
