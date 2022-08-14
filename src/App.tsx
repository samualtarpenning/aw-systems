import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonFab,
  IonFabButton,
  IonFooter,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonSplitPane,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  camera,
  ellipse,
  home,
  square,
  grid,
  triangle,
  time,
  cog,
  personOutline,
} from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import "./App.css";
/* Theme variables */
import "./theme/variables.css";
import { useEffect, useState } from "react";
import useWindowDimensions from "./utils/windowDimensions";
import Menu from "./components/Menu";
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import WateringTimer from "./pages/WateringTimer";
import Settings from "./pages/Settings";
setupIonicReact();

const App: React.FC<any> = () => {
  const [isMobileBuild, setIsMobileBuild] = useState(false);
  const [auth, setAuth] = useState(false);
  const { height, width } = useWindowDimensions();
  // create an event listener
  const login = () => {
    setAuth(true);
  };
  const logout = () => {
    setAuth(false);
  };
  return (
    <>
      <IonApp>
        {!auth ? (
          <Login login={() => login()} />
        ) : isMobileBuild ? ( // if screen width is greater than 768px, render the tabs
          <IonReactRouter>
            {" "}
            <IonFab
              className="fab"
              vertical="bottom"
              horizontal="center"
              slot="fixed">
              {" "}
              <div className="nav-ellipse">
                <IonFabButton
                  routerLink="/wateringTimer"
                  className="fab-button">
                  <IonIcon icon={time}></IonIcon>
                </IonFabButton>{" "}
              </div>
            </IonFab>
            <IonTabs className="tabs">
              <IonRouterOutlet>
                <Route exact path="/home">
                  <LandingPage />
                </Route>
                <Route exact path="/dashboard">
                  <Dashboard />
                </Route>
                <Route path="/settings">
                  <Settings />
                </Route>
                <Route exact path="/">
                  <Redirect to="/wateringTimer" />
                  <WateringTimer />
                </Route>
                <Route exact path="/wateringTimer">
                  <Redirect to="/wateringTimer" />
                  <WateringTimer />
                </Route>
              </IonRouterOutlet>

              <IonTabBar slot="bottom">
                <IonTabButton tab="home" href="/home">
                  <IonIcon icon={home} />
                  <IonLabel>Home</IonLabel>
                </IonTabButton>

                <IonTabButton tab="dashboard" href="/dashboard">
                  <IonIcon icon={grid} />
                  <IonLabel>Dashboard</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab2" href="/tab2"></IonTabButton>
                <IonTabButton tab="settings" href="/settings">
                  <IonIcon icon={cog} />
                  <IonLabel>Settings</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab3" href="/tab3">
                  <IonIcon icon={personOutline} />
                  <IonLabel>Account</IonLabel>
                </IonTabButton>
              </IonTabBar>
            </IonTabs>
          </IonReactRouter>
        ) : (
          <IonReactRouter>
            <IonSplitPane contentId="main">
              <Menu logout={() => logout()} />
              <IonRouterOutlet id="main">
                <Route path="/" exact={true}>
                  <Redirect to="/dashboard" />
                </Route>
                <Route path="/home" exact={true}>
                  <Redirect to="/home" />
                  <LandingPage />
                </Route>
                <Route path="/dashboard" exact={true}>
                  <Dashboard />
                </Route>
                <Route path="/wateringTimer" exact={true}>
                  <Redirect to="/wateringTimer" />
                  <WateringTimer />
                </Route>
                <Route path="/settings" exact={true}>
                  <Redirect to="/settings" />
                  <Settings />
                </Route>
              </IonRouterOutlet>
            </IonSplitPane>
          </IonReactRouter>
        )}
      </IonApp>{" "}
    </>
  );
};

export default App;
