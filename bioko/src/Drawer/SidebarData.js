import BarChartIcon from "@mui/icons-material/BarChart";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import GroupIcon from "@mui/icons-material/Group";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";

export const SidebarData = [
  {
    title: "Offene Aufgaben",
    path: "/",
    icons: <BarChartIcon />,
  },
  {
    title: "Analyse",
    path: "/analyse",
    icons: <ContentPasteIcon />,
  },
  {
    title: "Double Check",
    path: "/Produket",
    icons: <GroupIcon />,
  },
  {
    title: "Abgeschlossen",
    path: "/Reagenzien",
    icons: <CheckBoxIcon />,
  },
  {
    title: "Hilfe",
    path: "/Anlieferungen",
    icons: <HelpOutlineIcon />,
  },
  {
    title: "Einstellungen",
    path: "/Aufbereitung",
    icons: <SettingsIcon />,
  },
  {
    title: "Beenden",
    path: "/Daten",
    icons: <DirectionsRunIcon />,
  },
];
