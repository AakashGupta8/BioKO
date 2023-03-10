import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import PDdata from "./TableData";
import { Link } from "react-router-dom";

function CustomToolbar() {
  return (
    <GridToolbarContainer style={{ justifyContent: "end" }}>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

const columns = [
  {
    field: "id",
    headerName: "Id",
    renderHeader: () => <strong>{"Ausweis"}</strong>,
    headerClassName: "super-app-theme--header",
    flex: 1,
    width: 120,
  },
  {
    field: "img",
    renderHeader: () => <strong>{"Bild"}</strong>,
    headerClassName: "super-app-theme--header",
    flex: 1,
    width: 150,
    renderCell: (params) => {
      if (params.value !== null) {
        return (
          <Link
            style={{ color: "black", textDecoration: "none" }}
            to={"/user/analyse"}
          >
            <img className="sample-image" src={params.value} alt="img" />
          </Link>
        );
      } else return "NA";
    },
  },

  {
    field: "img_name",
    headerName: "Image Name",
    renderHeader: () => <strong>{"Bildname"}</strong>,
    headerClassName: "super-app-theme--header",
    flex: 1,
    width: 160,
    // renderCell: (params) => {
    //   if (params.value !== null) {
    //     return params.value;
    //   } else return "NA";
    // },
  },
  {
    field: "img_description",
    headerName: "Description",
    renderHeader: () => <strong>{"Beschreibung"}</strong>,
    headerClassName: "super-app-theme--header",
    width: 160,
    flex: 1,
    renderCell: (params) => {
      if (params.value !== null) {
        return params.value;
      } else return "NA";
    },
  },
  {
    field: "result",
    headerName: "Result",
    renderHeader: () => <strong>{"Ergebnis"}</strong>,
    headerClassName: "super-app-theme--header",
    width: 110,
    flex: 1,
    renderCell: (params) => {
      if (params.value !== null) {
        return params.value;
      } else return "NA";
    },
  },
];
function AnalysisData() {
  const [data1, setData1] = useState([]);

  useEffect(() => {
    setData1(PDdata);
  }, []);
  return (
    <div>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: "100%",
              height: "450px",
            },
          }}
        >
          <Box
            sx={{
              height: 500,
              width: "100%",
              "& .super-app-theme--header": {
                backgroundColor: "#0091df",
              },
            }}
          >
            <DataGrid
              rows={data1}
              columns={columns}
              // getRowId={(row) => {
              //   if (row.img !== null) {
              //     return row.img;
              //   } else {
              //     return Math.floor(Math.random() * 10);
              //   }
              // }}
              pageSize={10}
              rowsPerPageOptions={[10]}
              disableSelectionOnClick
              experimentalFeatures={{ newEditingApi: true }}
              style={{ backgroundColor: "#fff" }}
              components={{
                Toolbar: CustomToolbar,
              }}
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default AnalysisData;
