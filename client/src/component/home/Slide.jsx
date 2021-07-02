import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, makeStyles, Typography, Button } from '@material-ui/core'
import Countdown from 'react-countdown';

//component
import { products } from "../constants/NavData";

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


const useStyles = makeStyles({
    container: {
        backgroundColor: '#ffff',
        margin: '10px 2px',
    },
    image: {
        width: 140,
        height: 150,
        marginBottom : 5
    },
    deal: {
        textAlign: 'left',
        display : 'flex',
        borderBottomStyle : 'solid',
        borderBottom: 0.5,
        borderBottomColor : 'lightgrey',
        padding: '15px 15px',
        marginBottom : 20,
    },
    dealTitle: {
        fontWeight: '600',
        fontSize : 22
    },
    clockImage : {
        width :22,
        margin: '5px 4px 2px 30px'
    },
    timer : {
        color:'#7f7f7f',
        display:'flex',
        alignItems:'center'
    },
    product_details : {
        marginTop: 3,
        fontSize : 14
    },
    btn : {
        marginLeft: 'auto', 
        borderRadius: 2, 
        backgroundColor: '#2874f0',
        color:'white',
        fontSize : 13
    },
    product_wrapper : {
        padding : '15px 15px 10px'
    },
});


const Slide = ({title, timer}) => {
    const renderer = ({ hours, minutes, seconds }) => {
        const hour = (hours > 9) ? hours : '0' + hours
        const min = (minutes > 9) ? minutes : '0' + minutes
        const sec = (seconds > 9) ? seconds : '0' + seconds
        return (
            <span className={classes.timer}>{hour}:{min}:{sec} Left</span>);
    }
    const classes = useStyles();
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    return (
        <Box className={classes.container}>
            <Box className={classes.deal}>
                <Typography className={classes.dealTitle}> {title}</Typography>
                { 
                    timer &&
                    <>
                        <img src={timerURL} className={classes.clockImage} />
                        <Countdown
                            date={Date.now() + 14 * 1000 * 3600}
                            renderer={renderer}
                        />
                        <Button variant="contained" className={classes.btn}>View All</Button>
                    </>
                }
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
                       <Box className={classes.product_wrapper}>
                            <img key={product.id} src={product.url} className={classes.image} />
                            <Typography className={classes.product_details} style={{fontWeight : 600}}>{product.title.shortTitle}</Typography>
                            <Typography className={classes.product_details} style={{color : 'green'}}>{product.discount}</Typography>
                            <Typography className={classes.product_details} style={{opacity: 0.7}}>{product.tagline}</Typography>
                       </Box>
                    ))
                }

            </Carousel>  
        </Box>
    )
}

export default Slide;