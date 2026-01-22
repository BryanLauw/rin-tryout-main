"use client";

import { checkClientId } from "@/be/action/user";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import EndExam from "./EndExam";
import Loading from "@/components/Loading";
import { useLoading } from "@/context/LoadingContext";

export default function CheckClientId({
  children,
}: {
  children: React.ReactNode;
}) {
  const { id: userId } = useParams();
  const [isAllowed, setIsAllowed] = useState(false);

  const { setLoading } = useLoading();

  useEffect(() => {
    setLoading(true);

    const clientId = localStorage.getItem(userId + "-clientId");
    if (clientId === null) {
      setLoading(false);
      return;
    }

    async function fetchCheckClientId() {
      const response = await checkClientId(
        userId as string,
        clientId as string
      );

      setLoading(false);
      if (response.isMatch) setIsAllowed(true);
    }

    fetchCheckClientId();
  }, []);

  if (!isAllowed) return <EndExam />;
  return <>{children}</>;
}
