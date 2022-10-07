import React, { useRef } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonIcon,
  IonButton,
  IonToolbar,
  IonButtons,
  IonModal,
  IonAvatar,
  IonImg
} from "@ionic/react";
import { personCircleOutline, qrCodeOutline } from "ionicons/icons";
import "./Home.css";

function Home() {
  const modal = useRef<HTMLIonModalElement>(null);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="vrcafe-main">
          <div className="logo">
            <img src="assets/images/logo.png" alt="VRcafe logo"></img>
          </div>
          <IonButtons slot="start">
            <IonButton>
              <IonIcon icon={personCircleOutline} />
            </IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton id="open-modal" expand="block">
              <IonIcon icon={qrCodeOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" color="vrcafe-white">
        <IonModal ref={modal} trigger="open-modal" initialBreakpoint={0.75} breakpoints={[0]}>
          <IonContent className="ion-padding">
            <IonAvatar>
                <IonImg src="https://i.pravatar.cc/300?u=b" />
            </IonAvatar>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
}

export default Home;
