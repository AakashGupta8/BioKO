import { Paper, Box, Chip } from "@mui/material";
import DataGrid from "../DataGrid/DataGridTable";
import { Link, Navigate } from "react-router-dom";

const handleClick = () => {
  Navigate("/user/analyse");
  // <navigator to={"/user/analyse"}/>
};
const columns = [
  //   { field: "id", headerName: "ID", flex: 1 },
  {
    field: "work_id",
    renderHeader: () => <strong>{"Work Order ID"}</strong>,
    flex: 1,
    editable: true,
    headerClassName: "super-app-theme--header",
    renderCell: (params) => (
      <Chip label={params.value} onClick={handleClick}>
        <Link style={{ color: "black", textDecoration: "none" }} to={"/user/analyse"}>
          {/* {params.value} */}
        </Link>
      </Chip>
    ),
  },
  {
    field: "produkt",
    headerClassName: "super-app-theme--header",
    renderHeader: () => <strong>{"PRODUKT"}</strong>,
    flex: 1,
    editable: true,
  },
  {
    field: "probe",
    headerClassName: "super-app-theme--header",
    renderHeader: () => <strong>{"PROBE"}</strong>,
    flex: 1,
    editable: true,
  },
  {
    field: "fermenter",
    headerClassName: "super-app-theme--header",
    renderHeader: () => <strong>{"FERMENTER"}</strong>,
    type: "number",
    flex: 1,
    editable: true,
  },
  {
    field: "stunde",
    headerClassName: "super-app-theme--header",
    renderHeader: () => <strong>{"STUNDE"}</strong>,
    type: "number",
    flex: 1,
    editable: true,
  },
  {
    field: "probenId",
    headerClassName: "super-app-theme--header",
    renderHeader: () => <strong>{"PROBEN-ID"}</strong>,
    type: "number",
    flex: 1,
    editable: true,
  },
  {
    field: "poNr",
    headerClassName: "super-app-theme--header",
    renderHeader: () => <strong>{"PO-NR"}</strong>,
    type: "number",
    flex: 1,
    editable: true,
  },
  {
    field: "aktion",
    headerClassName: "super-app-theme--header",
    renderHeader: () => <strong>{"AKTION"}</strong>,
    type: "number",
    flex: 1,
    editable: true,
  },
];

const rows = [
  {
    id: 1,
    work_id: "101",
    produkt: "DHP",
    probe: "JNormalon",
    fermenter: "HF6",
    stunde: 26,
    probenId: 226040010,
    poNr: 99999999,
    aktion: "Analyse starten ",
  },
  {
    id: 2,
    work_id: "201",
    produkt: "ADD",
    probe: "Normal",
    fermenter: "HF3",
    stunde: 26,
    probenId: 226040010,
    poNr: 99999999,
    aktion: "Analyse starten ",
  },
  {
    id: 3,
    work_id: "301",
    produkt: "DHP",
    probe: "Bestatigung",
    fermenter: "ZF6",
    stunde: 51,
    probenId: 226040010,
    poNr: 99999999,
    aktion: "Analyse starten ",
  },
];

export default function OffeneAufgaben() {
  return (
    <div style={{ padding: "2%" }}>
      <Paper elevation={3}>
        <Box
          sx={{
            height: "80vh",
            width: "100%",
            "& .super-app-theme--header": {
              backgroundColor: "#0091df",
            },
          }}
        >
          <DataGrid row={rows} column={columns} name={"Zusammenfassung - Analysen"} />
        </Box>
      </Paper>
    </div>
  );
}
