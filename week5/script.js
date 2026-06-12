
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC3bNH6_A6qaKdToUiiBVuFcDWYOUR6CXQ",
    authDomain: "mobile-program-6c202.firebaseapp.com",
    databaseURL: "https://mobile-program-6c202-default-rtdb.firebaseio.com",
    projectId: "mobile-program-6c202",
    storageBucket: "mobile-program-6c202.firebasestorage.app",
    messagingSenderId: "860651019874",
    appId: "1:860651019874:web:c09fadd48058f5157b3b3b"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

set(ref(db, 'students/1'), {
  firstName: "Arpana",
  lastName: "Bista",
  age: 22,
  gender: "Female",
  email: "arpanabista1@gmail.com",
  phone: 9862111111,
  address: "Kathmandu",
  course: "Mobile Programming",
  year: "Third Year",
  enrollmentYear: 2024
})
.then(() => {
  console.log("Data saved successfully!");
})
.catch((error) => {
  console.error("Error saving data:", error);
});