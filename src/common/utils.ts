export const getFormattedDate = (date: string) => {
  const dateArray: Array<string> = date.split("/");
  return new Date(`${dateArray[1]}/${dateArray[0]}/${dateArray[2]}`);
};
