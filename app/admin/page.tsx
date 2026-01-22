// app/admin/page.tsx
"use client";

import { getAllUserAnswer } from "@/be/action/getUserAnswer";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function AdminPage() {
  const [loading, setLoading] = useState(false);
  
  const handleExport = async () => {
    setLoading(true);
    const result = await getAllUserAnswer();
    
    if (result.success) {
      alert("Data berhasil di-export ke file CSV!");
      console.log("Total users:", result.data?.length);
    } else {
      alert("Gagal export data: " + result.error);
    }
    
    setLoading(false);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <Button onClick={handleExport} disabled={loading}>
        {loading ? "Exporting..." : "Export User Answers to CSV"}
      </Button>
    </div>
  );
}