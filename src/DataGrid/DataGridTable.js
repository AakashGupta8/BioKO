import * as React from "react";
import Box from "@mui/material/Box";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";

function CustomToolbar(text) {
  return ( 
    <GridToolbarContainer style={{ justifyContent: "space-between" }}>
      <strong>{text.myCustomProp}</strong>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}
export default function DataGridTable(props) {
  return (
    <Box sx={{ height: 400, width: "100%" ,marginTop:"80px"}}>
      <DataGrid
        rows={props.row}
        columns={props.column}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        components={{
          Toolbar: CustomToolbar,
        }}
        componentsProps={{
          toolbar: {
            myCustomProp: props.name,
          },
        }}
      />
    </Box>
  );
}
