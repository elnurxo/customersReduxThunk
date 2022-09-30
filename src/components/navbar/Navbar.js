import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <Fragment>
      <nav style={{marginBottom:'25px'}}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" 
          sx={{
            background: 'linear-gradient(90deg, rgba(26,36,0,1) 0%, rgba(0,87,0,1) 35%, rgba(37,80,62,1) 67%, rgba(4,93,39,1) 98%)',
            height:'80px',
            justifyContent:'center'
            }}>
            <Toolbar>
           
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                REDUX/thunk
              </Typography>
              <Button color="inherit"><Link className={styles.link} to='/'>Home</Link></Button>
              <Button color="inherit"><Link className={styles.link} to='/customers'>Customers</Link></Button>
              <Button color="inherit"><Link className={styles.link} to='/customers/add'>Add Customer</Link></Button>
            </Toolbar>
          </AppBar>
        </Box>
       
      </nav>
    </Fragment>
  );
}

export default Navbar;
