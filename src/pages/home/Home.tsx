import React, { useEffect, useState } from "react";
import { IonContent, IonHeader, IonPage, IonIcon, IonButton, IonToolbar, IonButtons, IonModal, IonAvatar, IonImg } from "@ionic/react";
import { basket, peopleCircle, personCircleOutline, qrCodeOutline } from "ionicons/icons";
import "./Home.css";
import MainTabs from "../../components/MainTabs";
import Modal from "../../components/modal/Modal";

import UserService from "../../services/user.service";

const Home: React.FC = () => {
    const [content, setContent] = useState([]);
  
    useEffect(() => {
      UserService.getUser().then(
        (response) => {
          setContent(response.data.data);
        },
        (error) => {
          const _content =
            (error.response && error.response.data.data) ||
            error.message ||
            error.toString();
  
          setContent(_content);
        }
      );
    }, []);
    
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="vrcafe-main">
          <div className="logo">
            <img src="assets/images/logo.png" alt="VRcafe logo" />
          </div>
          <IonButtons slot="start">
            <IonButton href="/profile">image.png
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
        <h1>Goedemiddag, <br/> </h1>
        <div>
          {content.map((entry:unknown) => (
            // @ts-ignore
            <p>{entry.email}</p>
          ))
          }
        </div>
      </IonContent>
      <MainTabs />
    </IonPage>
  );
};

export default Home;