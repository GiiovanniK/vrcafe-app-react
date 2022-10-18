import React, { useRef } from "react";
import { IonContent, IonHeader, IonPage, IonIcon, IonButton, IonToolbar, IonButtons, IonModal, IonAvatar, IonImg } from "@ionic/react";
import { basket, peopleCircle, personCircleOutline, qrCodeOutline } from "ionicons/icons";
import "./Home.css";
import MainTabs from "../../components/MainTabs";
import Modal from "../../components/modal/Modal";

const Home: React.FC = () => {
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
        <Modal/>
      </IonContent>
      <MainTabs />
    </IonPage>
  );
};

export default Home;
