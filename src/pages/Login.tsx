import { IonContent, IonHeader, IonPage, IonLabel, IonButton, IonToolbar, IonInput } from "@ionic/react";
import {} from "ionicons/icons";
import "./Login.css";

const Login: React.FC = () => {
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
        <form className="login">
        <h1 className="formHeader">Inloggen</h1>
          <div className="login-form">
            <IonLabel>Emailadres</IonLabel>
            <IonInput placeholder="Emailadres" type="email" name="emailadress" required></IonInput>
          </div>
          <div className="login-form">
            <IonLabel>Wachtwoord</IonLabel>
            <IonInput placeholder="Wachtwoord" type="password" name="pass" required></IonInput>
          </div>
          <IonButton type="submit" fill="clear" className="login-form-submit">
            Login
          </IonButton>
          <div className="center makeAccount">
            <p>Nog geen account?</p>
            <a href="/register">account aanmaken</a>
          </div>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Login;
