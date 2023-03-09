import { useState } from "react";
import Calendar from "../../components/Calendar";
import Input from "../../components/Input";
import styles from "./styles.module.scss";

export default function CalendarView() {
  const [date, setDate] = useState<string>("");
  const setValue = (value: string) => {
    setDate(value);
  };
  return (
    <div className={`${styles["calendar-view"]} w-50`}>
      <Calendar date={date} />
      <div className={`${styles.input} text-center`}>
        <Input setValue={setValue} />
      </div>
    </div>
  );
}
