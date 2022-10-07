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

          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
