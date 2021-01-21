import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

interface GlobalLoaderProps {
    center?: boolean;
    startLoadingTimeout?: number;
}

function GlobalLoader(props: GlobalLoaderProps) {
    const classes = useToolbarStyles({});
    const { startLoadingTimeout = 250, center, ...rest } = props;

    const [isDisplaying, setDisplay] = React.useState<boolean>(false);

    React.useEffect(() => {
        const startTimeout: NodeJS.Timeout = setTimeout(() => setDisplay(true), startLoadingTimeout);

        return () => {
            clearTimeout(startTimeout);
        };
    }, []);

    if (isDisplaying) {
        return (
            <div className={center ? classes.center : classes.root}>
                <CircularProgress size={60} {...rest} />
            </div>
        );
    }
    return null;
}

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

export default GlobalLoader;
