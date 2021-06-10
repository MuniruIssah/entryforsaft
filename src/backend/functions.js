import { message } from "antd";
import { db } from "./config";
//Get a collection
export const getCollection = (collectionName) => {
  db.collection(collectionName).onSnapshot((snapshot) => {
    let allDocumentData = [];
    snapshot.docs.map((d) => {
      allDocumentData.push(d.data());
    });
    console.log(allDocumentData);
    localStorage.setItem(collectionName, JSON.stringify(allDocumentData));
  });

  return localStorage.getItem(collectionName);
};
//Creation with no file
export const createWithNoFile = (collectionName, body) => {
  db.collection(collectionName).add(body).then(()=>{
      message.success(`A record has been added to  ${collectionName}  successfully`).then(()=>{
        window.location.reload()
      })
  });
};
