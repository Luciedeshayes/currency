import React from 'react';
import { useLocation } from "react-router-dom";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Badge, Label } from '../atoms';

/**
 * A component to render a global loading spinner before displaying some data on a page
 */

interface TabProps {
    label: String;
    actived: String;
    issues: boolean;
    badgeValue: number;
    badge: boolean;
    onClick: ()=>any;
}

const Tab = React.memo(
    (props: TabProps): JSX.Element => {
        const classes = useTabStyles({});
        const { actived, issues, label, badgeValue, badge, onClick } = props;
        let location = useLocation();
    
        return (
            <div className={actived===location.pathname ? classes.active : classes.desactive} onClick={onClick}>
                <Label select={actived===location.pathname} issues={issues} label={label} />
                {
                    badge && (<Badge badgeValue={badgeValue} issues={issues} />) 
                }
            </div>
        );
    }
);


const useTabStyles = makeStyles((theme: Theme) =>
    createStyles({
        desactive: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '14px',
            fontWeight: 'normal',
            fontFamily: 'Roboto',
            cursor: 'pointer',
            width: 'calc(100%)',
            height: '54px',
            background: theme.palette.secondary.main,
            '&hover': {
                background: theme.palette.secondary.light,
            },
        },
        active: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '14px',
            fontWeight: 'normal',
            fontFamily: 'Roboto',
            borderBottom: '3px solid white',
            borderRadius: '8px 8px 0px 0px',
            cursor: 'pointer',
            width: 'calc(100%)',
            height: '54px',
            background: theme.palette.secondary.light,
        },
    }),
);

export default Tab;
