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
    path: "/xy",
    icons: <ContentPasteIcon />,
  },
  {
    title: "Analyse",
    path: "/analyse",
    icons: <BarChartIcon />,
  },
  {
    title: "Double Check",
    path: "/double-check",
    icons: <GroupIcon />,
  },
  {
    title: "Abgeschlossen",
    path: "/Abgeschlossen",
    icons: <CheckBoxIcon />,
  },
  {
    title: "Hilfe",
    path: "/Hilfe",
    icons: <HelpOutlineIcon />,
  },
  {
    title: "Einstellungen",
    path: "/Einstellungen",
    icons: <SettingsIcon />,
  },
  {
    title: "Beenden",
    path: "/Beenden",
    icons: <DirectionsRunIcon />,
  },
];
