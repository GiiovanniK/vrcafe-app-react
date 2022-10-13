import { IonContent, IonHeader, IonPage, IonButtons, IonButton, IonToolbar, IonIcon, IonAvatar, IonImg, IonFooter } from "@ionic/react";
import { personCircleOutline, qrCodeOutline, peopleCircle, basket, pencilOutline, arrowForwardOutline } from "ionicons/icons";
import "./Profile.css";
import "../components/MainTabs";
import MainTabs from "../components/MainTabs";

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader class="ion-no-border">
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
      <IonContent fullscreen>
        <div className="center">
          <IonAvatar class="modalImage ion-margin-top">
            <IonImg src="https://i.pravatar.cc/300" />
          </IonAvatar>
        </div>
        <div className="center lineHeight">
          <p className="bold">Voornaam Achternaam</p>
          <p>dd/mm/jj</p>
        </div>
        <div className="modalButtons ion-margin-top lineHeight">
          <div>
            <a href="/edit">
              <IonIcon icon={pencilOutline} />
              <p>Gegevens</p>
            </a>
          </div>
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
        <div className="m-1">
          <div className="flex openMore">
            <h2>Badges</h2>
            <IonIcon icon={arrowForwardOutline} />
          </div>
          <div className="badges">
            <div>
              <img src="./assets/images/logo.png" alt="" />
            </div>
            <div>
              <img src="./assets/images/logo.png" alt="" />
            </div>
            <div>
              <img src="./assets/images/logo.png  " alt="" />
            </div>
          </div>
        </div>
        <div className="m-1">
          <div className="flex openMore">
            <h2>Achievements</h2>
            <IonIcon icon={arrowForwardOutline} />
          </div>
          <div className="achievements">
            <div>
              <img src="./assets/images/logo.png" alt="" />
            </div>
            <div>
              <img src="./assets/images/logo.png" alt="" />
            </div>
            <div>
              <img src="./assets/images/logo.png  " alt="" />
            </div>
          </div>
        </div>
      </IonContent>
      <MainTabs/>
    </IonPage>
  );
};

export default Profile;
