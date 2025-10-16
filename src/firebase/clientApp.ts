// 필요한 Firebase SDK만 import 합니다.
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics"; // Analytics가 필요하다면 주석 해제

// 환경 변수에서 설정 값을 읽어옵니다.
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  // measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID, 
};

// Next.js 환경에서 Firebase 앱이 이미 초기화되었는지 확인하고, 
// 초기화되지 않았다면 새로 초기화합니다. (싱글톤 패턴)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// 필요한 서비스 인스턴스를 내보냅니다.
export const db = getFirestore(app);
// export const analytics = getAnalytics(app); // Analytics를 사용한다면 주석 해제

// 앱 인스턴스 자체도 필요할 수 있으므로 내보냅니다.
export default app;
