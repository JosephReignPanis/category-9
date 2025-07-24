"use client";

import Image from "next/image";
export default function RightContent() {
  const userstat = [
    { label: "보유금액", value: "10,000,000" },
    { label: "베팅건수", value: "10" },
    { label: "누적배당", value: "5.65" },
    { label: "배당금액", value: "10,000,000" },
    { label: "베팅금액", value: "500,000" },
  ];

  const teamcard1 = [
    { team1: "바르셀로나", team2: "레알마드리드", result: "승 5,00" },
    { team1: "바르셀로나", team2: "레알마드리드", result: "승 5,00" },
    { team1: "바르셀로나", team2: "레알마드리드", result: "승 5,00" },
  ];
  type TeamCardProps = { team1: string; team2: string; result: string };
  function Teamcard({ team1, team2, result }: TeamCardProps) {
    return (
      <div className="bg-zinc-950/80 rounded-lg flex flex-col p-2 px-4 gap-2">
        <div className="flex flex-row justify-between">
          <p>{team1}</p>
          <p>{result}</p>
        </div>
        <div className="flex flex-row justify-between">
          <p>{team2}</p>
          <p>
            <Image src={"/plus_icon.png"} width={20} height={20} alt="cross" />
          </p>
        </div>
      </div>
    );
  }
  return (
    <>
      {" "}
      <div className="bg-zinc-900 rounded-lg">
        <div className="flex flex-row justify-between p-2 rounded-t-lg navgradient   ">
          <p>Betting Cart</p>
          <p>00: 00: 00</p>
        </div>
        <div className="p-4 flex flex-col gap-3">
          <div className="flex flex-row gap-2 justify-between">
            <button className="btn-goldsb-gradient">새로고침</button>
            <button className="btn-goldsb-gradient">전체삭제</button>
            <button className="btn-goldsb-gradient">카트고정</button>
          </div>
          {teamcard1.map((items, index) => (
            <Teamcard
              key={index}
              team1={items.team1}
              team2={items.team2}
              result={items.result}
            />
          ))}

          {/* {teamcard1.map((items, index) => (
            <div
              key={index}
              className="bg-zinc-950/80 rounded-lg flex flex-col p-2 px-4 gap-2"
            >
              <div className="flex flex-row justify-between">
                <p>{items.team1}</p>
                <p>{items.result}</p>
              </div>
              <div className="flex flex-row justify-between">
                <p>{items.team2}</p>
                <p>
                  <Image
                    src={"/plus_icon.png"}
                    width={20}
                    height={20}
                    alt="cross"
                  />
                </p>
              </div>
            </div>
          ))} */}
          {userstat.map((items, index) => (
            <div
              key={index}
              className="flex flex-row justify-between border-b border-zinc-700"
            >
              <p>{items.label}</p>
              <p className="text-yellow-400">{items.value}</p>
            </div>
          ))}
          <button className="flex btn-golden-gradient  justify-center">
            베팅하기
          </button>
        </div>
      </div>
    </>
  );
}
