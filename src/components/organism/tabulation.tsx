import React, { useCallback } from 'react';
import { useHistory } from "react-router-dom";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Tab from '../molecules/tab';

/**
 * A component to render a global loading spinner before displaying some data on a page
 */

interface TabulationProps {
    select: Array<String>;
    issues: Array<boolean>;
    tabs: Array<String>;
    badgeValue: Array<number>;
    badge: Array<boolean>; 
}

const Tabulation = React.memo(
    (props: TabulationProps): JSX.Element => {
        const classes = useTabStyles({});
        const { select, issues, tabs, badgeValue, badge } = props;
        let history = useHistory();
        
        //retourne un répétoire d'une url grace à la fonction history
         const handleClick = useCallback(
            (index) => {
                return history.push(select[index]);
             },[history,select]
             );
    
        return (
            <div className={classes.root}>
                {
                    tabs.map( (tab, index) => (
                        <Tab key={index} label={tab} actived={select[index]} issues={issues[index]} 
                        badgeValue={badgeValue[index]} badge={badge[index]} onClick={handleClick.bind(null,index)}/>
                        ) 
                    )
                }
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
            justifyContent: 'space-around',
            alignItems: 'flex-end',
            background: theme.palette.secondary.main,
        },
    }),
);

export default Tabulation;
