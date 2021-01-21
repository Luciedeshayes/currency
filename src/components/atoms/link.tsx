import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

/**
 * A component to render a global loading spinner before displaying some data on a page
 */

interface LogoProps {
    name: string;
    link: string;
}

const Link = (props: LogoProps): JSX.Element => {
    const classes = useTabStyles({});

    return (
            <a className={classes.root} href={props.link}>{props.name}</a>
    );
};

const useTabStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '14px',
            fontWeight: 'normal',
            fontFamily: 'Roboto',
            backgroundColor: theme.palette.colors.riders,
        },
    }),
);

export default Link;
