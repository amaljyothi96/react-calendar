import { useEffect, useState } from "react";
import { daysOfWeek, months } from "../../common/constant";
import { getFormattedDate } from "../../common/utils";
import styles from "./styles.module.scss";

interface CalendarPropType {
  date: string;
}

export default function Calendar(props: CalendarPropType) {
  const { date } = props;

  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<number>(0);
  const [dateOfday, setDateOfDay] = useState<number>(0);
  const [firstDay, setFirstDay] = useState<number>(0);
  const [lastDay, setLastDay] = useState<number>(0);

  useEffect(() => {
    if (date) {
      const dateObj = getFormattedDate(date);
      setDateOfDay(dateObj.getDate());
      setMonth(months[dateObj.getMonth()]);
      setYear(dateObj.getFullYear());
      setFirstDay(
        new Date(dateObj.getFullYear(), dateObj.getMonth(), 1).getDay()
      );
      setLastDay(
        new Date(dateObj.getFullYear(), dateObj.getMonth() + 1, 0).getDate()
      );
    }
  }, [date]);

  return date ? (
    <div className={styles.calendar}>
      <div className={`text-center ${styles.title}`}>
        {month} {year}
      </div>
      <div className="d-flex">
        {daysOfWeek.map((day) => {
          return (
            <div key={day} className={`${styles.column} text-center`}>
              {day}
            </div>
          );
        })}
      </div>
      <div className="d-flex flex-wrap">
        {[...Array(firstDay)].map((row, index) => {
          return <div key={index} className={styles.column} />;
        })}
        {[...Array(lastDay)].map((row, index) => {
          return (
            <div
              key={index}
              className={`${
                index + 1 === dateOfday
                  ? `${styles.highlight} ${styles.column}`
                  : styles.column
              } d-flex justify-center align-center`}
            >
              {index + 1}
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <div></div>
  );
}
