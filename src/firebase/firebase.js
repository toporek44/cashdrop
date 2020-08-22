import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();


export const addSnapshot= ( collection, setState, fieldValue,collectionField="cardType" ) =>{

    // const unsubscribe = firebase

        db.collection(collection)
        .where(collectionField,"==",fieldValue)
        .onSnapshot((snapshot => {
            const newCard = snapshot.docs.map((doc)=> ({
                id:doc.id,
                ...doc.data()
            }))
            setState(newCard)
        }))

    // return() => unsubscribe()

}

export const deleteDoc = (collection, id) => {
    db.collection(collection).doc(id).delete()
}

export default firebase;




