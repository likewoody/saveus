interface Props {
  active: "list" | "settings";
}

export default function BottomNav({ active }: Props) {
  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/95 dark:bg-background-dark/95 border-t border-gray-200 dark:border-gray-800 backdrop-blur-lg">
      <div className="flex h-16">
        <NavItem
          label="병원 리스트"
          icon="local_hospital"
          active={active === "list"}
        />
        <NavItem label="설정" icon="settings" active={active === "settings"} />
      </div>
    </div>
  );
}

function NavItem({
  label,
  icon,
  active,
}: {
  label: string;
  icon: string;
  active: boolean;
}) {
  return (
    <button
      className={`flex-1 flex flex-col items-center justify-center gap-1 ${
        active ? "text-primary font-bold" : "text-gray-400"
      }`}
    >
      {active && <div className="absolute top-0 w-12 h-[2px] bg-primary" />}
      <span className="material-symbols-outlined text-[24px]">{icon}</span>
      <span className="text-[10px]">{label}</span>
    </button>
  );
}
