import { Box, Grid, Paper, Typography, Button, TextareaAutosize } from '@mui/material'
import React from 'react'
import "./analysis.css"
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';


function ProduktEdit() {
    return (
        <Box component="main" className='analysis' style={{height:"700px"}}>
            <Grid container spacing={2}>
                <Grid xs={12} >
                    <Paper className='analysis-options' style={{ marginTop: "150px" }}>
                        <Typography className="option-text"> Produkt :DHP
                            <Button>
                                <Link to="/analyseEdit"> <EditIcon className='edit' /></Link>
                            </Button>
                        </Typography>
                    </Paper>
                </Grid>

            </Grid>

            <TextareaAutosize
                aria-label="minimum height"
                minRows={5}
                placeholder="Anderungsgrund"
                style={{ width: 500 }} />

            <Link to="/analyse" style={{ textDecoration: "none" }}> <button className='btn-analyse'>Andern</button></Link>
        </Box>
    )
}

export default ProduktEdit