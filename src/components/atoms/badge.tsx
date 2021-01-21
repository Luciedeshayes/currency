import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

/**
 * A component to render a global loading spinner before displaying some data on a page
 */

interface BadgeProps {
    badgeValue: number;
    issues: boolean;
}

const Badge = (props: BadgeProps): JSX.Element => {
    const classes = useTabStyles({});
    const { badgeValue, issues } = props;

    return (
        <div className={issues ? classes.issue : classes.root}>{badgeValue}</div>
    );
};
const useTabStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: '15px',
            width: '15px',
            color: theme.palette.secondary.main,
            background: theme.palette.colors.white,
            borderRadius: '50%',
            marginLeft: '10px',
        },
        issue: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: '15px',
            width: '15px',
            color: theme.palette.colors.white,
            background: theme.palette.colors.red,
            borderRadius: '50%',
            marginLeft: '10px',
        },
    }),
);

export default Badge;
