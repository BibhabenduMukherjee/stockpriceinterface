import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function valid(startDateStr:string, endDateStr:string){
  const startDate:Date = new Date(startDateStr);
  const endDate:Date = new Date(endDateStr);

  // Calculate the difference in milliseconds between the two dates
  const differenceInMs: number = endDate.getTime() - startDate.getTime();

  // Calculate the difference in days
  const differenceInDays: number = differenceInMs / (1000 * 60 * 60 * 24);
  return differenceInDays >= 60;
}