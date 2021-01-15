import React, {useState, FunctionComponent } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { gql, useMutation } from '@apollo/client';
import { useNutrition } from './Context';
import { Typography } from '@material-ui/core';

const ADD_DESSERT = gql`
  mutation AddDessert(
    $dessert: String!, 
    $calories: Int!,
    $fat: Int!,
    $carb: Int!,
    $protein: Int!
    ){
    addDessert(
      dessert: $dessert,
      calories: $calories,
      fat: $fat,
      carb: $carb,
      protein: $protein

    ) {
      id
      dessert
    }
  }
`;

const AddDessert = () => {
    const [open, setOpen] = useState(false);
    const [editState, setEditState] = useState({
        dessert: '',
        calories: '',
        fat: '',
        carb: '',
        protein: ''
    });
    
    const [addDessert, { data }] = useMutation(ADD_DESSERT);
    const [error, setError] = useState<string>('');
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const target = event.target as HTMLTextAreaElement;
        setEditState({
            ...editState,
            [target.id]: target.value
        })
        setError('');
    }
    let {refetch, setSelected, setResetState} = useNutrition();
    const handleSubmit = () => {
        if(editState.dessert === '' ||
            editState.calories === '' ||
            editState.fat === '' ||
            editState.carb === '' ||
            editState.protein === ''
        ) {
            setError('Fields missing')
            return;
        }
        addDessert({
            variables: {
                dessert: editState.dessert,
                calories: parseInt(editState.calories),
                fat:  parseInt(editState.fat),
                carb: parseInt(editState.carb),
                protein:parseInt(editState.protein)
            }
        });
        setEditState({
            dessert: '',
            calories: '',
            fat: '',
            carb: '',
            protein: ''
        });
        setOpen(false);
        refetch();
        setSelected([]); 
        setResetState([]);
    }
    return (
        <div>
            <input id="dessertDialog" hidden={true} onClick={handleClickOpen}/>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add Dessert</DialogTitle>
                <DialogContent>
                <TextField
                    autoFocus
                    value={editState.dessert}
                    onChange={handleChange}
                    margin="dense"
                    name="dessert"
                    id="dessert"
                    label="Dessert"
                    type="text"
                    fullWidth
                    required
                />
                <TextField
                value={editState.calories}
                onChange={handleChange}
                    margin="dense"
                    name="calories"
                    id="calories"
                    label="Calories"
                    type="number"
                    fullWidth
                    required
                />
                <TextField
                value={editState.fat}
                onChange={handleChange}
                    margin="dense"
                    name="fat"
                    id="fat"
                    label="Fat"
                    type="number"
                    fullWidth
                    required
                />
                <TextField
                value={editState.carb}
                onChange={handleChange}
                    margin="dense"
                    name="carb"
                    id="carb"
                    label="Carb"
                    type="number"
                    fullWidth
                    required
                />
                <TextField
                value={editState.protein}
                onChange={handleChange}
                    margin="dense"
                    name="protein"
                    id="protein"
                    label="Protein"
                    type="number"
                    fullWidth
                    required
                />
                {error && <Typography style={{color: "#dd2c00"}}>{error}</Typography>}
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleSubmit} color="primary">
                    Add
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AddDessert
