"use client";

import FilterSection from "../filter/FilterSection";
import HospitalCard from "./HospitalCard";
import { useState } from "react";
import { Department } from "@/types/department";
import { hospitalList } from "@/const/hospitalMockList";
import { doctors } from "@/const/doctor";

/**
 *
 * 진료과를 선택했을 때, 의사 선생님 목록 중에 가용 가능한, 해당 과의 선생님이 있다면 목록을 보여준다.
 */

export default function HospitalScreenPage() {
  const [curDepartment, setCurDepartment] = useState<Department>("전체");
  // const [curAvailable, setCurAvailable] = useState<boolean>(false);

  return (
    <div className="relative flex h-[100dvh] w-full max-w-md mx-auto flex-col bg-background-light dark:bg-background-dark border-x border-[#3b4754]/30 shadow-2xl">
      {/* Header */}
      <header className="sticky top-0 z-50 dark:bg-background-dark/95 backdrop-blur-md border-b border-[#3b4754] px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          {/* <button>
            <span className="material-symbols-outlined text-[28px]">
              arrow_back
            </span>
          </button> */}
          <h2 className="text-lg font-bold tracking-[-0.015em] dark:text-white">
            병원 목록
          </h2>
        </div>
        {/* <button className="h-10 w-10 rounded-full hover:bg-[#3b4754]/50 flex items-center justify-center">
          <span className="material-symbols-outlined text-[24px]">search</span>
        </button> */}
      </header>

      <FilterSection
        curDepartment={curDepartment}
        setCurDepartment={setCurDepartment}
      />

      {/* Result Header */}
      <div className="px-4 py-3 flex justify-between items-center border-b border-[#3b4754]/50">
        <h3 className="text-sm text-[#9dabb9]">
          검색 결과 <span className="font-bold ml-1">5건</span>
        </h3>
        <div className="flex items-center gap-1 text-primary text-xs font-medium bg-primary/10 px-2 py-1 rounded">
          <span className="material-symbols-outlined text-[14px]">
            check_circle
          </span>
          가용순
        </div>
      </div>

      {/* List */}
      {/* Mock Data */}
      <div className="flex-1 overflow-y-auto p-4 mb-[80px] flex flex-col gap-3">
        {hospitalList
          .map((hospital) => {
            const filteredDoctors = doctors.filter(
              (doctor) =>
                hospital.name === doctor.hospital &&
                doctor.available &&
                (curDepartment === "전체" ||
                  curDepartment === doctor.department)
            );
            return { hospital, filteredDoctors };
          })
          // 추가 정렬 필요한게 위치 순으로 정렬하는 것도 필요함
          // 이게 가장 어려운데 일단 현재 위치 기반으로 주변에 있는 병원 정보를 가져오는게 필요함
          // 구급 상황이니까 웬만하면 상급 병원 위주의 데이터가 필요하겠군
          // 이를 크롤링 해야하겠네....
          .sort((a, b) => {
            const aIsAvailable = a.filteredDoctors.length > 0;
            const bIsAvailable = b.filteredDoctors.length > 0;

            // 1. 가용 병원이 비가용 병원보다 위로 오도록 정렬
            if (aIsAvailable !== bIsAvailable) {
              return aIsAvailable ? -1 : 1;
            }

            // 2. 가용성이 같다면 병원 이름 가나다순으로 정렬
            return a.hospital.name.localeCompare(b.hospital.name, "ko");
          })
          .map(({ hospital, filteredDoctors }, idx) => (
            <div key={idx}>
              {/* 의사 선생님들도 가나다 순 */}
              <HospitalCard
                hospital={hospital}
                doctors={[...filteredDoctors].sort((a, b) =>
                  a.name.localeCompare(b.name, "ko")
                )}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
