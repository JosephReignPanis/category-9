import Image from "next/image";
import Link from "next/link";

export default function Notice_05() {
  return (
    <>
      {" "}
      <div className="col-span-8 pb-5">
        {" "}
        <p className="nav-btn-primary text-4xl font-black text-center py-2">
          이벤트
        </p>
        <div className="bg-zinc-900/80 w-full mb-2 p-4">
          <p className="bg-neutral-800 p-2 mb-5">
            {" "}
            스포츠 인플레이 & 실시간 규정
          </p>
          <Image
            src={"/notice_banners/notice_banners_05.png"}
            width={400}
            height={400}
            alt="banner"
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-row w-full justify-center p-4 gap-4">
          <Link
            href={"/navigation/events"}
            className="bg-zinc-700 px-6 py-2 hover:bg-zinc-500 "
          >
            입금신청하기
          </Link>
        </div>{" "}
      </div>
    </>
  );
}
