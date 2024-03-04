"use client";
import * as React from "react";

import { addDays, format, setYear } from "date-fns";
import { z } from "zod";
import { cn, valid } from "@/lib/utils";
import { Button } from "./ui/button";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import axios from "axios";
import { useToast } from "./ui/use-toast";
import { ToastAction } from "./ui/toast";
import { useGraphDataH } from "@/hooks/use-data";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useFileSelectedYear } from "@/hooks/use-year";

const FormSchema = z.object({
  numberOfYear: z
    .string({
      required_error: "Please select an email to display.",
    })
    .max(10),
});

function getDate(numberOfYears: string) {
  // Convert the string numberOfYears to a number
  let numberOfYearsNum: number = parseInt(numberOfYears);

  // Get the current date
  let currentDate = new Date();

  // Calculate the date numberOfYears ago
  let pastDate = new Date(
    currentDate.getFullYear() - numberOfYearsNum,
    currentDate.getMonth(),
    currentDate.getDate()
  );

  // Format the dates as yyyy-MM-dd
  let currentFormattedDate = currentDate.toISOString().split("T")[0];
  let pastFormattedDate = pastDate.toISOString().split("T")[0];

  return { currentFormattedDate, pastFormattedDate };
}

const dd = [
  {
    AdjClose: 177.570007,
    Close: 177.570007,
    Date: "2023-11-02",
    High: 177.779999,
    Low: 175.460007,
    Open: 175.520004,
    Volume: 77334800,
  },
  {
    AdjClose: 173.570007,
    Close: 170.570007,
    Date: "2023-11-03",
    High: 177.779999,
    Low: 155.460007,
    Open: 160.520004,
    Volume: 77334400,
  },
  {
    AdjClose: 173.570007,
    Close: 171.570007,
    Date: "2023-11-04",
    High: 172.779999,
    Low: 155.460007,
    Open: 169.520004,
    Volume: 77334400,
  },
  {
    AdjClose: 173.570007,
    Close: 177.570007,
    Date: "2023-11-05",
    High: 178.779999,
    Low: 158.460007,
    Open: 167.520004,
    Volume: 77334400,
  },
  {
    AdjClose: 173.570007,
    Close: 177.570007,
    Date: "2023-11-06",
    High: 177.779999,
    Low: 155.460007,
    Open: 162.520004,
    Volume: 7733455,
  },
];

interface PageProps {
  code: string;

}

function Range({ code  }: PageProps) {
  const dataG = useGraphDataH();
  const [date, setDate] = React.useState<Date>();
  const [loading, setLoading] = React.useState<boolean>(false);
  const { toast } = useToast();
  const year = useFileSelectedYear();
  //const [dateerror, setDateError] = React.useState<boolean>(true)

  async function getData(data: z.infer<typeof FormSchema>) {
    // const originalDate = new Date(date);
    // const s = new Date(Date.now());

    // //console.log("Cuurent  date",s.toISOString());
    // const endDate = format(s, "yyyy-MM-dd");
    // const startDate = format(originalDate, "yyyy-MM-dd");
    // console.log("end Date & start end", endDate, startDate);
    // console.log(SelectValue);

    // if (valid(startDate, endDate)) {
    //   console.log(" valid");
    // } else {
    //   toast({
    //     variant: "destructive",
    //     title: "Invalid Date Range",
    //     description: "Select Atleast 2 months previous date",
    //     action: <ToastAction altText="Try again">Try again</ToastAction>,
    //   });
    //   return;
    // }
    // setLoading(true);
    // const response = await axios.post(
    //   "http://localhost:3000/api/getMarketStock",
    //   { code, startDate, endDate }
    // );
    // console.log(response.data.results);
    // dataG.setData(response.data.results);
    // setLoading(false);

    // number of years
    console.log(data);
    setLoading(true);
    let { currentFormattedDate, pastFormattedDate } = getDate(
      data.numberOfYear
    );
    console.log(
      "currentFormattedDate --",
      currentFormattedDate,
      "---pastFormattedDate --",
      pastFormattedDate
    );
    setLoading(true);
    const response = await axios.post(
      "http://localhost:3000/api/getMarketStock",
      { code, pastFormattedDate, currentFormattedDate }
    );
    debugger;
    // console.log(response.data.results);
    setLoading(false);
    year.setYear(data.numberOfYear);
    // set to the global store
    dataG.setData(response.data.results);
  }

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });

    getData(data);
  }

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  return (
    <div>
      <div className="  max-w-2xl  block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
          Get Cuurent Data
        </div>
        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            Quality Data
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Get top data sources with minimum effort
          </p>
          {/* <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[240px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent
              align="start"
              className="flex w-auto flex-col space-y-2 p-2"
            >
              <Select
                onValueChange={(value) => {
                  setDate(addDays(new Date(), parseInt(value)));
                  dataG.setData([]);
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="0">Today</SelectItem>
                  <SelectItem value="1">Tomorrow</SelectItem>
                  <SelectItem value="3">In 3 days</SelectItem>
                  <SelectItem value="7">In a week</SelectItem>
                </SelectContent>
              </Select>
              <div className="rounded-md border">
                <Calendar
                  className="overflow-x-hidden"
                  disabled={(date) =>
                    date > new Date() || date < new Date("1900-01-01")
                  }
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                />
              </div>
            </PopoverContent>
          </Popover> */}

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-2/3 space-y-6"
            >
              <FormField
                control={form.control}
                name="numberOfYear"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select The Year" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1">1 year</SelectItem>
                        <SelectItem value="2">2 year</SelectItem>
                        <SelectItem value="3">3 year</SelectItem>
                        <SelectItem value="4">4 year</SelectItem>
                        <SelectItem value="5">5 year</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      You can manage email addresses in your{" "}
                      <Link href="/examples/forms">email settings</Link>.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </div>

      {/* {date && (
        <Button
          onClick={() => getData(date)}
          className="w-[188px] font-bold text-lg h-[50px] m-2    "
          variant={"premium"}
        >
          Get Data
        </Button>
      )} */}

      {loading && <p>Loading ...</p>}
    </div>
  );
}

export default Range;
