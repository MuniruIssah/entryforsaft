import React, { useEffect, useContext, useState } from "react";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../backend/config";
const DiwaniContext = React.createContext();

export const useDiwaniContext = () => {
  return useContext(DiwaniContext);
};

const DiwaniProvider = ({ children }) => {
  // const [diwani, setDiwani] = useState([])
  const [loading, setLoading] = useState(true);
  const [rank, setRank] = useState(1);
  const [currentChapter, setCurrentChapter] = useState();

  useEffect(() => {
    setChapter(rank);
  }, []);

  async function setChapter(rank) {
    const q = query(collection(db, "diwani"), where("rank", "==", rank));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      setCurrentChapter(doc.data());
    });
    setLoading(false);
  }

  function changeRank(rank) {
    setLoading(true);
    setRank(rank);
    setChapter(rank);
  }
  let value = {
    rank,
    currentChapter,
    setChapter,
    changeRank,
    loading
  };
  return (
    <DiwaniContext.Provider value={value}>{children}</DiwaniContext.Provider>
  );
};

export default DiwaniProvider;
