"use client";

import { db } from "@/firebase/clientApp";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

interface TestData {
    id: string;
    title: string;
    status: string;
    isCompleted: boolean;
}

export default function DatabaseTest() {
    const [testItems, setTestItems] = useState<TestData[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchTestData = async () => {
            try {
                const testCollectionRef = collection(db, 'test');
                const querySnapshot = await getDocs(testCollectionRef);

                const dataList: TestData[] = [];
                querySnapshot.forEach(doc => {
                    const data = doc.data();

                    dataList.push({
                        id: doc.id,
                        title: (data.title as string) || '제목없음',
                        status: (data.status as string) || 'pending',
                        isCompleted: (data.isCompleted as boolean) ?? false
                    });
                });

                setTestItems(dataList);
            }
            catch (error) {console.error("Firestore에서 데이터를 가져오는 중 오류 발생:", error);}
            finally {setIsLoading(false);}
        };
        fetchTestData();
    }, []);

    if (isLoading) {return <div className="p-4 text-center">데이터 로딩 중...</div>;}

    return (
        <div className="p-4 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Firestore Test 목록 ({testItems.length}개)</h2>
            {testItems.length === 0 ? (
                <p className="text-gray-500">컬렉션에 저장된 테스트 데이터가 없습니다.</p>
            ) : (
                <ul className="space-y-3">
                    {testItems.map(item => (
                        <li 
                            key={item.id} 
                            className={`p-4 border rounded-lg transition duration-200 ${
                                item.isCompleted ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200'
                            }`}
                        >
                            <p className="text-sm text-gray-500 truncate">ID: {item.id}</p>
                            <p className="text-lg font-semibold text-gray-900">{item.title}</p>
                            <div className="flex items-center space-x-4 mt-2 text-sm">
                                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                                    item.isCompleted ? 'bg-green-400 text-white' : 'bg-yellow-400 text-gray-800'
                                }`}>
                                    {item.isCompleted ? '✅ 완료' : '⌛ 진행 중'}
                                </span>
                                <span className="text-gray-600">상태: {item.status}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
