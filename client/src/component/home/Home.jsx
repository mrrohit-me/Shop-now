import { Box, makeStyles } from '@material-ui/core';

//component 
import Slide from './Slide';
import MidSection from './MidSection';

//components
import NavBar from './NavBar';
import Banner from './Banner';

const useStyles = makeStyles({
    container: {
        padding: '15px 5px 0px 5px',
        backgroundColor: '#f2f2f2',
        borderTopWidth: 1,
        borderTopColor: 'grey',
        borderTopStyle: 'solid'
    },
    adImageWrapper:{
       backgroundColor : 'white',
       padding : '5px 5px 0px 5px',
       marginTop : 10,
       marginLeft : 6
    }
});

const Home = () => {
    const classes = useStyles();
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return (
        <div>
            <NavBar />
            <Box className={classes.container}>
                <Banner />
                <Box style={{display : 'flex'}}>
                    <Box style={{width : '82%'}}>
                        <Slide timer={true} title={'Deals of the Day'}/>
                    </Box>
                    <Box className={classes.adImageWrapper}>
                        <img src={adURL} style={{ width: 227 }} />
                    </Box>
                </Box>
               <MidSection />
                <Slide timer={false} title={'Best Offers '} />
                <Slide timer={false} title={'Suggestions'}/>
                <Slide timer={false} title={'Choice Is Yours'}/>


               
            </Box>

        </div>
    )
}

export default Home;