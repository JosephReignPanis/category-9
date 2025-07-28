import Image from "next/image";
import Link from "next/link";
import { PRIMARYBUTTONS } from "@/const/routes";

export default function Navbar() {
  const userinfo = [
    { label: "받은쪽지함:", value: "(999)" },
    { label: "보유머니:", value: "140,295원" },
    { label: "베팅중인금액:", value: "100,000원" },
    { label: "포인트:", value: "56,000P" },
    { label: "가상머니:", value: "500,000원" },
    { label: "15%쿠폰:", value: "10개" },
    { label: "20%쿠폰:", value: "(19)개" },
  ];
  return (
    <>
      <div className="hidden lg:block">
        <nav className="flex flex-row justify-between items-center py-2 bg-zinc-950/10 px-2">
          <div className="flex flex-row gap-3 items-center">
            <Image
              src={"/annouce.png"}
              width={20}
              height={20}
              alt="announcement"
            />
            <p className=" w-96 overflow-hidden text-ellipsis whitespace-nowrap block text-white">
              공지사항 제목에 오신것을 환영합니다.공지사항 제목에 오신것을
              환영합니다. 공지사항 제목에 오신것을 환영합니다.공지사항 제목에
              오신것을 환영합니다. 공지사항 제목에 오신것을 환영합니다.공지사항
              제목에 오신것을 환영합니다.
            </p>
          </div>
          <div className="flex flex-row gap-4 items-center align-middle">
            {PRIMARYBUTTONS.map((items, index) => (
              <Link key={index} href={items.path} className="nav-btn-primary">
                {items.label}
              </Link>
            ))}{" "}
            <Link href={"/signin"} className="btn-goldsb-gradient  p-2">
              로그인
            </Link>
            <Link href={"/register"} className="nav-btn-logout p-2">
              회원가입
            </Link>
          </div>
        </nav>
        <nav className="flex flex-row justify-center items-center py-2 navgradient px-2 gap-5 text-white">
          <p>홍길동님</p>
          {userinfo.map((items, i) => (
            <span key={i} className="flex flex-row gap-2">
              <p>{items.label}</p>
              <p className="text-yellow-400">{items.value}</p>
            </span>
          ))}
        </nav>
      </div>
    </>
  );
}
