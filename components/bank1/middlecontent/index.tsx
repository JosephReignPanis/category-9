"use client";

import Image from "next/image";
import { useState } from "react";
import MatchCard from "@/components/reusable/matchcard/page";
import DividendsBonus from "@/components/reusable/dividendsBonus/page";
const sports = [
  { id: "all", name: "All", icon: "/sports_nav/icon_sports01.png" },
  { id: "soccer", name: "축구", icon: "/sports_nav/icon_sports02.png" },
  { id: "basketball", name: "농구", icon: "/sports_nav/icon_sports04.png" },
  { id: "baseball", name: "야구", icon: "/sports_nav/icon_sports03.png" },
  { id: "volleyball", name: "배구", icon: "/sports_nav/icon_sports05.png" },
  { id: "ice_hockey", name: "ICE하키", icon: "/sports_nav/icon_sports09.png" },
  { id: "lol", name: "LOL", icon: "/sports_nav/icon_sports10.png" },
];

export default function MiddleContent() {
  const [selectedSport, setSelectedSport] = useState("all");

  const notices = [
    {
      type: "NOTICE",
      title: "공지사항 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
    {
      type: "NOTICE",
      title: "공지사항 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
    {
      type: "NOTICE",
      title: "공지사항 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
    {
      type: "NOTICE",
      title: "공지사항 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
  ];

  const events = [
    {
      type: "EVENT",
      title: "이벤이벤 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
    {
      type: "EVENT",
      title: "이벤이벤 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
    {
      type: "EVENT",
      title: "이벤이벤 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
    {
      type: "EVENT",
      title: "이벤이벤 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
  ];
  interface CardListProps {
    data: { type: string; title: string; date: string }[];
    badgeColor: string;
  }

  const CardList: React.FC<CardListProps> = ({ data, badgeColor }) => (
    <div>
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-row justify-between py-4 px-2 border-b border-zinc-600 hover:bg-zinc-800/50"
        >
          <div className="flex flex-row gap-2">
            <div
              className={`px-2 py-1 text-xs text-center font-bold items-center flex rounded-lg ${badgeColor}`}
            >
              {item.type}
            </div>
            <p className="truncate max-w-40 text-sm overflow-hidden whitespace-nowrap">
              {item.title}
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <p className="truncate max-w-[100px] text-sm overflow-hidden whitespace-nowrap text-zinc-400">
              {item.date}
            </p>
            <Image
              src="/r-arrow.png"
              width={10}
              height={10}
              className="w-5 h-5 object-contain"
              alt="r-arrow"
            />
          </div>
        </div>
      ))}
    </div>
  );
  return (
    <>
      {" "}
      <div className="block sm:hidden">
        <Image
          src="/placeholder1.png"
          width={500}
          height={300}
          alt="placeholder"
          className="w-full"
        />
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="col-span-1 flex flex-col gap-2">
            <Image
              src={"/sports.png"}
              width={120}
              height={100}
              alt="placeholder"
              className="object-contain w-full"
            />
            <Image
              src={"/sports.png"}
              width={120}
              height={100}
              alt="placeholder"
              className="object-contain w-full"
            />
            <Image
              src={"/sports.png"}
              width={120}
              height={100}
              alt="placeholder"
              className="object-contain w-full"
            />
          </div>
          <div className="col-span-1 flex flex-col gap-2">
            <Image
              src={"/sports.png"}
              width={120}
              height={100}
              alt="placeholder"
              className="object-contain w-full"
            />
            <Image
              src={"/sports.png"}
              width={120}
              height={100}
              alt="placeholder"
              className="object-contain w-full"
            />
            <Image
              src={"/sports.png"}
              width={120}
              height={100}
              alt="placeholder"
              className="object-contain w-full"
            />
          </div>
        </div>
        <div className="flex flex-row justify-between navgradient p-3 text-lg font-bold rounded-lg items-center mt-3">
          <p>공지사항</p>
          <Image
            src="/plus_icon.png"
            width={10}
            height={10}
            className="w-5 h-5 object-contain"
            alt="plus"
          />
        </div>
        <CardList data={notices} badgeColor="bg-zinc-800 text-[#b8862f]" />{" "}
        <div className="flex flex-row justify-between navgradient p-3 text-lg font-bold rounded-lg items-center mt-3">
          <p>이벤트</p>
          <Image
            src="/plus_icon.png"
            width={10}
            height={10}
            className="w-5 h-5 object-contain"
            alt="plus"
          />
        </div>
        <CardList data={events} badgeColor="bg-[#b8872b] text-black" />
      </div>
      <div className="col-span-3 hidden sm:block">
        <div className="flex flex-row items-center justify-between overflow-x-auto">
          {sports.map((sport) => {
            const isSelected = selectedSport === sport.id;

            return (
              <div
                key={sport.id}
                onClick={() => setSelectedSport(sport.id)}
                className={[
                  "flex",
                  "flex flex-col items-center  ",
                  "cursor-pointer",
                  "transition-colors duration-200",
                  "active-btn",
                  "py-2 px-10 my-2 rounded-md",

                  isSelected && "selected",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <button className="  items-center rounded-lg space-y-1 focus:outline-none">
                  <p className="">{sport.name}</p>
                </button>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-2 gap-2 text-white">
          {" "}
          <div className="col-span-2">
            {selectedSport === "all" && (
              <>
                <div className="max-h-screen overflow-auto">
                  <div className="col-span-4 flex flex-col gap-3">
                    <div className="w-full mb-5">
                      {/* Header row */}
                      <div className="grid grid-cols-5 gap-2 items-center header text-white px-2 rounded-lg font-bold text-center text-sm p-3 mb-2">
                        <div>경기일시</div>
                        <div>승</div>
                        <div>무/핸디</div>
                        <div>패</div>
                        <div>상태</div>
                      </div>
                      {/* Match row */}
                      <div className="grid grid-cols-5 gap-2 bg-zinc-900/90 text-white text-sm text-center p-2 rounded-t-md justify-center">
                        <div className="p-2">07/28(일) 19:00</div>
                        <div className="p-2">
                          <p>FC 서울</p>
                        </div>
                        <div className="p-2">1.23</div>
                        <div className="p-2">
                          <p>수원 삼성</p>
                        </div>
                        <div className="p-2">진행중</div>
                      </div>

                      <div className="grid grid-cols-5 gap-2 bg-zinc-800/90 text-white text-sm text-center p-2 justify-center">
                        <div className="p-2">07/29(월) 15:30</div>
                        <div className="p-2">
                          <p>인천 유나이티드</p>
                        </div>
                        <div className="p-2">2.45</div>
                        <div className="p-2">
                          <p>제주 유나이티드</p>
                        </div>
                        <div className="p-2">대기</div>
                      </div>

                      <div className="grid grid-cols-5 gap-2 bg-zinc-900/90 text-white text-sm text-center p-2 justify-center">
                        <div className="p-2">07/30(화) 18:00</div>
                        <div className="p-2">
                          <p>울산 현대</p>
                        </div>
                        <div className="p-2">1.98</div>
                        <div className="p-2">
                          <p>강원 FC</p>
                        </div>
                        <div className="p-2">베팅</div>
                      </div>

                      <div className="grid grid-cols-5 gap-2 bg-zinc-800/90 text-white text-sm text-center p-2 justify-center">
                        <div className="p-2">07/31(수) 20:45</div>
                        <div className="p-2">
                          <p>포항 스틸러스</p>
                        </div>
                        <div className="p-2">3.21</div>
                        <div className="p-2">
                          <p>대구 FC</p>
                        </div>
                        <div className="p-2">마감</div>
                      </div>

                      <div className="grid grid-cols-5 gap-2 bg-zinc-900/90 text-white text-sm text-center p-2 justify-center">
                        <div className="p-2">08/01(목) 17:00</div>
                        <div className="p-2">
                          <p>전북 현대</p>
                        </div>
                        <div className="p-2">1.75</div>
                        <div className="p-2">
                          <p>광주 FC</p>
                        </div>
                        <div className="p-2">대기</div>
                      </div>

                      <div className="grid grid-cols-5 gap-2 bg-zinc-800/90 text-white text-sm text-center p-2 rounded-b-md justify-center">
                        <div className="p-2">08/02(금) 16:30</div>
                        <div className="p-2">
                          <p>성남 FC</p>
                        </div>
                        <div className="p-2">2.09</div>
                        <div className="p-2">
                          <p>서울 이랜드</p>
                        </div>
                        <div className="p-2">진행중</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            {selectedSport === "soccer" && (
              <>
                <div className="max-h-screen overflow-y-auto">
                  <MatchCard
                    flagSrc="/flag_icon/korea_icon.png"
                    sportIconSrc="/sports_nav/icon_sports02.png"
                    league="K 리그 1"
                    date="07월28일(일) 18:30"
                    teamA="FC 서울"
                    teamB="수원 삼성"
                    betCount="베팅 +24"
                    odds={[
                      {
                        leftLabel: "핸디캡",
                        leftValue: "2.05",
                        centerValue: "1.38",
                        rightLabel: "언더",
                        rightValue: "3.25",
                      },
                      {
                        leftLabel: "승무패",
                        leftValue: "1.85",
                        centerValue: "3.40",
                        rightLabel: "패",
                        rightValue: "4.60",
                      },
                    ]}
                  />

                  <MatchCard
                    flagSrc="/flag_icon/japan_icon.png"
                    sportIconSrc="/sports_nav/icon_sports02.png"
                    league="J 리그컵"
                    date="07월29일(월) 16:00"
                    teamA="감바 오사카"
                    teamB="나고야 그램퍼스"
                    betCount="베팅 +13"
                    odds={[
                      {
                        leftLabel: "오버",
                        leftValue: "1.97",
                        centerValue: "1.22",
                        rightLabel: "언더",
                        rightValue: "2.88",
                      },
                      {
                        leftLabel: "핸디캡",
                        leftValue: "2.25",
                        centerValue: "1.05",
                        rightLabel: "2폴더",
                        rightValue: "1.78",
                      },
                    ]}
                  />

                  <MatchCard
                    flagSrc="/flag_icon/algeria_icon.png"
                    sportIconSrc="/sports_nav/icon_sports02.png"
                    league="A 리그"
                    date="07월30일(화) 20:00"
                    teamA="멜버른 시티"
                    teamB="웨스턴 시드니"
                    betCount="베팅 +9"
                    odds={[
                      {
                        leftLabel: "무승부 없음",
                        leftValue: "2.10",
                        centerValue: "1.10",
                        rightLabel: "2폴더",
                        rightValue: "5.50",
                      },
                      {
                        leftLabel: "언오버",
                        leftValue: "1.50",
                        centerValue: "1.01",
                        rightLabel: "오버",
                        rightValue: "3.10",
                      },
                    ]}
                  />
                </div>
              </>
            )}
            {selectedSport === "basketball" && (
              <>
                <MatchCard
                  flagSrc="/flag_icon/andorra_icon.png"
                  sportIconSrc="/sports_nav/icon_sports03.png"
                  league="라리가"
                  date="08월01일(목) 21:00"
                  teamA="레알 마드리드"
                  teamB="헤타페"
                  betCount="베팅 +17"
                  odds={[
                    {
                      leftLabel: "승",
                      leftValue: "1.62",
                      centerValue: "1.22",
                      rightLabel: "패",
                      rightValue: "4.75",
                    },
                    {
                      leftLabel: "오버 2.5",
                      leftValue: "1.88",
                      centerValue: "1.05",
                      rightLabel: "언더 2.5",
                      rightValue: "2.10",
                    },
                  ]}
                />

                <MatchCard
                  flagSrc="/flag_icon/austria_icon.png"
                  sportIconSrc="/sports_nav/icon_sports03.png"
                  league="프리미어리그"
                  date="08월02일(금) 00:30"
                  teamA="맨체스터 유나이티드"
                  teamB="첼시 FC"
                  betCount="베팅 +31"
                  odds={[
                    {
                      leftLabel: "핸디캡",
                      leftValue: "1.91",
                      centerValue: "1.00",
                      rightLabel: "언더",
                      rightValue: "3.20",
                    },
                    {
                      leftLabel: "무",
                      leftValue: "3.10",
                      centerValue: "1.02",
                      rightLabel: "승",
                      rightValue: "2.45",
                    },
                  ]}
                />

                <MatchCard
                  flagSrc="/flag_icon/belarus_icon.png"
                  sportIconSrc="/sports_nav/icon_sports03.png"
                  league="분데스리가"
                  date="08월03일(토) 18:45"
                  teamA="도르트문트"
                  teamB="레버쿠젠"
                  betCount="베팅 +21"
                  odds={[
                    {
                      leftLabel: "승",
                      leftValue: "2.35",
                      centerValue: "1.09",
                      rightLabel: "무",
                      rightValue: "3.55",
                    },
                    {
                      leftLabel: "오버 3.5",
                      leftValue: "2.05",
                      centerValue: "1.04",
                      rightLabel: "언더 3.5",
                      rightValue: "1.78",
                    },
                  ]}
                />
              </>
            )}
            {selectedSport === "baseball" && (
              <>
                <MatchCard
                  flagSrc="/flag_icon/finland_icon.png"
                  sportIconSrc="/sports_nav/icon_sports04.png"
                  league="J 리그"
                  date="08월05일(월) 16:00"
                  teamA="가와사키 프론탈레"
                  teamB="요코하마 F.마리노스"
                  betCount="베팅 +8"
                  odds={[
                    {
                      leftLabel: "승",
                      leftValue: "2.18",
                      centerValue: "1.06",
                      rightLabel: "패",
                      rightValue: "3.40",
                    },
                    {
                      leftLabel: "오버 2.5",
                      leftValue: "1.95",
                      centerValue: "1.03",
                      rightLabel: "언더 2.5",
                      rightValue: "1.85",
                    },
                  ]}
                />

                <MatchCard
                  flagSrc="/flag_icon/georgia_icon.png"
                  sportIconSrc="/sports_nav/icon_sports04.png"
                  league="세리에 A"
                  date="08월06일(화) 22:00"
                  teamA="유벤투스"
                  teamB="AS 로마"
                  betCount="베팅 +19"
                  odds={[
                    {
                      leftLabel: "무",
                      leftValue: "2.75",
                      centerValue: "1.07",
                      rightLabel: "승",
                      rightValue: "2.22",
                    },
                    {
                      leftLabel: "핸디 -1",
                      leftValue: "3.05",
                      centerValue: "1.00",
                      rightLabel: "핸디 +1",
                      rightValue: "1.60",
                    },
                  ]}
                />

                <MatchCard
                  flagSrc="/flag_icon/indonesia_icon.png"
                  sportIconSrc="/sports_nav/icon_sports04.png"
                  league="브라질 세리에 A"
                  date="08월07일(수) 04:30"
                  teamA="플라멩구"
                  teamB="코린치앙스"
                  betCount="베팅 +14"
                  odds={[
                    {
                      leftLabel: "승",
                      leftValue: "1.68",
                      centerValue: "1.10",
                      rightLabel: "패",
                      rightValue: "4.10",
                    },
                    {
                      leftLabel: "오버 1.5",
                      leftValue: "1.50",
                      centerValue: "1.01",
                      rightLabel: "언더 1.5",
                      rightValue: "2.80",
                    },
                  ]}
                />
              </>
            )}
            {selectedSport === "volleyball" && (
              <>
                {" "}
                <MatchCard
                  flagSrc="/flag_icon/iraq_icon.png"
                  sportIconSrc="/sports_nav/icon_sports05.png"
                  league="라리가"
                  date="08월10일(토) 21:00"
                  teamA="레알 마드리드"
                  teamB="셀타 비고"
                  betCount="베팅 +24"
                  odds={[
                    {
                      leftLabel: "승",
                      leftValue: "1.92",
                      centerValue: "1.08",
                      rightLabel: "패",
                      rightValue: "3.95",
                    },
                    {
                      leftLabel: "핸디 -1.5",
                      leftValue: "2.60",
                      centerValue: "1.02",
                      rightLabel: "핸디 +1.5",
                      rightValue: "1.48",
                    },
                  ]}
                />
                <MatchCard
                  flagSrc="/flag_icon/japan_icon.png"
                  sportIconSrc="/sports_nav/icon_sports05.png"
                  league="EFL 챔피언십"
                  date="08월11일(일) 18:30"
                  teamA="노리치 시티"
                  teamB="리즈 유나이티드"
                  betCount="베팅 +17"
                  odds={[
                    {
                      leftLabel: "무",
                      leftValue: "3.00",
                      centerValue: "1.04",
                      rightLabel: "승",
                      rightValue: "2.50",
                    },
                    {
                      leftLabel: "오버 3.5",
                      leftValue: "2.90",
                      centerValue: "1.00",
                      rightLabel: "언더 3.5",
                      rightValue: "1.55",
                    },
                  ]}
                />
                <MatchCard
                  flagSrc="/flag_icon/romania_icon.png"
                  sportIconSrc="/sports_nav/icon_sports05.png"
                  league="리그 1"
                  date="08월12일(월) 02:00"
                  teamA="마르세유"
                  teamB="낭트"
                  betCount="베팅 +9"
                  odds={[
                    {
                      leftLabel: "승",
                      leftValue: "2.05",
                      centerValue: "1.06",
                      rightLabel: "패",
                      rightValue: "3.60",
                    },
                    {
                      leftLabel: "오버 2.0",
                      leftValue: "1.75",
                      centerValue: "1.03",
                      rightLabel: "언더 2.0",
                      rightValue: "2.00",
                    },
                  ]}
                />
              </>
            )}
            {selectedSport === "ice_hockey" && (
              <>
                <MatchCard
                  flagSrc="/flag_icon/saudiarabia_icon.png"
                  sportIconSrc="/sports_nav/icon_sports10.png"
                  league="세리에 A"
                  date="08월15일(목) 03:45"
                  teamA="인터 밀란"
                  teamB="볼로냐"
                  betCount="베팅 +14"
                  odds={[
                    {
                      leftLabel: "승",
                      leftValue: "1.67",
                      centerValue: "1.07",
                      rightLabel: "패",
                      rightValue: "4.10",
                    },
                    {
                      leftLabel: "핸디 -1",
                      leftValue: "2.20",
                      centerValue: "1.01",
                      rightLabel: "핸디 +1",
                      rightValue: "1.55",
                    },
                  ]}
                />

                <MatchCard
                  flagSrc="/flag_icon/singapore_icon.png"
                  sportIconSrc="/sports_nav/icon_sports10.png"
                  league="분데스리가"
                  date="08월16일(금) 20:30"
                  teamA="바이에른 뮌헨"
                  teamB="프라이부르크"
                  betCount="베팅 +19"
                  odds={[
                    {
                      leftLabel: "오버 2.5",
                      leftValue: "1.90",
                      centerValue: "1.05",
                      rightLabel: "언더 2.5",
                      rightValue: "1.80",
                    },
                    {
                      leftLabel: "승",
                      leftValue: "1.40",
                      centerValue: "1.00",
                      rightLabel: "패",
                      rightValue: "5.20",
                    },
                  ]}
                />

                <MatchCard
                  flagSrc="/flag_icon/uk_icon.png"
                  sportIconSrc="/sports_nav/icon_sports10.png"
                  league="J 리그"
                  date="08월17일(토) 17:00"
                  teamA="가시마 앤틀러스"
                  teamB="감바 오사카"
                  betCount="베팅 +8"
                  odds={[
                    {
                      leftLabel: "무",
                      leftValue: "3.20",
                      centerValue: "1.02",
                      rightLabel: "승",
                      rightValue: "2.15",
                    },
                    {
                      leftLabel: "핸디 -0.5",
                      leftValue: "2.00",
                      centerValue: "1.03",
                      rightLabel: "핸디 +0.5",
                      rightValue: "1.70",
                    },
                  ]}
                />
              </>
            )}
            {selectedSport === "lol" && (
              <>
                {" "}
                <MatchCard
                  flagSrc="/flag_icon/ukraine_icon.png"
                  sportIconSrc="/sports_nav/icon_sports10.png"
                  league="라리가"
                  date="08월18일(일) 22:00"
                  teamA="레알 소시에다드"
                  teamB="레알 베티스"
                  betCount="베팅 +9"
                  odds={[
                    {
                      leftLabel: "승",
                      leftValue: "2.35",
                      centerValue: "1.01",
                      rightLabel: "패",
                      rightValue: "2.90",
                    },
                    {
                      leftLabel: "오버 2.5",
                      leftValue: "2.10",
                      centerValue: "1.05",
                      rightLabel: "언더 2.5",
                      rightValue: "1.65",
                    },
                  ]}
                />
                <MatchCard
                  flagSrc="/flag_icon/vietnam_icon.png"
                  sportIconSrc="/sports_nav/icon_sports10.png"
                  league="리그 1"
                  date="08월19일(월) 02:00"
                  teamA="올랭피크 리옹"
                  teamB="RC 랑스"
                  betCount="베팅 +12"
                  odds={[
                    {
                      leftLabel: "무",
                      leftValue: "3.40",
                      centerValue: "1.02",
                      rightLabel: "승",
                      rightValue: "1.85",
                    },
                    {
                      leftLabel: "핸디 -1",
                      leftValue: "2.50",
                      centerValue: "1.00",
                      rightLabel: "핸디 +1",
                      rightValue: "1.50",
                    },
                  ]}
                />
                <MatchCard
                  flagSrc="/flag_icon/uk_icon.png"
                  sportIconSrc="/sports_nav/icon_sports10.png"
                  league="챔피언십"
                  date="08월20일(화) 01:30"
                  teamA="노리치 시티"
                  teamB="퀸즈 파크 레인저스"
                  betCount="베팅 +7"
                  odds={[
                    {
                      leftLabel: "승",
                      leftValue: "2.05",
                      centerValue: "1.04",
                      rightLabel: "패",
                      rightValue: "3.60",
                    },
                    {
                      leftLabel: "무",
                      leftValue: "3.10",
                      centerValue: "1.01",
                      rightLabel: "무",
                      rightValue: "3.10",
                    },
                  ]}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
