import { Doctor } from "@/types/doctor";
import { Hospital } from "@/types/hospital";

interface Props {
  hospital: Hospital;
  doctors: Doctor[];
  // open?: boolean;
  // disabled?: boolean;
  // reason?: "no-bed" | "no-doctor";
}

export default function HospitalCard({
  // open,
  // disabled,
  // reason,
  hospital,
  doctors,
}: Props) {
  return (
    <details
      className="group rounded-xl border overflow-hidden dark:text-white border-[#3b4754]"
      //   ${
      //   disabled ? "border-[#3b4754]/50 opacity-90" : "border-[#3b4754]"
      // }`}
      // open={open}
    >
      <summary className="p-4 cursor-pointer relative">
        <div className="flex justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              {/* TODO: 실 데이터으로 변경 */}
              <h3 className="font-bold ">{hospital.name}</h3>
              {/* {!disabled && ( */}
              {doctors.length === 0 ? (
                <span className="text-[10px] px-2 py-0.5 rounded bg-status-red/20 text-status-red border border-status-red/30">
                  불가
                </span>
              ) : (
                <span className="text-[10px] px-2 py-0.5 rounded bg-status-green/20 text-status-green border border-status-green/30">
                  가용
                </span>
              )}

              {/* )} */}
              {/* {disabled && (
                
              )} */}
            </div>
            <p className="text-xs text-[#9dabb9]">
              {/* 
                TODO: 실 데이터으로 변경 
                  거리는 실제 구급차의 위치를 받아서 거리를 구해줘야함.
                  남은 거리 = abs(구급차 위치 - 병원 위치)
              */}
              {hospital.location} · <span>1.2km</span>
            </p>
          </div>
          {/* TODO: 실 데이터으로 변경 */}
          {/* <span className="text-xs text-primary font-bold">응급의학과</span> */}
        </div>
      </summary>

      <div className="px-4 pb-4 pt-2 border-t border-[#3b4754]/50">
        {/* {busy && (
          <div className="mb-3 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded">
            <p className="text-xs text-yellow-500">
              대기 시간이 1시간 이상 소요될 수 있습니다.
            </p>
          </div>
        )} */}

        {doctors.length === 0 && (
          <div className="mb-3 p-3 bg-status-red/10 border border-status-red/20 rounded flex gap-2">
            <span className="material-symbols-outlined text-status-red">
              block
            </span>
            <div>
              <p className="text-status-red text-sm font-bold">의료진 부재</p>
              <p className="text-status-red/80 text-xs">
                해당과의 담당 전문의 없음
              </p>
            </div>
          </div>
        )}

        {doctors.length !== 0 && (
          <div>
            <div className="grid grid-cols-2 gap-3">
              <button
                // disabled={disabled}
                className="py-3 rounded-lg font-bold flex justify-center gap-2 bg-primary bg-blue-600 hover:bg-blue-400"
                //   ${
                //   disabled
                //     ? "bg-[#3b4754] opacity-50 cursor-not-allowed"
                //     : "bg-primary bg-blue-600 hover:bg-blue-400"
                // }`}
              >
                <span className="material-symbols-outlined">call</span>
                병원에 전화하기
              </button>
              <button className="py-3 rounded-lg bg-gray-500 flex justify-center gap-2 hover:bg-gray-300">
                <span className="material-symbols-outlined">navigation</span>
                길찾기
              </button>
            </div>

            {/* Mock Data -> 실 데이터로 변경 필요 */}
            <div className="flex flex-col gap-2">
              <p className="text-[#9dabb9] text-sm font-bold">
                진료 가능한 의사 선생님
              </p>
              <div className="flex flex-col gap-2 max-h-[110px] overflow-y-auto pr-1">
                {doctors.map((doctor, idx) => {
                  return (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 rounded-lg border border-[#3b4754]/50 transition-colors"
                    >
                      <div className="flex flex-col bg-background justify-center">
                        <span className="text-sm font-semibold">
                          {doctor.name} 의사 선생님{" "}
                          <span className="text-xs font-normal">
                            {doctor.department}
                          </span>
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <div
                          className={`h-2 w-2 ${
                            doctor.available
                              ? "bg-status-green"
                              : "bg-status-red"
                          } rounded-full shadow-[0_0_4px_rgba(34,197,94,0.5)]`}
                        ></div>
                        <span
                          className={`${
                            doctor.available
                              ? "text-status-green"
                              : "text-status-red"
                          } text-xs font-medium`}
                        >
                          {doctor.available ? "가용" : "불가"}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </details>
  );
}
