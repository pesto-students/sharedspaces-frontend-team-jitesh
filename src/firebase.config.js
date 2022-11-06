

// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const firebaseConfig = {
    apiKey: "AIzaSyAHxuRi_T2KTbVBT8eYIJu396Tr9Q8-8ao",
    authDomain: "sharedspace-auth.firebaseapp.com",
    projectId: "sharedspace-auth",
    storageBucket: "sharedspace-auth.appspot.com",
    messagingSenderId: "107632785105",
    appId: "1:107632785105:web:5be40d15342d4a57eeb7f0"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// const provider = new GoogleAuthProvider();
// export const signInWithGoogle = () => {
//     signInWithPopup(auth, provider)
//         .then((result) => {
//             console.log(result);
//             const name = result.user.displayName;
//             const email = result.user.email;
//             const profilePic = result.user.photoURL;

//             // localStorage.setItem("name", name);
//             // localStorage.setItem("email", email);
//             // localStorage.setItem("profilePic", profilePic);
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// };