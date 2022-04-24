import { useState, useEffect } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  getIdToken,
} from "firebase/auth";

initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [massage, setMassage] = useState(false);
  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState("");
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // google sign in method
  const signInWithGoogle = () => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        setUser(res.user);
        setMassage("Login Successfull");
        saveUser(user.email, user.displayName, "PUT");
      })
      .catch((err) => {
        setMassage(err.code);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  //register new  user
  const registerUser = (email, password, name) => {
    setLoading(true);
    console.log(user);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        //sign in
        const newUser = { email: email, displayName: name };
        setUser(newUser);
        saveUser(email, name, "POST");
        console.log(res);
        //user name update when account created
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });

        setMassage("Account created successful!!");
      })
      .catch((err) => {
        const errorCode = err.code;
        setMassage(errorCode);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const loginUser = (email, password) => {
    setLoading(true);
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setUser(res.user);
        setMassage("Login success");
      })
      .catch((err) => setMassage(err.code))
      .finally(() => {
        setLoading(false);
      });
  };
  //logout
  const logout = () => {
    const confirm = window.confirm("Do You Want To Logout ?");
    if (confirm) {
      signOut(auth)
        .then(() => {
          setUser({});
        })
        .catch((err) => {
          setMassage(err?.code);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };
  // state changed
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user).then((idToken) => {
          // console.log(idToken)
          setToken(idToken);
        });
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);
  ///save user in database
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    console.log(user);
    fetch("https://pure-reef-05928.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };
  useEffect(() => {
    fetch(`https://pure-reef-05928.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAdmin(data.admin);
      });
  }, [user.email]);
  return {
    registerUser,
    loginUser,
    signInWithGoogle,
    logout,
    user,
    token,
    admin,
    massage,
    loading,
  };
};

export default useFirebase;
