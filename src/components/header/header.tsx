import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Strings from '../../resources/strings';
import { Navigation, Tabulation } from '../organism';
import{ Logo } from '../molecules/icons';
import { IconBadge } from '../molecules';

/**
 * A component to render a global loading spinner before displaying some data on a page
 */

interface HeaderI {}

export enum Tabs {
    Home,
    Cart,
}

const Header = (props: HeaderI): JSX.Element => {
    const classes = useTabStyles({});

    const listTabs = {
        [Tabs.Home]: Strings.header.waiting,
        [Tabs.Cart]: Strings.header.inProgress,
    };

    const listRoutes = {
        [Tabs.Home]: '/currencyConveter',
        [Tabs.Cart]: '/weeklyCurrencyAverage',
    };

    const listIssues = {
        [Tabs.Home]: false,
        [Tabs.Cart]: false,
    };

    const listBadgeValue = {
        [Tabs.Home]: 0,
        [Tabs.Cart]: 0,
    };

    const listBadges = {
        [Tabs.Home]: false,
        [Tabs.Cart]: false,

    };

    const tabs = Object.values(listTabs);
    const routes = Object.values(listRoutes);
    const issues = Object.values(listIssues);
    const badgeValues = Object.values(listBadgeValue);
    const badge = Object.values(listBadges);

    return (
        <div className={classes.root}>
            <div className={classes.fixed}>
                <div className={classes.navigation}>
                    <Navigation logoHeader={Logo.Money} />
                </div>
                <div className={classes.tabulation}>
                    <Tabulation tabs={tabs} select={routes} issues={issues} badgeValue={badgeValues} badge={badge}/>
                    <IconBadge logo={Logo.Search} />
                </div>
            </div>
        </div>
    );
};

const useTabStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            height: '118px',
        },
        fixed: {
            position: 'fixed',
            width: '100%',
            paddingLeft: '60px',
            paddingRight: '60px',
            background: theme.palette.secondary.main,
        }, 
        navigation: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            flex: '100%',
            padding: '20px 0px',
        },
        tabulation: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'nowrap',
            flex: '100%',
        }
    }),
);

export default Header;
