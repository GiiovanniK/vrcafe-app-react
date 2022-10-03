import {
  IonContent,
  IonPage,
  IonLabel,
  IonInput,
  IonButton,
  IonHeader,
  IonTitle,
  IonButtons,
  IonToolbar,
} from "@ionic/react";

import "./Onboarding.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import Swiper core and required modules
import { Pagination } from "swiper";
import SlideNextButton from "../components/Slider";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

const Onboarding: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <IonToolbar>
            <IonTitle slot="primary"></IonTitle>
            <IonButtons slot="end">
              <IonButton>overslaan</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <Swiper pagination={true} modules={[Pagination]}>
          <SwiperSlide>
            <div className="slideContent">
              <img
                src="assets/images/LogoAnim.gif"
                alt="Animation of the VRcafe logo"
              ></img>
              <div className="slide1">
                <h1>Welkom in de VRcafe app!</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
                  congue pellentesque
                </p>
              </div>
              <div className="navigator">
                <SlideNextButton />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slideContent">
              <img
                src="assets/images/LogoAnim.gif"
                alt="Animation of the VRcafe logo"
              ></img>
              <div className="slide2">
                <h1>Scan de QR code</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
                  congue pellentesque
                </p>
              </div>
              <div className="navigator">
                <SlideNextButton />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <form className="slideContent">
              <div className="onboarding-form">
                <IonLabel>Emailadres</IonLabel>
                <IonInput
                  placeholder="Emailadres"
                  type="email"
                  name="emailadress"
                ></IonInput>
              </div>
              <div className="onboarding-form">
                <IonLabel>Wachtwoord</IonLabel>
                <IonInput
                  placeholder="Wachtwoord"
                  type="password"
                  name="pass"
                ></IonInput>
              </div>
              <div className="onboarding-form">
                <IonLabel>Herhaal wachtwoord</IonLabel>
                <IonInput
                  placeholder="Herhaal wachtwoord"
                  type="password"
                  name="passRepeat"
                ></IonInput>
              </div>
              <div className="onboarding-form">
                <IonLabel>Voornaam</IonLabel>
                <IonInput
                  placeholder="Voornaam"
                  type="text"
                  name="firstName"
                  autocapitalize="on"
                ></IonInput>
              </div>
              <div className="onboarding-form">
                <IonLabel>Achternaam</IonLabel>
                <IonInput
                  placeholder="Achternaam"
                  type="text"
                  name="lastName"
                  autocapitalize="on"
                ></IonInput>
              </div>
              <div>
                <IonLabel>Geboortedatum</IonLabel>
                <IonInput
                  placeholder="Geboortedatum"
                  type="date"
                  name="birthDate"
                ></IonInput>
              </div>
              <IonButton
                type="submit"
                fill="clear"
                className="onboarding-form-submit"
              >
                Registeren
              </IonButton>
            </form>
          </SwiperSlide>
        </Swiper>
      </IonContent>
    </IonPage>
  );
};

export default Onboarding;
