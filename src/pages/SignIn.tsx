import React from 'react';

import { Button, makeStyles, Typography } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import MessageIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: 'calc(100vh - 49px)',
        overflowY: 'scroll'
    },
    textSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#71C9F8',
        flex: '0 0 50%',
        overflow: 'hidden',
        position: 'relative',
    },
    textSideBigIcon: {
        position: 'absolute',
        left: '68%',
        top: '50%',
        width: '175%',
        height: '175%',
        transform: `translate(-50%, -50%)`,
    },
    textSideInfo: {
        position: 'relative',
        listStyle: 'none',
        padding: 0,
        margin: 0,
        width: 380,
        '& h6': {
            display: 'flex',
            alignItems: 'center',
            color: '#fff',
            fontWeight: 600,
            fontSize: 20,
        }
    },
    textSideInfoIcon: {
        fontSize: 32,
        marginRight: 15,
    },
    textSideInfoItem: {
        margin: '40px 0'
    },
    loginSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 50%',
    },
    twitterIcon: {
        fontSize: 45,
    },
    loginSideWrapper: {
        width: 380
    },
    loginSideTitle: {
        fontWeight: 700,
        fontSize: 32,
        margin: '15px 0 59px 0',
    },
    sideButton: {
        marginTop: 15,
    }
}))

function SignIn() {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <div className={classes.textSide}>
                <TwitterIcon color="primary" className={classes.textSideBigIcon} />
                <ul className={classes.textSideInfo}>
                    <li>
                        <Typography variant="h6">
                            <SearchIcon className={classes.textSideInfoIcon} />Follow your interests.
                        </Typography>
                    </li>
                    <li className={classes.textSideInfoItem}>
                        <Typography variant="h6">
                            <PeopleOutlineIcon className={classes.textSideInfoIcon} />Hear what people are talking about.
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="h6">
                            <MessageIcon className={classes.textSideInfoIcon} />Join the conversation.
                        </Typography>
                    </li>
                </ul>
            </div>
            <div className={classes.loginSide}>
                <div className={classes.loginSideWrapper}>
                    <TwitterIcon color="primary" className={classes.twitterIcon}/>
                    <Typography variant="h4" gutterBottom className={classes.loginSideTitle}>See what’s happening in the world right now</Typography>
                    <Typography><b>Join Twitter today.</b></Typography>
                    <Button className={classes.sideButton} variant="contained" color="primary" fullWidth>Sign up</Button>
                    <Button style={{marginBottom: '15px'}} className={classes.sideButton} variant="outlined" color="primary" fullWidth>Log in</Button>
                </div>
            </div>
        </div>
    )
}

export default SignIn;
