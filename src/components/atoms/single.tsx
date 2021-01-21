import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

/**
 * A component to render a global loading spinner before displaying some data on a page
 */

interface SingleProps {
    actived: boolean;
    children: any;
}

const Single = (props: SingleProps): JSX.Element => {
    const classes = useTabStyles({});
    const { actived, } = props;

    return (
        <div className={actived ? classes.active : classes.desactive}>
            {props.children}
        </div>
    );
};
const useTabStyles = makeStyles((theme: Theme) =>
    createStyles({
        desactive: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '14px',
            fontWeight: 'normal',
            fontFamily: 'Roboto',
            cursor: 'pointer',
            height: '50px',
            width: 'auto',
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
            height: '50px',
            width: 'auto',
            background: theme.palette.secondary.light,
        },
    }),
);

export default Single;
