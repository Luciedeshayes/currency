import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

/**
 * A component to render a global loading spinner before displaying some data on a page
 */
const MainLoading = (props): JSX.Element => {
    const classes = useToolbarStyles({});
    const { center, ...res } = props;

    return (
        <div className={center ? classes.center : classes.root}>
            <CircularProgress size={60} {...res} />
        </div>
    );
};

const useToolbarStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginLeft: 20,
        },
        center: {
            display: 'flex' as 'flex',
            justifyContent: 'center',
            margin: 16,
        },
    }),
);

export default MainLoading;
