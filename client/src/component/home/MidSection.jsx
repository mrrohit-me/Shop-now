import { ImageURL } from '../constants/NavData';
import { Box, makeStyles} from '@material-ui/core';



const useStyles = makeStyles({
    container : {
        display:'flex',
        justifyContent : 'space-between',
        marginTop : 5
    }
});



const MidSection = () =>{

    const classes = useStyles();
    const coronaURL = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return(
        <>
            <Box className={classes.container}>
                {
                    ImageURL.map(image => (
                        <img src={image} style={{ width: '33%' }} />
                    ))

                }
            </Box>
            <img src={coronaURL} style={{width : "100%", marginTop : 5}}/>
        </>
    )
}

export default MidSection;