import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Icons } from '../molecules';
import { Logo } from '../molecules/icons';


/**
 * A component to render a global loading spinner before displaying some data on a page
 */

interface NavigationProps {
    logoHeader: Logo;
}

const Navigation = React.memo(
    (props: NavigationProps): JSX.Element => {
        const classes = useTabStyles({});
        const { logoHeader } = props;
    
        return (
            <div className={classes.root}>
                <Icons logo={logoHeader} />
            </div>
        );
    }
);

const useTabStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'row',
            flex: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: theme.palette.secondary.main,
        },
    }),
);

export default Navigation;
