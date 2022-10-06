import { IonContent, IonHeader, IonPage, IonLabel, IonButton, IonToolbar, IonInput } from "@ionic/react";
import {} from "ionicons/icons";
import "./Register.css";

const Register: React.FC = () => {
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
          <div className="onboarding-form">
            <IonLabel>Herhaal wachtwoord</IonLabel>
            <IonInput placeholder="Herhaal wachtwoord" type="password" name="passRepeat" required></IonInput>
          </div>
          <div className="onboarding-form">
            <IonLabel>Voornaam</IonLabel>
            <IonInput placeholder="Voornaam" type="text" name="firstName" autocapitalize="on" required></IonInput>
          </div>
          <div className="onboarding-form">
            <IonLabel>Achternaam</IonLabel>
            <IonInput placeholder="Achternaam" type="text" name="lastName" autocapitalize="on" required></IonInput>
          </div>
          <div>
            <IonLabel>Geboortedatum</IonLabel>
            <IonInput type="date" name="birthDate" required></IonInput>
          </div>
          <IonButton type="submit" fill="clear" className="onboarding-form-submit">
            Registreren
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Register;
