import { Box, makeStyles } from '@material-ui/core';

//component 
import Slide from './Slide';

//components
import NavBar from './NavBar';
import Banner from './Banner';

const useStyles = makeStyles({
    container: {
        padding: '15px 5px 5px 5px',
        backgroundColor: '#f2f2f2',
        borderTopWidth: 1,
        borderTopColor: 'grey',
        borderTopStyle: 'solid'
    }
});

const Home = () => {
    const classes = useStyles();
    return (
        <div>
            <NavBar />
            <Box className={classes.container}>
                <Banner />
                <Slide />
            </Box>

        </div>
    )
}

export default Home;