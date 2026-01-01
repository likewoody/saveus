export default function SettingsSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h3 className="text-gray-500 dark:text-gray-400 text-xs font-semibold uppercase tracking-wider px-2 pb-2">
        {title}
      </h3>
      <div className="flex flex-col overflow-hidden rounded-xl bg-white dark:bg-surface-dark shadow-sm border border-gray-100 dark:border-gray-800 divide-y divide-gray-100 dark:divide-gray-800">
        {children}
      </div>
    </section>
  );
}
