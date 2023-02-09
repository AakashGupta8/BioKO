import BarChartIcon from "@mui/icons-material/BarChart";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import GroupIcon from "@mui/icons-material/Group";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import HomeIcon from "@mui/icons-material/Home";
import TimelineIcon from "@mui/icons-material/Timeline";

export const SidebarData = [
  {
    title: "Home",
    path: "Home",
    icons: <HomeIcon />,
  },
  {
    title: "Offene Aufgaben",
    path: "table-analyse",
    icons: <ContentPasteIcon />,
  },
  {
    title: "Analyse",
    path: "analyse",
    icons: <BarChartIcon />,
  },
  {
    title: "Double Check",
    path: "double-check",
    icons: <GroupIcon />,
  },
  {
    title: "Abgeschlossen",
    path: "Abgeschlossen",
    icons: <CheckBoxIcon />,
  },
  {
    title: "Hilfe",
    path: "https://bayersi.service-now.com/sp",
    icons: <HelpOutlineIcon />,
  },
  {
    title: "Einstellungen",
    path: "Einstellungen",
    icons: <SettingsIcon />,
  },
  {
    title: "Beenden",
    path: "Beenden",
    icons: <DirectionsRunIcon />,
  },
  {
    title: "Daten",
    path: "daten",
    icons: <TimelineIcon />,
  },
];
