import dayjs from "dayjs";

export function getNow() {
  return dayjs().toISOString()
}

export function formatTimeLeft(timeLeft: number) {
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  return `${hours ? hours.toString().padStart(2, "0") + ":" : ""}${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}
