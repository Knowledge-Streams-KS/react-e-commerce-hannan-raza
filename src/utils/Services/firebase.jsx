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
      // Signed in
      const user = userCredential.user;
      console.log(user);

      alert("Successfully Loged in");
      localStorage.setItem("token", user.accessToken);
      location ? navigate(location) : navigate("/");
      window.location.reload();

      // navigate("/home");
      // ...
      // const navigate = useNavigate();
      // navigate("/");
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
      // Signed in
      console.log(123);
      const user = userCredential.user;
      console.log(user);
      alert("Succesful");
      console.log(values.email);
      navigate("/");

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
      alert(errorCode);
      // ..
    });
};

export const SignOut = () => {
  localStorage.clear();
  signOut(auth)
    .then(() => {
      console.log("LOGOUT");

      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
  window.location.reload();
};
