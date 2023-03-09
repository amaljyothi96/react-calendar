export const getFormattedDate = (date: string) => {
  const dateArray: Array<string> = date.split("/");
  dateArray[2] = Number(dateArray[2]) < 1000 ? "1000" : `${dateArray[2]}`;
  if (isNaN(Date.parse(`${dateArray[1]}/${dateArray[0]}/${dateArray[2]}`)))
    return false;
  else return new Date(`${dateArray[1]}/${dateArray[0]}/${dateArray[2]}`);
};
