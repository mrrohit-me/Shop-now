import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, makeStyles, Typography } from '@material-ui/core'

//component
import { products } from "../constants/NavData";


const useStyles = makeStyles({
    container: {
        backgroundColor: '#ffff',
        margin: '10px 2px'
    },
    image: {
        width: 150,
        height: 150,
    },
    // deal: {
    //     marg
    // },
    dealTitle: {
        textAlign: 'left',
        padding: 10
    }
});

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};
const Slide = () => {
    const classes = useStyles();
    return (
        <Box className={classes.container}>
            <Box className={classes.deal}>
                <Typography className={classes.dealTitle}>Deal of the day</Typography>
            </Box>
            <Carousel
                responsive={responsive}
                infinite={true}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                swipeable={false}
                draggable={false}
                keyBoardControl={true}
                containerClass="carousel-container"
                itemClass="carousel-item-padding-40-px"
                // centerMode={true}
                autoPlay={true}
                autoPlaySpeed={10000}
            >
                {
                    products.map(product => (
                        <img key={product.id} src={product.url} className={classes.image} />
                    ))
                }

            </Carousel>
        </Box>
    )
}

export default Slide;