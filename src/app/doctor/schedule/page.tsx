"use client"
import { departmentList } from "@/const/departmentList";
import { Department } from "@/types/department";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DoctorSchedulePage() {
    const dayOfWeek = ["월", "화", "수", "목", "금", "토", "일"];
    const router = useRouter();

    const [name, setName] = useState<string>("");
    const [department, setDepartment] = useState<Department>("내과")
    const [schedule, setSchedule] = useState<string[]>([]);

    const selectWeekdays = (day: string) => {
        if (schedule.includes(day)) {
            setSchedule(schedule.filter((d) => d !== day));
            return;
        }
        setSchedule([...schedule, day])
    }

    const saveClick = () => {
        setName("");
        setDepartment("내과");
        setSchedule([]);
    }

    useEffect(() => {
        localStorage.setItem('activeTab', "settings");
    }, [])

  return (
    <div className="relative min-h-screen max-w-md mx-auto bg-background-light dark:bg-background-dark pb-[88px]">
      {/* Header */}
      <div className="sticky top-0 z-50 flex items-center justify-between p-4 pb-2 border-b border-slate-200 dark:border-border-dark/30 bg-background-light dark:bg-background-dark">
        <button className="flex size-12 items-center justify-start active:opacity-70" onClick={() => router.back()}>
          <span className="dark:text-white material-symbols-outlined text-[24px]">
            arrow_back_ios_new
          </span>
        </button>

        <h2 className="dark:text-white flex-1 text-center text-lg font-bold tracking-[-0.015em] pr-12">
          의사 스케줄 등록
        </h2>

        <div className="absolute right-4">
          <button className="text-primary font-bold active:opacity-70" onClick={saveClick}>
            저장
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="dark:text-white flex-1 overflow-y-auto pb-24">
        {/* 기본 정보 */}
        <div className="flex flex-col gap-4 px-4 py-6">
          <label className="flex flex-col gap-2">
            <p className="text-base font-medium">의사 성명</p>
            <input
              placeholder="이름"
              className="h-14 rounded-xl border border-slate-300 dark:border-border-dark bg-white dark:bg-surface-dark px-4 text-base focus:ring-2 focus:ring-primary"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label className="flex flex-col gap-2">
            <p className="text-base font-medium">진료 과목</p>
            <div className="relative">
              <select 
                value={department}
                onChange={(e) => setDepartment(e.target.value as Department)}
                className="h-14 w-full rounded-xl border border-slate-300 dark:border-border-dark bg-white dark:bg-surface-dark px-4 pr-10 text-base appearance-none"
              >
                {departmentList.filter(((dt) => dt !== "전체")).map((d, i) => (
                  <option key={i}>{d}</option>
                ))}
              </select>
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                expand_more
              </span>
            </div>
          </label>
        </div>

        {/* <Divider /> */}

        {/* 근무 상태 */}
        {/* <div className="flex justify-between items-center px-4 py-4">
          <div>
            <div className="flex items-center gap-2">
              <p className="font-medium">현재 근무 중</p>
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            </div>
            <p className="text-sm text-text-secondary mt-1">
              즉시 진료가 가능한 상태로 표시됩니다
            </p>
          </div>

          <label className="relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full bg-slate-300 dark:bg-[#283039] p-0.5 has-[:checked]:justify-end has-[:checked]:bg-primary">
            <div className="h-[27px] w-[27px] rounded-full bg-white shadow" />
            <input
              type="checkbox"
              defaultChecked
              className="absolute invisible"
            />
          </label>
        </div> */}

        <Divider />

        {/* 정규 진료 시간 */}
        <section className="pt-6">
          <h3 className="px-4 pb-4 text-lg font-bold">정규 진료 시간</h3>

          {/* 요일 */}
          <div className="px-4 pb-6">
            <p className="text-sm font-medium text-text-secondary mb-3">
              요일 선택
            </p>
            <div className="flex gap-2 overflow-x-auto no-scrollbar">
              {dayOfWeek.map((d, i) => (
                <button
                  key={d}
                  className={`aspect-square min-w-[40px] max-w-[48px] rounded-full text-sm flex items-center justify-center ${
                    schedule.includes(d)
                      ? "bg-primary text-white font-bold shadow-lg"
                      :"bg-slate-200 dark:bg-surface-dark text-text-secondary"
                  }`}
                  onClick={() => selectWeekdays(d)}
                //     ${
                //     i === 0
                //       ? "bg-primary text-white font-bold shadow-lg"
                //       : "bg-slate-200 dark:bg-surface-dark text-text-secondary"
                //   }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          {/* 시간 */}
          <div className="px-4 py-6 flex flex-col gap-4">
            <p className="font-medium">시간 설정</p>

            <div className="flex items-center gap-3">
              <TimeInput label="시작" value="09:00" />
              <span className="text-text-secondary font-bold">~</span>
              <TimeInput label="종료" value="18:00" />
            </div>

            {/* <button className="mt-2 w-full flex items-center justify-center gap-2 rounded-xl border border-dashed border-slate-300 dark:border-border-dark py-3 text-primary hover:bg-primary/5">
              <span className="material-symbols-outlined">add_circle</span>
              휴게시간 추가
            </button> */}
          </div>
        </section>

        {/* <Divider /> */}

        {/* 휴무일 */}
        {/* <section className="px-4 pt-4 pb-8">
          <div className="flex justify-between items-center pb-4">
            <h3 className="text-lg font-bold">휴무일 설정</h3>
            <button className="flex items-center gap-1 text-sm font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-lg">
              <span className="material-symbols-outlined text-lg">add</span>
              날짜 추가
            </button>
          </div>

          <HolidayItem date="2023. 12. 25 (월)" label="크리스마스" />
          <HolidayItem date="2024. 01. 01 (월)" label="신정" />
        </section> */}

        {/* 삭제 */}
        {/* <div className="px-4 pb-8">
          <button className="w-full rounded-xl bg-slate-200 dark:bg-[#283039] py-4 font-bold text-red-600 dark:text-red-500">
            스케줄 삭제
          </button>
        </div> */}
      </div>
    </div>
  );
}

/* ---------------- components ---------------- */

function Divider() {
  return (
    <div className="h-2 bg-slate-100 dark:bg-[#1c2127]/50 border-y border-slate-200 dark:border-border-dark/50" />
  );
}

function TimeInput({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex-1 relative">
      <label className="absolute -top-2 left-3 bg-background-light dark:bg-background-dark px-1 text-xs font-medium text-primary">
        {label}
      </label>
      <input
        type="time"
        defaultValue={value}
        className="h-14 w-full rounded-xl border border-slate-300 dark:border-border-dark bg-white dark:bg-surface-dark text-center text-lg font-medium focus:ring-1 focus:ring-primary"
      />
    </div>
  );
}

function HolidayItem({ date, label }: { date: string; label: string }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-surface-dark p-4 shadow-sm mb-3">
      <div className="flex items-center gap-3">
        <div className="size-10 flex items-center justify-center rounded-full bg-red-100 dark:bg-red-500/10 text-red-600 dark:text-red-500">
          <span className="material-symbols-outlined">calendar_check</span>
        </div>
        <div>
          <p className="font-medium">{date}</p>
          <p className="text-xs text-text-secondary">{label}</p>
        </div>
      </div>
      <button className="size-8 flex items-center justify-center rounded-full text-slate-400 hover:text-red-500">
        <span className="material-symbols-outlined text-xl">close</span>
      </button>
    </div>
  );
}
