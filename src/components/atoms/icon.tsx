import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

/**
 * A component to render a global loading spinner before displaying some data on a page
 */

interface IconProps {
    children: any;
}

const Icon = (props: IconProps): JSX.Element => {
    const classes = useTabStyles({});

    return (
        <div className={classes.root}>
            {props.children}
        </div>
    );
};
const useTabStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
    
    }),
);

export default Icon;
