"use client";
import Link from "next/link";
import Image from "next/image";
import { EVENTBANNER } from "@/const/banners";

export default function Home() {
  return (
    <>
      <p className="nav-btn-primary text-4xl font-black text-center py-2">
        이벤트
      </p>{" "}
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-4 gap-2 mb-5">
        {EVENTBANNER.map((items, i) => (
          <div key={i} className="flex flex-col bg-zinc-900/90 ">
            <Image
              src={`/event_image/${items.src}.png`}
              width={200}         
              height={20}
              alt="banner"
              className="object-fill w-full h-auto"
            />
            <div className="flex flex-row justify-between items-center p-2">
              <p className="text-white text-sm truncate">{items.label}</p>
              <Link
                href={items.href}
                className="btn-gold-nav-gradient p-1 text-sm px-3 rounded-sm bg-zinc-700/50"
              >
                상세보기
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
