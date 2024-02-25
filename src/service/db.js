import { db } from "./firebaseConfig";

import { addDoc, collection, doc, setDoc, getDoc } from "firebase/firestore";

//회고 생성 및 수정 함수
export const registReview = async (uid, date, data) => {
  const userDocumentRef = doc(db, "review", uid);

  const reviewData = {};
  reviewData[date] = {
    ...data,
  };

  const prev = await getUserAllReviews(uid);
  await setDoc(userDocumentRef, { ...reviewData, ...prev });
};

// 모든 회고 데이터 가져오기
export const getUserAllReviews = async (uid) => {
  const userDocumentRef = doc(db, "review", uid);

  const docSnap = await getDoc(userDocumentRef);
  return docSnap.data();
};

// 날짜별 회고 데아터
export const ReadReview = async (uid, date) => {
  const data = await getUserAllReviews(uid);
  return data[date];
};
