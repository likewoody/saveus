"use client";

import { useRouter } from "next/navigation";

interface Props {
  title: string;
  showBack?: boolean;
}

export default function PageHeader({ title, showBack }: Props) {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-10 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800/50 p-4 pb-2 flex flex-col gap-2">
      {showBack && (
        <button
          onClick={() => router.back()}
          className="flex items-center text-primary text-base font-medium -ml-1 hover:opacity-80"
        >
          <span className="material-symbols-outlined text-[24px]">
            chevron_left
          </span>
          뒤로
        </button>
      )}

      <h1 className="text-gray-900 dark:text-white tracking-tight text-[32px] font-bold leading-tight">
        {title}
      </h1>
    </header>
  );
}
