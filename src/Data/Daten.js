import { Box } from '@mui/material'
import React from 'react'
import './daten.css'
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AnalysisData from './AnalysisData';

function Daten() {
    const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box component="main" >
    <div className='daten'>
    <Accordion
      expanded={expanded === "panel2"}
      onChange={handleChange("panel2")}
      style={{ backgroundColor: "#5EB346" }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography
          sx={{ flexShrink: 0, paddingRight: "1%", fontWeight: "bold", color: "#fff" }}
        >
          Analysisdetails
        </Typography>
        {/* <StorefrontIconTwoTone /> */}
      </AccordionSummary>
      <AccordionDetails>{<AnalysisData />}</AccordionDetails>
    </Accordion>
    </div>
    </Box>
  )
}

export default Daten