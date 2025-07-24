"use client";

import Image from "next/image";
import Link from "next/link";
import { CATEGORIESBUTTONS } from "@/const/routes";
import { NAVBTN } from "@/const/routes";
export default function LeftContent() {
  return (
    <>
      <div className="col-span-1">
        <div className="flex flex-col p-3 gap-2">
          <Link href={"/"}>
            <Image src={"/bank_logo.png"} width={300} height={300} alt="logo" />
          </Link>
          {NAVBTN.map((items, index) => (
            <Link
              key={index}
              href={items.path}
              className="btn-golden-gradient "
            >
              <Image
                src={items.icon}
                width={20}
                height={20}
                alt="kig"
                className="w-7 h-7"
              />
              {items.label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 rounded-lg bg-zinc-950/60 p-3 px-4 items-start ">
            {CATEGORIESBUTTONS.map((items, index) => (
              <Link key={index} href={items.path} className="nav-btn-primary">
                {items.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
