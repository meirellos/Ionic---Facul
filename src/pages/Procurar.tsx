import React from 'react';
import { IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { ellipse, square, triangle, home, informationCircle, person, search, map, play } from 'ionicons/icons';
import './Procurar.css';

const Procurar: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Reproduzindo</IonTitle>
        </IonToolbar>
        <IonItem>
          <IonInput>Pesquise uma mídia</IonInput>
          <IonButton color='light' routerLink='/reproduzindo'>
            <IonIcon icon={search}> </IonIcon>
          </IonButton>
        </IonItem>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Procurar</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 2 page" />
      </IonContent>
    </IonPage>
  );
};

export default Procurar;
