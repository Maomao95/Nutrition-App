import React, {Fragment} from 'react'
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';

import {
  createMuiTheme,
  makeStyles,
  withStyles,
  Theme,
  StyleRulesCallback ,
  createStyles,
  Theme as AugmentedTheme,
  ThemeProvider,
} from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Items from './Items';

import {myTheme} from './theme'
import AddDessert from './AddDessert';
import { useNutrition } from './Context';
import { gql, useMutation } from '@apollo/client';

const DELETE_DESSERT = gql`
  mutation deleteDessert(
    $id: Int!
    ){
    deleteDessert(
      id: $id
    ) {
      id
      dessert
    }
  }
`;
const MAKE_INVISIBLE = gql`
  mutation makeInvisible(
    $id: Int!
    ){
    makeInvisible(
      id: $id
    ) {
      id
      dessert
    }
  }
`;
const UPDATE_VISIBILITY = gql`
  mutation updateDessertVisibility(
    $id: Int!
    ){
        updateDessertVisibility(
      id: $id
    ) {
      id
      dessert
    }
  }
`;
declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}
const useStyles = makeStyles(myTheme);

//const styles: StyleRulesCallback = (theme: Theme) => (myTheme);


function Home() {
  const classes = useStyles();
  //const myRef = React.useRef<HTMLInputElement>(null);
  const handleAddItem = () => {
    const fileInput = document.getElementById('dessertDialog');
    if(fileInput !== null)
      fileInput.click();
  }

  let {
      selected, 
      setSelected,
      resetState, 
        setResetState,
        data,
        setSort
    } = useNutrition();
  const [deleteDessert] = useMutation(DELETE_DESSERT);
  const [makeInvisible] = useMutation(MAKE_INVISIBLE);
  const [updateDessertVisibility] = useMutation(UPDATE_VISIBILITY);
  const handleDelete = () => {
    if(selected.length > 0)
    selected.forEach((item: string) => {
        deleteDessert({
            variables: {
                id: parseInt(item)
            }
        });
    })
    if(resetState.length > 0)
    resetState.forEach((item: string) => {
        makeInvisible({
            variables: {
                id: parseInt(item)
            }
        });
    })
    setResetState([]);
    setSelected([]);
  }

  const handleReset = () => {
    if(data.desserts && data.desserts.length > 0)
    data.desserts.forEach((item: { reset: any; id: string; }) => {
        if(item.reset) {
            updateDessertVisibility({
                variables: {
                    id: parseInt(item.id)
                }
            });
        } else {
            deleteDessert({
                variables: {
                    id: parseInt(item.id)
                }
            });
        }
    })
    setSort({index: null, order: 0})
    setSelected([]);
  }
  return (
      <Fragment>
     <Grid  container spacing={3}>
        <Grid item xs={12} sm={6}>
            
        <Paper className={classes.paper}>
          
          <Typography variant="h3" className={classes.heading}> 
            Nutrition List
          </Typography>
          </Paper>
        
        </Grid>
        <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>
          <Button className={classes.button} onClick={handleReset}>
              Reset
          </Button>
          </Paper>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Paper className={classes.heading2}>
          
          <Typography variant="h5" className={classes.heading2_text}> 
            {selected.length + resetState.length} selected
          </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
          <Button className={classes.addButton} onClick = {handleAddItem}>
            ADD ITEM
          </Button>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
          <Button className={classes.deleteButton} onClick={handleDelete}>
            DELETE ITEM
          </Button>
          </Paper>
        </Grid>
        <Items/>
      </Grid>
      <AddDessert/>
      </Fragment>
  );
}

export default Home;
