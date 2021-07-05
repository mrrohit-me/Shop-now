
import { Dialog, DialogContent, Typography } from "@material-ui/core";
import { makeStyles, Box, TextField, Button } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles({
    container : {
        height : 528,
        width:695,
        borderRadius : 0
    },
    Wrapper : {
        display:'flex',
    },
    left_div:{
        backgroundImage: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        height: 528,
        backgroundRepeat:'no-repeat',
        backgroundColor:'#2874f0',
        width:'43%',
        backgroundPosition:'center 85%',
        padding: '40px 33px',
        '& > *' : {
            color:'white'
        }
    },
    login_div : {
        padding : '25px 35px',
        display : 'flex',
        flex : '1',
        flexDirection : 'column',
        '& > *' : {
            marginTop : 20
        }
    },
    text :{
        color: '#878787',
        fontSize: 12,
        fontWeight: '400'
    },
    loginButton : {
        borderRadius : 0,
        backgroundColor: '#fb641b',
        color: 'white', 
        textTransform : 'none',
        height: 48,
        '&:hover': {
            backgroundColor: '#fb641b',
            color: 'white',

        }
    },
   
    reqButton : {
        textTransform :'none',
        backgroundColor : 'white',
        color:'blue',
        height : 48,
        borderRadius : 2,
        boxShadow : '0 2px 4px 0 rgb(0 0 0 / 20%)',
        '&: hover' : {
            backgroundColor: 'red',
            color: 'blue',
        }
    },
    CreateText : {
        textAlign : 'center',
        marginTop :'auto',
        fontSize : 14,
        color : 'blue',
        fontWeight : '600',
        cursor : 'pointer'
    }   
});

const intialValue = {
    login : {
        view : 'login',
        heading : 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    singup : {
        view : 'singup',
        heading: 'Looks like youre new here!',
        subHeading : 'Sign up with your mobile number to get started',
    }
}



const Login = ({ isDialog, setDialog }) =>{
    const classes = useStyles();
    const [account, setAccount] = useState(intialValue.login);

    const closeDialog = () => {
        setDialog(false);
        setAccount(intialValue.login)
    }
    return(
        <Dialog 
            open={isDialog}
            onClose={closeDialog}
        >
            <DialogContent className={classes.container}>
                <Box className={classes.Wrapper}>
                    <Box className={classes.left_div}>
                         <Typography style={{fontSize : 25, fontWeight : '600'}}>{account.heading}</Typography>
                        <Typography style={{
                            fontSize: 18, marginTop: 16, lineHeight: "150%", color: '#dbdbdb'
                        }}>{account.subHeading}</Typography>
                    </Box>
                    {
                        account.view === 'login'
                            ? 
                                <Box className={classes.login_div}>
                                    <TextField label='Enter Email/ Mobile number' name='username' className='classes.username' />
                                    <TextField label='Enter Password' name='password' />
                                    <Typography className={classes.text}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                                    <Button variant='contained' className={classes.loginButton}>Login</Button>
                                    <Typography style={{ textAlign: 'center', color: '#878787', fontSize: 14 }}>OR</Typography>
                                    <Button variant='contained' className={classes.reqButton}>Request Opt</Button>
                                    <Typography onClick={()=> setAccount(intialValue.singup) } className={classes.CreateText}>New to Flipkart? Create an account</Typography>
                                </Box> 
                            :
                                <Box className={classes.login_div}>
                                    <TextField label=' Enter Firstname' name='fname' />
                                    <TextField label=' Enter Lastname' name='lname' /> 
                                    <TextField label='Enter Username' name='username' />
                                    <TextField label=' Enter Email' name='email' />
                                    <TextField label='Enter Password' name='password' />
                                    <TextField label='Enter Phone Number' name='number' />
                                    <Button variant='contained' className={classes.loginButton}>Register</Button>
                                </Box>

                    }
                </Box>
            </DialogContent>

        </Dialog>
    )
}


export default Login;