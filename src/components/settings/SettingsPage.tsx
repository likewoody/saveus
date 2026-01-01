"use client"

import { useEffect, useState } from "react";
import PageHeader from "../header/PageHeader";
import SettingsItem from "./SettingsItem";
import SettingsSection from "./SettingsSection";
import { useRouter } from "next/navigation";

export default function SettingsPage() {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        // 초기 로드 시 로컬 스토리지 또는 시스템 설정에 따라 다크모드 적용
        const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        setIsDarkMode(isDark);

        if (isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [])

    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        if (newMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };
    const doctorScheduleClick = () => {
        router.push("/doctor/schedule");
    }

  return (
    <div className="relative h-[100dvh] w-full max-w-md mx-auto shadow-2xl">
      <PageHeader title="설정" showBack />

      <main className="px-4 pt-2 pb-10 flex flex-col gap-6">
        <SettingsSection title="운영">
          <button onClick={doctorScheduleClick} className="hover:bg-gray-50 dark:hover:bg-white/5 transition">
            <SettingsItem
              icon="calendar_add_on"
              iconBg="bg-blue-50 dark:bg-surface-highlight"
              iconColor="text-primary"
              label="의사 선생님 스케줄 등록"
              right={
                <span className="material-symbols-outlined text-gray-400">
                  chevron_right
                </span>
              }
            />
          </button>
        </SettingsSection>

        <SettingsSection title="환경 설정">
          <button className="hover:bg-gray-50 dark:hover:bg-white/5 transition">
            <SettingsItem
              icon="notifications"
              iconBg="bg-red-50 dark:bg-surface-highlight"
              iconColor="text-red-500"
              label="알림 설정"
              right={
                <span className="material-symbols-outlined text-gray-400">
                  chevron_right
                </span>
              }
            />
          </button>

          <SettingsItem
            icon="dark_mode"
            iconBg="bg-gray-900 dark:bg-surface-highlight"
            iconColor="text-white dark:text-yellow-400"
            label="다크 모드"
            right={
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={isDarkMode}
                  onChange={toggleDarkMode}
                />
                <div className="w-[51px] h-[31px] rounded-full bg-gray-200 dark:bg-[#3a4452] peer-checked:bg-primary after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-[27px] after:w-[27px] after:transition-all peer-checked:after:translate-x-full" />
              </label>
            }
          />
        </SettingsSection>

        <SettingsSection title="정보">
            <button className="hover:bg-gray-50 dark:hover:bg-white/5 transition">
                <SettingsItem
                    icon="security"
                    iconBg="bg-green-50 dark:bg-surface-highlight"
                    iconColor="text-green-600"
                    label="개인정보 처리방침"
                    right={
                    <span className="material-symbols-outlined text-gray-400">
                        chevron_right
                    </span>
                    }
                />
          </button>
          <button className="hover:bg-gray-50 dark:hover:bg-white/5 transition">
            <SettingsItem
                icon="info"
                iconBg="bg-gray-100 dark:bg-surface-highlight"
                iconColor="text-gray-500 dark:text-gray-300"
                label="앱 정보"
                right={
                <span className="material-symbols-outlined text-gray-400">
                    chevron_right
                </span>
                }
            />
          </button>
        </SettingsSection>

        <footer className="mt-4 text-center">
          <p className="text-gray-400 text-xs">
            Version 1.0.0 (Build 2026.01.01)
          </p>
          <p className="text-gray-400 text-[10px]">© 2026 SaveUs.</p>
        </footer>
      </main>

    </div>
  );
}
