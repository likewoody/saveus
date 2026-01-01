interface Props {
  icon: string;
  iconBg?: string;
  iconColor?: string;
  label: string;
  right?: React.ReactNode;
}

export default function SettingsItem({
  icon,
  iconBg,
  iconColor,
  label,
  right,
}: Props) {
  return (
    <div className="flex items-center gap-4 px-4 min-h-[60px] justify-between">
      <div className="flex items-center gap-4 overflow-hidden">
        <div
          className={`flex items-center justify-center rounded-lg shrink-0 size-9 ${iconBg} ${iconColor}`}
        >
          <span
            className="material-symbols-outlined text-[20px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            {icon}
          </span>
        </div>
        <p className="text-gray-900 dark:text-white text-[17px] font-medium truncate">
          {label}
        </p>
      </div>
      {right}
    </div>
  );
}
