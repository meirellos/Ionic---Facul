import React from 'react';
import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { ellipse, square, triangle, home, informationCircle, person, search, map, play } from 'ionicons/icons';
import './Login.css';

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
       <IonInput>Digite seu login: </IonInput>
       <IonInput type='password'>Digite sua senha:</IonInput>
      </IonContent>
      <IonButton color='danger' routerLink='/menu'>
        Entrar
      </IonButton>
    </IonPage>
  );
};

export default Login;
