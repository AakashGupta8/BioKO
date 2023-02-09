import React, { createContext } from "react";
import "./App.css";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
  useIsAuthenticated,
  useMsalAuthentication,
} from "@azure/msal-react";
import { InteractionRequiredAuthError, InteractionType } from "@azure/msal-browser";
import { loginRequest } from "./authConfig";
import { getAuthHeader, toBase64Browser } from "./utils";
import { Box } from "@mui/material";
import MiniDrawer from "./Drawer/Minidrawer";
import { Routes, Route } from "react-router-dom";
import Login from "./User/Login";

export const AppContext = createContext({});
function App() {
  const { login, error } = useMsalAuthentication(InteractionType.Redirect, loginRequest);

  React.useEffect(() => {
    if (error instanceof InteractionRequiredAuthError) {
      login(InteractionType.Popup, loginRequest);
    }
  }, [error, login]);

  const { instance, accounts } = useMsal();
  const [currAccessToken, setCurrAccessToken] = React.useState(null);
  const [currIdToken, setCurrIdToken] = React.useState(null);
  const [expiresOn, setExpiresOn] = React.useState(null);
  const [currUserId, setCurrUserId] = React.useState(null);
  const isAuthenticated = useIsAuthenticated();
  const [graphInfo, setGraphInfo] = React.useState(null);
  const [profilePicture, setProfilePicture] = React.useState(null);

  const renewSilentToken = async () => {
    await instance
      .acquireTokenSilent({ ...loginRequest, account: accounts[0] })
      .then(({ accessToken, idToken, expiresOn, graphInfo, account, ...rest }) => {
        setCurrIdToken(idToken);
        setCurrAccessToken(accessToken);
        setExpiresOn(expiresOn);
        setCurrUserId(accounts[0]?.idTokenClaims["https://bayer.com/cwid"]);
      });
  };
  React.useEffect(() => {
    if (isAuthenticated) return renewSilentToken();
    instance.ssoSilent(loginRequest);
  }, [isAuthenticated]);

  React.useEffect(() => {
    if (!currAccessToken) return;
    var headers = getAuthHeader(currAccessToken);
    fetch("https://graph.microsoft.com/v1.0/me", {
      headers,
    })
      .then((resp) => resp.json())
      .then((r) => {
        setGraphInfo(r);
      });

    fetch("https://graph.microsoft.com/v1.0/me/photos/64x64/$value", {
      headers,
    })
      .then((resp) => resp.arrayBuffer())
      .then((r) => `data:image/jpeg;base64, ${toBase64Browser(r)}`)
      .then(setProfilePicture)
      .catch();
  }, [currAccessToken]);
  return (
    <AppContext.Provider
      value={{
        graphInfo,
        account: accounts[0],
        profilePicture,
        currUserId: accounts[0]?.idTokenClaims["https://bayer.com/cwid"],
      }}
    >
      <AuthenticatedTemplate>
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/user/*" element={<MiniDrawer />} />
          </Routes>
        </div>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <Box p={3}>
          <h3>Redirecting ...</h3>
        </Box>
      </UnauthenticatedTemplate>
    </AppContext.Provider>
  );
}

export default App;
