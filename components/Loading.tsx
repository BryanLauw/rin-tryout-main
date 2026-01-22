'use client'

import { useLoading } from "@/context/LoadingContext";

export default function Loading() {
  const { loading } = useLoading();
  if (!loading) return null;
  return (
    <>
      <div className="flex justify-center items-center h-screen fixed top-0 left-0 right-0 bottom-0 z-50 backdrop-blur-xl">
        <div className="animate-spin rounded-full size-24 border-y-2 border-gray-900"></div>
      </div>
    </>
  );
}
