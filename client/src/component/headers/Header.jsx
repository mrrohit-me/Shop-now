import React from 'react';
import { AppBar, Toolbar, makeStyles, Box, Typography, withStyles } from '@material-ui/core';
import SearchBar from './SearchBar';
import HeaderButton from './HeaderButtons';


const useStyle = makeStyles({
    header: {
        backgroundColor: '#2874f0',
        height: 55,
        boxShadow: 'none'
    },
    container: {
        marginLeft: '13%'
    },
    logo: {
        width: 65
    },
    subheader: {
        display: 'flex',
        marginTop: -7
    },
    title: {
        fontSize: 13,
        fontStyle: 'italic',
        fontWeight: 600
    },
    sublogo: {
        width: 10,
        height: 10
    }
})

const ToolBar = withStyles({
    root: {
        minHeight: 55
    }
})(Toolbar);

const Header = () => {
    const classes = useStyle();
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    return (
        <AppBar className={classes.header}>
            <ToolBar>
                <Box className={classes.container}>
                    <img src={logoURL} alt='logo' className={classes.logo} />
                    <Box className={classes.subheader}>
                        <Typography className={classes.title}>Explore <i style={{ color: 'yellow' }}>Plus</i></Typography>
                        <img src={subURL} alt='sublogo' className={classes.sublogo} />
                    </Box>
                </Box>
                <SearchBar />
                <HeaderButton />
            </ToolBar>

        </AppBar>
    )
}


export default Header;