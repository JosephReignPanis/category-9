"use client";
import { useState } from "react";
import Image from "next/image";
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
export default function Home() {
  const [selectedSport, setSelectedSport] = useState("all");
  const [matchCardData, setMatchCardData] = useState({
    flagSrc: "",
    sportIconSrc: "",
    league: "",
    date: "",
    teamA: "",
    teamB: "",
    betCount: "",
    odds: [],
  });
  return (
    <>
      <div className="flex flex-row  items-center justify-between bg-neutral-900 overflow-x-auto">
        {sports.map((sport) => {
          const isSelected = selectedSport === sport.id;

          return (
            <div
              key={sport.id}
              onClick={() => setSelectedSport(sport.id)}
              className={[
                "w-[120px]",
                "h-[100px]",
                "flex-none",
                "flex flex-col items-center justify-center",
                "cursor-pointer",
                "transition-colors duration-200",
                "border-r-2 border-zinc-950/50",
                isSelected && "bg-neutral-800",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <button className="flex flex-col items-center justify-center space-y-1 focus:outline-none">
                <Image
                  src={sport.icon}
                  height={30}
                  width={30}
                  alt={sport.name}
                />
                <p className="my-0">{sport.name}</p>
                <p className="my-0 text-sm text-gray-400">(123)</p>
              </button>
            </div>
          );
        })}
      </div>
      <div className="flex p-2 px-4 font-bold bg-neutral-900 my-2">
        스포츠 해외형
      </div>
      {/* Content Section */}{" "}
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-2 text-white">
        <div className="col-span-1 ">
          {" "}
          <DividendsBonus
            title=" 다폴더 보너스 추가 배당 (자동)"
            description="(3, 5, 7) 폴더 이상 조합시 지급 (1.30미만 배당 조합불가)"
            rows={[
              {
                label: " 3폴더이상",
                value: "1.03",
                textColorClass: "text-violet-300",
              },
              {
                label: " 3폴더이상",
                value: "1.03",
                textColorClass: "text-yellow-300",
              },
              {
                label: " 3폴더이상",
                value: "1.03",
                textColorClass: "text-blue-300",
              },
            ]}
          />
          {selectedSport === "all" && (
            <>
              <div className="max-h-screen overflow-auto">
                <div className="col-span-4 flex flex-col gap-3">
                  <div className="w-full mb-5">
                    {/* Header row */}
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

        <div className="hidden sm:block col-span-1 max-h-screen overflow-y-auto">
          <Image
            src={"/banner_long.png"}
            width={500}
            height={200}
            alt="banner"
            className="w-full h-auto"
          />
        </div>
      </div>
    </>
  );
}
