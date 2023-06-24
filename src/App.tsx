import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle, home, informationCircle, person, search, map, play } from 'ionicons/icons';
import Menu from './pages/Menu';
import Procurar from './pages/Procurar';
import Reproduzindo from './pages/Reproduzindo';
import SuaLista from './pages/SuaLista';
import Login from './pages/Login';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/Menu">
            <Menu />
          </Route>
          <Route exact path="/Procurar">
            <Procurar />
          </Route>
          <Route path="/Reproduzindo">
            <Reproduzindo />
          </Route>
          <Route path="/SuaLista">
            <SuaLista />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route exact path="/">
            <Redirect to="/Menu" />
          </Route>
        </IonRouterOutlet>
        
        <IonTabBar slot="bottom">
        <IonTabButton tab="sualista" href="/sualista">
            <IonIcon aria-hidden="true" icon={person} />
            <IonLabel>Sua Lista</IonLabel>
          </IonTabButton>
          
          <IonTabButton tab="procurar" href="/procurar">
            <IonIcon aria-hidden="true" icon={search} />
            <IonLabel>Procurar</IonLabel>
          </IonTabButton>
          <IonTabButton tab="reproduzindo" href="/reproduzindo">
            <IonIcon aria-hidden="true" icon={play} />
            <IonLabel>Reproduzindo</IonLabel>
          </IonTabButton>
          <IonTabButton tab="menu" href="/Menu">
            <IonIcon aria-hidden="true" icon={home} />
            <IonLabel>Menu</IonLabel>
          </IonTabButton>          
          <IonTabButton tab="login" href="/Login">
            <IonIcon aria-hidden="true" icon={home} />
            <IonLabel>Login</IonLabel>
          </IonTabButton>          
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
