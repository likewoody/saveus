"use client"

import HospitalScreenPage from "@/components/hospital/HospitalScreenPage";
import BottomNav from "@/components/nav/BottomNav";
import SettingsPage from "@/components/settings/SettingsPage";
import React, { useEffect } from "react";

export default function Page() {
  const [activeTab, setActiveTab] = React.useState<"list" | "settings">("list");

  useEffect(() => {
    localStorage.getItem("activeTab") === "settings" && setActiveTab("settings");
    localStorage.removeItem("activeTab");
  }, [])

  return (
    <main className="flex justify-center">
      {activeTab === "list" && (
        <HospitalScreenPage />
      )}

      {activeTab === "settings" && (
        <SettingsPage />
      )}
      

      <BottomNav active={activeTab} setCurActive={setActiveTab}/>
    </main>
  );
}
