import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../../firebase";

const auth = getAuth();

export const signIn = (values, navigate, location) => {
  signInWithEmailAndPassword(auth, values.email, values.password, navigate)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);

      alert("Successfully Loged in");
      localStorage.setItem("token", user.accessToken);
      location ? navigate(location) : navigate("/");
      window.location.reload();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
};

export const signUp = (values, navigate) => {
  createUserWithEmailAndPassword(auth, values.email, values.password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      alert("Succesful");
      console.log(values.email);
      navigate("/");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
      alert(errorCode);
    });
};

export const SignOut = () => {
  localStorage.clear();
  signOut(auth)
    .then(() => {
      console.log("LOGOUT");
    })
    .catch((error) => {});
  window.location.reload();
};
