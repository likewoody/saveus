import { departmentList } from "@/const/departmentList";
import { Department } from "@/types/department";

interface Props {
  curDepartment: Department;
  setCurDepartment: React.Dispatch<
    React.SetStateAction<Props["curDepartment"]>
  >;
}

export default function FilterSection({
  curDepartment,
  setCurDepartment,
}: Props) {
  return (
    <div className="p-4 pb-2 flex flex-col gap-2 dark:text-white">
      {/* Department */}
      <details className="group rounded-xl border border-[#3b4754] dark:bg-background-dark overflow-hidden">
        <summary className="px-4 py-3 flex justify-between items-center cursor-pointer">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">
              medical_services
            </span>
            <span className="text-sm font-semibold">진료과 선택</span>
          </div>
          <span className="material-symbols-outlined group-open:rotate-180 transition-transform">
            expand_more
          </span>
        </summary>

        <div className="px-4 pb-4 pt-2 border-t border-[#3b4754]/50">
          <div className="grid grid-cols-3 gap-2">
            {departmentList.map((d, i) => (
              <button
                key={i}
                className={`py-2 rounded-lg text-xs border ${
                  d === curDepartment
                    ? "bg-primary border-primary font-bold"
                    : "dark:bg-background-dark text-[#9dabb9] border-[#3b4754] hover:bg-background-dark hover:text-white"
                }`}
                onClick={() => setCurDepartment(d)}
              >
                {d}
              </button>
            ))}
          </div>
        </div>
      </details>
    </div>
  );
}
