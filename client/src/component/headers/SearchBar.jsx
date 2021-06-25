import { makeStyles, InputBase } from "@material-ui/core";
import { FaSearch } from "react-icons/fa";

const useStyles = makeStyles({
    search: {
        marginLeft: 10,
        backgroundColor: '#ffffff',
        width: '40%',
        height: 33,
        display: 'flex',
        color: 'black',
        paddingLeft: 10
    },
    searchIcon: {
        color: '#2874f0',
        paddingTop: 7,
        marginRight: 15,
    },
    inputRoot: {
        color: 'inherit',
        width: '100%'
    },
    inputInput: {
        fontSize: 13
    },
});

const SearchBar = () => {
    const classes = useStyles();
    return (
        <div className={classes.search}>
            <InputBase
                placeholder="Search for products, brands and more"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
            />
            <div className={classes.searchIcon}>
                <FaSearch />
            </div>
        </div>
    )
}

export default SearchBar;