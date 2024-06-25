import React, { useContext, useState, useEffect, createContext } from "react";
// import { auth, GoogleAuthProvider } from "../../firebase/firebase";
// import { onAuthStateChanged } from "firebase/auth";

export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);
  // const [userLoggedIn, setUserLoggedIn] = useState(false);
  // const [isEmailUser, setIsEmailUser] = useState(false);
  // const [isGoogleUser, setIsGoogleUser] = useState(false);
  // const [loading, setLoading] = useState(true);
  const [newChat, setNewChat] = useState([1]);
  const [newSearch, setSearch] = useState([1]);
  const [newSurvel, setSurvel] = useState([1]);
  const[openmodal, setOpenmodal] = useState(false);
  const[openmodals, setOpenmodals] = useState(false);
  const [showmodal , setShowModal] = useState({login:true,register:false,});
  const [showchats, setShowChats] = useState(false)
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     initializeUser(user);
  //   });
  //   return unsubscribe;
  // }, []);

  // async function initializeUser(user) {
  //   if (user) {
  //     setCurrentUser({ ...user });

  //     // check if provider is email and password login
  //     const isEmail = user.providerData.some(
  //       (provider) => provider.providerId === "password"
  //     );
  //     setIsEmailUser(isEmail);

  //     // check if the auth provider is google or not
  //     const isGoogle = user.providerData.some(
  //       (provider) => provider.providerId === GoogleAuthProvider.PROVIDER_ID
  //     );
  //     setIsGoogleUser(isGoogle);

  //     setUserLoggedIn(true);
  //   } else {
  //     setCurrentUser(null);
  //     setUserLoggedIn(false);
  //   }

  //   setLoading(false);
  // }

  const value = {
    // userLoggedIn,
    // isEmailUser,
    // isGoogleUser,
    // currentUser,
    // setCurrentUser,
    newChat,
    setNewChat,
    newSearch, setSearch,
    newSurvel, setSurvel,
    showmodal , setShowModal,
    openmodal, setOpenmodal,
    openmodals, setOpenmodals,
    showchats, setShowChats
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
