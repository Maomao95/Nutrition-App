import React, {Fragment, useState, useEffect} from 'react'
import { useQuery, gql } from '@apollo/client';
import CircularProgress from '@material-ui/core/CircularProgress';
import ItemRow from './ItemRow';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {myTheme} from './theme'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { useNutrition } from './Context';
import Button from '@material-ui/core/Button';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const useStyles = makeStyles(() => (myTheme));

const NUTRITION_DATA = gql`
  query {
    desserts {
      id,
      dessert,
      reset,
      visible,
      nutritionInfo {
        calories
        fat
        carb
        protein
      }
    }
  }
`;


const Items = () => {
    const classes = useStyles();

    let {loading, error, data, refetch, sort, setSort, windowWidth} = useNutrition();

    let markupData = loading ? <CircularProgress /> : (
        data.desserts.map((item: { visible: any; }, index: string | number | null | undefined) => {
          return item.visible ? <ItemRow key={index} item={item}/>: <Fragment key={index}> </Fragment>
        })
      )
    const tableHeaders = [
        "Dessert(100g serving)",
        "Calories",
        "Fat",
        "Carbs",
        "Protein"
    ];
    const handleSort = (index: number) => {
      if(index === 0) return
      if(sort.index === index) {
        setSort({...sort, order: !sort.order});
      } else {
        setSort({index, order: 0});
      }
    }
    let arrowDir = sort.order ? 
    <ArrowDownwardIcon className={classes.arrowStyle}/> : 
    <ArrowUpwardIcon className={classes.arrowStyle}/>
    let headermarkup = tableHeaders.map((item, index) => {
        return (
            <Grid key={index} item sm={index === 0 ? 3 : 2} xs={index === 0 ? 3 : 2}>
            <Paper className={classes.tableHead}>
                <Button onClick={() => handleSort(index)} size={windowWidth < 800 ? "small" : "large"}>    {item} 
                {index !== 0 && 
                (sort.index === index ? 
                arrowDir : 
                <ArrowDownwardIcon className={classes.generalArrowStyle} />)}
                </Button>
            </Paper>
            </Grid>
        )
    })
        

    return (
        <Fragment>
            <Grid container spacing={0}>
                <Grid item sm={1} xs={1}>
                <Paper className={classes.tableHead}></Paper>
                </Grid>
                {headermarkup}
                {markupData}
            </Grid>
        </Fragment>
    )
}

export default Items
