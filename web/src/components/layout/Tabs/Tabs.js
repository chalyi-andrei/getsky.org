import styled from 'styled-components';
import { Tab as UnstyledTab, Tabs, TabList as UnstyledTabList, TabPanel as UnstyledTabPanel } from 'react-tabs';
import media from 'media';

const leftTabNames = ['first-tab', 'buy-tab'];
const isLeftTab = props =>  leftTabNames.indexOf(props.tab) >= 0;

const TabList = styled(UnstyledTabList) `
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 56px;
    background: ${props => props.theme.colors.darkGray};
    
    ${media.md`
        height: ${props => props.theme.introTabsHeight}px;
        
    `}    
`;

const Tab = styled(UnstyledTab) `
    display: flex;
    flex-direction: column;
    justify-content: center;
    outline: none;
    width: 100%;
    background-color: ${props => props.selected ? props.theme.colors.white : 'transparent'};
    color: ${props => props.selected ? props.theme.colors.black : props.theme.colors.white};
    // font-size: ${props => props.theme.fontSizes[1]}px;
    font-family: ${props => props.theme.fontBold};
    line-height: 32px;
    letter-spacing: 1px;
    text-align: center;
    cursor: pointer;

    margin-left: ${props => isLeftTab(props) ? '-30px' : '0px'};
    margin-right: ${props => isLeftTab(props) ? '0px' : '-30px'};

    transform: ${props => isLeftTab(props) ? 'skew(30deg)' : 'skew(-30deg)'};
    -webkit-transform:${props => isLeftTab(props) ? 'skew(30deg)' : 'skew(-30deg)'};
    -moz-transform:${props => isLeftTab(props) ? 'skew(30deg)' : 'skew(-30deg)'};
    -o-transform:${props => isLeftTab(props) ? 'skew(30deg)' : 'skew(-30deg)'};

    strong {
        display: block;
        font-size: ${props => props.theme.fontSizes[2]}px;
        margin-top: ${props => props.theme.space[1]}px;
        transform: ${props => isLeftTab(props) ? 'skew(-30deg)' : 'skew(30deg)'};
        -webkit-transform: ${props => isLeftTab(props) ? 'skew(-30deg)' : 'skew(30deg)'};
        -moz-transform: ${props => isLeftTab(props) ? 'skew(-30deg)' : 'skew(30deg)'};
        -o-transform: ${props => isLeftTab(props) ? 'skew(-30deg)' : 'skew(30deg)'};
        
        ${media.sm`
            font-size: ${props => props.theme.fontSizes[3]}px;                    
        `}
        ${media.md`
            font-size: ${props => props.theme.fontSizes[4]}px;                    
        `}
    }

    &:hover {
        background-color: ${props => props.selected ? props.theme.colors.white : 'transparent'};
    }
`;

const TabPanel = styled(UnstyledTabPanel)`
    background: ${props => props.theme.colors.white};
`;

TabList.tabsRole = 'TabList';
Tab.tabsRole = 'Tab';
TabPanel.tabsRole = 'TabPanel';

export { Tabs, TabPanel, Tab, TabList };
