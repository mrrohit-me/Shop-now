import Carousel from 'react-material-ui-carousel';
import { bannerData } from '../constants/NavData';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    image: {
        width: '100%',
        height: 270,
    }
});

const Banner = () => {
    const classes = useStyles();
    return (
        <Box>
            <Carousel
                cycleNavigation={true}
                autoPlay={true}
                indicators={false}
                animation='slide'
                navButtonsAlwaysVisible={true}
                navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                    style: {
                        backgroundColor: 'white',
                        borderRadius: 0,
                        color: 'black',
                        margin: 0,
                        height: 70,
                        alignItems: 'center'
                    }
                }}
            >
                {
                    bannerData.map((item) => (
                        <img src={item} className={classes.image} />
                    ))
                }
            </Carousel>
        </Box >
    )
}

export default Banner;