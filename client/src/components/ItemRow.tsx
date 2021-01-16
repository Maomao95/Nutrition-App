import React, {Fragment, useState, useEffect, FunctionComponent } from 'react'
import {myTheme} from './theme'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import { useNutrition } from './Context';

const useStyles = makeStyles((theme) => (myTheme));

interface Items {
    id: any,
    dessert: any,
    reset: any,
    visible: any,
    nutritionInfo: any
}

const ItemRow: FunctionComponent<{item: any}> = ({item}) => {
    const classes = useStyles();

    const {id, dessert, reset, visible, nutritionInfo} = item;
    const {calories, fat, carb, protein} = nutritionInfo;
    const items = [dessert, calories, fat, carb, protein];
    let {selected, 
        setSelected, 
        resetState, 
        setResetState,
        windowWidth
    } = useNutrition();

    
    const st = [[selected, setSelected], [resetState, setResetState]];
    const [checked, setChecked] = React.useState(false);
    useEffect(() => {
        let index = 0;
        if(reset) index = 1;
        if(st[index][0].length === 0 && checked) {
            setChecked(!checked);
        }
        if(checked && st[index][0].length > 0 && st[index][0].indexOf(id) === -1) {
            setChecked(!checked);
        }
        if(!checked && st[index][0].length > 0 && st[index][0].indexOf(id) !== -1) {
            setChecked(!checked);
        }
    }, [selected, resetState, id]);

    
    const handleSelection = () => {
        let index = 0;
        if(reset) index = 1;
        
        if(checked  && st[index][0].length > 0 && st[index][0].indexOf(id) !== -1) {
            let newSelected = [...st[index][0]];
            newSelected.splice(st[index][0].indexOf(id), 1);
            st[index][1](newSelected);
        } 
        if(!checked && (st[index][0].length === 0 || st[index][0].indexOf(id) === -1)) {
            let newSelected = [...st[index][0]];
            newSelected.push(id);
            st[index][1](newSelected);
        }
        setChecked(!checked)
    }
    const checkStyle = {
        marginLeft: windowWidth < 800 ? "10px" : "inherit",
        paddingLeft:  windowWidth < 800 ? "40px" : "inherit",
        paddingRight:  windowWidth < 800 ? "80px" : "inherit"
    }
    let itemMarkup = (
        <Fragment>
        <Grid item sm={1} xs={1} onClick={handleSelection}>
        <Paper className={classes.tableItem}>
            <Checkbox
            checked={checked}
            //onChange={handleSelection}
            inputProps={{ 'aria-label': 'primary checkbox' }}
            style={checkStyle}
            />
            </Paper>
        </Grid>
        {items.map((item, index) => {
            return (<Grid key={index} item sm={index === 0 ? 3 : 2} xs={index === 0 ? 3 : 2}>
                <Paper className={classes.tableItem}>
                 <Typography variant="body1"> {item} </Typography>
                </Paper>
            </Grid>)
        })}
        </Fragment>
    )
    return (
        <Fragment>
            {itemMarkup}
        </Fragment>
    )
}

export default ItemRow
