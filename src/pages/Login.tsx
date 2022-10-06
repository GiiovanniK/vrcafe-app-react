import { IonContent, IonHeader, IonPage, IonLabel, IonButton, IonToolbar, IonInput } from "@ionic/react";
import {} from "ionicons/icons";
import "./Login.css";

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <img src="assets/images/logo.png" alt="VRcafe logo"></img>
          </IonToolbar>
        </IonHeader>
        <form className="slideContent slide3">
          <div className="onboarding-form">
            <IonLabel>Emailadres</IonLabel>
            <IonInput placeholder="Emailadres" type="email" name="emailadress" required></IonInput>
          </div>
          <div className="onboarding-form">
            <IonLabel>Wachtwoord</IonLabel>
            <IonInput placeholder="Wachtwoord" type="password" name="pass" required></IonInput>
          </div>
          <IonButton type="submit" fill="clear" className="onboarding-form-submit">
            Inloggen
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Login;
