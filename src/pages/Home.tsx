import React, { useRef } from "react";
import { IonContent, IonHeader, IonPage, IonIcon, IonButton, IonToolbar, IonButtons, IonModal, IonAvatar, IonImg } from "@ionic/react";
import { basket, peopleCircle, personCircleOutline, qrCodeOutline } from "ionicons/icons";
import "./Home.css";
import MainTabs from "../components/MainTabs";

function Home() {
  const modal = useRef<HTMLIonModalElement>(null);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="vrcafe-main">
          <div className="logo">
            <img src="assets/images/logo.png" alt="VRcafe logo" />
          </div>
          <IonButtons slot="start">
            <IonButton href="/profile">
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
        <IonModal ref={modal} trigger="open-modal" initialBreakpoint={0.9} breakpoints={[0.9, 0.75, 0]}>
          <IonContent className="ion-padding">
            <div className="center">
              <IonAvatar class="ion-margin-top">
                <IonImg src="https://i.pravatar.cc/1000" />
              </IonAvatar>
            </div>
            <div className="center lineHeight">
              <p className="bold">Voornaam Achternaam</p>
              <p>dd/mm/jj</p>
            </div>
            <div className="modalButtons ion-margin-top lineHeight">
              <div>
                <a href="/orders">
                  <IonIcon icon={basket} />
                  <p>Bestellingen</p>
                </a>
              </div>
              <div>
                <a href="/friends">
                  <IonIcon icon={peopleCircle} />
                  <p>Vrienden</p>
                </a>
              </div>
            </div>
          </IonContent>
        </IonModal>
      </IonContent>
      <MainTabs />
    </IonPage>
  );
}

export default Home;
