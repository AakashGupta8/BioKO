import { useMsal } from "@azure/msal-react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
// import { MoveToInbox as InboxIcon } from "@mui/icons-material";

export const getAuthHeader = (accessToken) => {
  var headers = new Headers();
  var bearer = "Bearer " + accessToken;
  headers.append("Authorization", bearer);
  return headers;
};

export const toBase64Browser = (arrayBuffer) =>
  btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));

export const LogoutButton = ({ onClick }) => {
  const { instance } = useMsal();
  return (
    <List>
      {["Logout"].map((text, index) => (
        <ListItem
          button
          key={text}
          onClick={() => {
            // eslint-disable-next-line no-restricted-globals
            if (!confirm("Are you sure you want to Logout?")) return;
            instance.logout();
          }}
          className="drawer-item"
        >
          <ListItemIcon>
           <p>hy</p>
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  );
};
