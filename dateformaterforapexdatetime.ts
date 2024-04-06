function formatter(date: string) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const d = new Date(date);
  const day = d.getDate();
  const month = d.getMonth();
  const year = d.getFullYear();
  return `${day} ${months[month]} ${year}`;
}
export const datetimeapexformatter = (list: string[]) => {
  const dates = [];
  for (let i = 0; i < list.length; i++) {
    dates.push(formatter(list[i]));
  }
  return [dates, dates[dates.length - 1]];
};

export const manipulateDate = (currentDate: string, option: string) => {
  // Parse the current date string into components
  const [day, month, year] = currentDate.split(" ");

  // Convert month abbreviation to its index
  const months: any = {
    Jan: 0,
    Feb: 1,
    Mar: 2,
    Apr: 3,
    May: 4,
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Oct: 9,
    Nov: 10,
    Dec: 11,
  };

  // Convert month abbreviation to its index
  const monthIndex = months[month];

  // Create a Date object with the current date
  // @ts-ignore
  const date = new Date(year, monthIndex, day);

  // Switch based on the option provided
  switch (option) {
    case "one_month":
      date.setMonth(date.getMonth() - 1);
      break;
    case "two_month":
      date.setMonth(date.getMonth() - 2);
      break;
    // Add more cases for additional options if needed
    default:
      return "Invalid option";
  }

  // Format the manipulated date back to "12 Jan 2024" format
  const formattedDate = `${date.getDate()} ${
    Object.keys(months)[date.getMonth()]
  } ${date.getFullYear()}`;

  return formattedDate;
};

export const rsiformattor = (data: any) => {
  const formattedDate = [];
  for (let i = 0; i < data.length; i++) {
    const [date, value] = data[i];
    const item = {
      date: date,
      value: Number(value).toFixed(2),
    };
    formattedDate.push(item);
  }
  return formattedDate;
};
export const rangeclosevalformatter = (data: any) =>{
  const formattedCloseRange = [];
  for (let i = 0; i < data.length; i++) {
    const [range, percentage] = data[i];
    console.log("Each data",data[i]);
    
    const item = {
      range: range,
      percentage: Number(percentage).toFixed(2),
    };
    formattedCloseRange.push(item);
  }
  return formattedCloseRange;
}