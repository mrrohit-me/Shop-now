import { Box, makeStyles } from '@material-ui/core';

//components
import NavBar from './NavBar';
import Banner from './Banner';

const useStyles = makeStyles({
    container: {
        padding: '15px 5px 5px 5px',
        backgroundColor: '#f2f2f2',
        borderWidth: 1,
        borderColor: 'grey',
        borderStyle: 'solid'
    }
});

const Home = () => {
    const classes = useStyles();
    return (
        <div>
            <NavBar />
            <Box className={classes.container}>
                <Banner />
            </Box>
        </div>
    )
}

export default Home;