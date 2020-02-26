import React, {useContext, useEffect, useState} from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import {TextField} from '@material-ui/core';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
import {AppConfig} from "./index";
import {AppContext} from "./index";
import {Redirect} from 'react-router-dom';

const CustomPaginationActionsTable = () => {
    const {state, dispatch} = useContext(AppConfig);
    const {item, setContextItem} = useContext(AppContext);

    useEffect(() => {
        getUsers();
        console.log(state)
    }, []);

    console.log(state)
    console.log(item)
    console.log(setContextItem)

    const [items, setItems] = useState([]);
    const [rows, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [isClicked, setIsClicked] = useState(false);

    const handleCancel = () => {
        console.log(items)
        setUsers(items);
        setName('');
    };

    const handleChangeName = (e) => {
        let arr;
        setName(e.target.value);
        arr = items.filter((item) => {

            return item.name.toLowerCase().includes(e.target.value.toLowerCase())
        })
/*        console.log(items)
        console.log(rows)
        console.log(arr)*/
        setUsers(arr);
        dispatch({ type: "INCREASE_COUNTER" });
    };

    const getUsers = () => {
        fetch('http://ui-base.herokuapp.com/api/items/get')
            .then((response) => response.json())
            .then(users => {
                console.log(users);
                setUsers(users)
                setItems(users)
            })
            .catch((error) => {
                console.log('error ', error);
            })
    };

    const useStyles1 = makeStyles(theme => ({
        root: {
            flexShrink: 0,
            marginLeft: theme.spacing(2.5),
        },
    }));

    function TablePaginationActions(props) {
        const classes = useStyles1();
        const theme = useTheme();
        const {count, page, rowsPerPage, onChangePage} = props;

        const handleFirstPageButtonClick = event => {
            onChangePage(event, 0);
        };

        const handleBackButtonClick = event => {
            onChangePage(event, page - 1);
        };

        const handleNextButtonClick = event => {
            onChangePage(event, page + 1);
        };

        const handleLastPageButtonClick = event => {
            onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
        };

        return (
            <div className={classes.root}>
                <IconButton
                    onClick={handleFirstPageButtonClick}
                    disabled={page === 0}
                    aria-label="first page"
                >
                    {theme.direction === 'rtl' ? <LastPageIcon/> : <FirstPageIcon/>}
                </IconButton>
                <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
                    {theme.direction === 'rtl' ? <KeyboardArrowRight/> : <KeyboardArrowLeft/>}
                </IconButton>
                <IconButton
                    onClick={handleNextButtonClick}
                    disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                    aria-label="next page"
                >
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft/> : <KeyboardArrowRight/>}
                </IconButton>
                <IconButton
                    onClick={handleLastPageButtonClick}
                    disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                    aria-label="last page"
                >
                    {theme.direction === 'rtl' ? <FirstPageIcon/> : <LastPageIcon/>}
                </IconButton>
            </div>
        );
    }

    function createData(name, calories, fat) {
        return {name, calories, fat};
    }

    const useStyles2 = makeStyles({
        table: {
            minWidth: 500,
        },
    });


    const classes = useStyles2();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleUserEdit = (row) => {
        console.log(row);
        setContextItem(row);
        setIsClicked(true)
    };

    if (isClicked) {
        return <Redirect to="/phone/edit"/>
    }

    return (
        <div>
            <div>
                {/*<TextField
                    label={'Search...'}
                    value={name}
                    onChange={handleChangeName}
                />*/}
                <div style={{margin: '20px', float: "left", fontSize: "24px", fontWeight: 'bold'}}>
                    Base09 ({rows.length})
                </div>
                <Input
                    id="standard-adornment-weight"
                    value={name}
                    placeholder={'Search...'}
                    onChange={handleChangeName}
                    endAdornment={<InputAdornment position="end"><Icon>search</Icon></InputAdornment>}
                    aria-describedby="standard-weight-helper-text"
                    inputProps={{
                        'aria-label': 'weight',
                    }}
                    style={{cursor: 'pointer', float: "right", margin: '20px', width: '400px'}}
                />
                {/* <Icon style={{fontSize: 20, cursor: 'pointer'}} onClick={handleCancel}>cancel</Icon>*/}
            </div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="custom pagination table">
                    <TableBody>
                        {(rowsPerPage > 0
                                ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                : rows
                        ).map(row => (
                            <TableRow key={row.name} onClick={() => handleUserEdit(row)}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.phone}</TableCell>
                                <TableCell align="right">{row.index}</TableCell>
                            </TableRow>
                        ))}

                        {emptyRows > 0 && (
                            <TableRow style={{height: 53 * emptyRows}}>
                                <TableCell colSpan={6}/>
                            </TableRow>
                        )}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25, 50, 100, {label: 'All', value: -1}]}
                                colSpan={3}
                                count={rows.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{
                                    inputProps: {'aria-label': 'rows per page'},
                                    native: true,
                                }}
                                onChangePage={handleChangePage}
                                onChangeRowsPerPage={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </div>
    );
};

export default CustomPaginationActionsTable;
