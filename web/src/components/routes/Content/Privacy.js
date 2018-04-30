import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import { getPageTitle } from 'utils';
import { H1, H2, P } from 'components/layout/Text';
import TextContainer from './TextContainer';

const Ul = styled.ul`
    list-style-type: none;
    line-height: 26px;
    font-size: 14px;
`;

const Li = styled.li`
    &:before { 
        content: "- " 
    }
`

export default () => (
    <TextContainer flex='1 0 auto' flexDirection="column" py={4}>
        <Helmet><title>{getPageTitle('Privacy')}</title></Helmet>
        <H1>Privacy</H1>

        <H2>Privacy Policy</H2>
        <P>The last update to our Privacy Policy was posted on June 19, 2016. This Policy governs the privacy policy of our Website, BuySky.org</P>

        <H2>Definitions</H2>
        <P>"Non-Personal Information" (NPI) is information that is in no way personally identifiable and that is obtained automatically when you access our Website with a web browser.</P>
        <P>"Personally Identifiable Information" (PII) is non-public information that is personally identifiable to you and obtained for us to provide you with a product or service. PII may include information such as your name, address, phone number, and other related information that you provide to us.</P>

        <H2>Our commitment to your privacy</H2>
        <P>Our Privacy Policy tells you what PII we may collect from you, how we may share your PII, and how you can limit our sharing of your PII</P>
        <P>The Owners are committed to the security and privacy of all our customers. We take your privacy seriously, and we will work with you to ensure that you have an enjoyable online experience.</P>
        <P>The Owners and our affiliates respect your privacy and recognize the need for appropriate protection and management of your PII you share with us.</P>

        <H2>Links to other websites</H2>
        <P>Our Website may contain links to other websites. You understand that these websites are not under our control and are not subject to our Privacy Policy. These websites will likely have their own privacy policies. We have no responsibility for these websites and provide links to these websites solely for your convenience.</P>
        <P>You acknowledge that your use and access of these websites is solely at your own risk. It is your responsibility to check the privacy policies of these websites to see how they treat your personal information.</P>

        <H2>Information we collect</H2>
        <P>Generally, you control the amount and type of information you provide to us when using our Website. We may receive and store certain types of NPI when you interact with our Website. We may analyze NPI for trends and statistics as to how people use our Website. Unless you wish to acquire goods or services through our Website, we typically will not require you to provide PII.</P>
        <P>We receive and store PII that you provide to us when you place an order, register with us, send an email or call us, enter a contest, subscribe to a service, request to receive a catalog or brochure, or participate in a promotion. In addition to your PII, we may also collect PII that you submit to us about other people, such as the name and address of someone you are referring to us. Ultimately, you have the choice in deciding whether or not to provide PII to us.</P>

        <H2>How information is used</H2>
        <P>We use PII that you provide for our internal purposes, such as confirming and tracking your order, subscription or registration; analyzing statistics and demographics; and informing you of new products, services, and offers as provided by us and/or our affiliates.</P>
        <P>Our affiliates may have products, services, or offers about which you may be interested in receiving information and they may use the PII we have for you to contact you. If you don’t want to receive information from our affiliates, you can let us know so you’re no longer contacted by our affiliates about their products, services, or offers.</P>
        <P>We may also combine information you give us online or through printed forms; publicly available information; and information we receive from other parties. We use this combined information for your online experience and to let you know about new products, services, offers, and other promotion.</P>
        <P>To give you the best possible service, we may use our affiliates to provide contracted services for our business, including, but not limited to processing credit cards, hosting our website, shipping products to you, or advertising. In many cases, we will need to provide some if not all the PII you provide to use so our affiliates can perform these services. Our affiliates are only authorized to use your PII as provided within this Privacy Policy.</P>
        <P>There are times that we may have to disclose your PII to comply with state and federal laws; to assist law enforcement and governmental agencies in preventing or investigating fraud or other crimes, or in response to a court order. In such instances, we will only provide the PII requested and your PII will only be used for legal purposes as opposed to marketing.</P>
        <P>Finally, if we sold or transferred our business, we would transfer your PII to the purchaser as appropriate and might also retain a copy of your PII for any new business ventures we would start.</P>

        <H2>Changing your information</H2>
        <P>You may change your PII at any time using facilities found on our Website. If you need assistance with updating your PII or removing yourself from our mailing lists, just send us an email with your request.</P>

        <H2>Opting out of sharing information</H2>
        <P>You can always opt out of future unaffiliated third-party disclosures of your information. Such opt-out will not affect disclosures otherwise permitted by law including but not limited to: (i) disclosures to affiliates, (ii) disclosures to third-party service providers who provide certain services for our business, such as credit card processing, computer system services, shipping, data management, or promotional services, (iii) disclosures to third parties as necessary to fulfill your requests, (iv) disclosures to governmental agencies or law enforcement departments or otherwise required to be made under applicable law, (v) previously completed disclosures to third parties, or (vi) disclosures to third parties in connection with subsequent contests or promotions you may choose to enter, or third-party offers you may choose to accept.</P>

        <H2>Protecting your child’s privacy</H2>
        <P>We follow the Children’s Online Privacy Protection Act (COPPA). Even though our Website is not designed for use by anyone under the age of 18 (child), we realize that a child may attempt to access our Website. We do not knowingly collect PII from a child. If you are a parent or guardian and believe your child is using our Website, please contact us. We may ask for proof of identification before we remove any information to prevent malicious removal of account information. If we discover on our own that a child is accessing our Website, we will delete the information as soon as we discover it, we will not use the information for any purpose, and we will not disclose the information to third parties. You acknowledge that we do not verify the age of our users nor do we have any liability to do so. If you are a child, you must not use this Website.</P>

        <H2>Our Email Policy</H2>
        <P>Our affiliates and we fully comply with the federal CAN-SPAM Act. You can always opt out of receipt of further email correspondence from us or affiliates. We will not sell, rent, or trade your email address to any unaffiliated third-party without your permission.</P>

        <H2>Our Security Policy</H2>
        <P>We have taken steps to build our Website using encryption and authentication tools to protect the security of your PII. When we collect your PII through our Website, we will encrypt it before it travels over the Internet using industry standards for conducting secure online transactions. We also use industry-standard technologies such as secure routers and fire walls to help protect your PII. Unfortunately, we cannot fully guarantee secure data transmission over the Internet because of its nature. Once we receive your PII, we have industry-standard security measures in place to protect against the loss or misuse of your PII, though again, we cannot fully guarantee against such loss or misuse.</P>
        <P>We strongly urge you to protect any password you may have for our Website and not share it with anyone. You should always log out of our Website when you are done using it, especially if you are sharing a computer with someone else or are using a computer in a public place.</P>

        <H2>Cookies</H2>
        <P>Our Website uses "Cookies." A Cookie is a small piece of data or text file stored in your computer or mobile device by your web browser. Cookies may contain text that can be read by a web server that delivered the cookie to you. The text contained in the cookie generally consists of a sequence of letters and numbers that uniquely identifies your computer; however, it may contain other information as well.</P>
        <P>By agreeing to accept our use of cookies, you are giving us permission to place some or all the cookies described below on your device.</P>
        <P>We may use cookies for:</P>
        <Ul>
            <Li>Identifying the Areas of Our Website That You Have Visited</Li>
            <Li>Signing in and Identifying You as a Member or User to Our Website</Li>
            <Li>Our Website Analytics</Li>
            <Li>Remarketing Our Products or Services to You</Li>
            <Li>Navigating Our Website</Li>
            <Li>Remembering Your Preferences and Settings</Li>
            <Li>Targeted Advertising</Li>
            <Li>Affiliate Marketing</Li>
        </Ul>
        <P>Finally, we may use Cookies to personalize the Content that you see on our Website. Most web browsers can be set to disable the use of Cookies. However, if you disable Cookies, you may not be able to access features on our Website correctly or at all. For more information about cookies, visit www.AboutCookies.org.</P>

        <H2>Web Beacons</H2>
        <P>We may also use web beacons to collect NPI about your use of our Website and those of our affiliates, and your use of special promotions or newsletters. The information we collect by Web Beacons allows us to statistically monitor the number of people that open our emails and why they opened our emails. Our Web Beacons are not used to track your activity outside of our Website or those of our affiliates. We do not link NPI from Web Beacons to PII without your permission.</P>

        <H2>Changes to our Privacy Policy</H2>
        <P>As necessary to address changes in laws or our business practices, we may modify our Privacy Policy, in whole or in part, to address these changes. We will typically notify users by some message on our Website home page that our Privacy Policy has changed. We will also change the "Last Updated" date at the beginning of this Privacy Policy. Any changes we make to our Privacy Policy are effective as of this Last Updated date and replace any prior Privacy Policies. We encourage you to review our Privacy Policy periodically to make sure you still agree with it.</P>
    </TextContainer>
);
