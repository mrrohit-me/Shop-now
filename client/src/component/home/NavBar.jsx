import { navData } from "../constants/NavData";
import { Box, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    contaier: {
        display: 'flex',
        margin: "60px 0 0 50px"
    },
    product_section: {
        marginRight: 60
    },
    images_section: {
        width: 80
    },
    titles_section: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 5,
        borderBottom: 2
    }
});

const NavBar = () => {
    const classes = useStyles();
    return (
        <Box className={classes.contaier}>
            {
                navData.map((text) => (
                    <Box className={classes.product_section}>
                        <img src={text.url} className={classes.images_section} />
                        <Typography className={classes.titles_section}>{text.text}</Typography>
                    </Box>
                ))
            }
        </Box>
    )
}

export default NavBar;