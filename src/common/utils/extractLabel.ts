import dayjs from "dayjs";

export const extractLabel = (chartType: string, date: string) => {
  switch (chartType) {
    case "yearly":
      return dayjs(date).format("YYYY");
    case "monthly":
      return dayjs(date).format("M/YY");
    case "daily":
      return dayjs(date).format("DD");
    case "hourly":
      const [hour, minute] = date.split(":");
      return parseInt(hour, 10) + ":" + minute;

    default:
      return date;
  }
};
