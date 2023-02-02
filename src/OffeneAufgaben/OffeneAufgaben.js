import DataGrid from "../DataGrid/DataGridTable";
const columns = [
  //   { field: "id", headerName: "ID", flex: 1 },
  {
    field: "produkt",
    renderHeader: () => <strong>{"PRODUKT"}</strong>,
    flex: 1,
    editable: true,
  },
  {
    field: "probe",
    renderHeader: () => <strong>{"PROBE"}</strong>,
    flex: 1,
    editable: true,
  },
  {
    field: "fermenter",
    renderHeader: () => <strong>{"FERMENTER"}</strong>,
    type: "number",
    flex: 1,
    editable: true,
  },
  {
    field: "stunde",
    renderHeader: () => <strong>{"STUNDE"}</strong>,
    type: "number",
    flex: 1,
    editable: true,
  },
  {
    field: "probenId",
    renderHeader: () => <strong>{"PROBEN-ID"}</strong>,
    type: "number",
    flex: 1,
    editable: true,
  },
  {
    field: "poNr",
    renderHeader: () => <strong>{"PO-NR"}</strong>,
    type: "number",
    flex: 1,
    editable: true,
  },
  {
    field: "aktion",
    renderHeader: () => <strong>{"AKTION"}</strong>,
    type: "number",
    flex: 1,
    editable: true,
  },
];

const rows = [
  {
    id: 1,
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
    <div>
      <DataGrid
        row={rows}
        column={columns}
        name={"Zusammenfassung - Analysen"}
      />
    </div>
  );
}
