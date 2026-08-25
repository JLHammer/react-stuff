import { useEffect, useState } from "react";
import type { CountdownProps } from "./Countdown.types";
import { CountdownStyled, CountdownValue } from "./Countdown.styled";

const secondsUntil = (targetDate: string) => {
  const secondsLeft = (new Date(targetDate).getTime() - Date.now()) / 1000;

  return Math.max(0, Math.floor(secondsLeft));
};

export const Countdown = ({ label, targetDate }: CountdownProps) => {
  const [seconds, setSeconds] = useState(() => secondsUntil(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(secondsUntil(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <CountdownStyled>
      {label}:{" "}
      <CountdownValue>{seconds.toLocaleString("da-DK")}</CountdownValue>{" "}
      sekunder
    </CountdownStyled>
  );
};
