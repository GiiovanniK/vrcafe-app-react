import { IonContent, IonHeader, IonPage, IonLabel, IonButton, IonToolbar, IonInput } from "@ionic/react";
import {} from "ionicons/icons";
import "./Register.css";

const Register: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen color="vrcafe-white">
        <IonHeader>
          <IonToolbar color="vrcafe-main">
            <div className="logo">
              <img src="assets/images/logo.png" alt="VRcafe logo"></img>
            </div>
          </IonToolbar>
        </IonHeader>
        <form className="register">
        <h1 className="formHeader">Registreren</h1>
          <div className="register-form">
            <IonLabel>Emailadres</IonLabel>
            <IonInput placeholder="Emailadres" type="email" name="emailadress" required></IonInput>
          </div>
          <div className="register-form">
            <IonLabel>Wachtwoord</IonLabel>
            <IonInput placeholder="Wachtwoord" type="password" name="pass" required></IonInput>
          </div>
          <div className="register-form">
            <IonLabel>Herhaal wachtwoord</IonLabel>
            <IonInput placeholder="Herhaal wachtwoord" type="password" name="passRepeat" required></IonInput>
          </div>
          <div className="firstNameLast">
            <div className="register-form">
              <IonLabel>Voornaam</IonLabel>
              <IonInput placeholder="Voornaam" type="text" name="firstName" autocapitalize="on" required></IonInput>
            </div>
            <div className="register-form">
              <IonLabel>Achternaam</IonLabel>
              <IonInput placeholder="Achternaam" type="text" name="lastName" autocapitalize="on" required></IonInput>
            </div>
          </div>
          <div>
            <IonLabel>Geboortedatum</IonLabel>
            <IonInput type="date" name="birthDate" required></IonInput>
          </div>
          <IonButton type="submit" fill="clear" className="register-form-submit">
            Registreren
          </IonButton>
          <div className="center makeAccount">
            <p>Al een account?</p>
            <a href="/login">login</a>
          </div>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Register;
