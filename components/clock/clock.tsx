import { ReactElement, useEffect, useState } from "react";
import { TimeLabel } from "./styles";

const TIME_OPTIONS: Intl.DateTimeFormatOptions = {
  hour: "numeric",
  minute: "numeric",
};

export const Clock = (): ReactElement => {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString("ru-RU", TIME_OPTIONS),
  );

  useEffect(() => {
    const displayClock = (): void => {
      const time = new Date().toLocaleTimeString("ru-RU", TIME_OPTIONS);
      setTime(time);
      setTimeout(displayClock, 1000);
    };

    const timeout = setTimeout(displayClock, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return <TimeLabel>{time}</TimeLabel>;
};
