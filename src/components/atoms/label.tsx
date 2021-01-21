import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

/**
 * A component to render a global loading spinner before displaying some data on a page
 */

interface LabelProps {
    label: String;
    select: boolean;
    issues: boolean;
}

const Label = (props: LabelProps): JSX.Element => {
    const classes = useTabStyles({});
    const { label, select, issues, } = props;


    
    return (
        <>
            <span className={issues ? classes.issues : select ? classes.noIssuesActived : classes.noIssues}>
                {label}
            </span>
        </>
    );
};
const useTabStyles = makeStyles((theme: Theme) =>
    createStyles({
        issues: {
            color: theme.palette.colors.red,
            fontFamily: 'Roboto',
        },
        noIssues: {
            color: '#FFFFFF',
            opacity: '0.6',
            fontFamily: 'Roboto',
        },
        noIssuesActived: {
            color: theme.palette.colors.white,
            fontFamily: 'Roboto',
        },
    }),
);

export default Label;
