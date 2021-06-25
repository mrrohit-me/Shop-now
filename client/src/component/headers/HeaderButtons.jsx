import { Button, Box, makeStyles, Typography, Badge } from '@material-ui/core';
import { FaShoppingCart } from "react-icons/fa";


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
        boxShadow: 'none'
    },
    cart: {
        display: 'flex',
    }
});

const HeaderButton = () => {
    const classes = useStyles();
    return (
        <Box className={classes.wrapper}>
            <Button className={classes.login}>Login</Button>
            <Typography style={{ marginTop: 4 }}>More</Typography>
            <Box className={classes.cart}>
                <Badge badgeContent={4} color="primary">
                    <FaShoppingCart />
                </Badge>
                <Typography style={{ marginLeft: 10 }}>Cart</Typography>
            </Box>
        </Box>
    )
}

export default HeaderButton;