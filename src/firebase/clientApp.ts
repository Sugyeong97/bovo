// 필요한 Firebase SDK만 import 합니다.
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// 💡 Storage SDK 추가
import { getStorage, ref, getDownloadURL } from "firebase/storage";

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
// 💡 Storage 인스턴스 초기화 및 내보내기
export const storage = getStorage(app); 
// export const analytics = getAnalytics(app); // Analytics를 사용한다면 주석 해제

// 앱 인스턴스 자체도 필요할 수 있으므로 내보냅니다.
export default app;

export async function getProfileImageUrl(path: string): Promise<string> {
  // 1. Storage 파일에 대한 참조(Reference)를 생성합니다.
  const imageRef = ref(storage, path);

  try {
    // 2. 참조를 사용하여 다운로드 URL을 가져옵니다.
    const url = await getDownloadURL(imageRef);
    
    // 3. 획득한 URL을 반환합니다.
    return url;
  } catch (error) {
    // 오류 처리 (예: 파일이 존재하지 않거나 권한 문제)
    console.error("Storage 이미지 로드 중 오류 발생:", error);
    // 오류 발생 시 빈 문자열 또는 기본 이미지 URL을 반환할 수 있습니다.
    throw new Error("이미지 URL을 가져오는 데 실패했습니다.");
  }
}