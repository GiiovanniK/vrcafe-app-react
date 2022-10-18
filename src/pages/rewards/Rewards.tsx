import { IonContent, IonHeader, IonPage, IonToolbar, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard } from "@ionic/react";
import {} from "ionicons/icons";
import MainTabs from "../../components/MainTabs";

const Rewards: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="vrcafe-main">
          <div className="logo">
            <img src="assets/images/logo.png" alt="VRcafe logo" />
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="vrcafe-white">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Card Title</IonCardTitle>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
        </IonCard>
      </IonContent>
      <MainTabs />
    </IonPage>
  );
};

export default Rewards;
