import { IonContent, IonHeader, IonPage, IonButtons, IonButton, IonToolbar, IonIcon } from "@ionic/react";
import { personCircleOutline, qrCodeOutline } from "ionicons/icons";
import "./Tab1.css";
import "../MainTabs";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton>
                <IonIcon icon={personCircleOutline} />
              </IonButton>
            </IonButtons>
            <IonButtons slot="end">
              <IonButton>
                <IonIcon icon={qrCodeOutline} />
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
