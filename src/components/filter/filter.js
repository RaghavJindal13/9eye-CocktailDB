import React from 'react';


// Material UI
import { makeStyles } from '@material-ui/styles';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  formControl: {
    minWidth: 215,
  }
});

const Filter = ({
  filterType,
  filterOptions,
}) => {

  const classes = useStyles();

  let typeLowerCase = filterType.toLowerCase();
  let typeCapitalized = `str${filterType[0].toUpperCase()}${filterType.substr(1)}${typeLowerCase === 'ingredient' ? '1' : ''}`;

  return(
    <Grid>
      <form>
        <FormControl className={classes.formControl}>
          <InputLabel>{`${filterType[0].toUpperCase()}${filterType.substr(1)}`}</InputLabel>
          <Select>
            {filterOptions.map((val, i) => 
              
              <MenuItem key={i} value={val[typeCapitalized]}>{val[typeCapitalized]}</MenuItem>
            )}
          </Select>
        </FormControl>
      </form>
    </Grid>
  )
};



export default Filter;