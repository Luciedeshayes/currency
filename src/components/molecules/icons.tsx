import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TrainIcon from '@material-ui/icons/Train';
import FlightIcon from '@material-ui/icons/Flight';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import EditIcon from '@material-ui/icons/Edit';
import SendIcon from '@material-ui/icons/Send';
import ErrorIcon from '@material-ui/icons/Error';
import CachedIcon from '@material-ui/icons/Cached';
import ReplayIcon from '@material-ui/icons/Replay';
import CheckIcon from '@material-ui/icons/Check';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';
import { Icon } from '../atoms';

/**
 * A component to render a global loading spinner before displaying some data on a page
 */


export enum Logo {
    Money,
    Train,
    Flight,
    User,
    Search,
    Edit,
    Send,
    Error,
    Reload,
    Replay,
    Check,
    ArrowLeft,
    ArrowRight,
    ArrowUp,
    ArrowDown,
    ArrowNavigationLeft,
    ArrowNavigationRight,
    Close,
    More,
    Less,
    Trash,
}

interface IconsProps {
    logo: Logo;
}

const Icons = (props: IconsProps): JSX.Element => {
    const classes = useTabStyles({});
    const { logo } = props;

    const IconComponents = {
        [Logo.Money]: <MonetizationOnIcon className={classes.icon} />,
        [Logo.Train]: <TrainIcon className={classes.icon} />,
        [Logo.Flight]: <FlightIcon className={classes.icon} />,
        [Logo.User]: <PersonIcon className={classes.icon} />,
        [Logo.Search]: <SearchIcon className={classes.icon} />,
        [Logo.Edit]: <EditIcon className={classes.icon} />,
        [Logo.Send]: <SendIcon className={classes.icon} />,
        [Logo.Error]: <ErrorIcon className={classes.icon} />,
        [Logo.Reload]: <CachedIcon className={classes.icon} />,
        [Logo.Replay]: <ReplayIcon className={classes.icon} />,
        [Logo.Check]: <CheckIcon className={classes.icon} />,
        [Logo.ArrowLeft]: <ArrowBackIcon className={classes.icon} />,
        [Logo.ArrowRight]: <ArrowForwardIcon className={classes.icon} />,
        [Logo.ArrowDown]: <ArrowDownwardIcon className={classes.icon} />,
        [Logo.ArrowUp]: <ArrowUpwardIcon className={classes.icon} />,
        [Logo.ArrowNavigationLeft]: <NavigateBeforeIcon className={classes.icon} />,
        [Logo.ArrowNavigationRight]: <NavigateNextIcon className={classes.icon} />,
        [Logo.Close]: <CloseIcon className={classes.icon} />,
        [Logo.More]: <AddIcon className={classes.icon} />,
        [Logo.Less]: <RemoveIcon className={classes.icon} />,
        [Logo.Trash]: <DeleteIcon className={classes.icon} />,
    };

    const IconComponent = IconComponents[logo!==undefined&&logo!==null ? 0 :logo ];

    return (
        <div className={classes.root}>
            <Icon children={IconComponent} />    
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
            fontSize: '14px',
            fontWeight: 'normal',
            fontFamily: 'Roboto',
        },
        icon: {
            color: theme.palette.colors.white,
        },
    }),
);

export default Icons;
