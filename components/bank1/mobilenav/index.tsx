"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import LeftContent from "@/components/bank1/leftcontent";
import RightContent from "@/components/bank1/rightcontent";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useRouter } from "next/navigation";

export default function MobileNav() {
  const [isLeftOpen, setIsLeftOpen] = useState(false);
  const [isRightOpen, setIsRightOpen] = useState(false);

  const router = useRouter(); // Next.js router to handle navigation

  const primaryButtons = [
    { label: "입금신청", path: "/navigation/charge" },
    { label: "출금신청", path: "/navigation/exchange" },
    { label: "경기결과", path: "/navigation/result" },
    { label: "베팅내역", path: "/navigation/betlist" },
    { label: "공지사항", path: "/navigation/notice" },
    { label: "이벤트", path: "/navigation/event" },
    { label: "쪽지함", path: "/navigation/message" },
    { label: "고객센터", path: "/navigation/help" },
    { label: "마이페이", path: "/navigation/mypage" },
    { label: "출석체크", path: "/navigation/attendance" },
  ];

  const secondaryButtons = [
    { label: "스포츠 (해외형)", path: "/categories/sports" },
    { label: "스포츠 (국내형)", path: "/categories/sportscross" },
    { label: "스페셜", path: "/special" },
    { label: "인플레이", path: "/inplay" },
    { label: "실시간", path: "/categories/sports-live-kor" },
    { label: "미니게임", path: "/mini-games" },
    { label: "벳365", path: "/bet365" },
    { label: "토큰게임", path: "/token-games" },
    { label: "카지노", path: "/categories/livecasino" },
    { label: "슬롯", path: "/categories/slot" },
  ];

  const closeSidebars = () => {
    setIsLeftOpen(false);
    setIsRightOpen(false);
  };

  const handleButtonClick = (path: string) => {
    closeSidebars();

    setTimeout(() => {
      router.push(path);
    }, 300);
  };

  return (
    <>
      <div className="block lg:hidden">
        <nav className="bg-[#171719] flex justify-between p-3 items-center w-full text-white relative z-20">
          <i
            className="fa-solid fa-bars cursor-pointer text-2xl"
            onClick={() => {
              setIsLeftOpen(true);
              setIsRightOpen(false);
            }}
          ></i>

          <Image src="/bank_logo.png" width={120} height={72} alt="webLogo" />

          <i
            className="fa-regular fa-circle-user cursor-pointer text-2xl"
            onClick={() => {
              setIsRightOpen(true);
              setIsLeftOpen(false);
            }}
          ></i>
        </nav>

        <div
          className={`fixed top-0 left-0 h-full w-full bg-zinc-950/90 text-white transform p-2 ${
            isLeftOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out shadow-lg z-30 overflow-y-auto`}
        >
          <div className="flex justify-end p-4">
            <i
              className="fa-solid fa-xmark cursor-pointer text-2xl"
              onClick={() => setIsLeftOpen(false)}
            ></i>
          </div>
          <div onClick={() => setIsLeftOpen(false)}>
            <LeftContent />
          </div>
        </div>
        <div
          className={`fixed top-0 right-0 h-full w-full bg-zinc-950/90 text-white transform p-2 ${
            isRightOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out shadow-lg z-30 overflow-y-auto`}
        >
          <div className="flex justify-end p-4">
            <i
              className="fa-solid fa-xmark cursor-pointer text-2xl"
              onClick={() => setIsRightOpen(false)}
            ></i>
          </div>
          <div onClick={() => setIsRightOpen(false)}>
            <RightContent />
          </div>
        </div>

        {(isLeftOpen || isRightOpen) && (
          <div
            className="fixed inset-0 bg-zinc-950/80 z-10"
            onClick={closeSidebars}
          ></div>
        )}
      </div>
    </>
  );
}
