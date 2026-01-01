import { Doctor } from "@/types/doctor";

export const doctors: Doctor[] = [
  // ───────── 서울대학교병원 ─────────
  {
    name: "김민준",
    hospital: "서울대학교병원",
    department: "내과",
    available: true,
  },
  {
    name: "박서연",
    hospital: "서울대학교병원",
    department: "응급의학",
    available: false,
  },
  {
    name: "이도현",
    hospital: "서울대학교병원",
    department: "신경외과",
    available: true,
  },

  // ───────── 고려대학병원 ─────────
  {
    name: "최지훈",
    hospital: "고려대학병원",
    department: "정형외과",
    available: true,
  },
  {
    name: "한유진",
    hospital: "고려대학병원",
    department: "비뇨기과",
    available: false,
  },
  {
    name: "정수빈",
    hospital: "고려대학병원",
    department: "마취통증",
    available: true,
  },

  // ───────── 세브란스병원 ─────────
  {
    name: "오지훈",
    hospital: "세브란스병원",
    department: "산부인과",
    available: true,
  },
  {
    name: "윤하늘",
    hospital: "세브란스병원",
    department: "소아청소년",
    available: false,
  },
  {
    name: "장민혁",
    hospital: "세브란스병원",
    department: "응급의학",
    available: true,
  },
];
