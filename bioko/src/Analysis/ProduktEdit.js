import { Box, Grid, Paper, Typography, Button } from '@mui/material'
import React from 'react'
import "./analysis.css"
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';


function ProduktEdit() {
    return (
        <Box component="main" className='analysis'>
            <Grid container spacing={2}>
                <Grid xs={12} >
                    <Paper className='analysis-options' style={{ marginTop: "60px" }}>
                        <Typography className="option-text"> Produkt :DHP
                            <Button>
                                <Link to="/analyseEdit"> <EditIcon className='edit' /></Link>
                            </Button>
                        </Typography>
                    </Paper>
                </Grid>
     
            </Grid>


            <Link to="/analyse" style={{ textDecoration: "none" }}> <button className='btn-analyse'>Andern</button></Link>
        </Box>
    )
}

export default ProduktEdit