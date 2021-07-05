import { Button, Box, makeStyles, Typography, Badge } from '@material-ui/core';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Login from '../login/Login';


const useStyles = makeStyles({
    wrapper: {
        margin: '0 7% 0 auto',
        display: 'flex',
        '& > *': {
            marginRight: 50,
            fontSize: 16,
            alignItems: 'center'
        }
    },
    login: {
        backgroundColor: 'white',
        borderRadius: '0',
        color: '#2874f0',
        textTransform: 'none',
        fontWeight: 600,
        fontSize: 14,
        padding: '3px 37px',
        boxShadow: 'none',
        '&:hover': {
            backgroundColor: 'white',
            color: 'none',
        }
    },
    cart: {
        display: 'flex',
        color: 'white',
        textDecoration: 'none'
    }
});



const HeaderButton = () => {
    const [dialog, setDialog] = useState(false);
    const classes = useStyles();

    const handleDialog = () => {
        setDialog(true)
    }
    return (
        <>
            <Box className={classes.wrapper}>
                <Button className={classes.login} onClick={() => handleDialog()}>Login</Button>
                <Typography style={{ marginTop: 4 }}>More</Typography>
                <Link to={'/cart'} className={classes.cart}>
                    <Badge badgeContent={4} color="primary">
                        <FaShoppingCart />
                    </Badge>
                    <Typography style={{ marginLeft: 10 }}>Cart</Typography>
                </Link>
            </Box>
            <Login isDialog={dialog} setDialog={setDialog}/>
        </>
    )
}

export default HeaderButton;