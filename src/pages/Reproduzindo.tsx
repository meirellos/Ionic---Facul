import React from "react";
import {
  IonCard,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { ellipse, square, triangle, home, informationCircle, person, search, map, play, pause } from 'ionicons/icons';
import ExploreContainer from "../components/ExploreContainer";
import "./Reproduzindo.css";

const Reproduzindo: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Reproduzindo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonCard>
        <IonImg src="https://www.vagalume.com.br/nirvana/discografia/in-utero.jpg"></IonImg>
      </IonCard>
      <IonContent className="ion-padding">
        <h1>Album</h1>
        <h5>Heart Shaped Box</h5>
      </IonContent>
      <IonItem>
        <IonIcon icon={pause} size="large" align-self='center'></IonIcon>
        <IonLabel>
          Nirvana - Heart Shaped Box
        </IonLabel>
      </IonItem>
    </IonPage>
  );
};

export default Reproduzindo;
