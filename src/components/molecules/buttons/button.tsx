import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Icons, { Logo } from '../icons';
import { Label } from '../../atoms';

/**
 * A component to render a global loading spinner before displaying some data on a page
 */

interface LogoProps {
    label?: String;
    select?: boolean;
    issues?: boolean;
    logo?: Logo;
    onClick: ()=>void;
}

const Button = React.memo(
    (props: LogoProps): JSX.Element => {
        const classes = useTabStyles({});
        const { select, issues, label, logo, onClick } = props;
    
        return (
            <div className={classes.root} onClick={onClick}>
                <Label select={select} issues={issues} label={label} />
                <Icons logo={logo} />
            </div>
        );
    }
);

const useTabStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            justifyContent: 'flex-start',
            alignItems: 'center',
            fontSize: '14px',
            fontWeight: 'normal',
            fontFamily: 'Roboto',
            cursor: 'pointer',
        },
    }),
);

export default Button;
