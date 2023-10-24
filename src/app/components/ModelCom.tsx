"use client";
import React from "react";
import { Card, CardHeader ,CardFooter} from "./ui/card";
import Link from "next/link"
interface Acc {
  preTrainedModelNames: string[];
  status: string;
}
interface pageProps {
  data: Acc;
}

function ModelCom({ data }: pageProps) {
  

  return <div className = "  grid ml-1 grid-cols-1 md:grid-cols-3 gap-2 pb-10">
         {data.preTrainedModelNames.map((item)=>(
            <div key={item}>
                <Card className="bg-primary/10 rounded-xl cursor-pointer hover:opacity-75 transition border-0">
                <Link   href={`/pretrainedmodel/${item}`} >
            <CardHeader className="flex items-center justify-center text-center text-muted-foreground">
              {/* <div className="relative w-32 h-32 ">
                <Image
                  src={item.src}
                  fill
                  className="rounded-xl object-cover"
                  alt="Character"
                />
              </div> */}
              <p className="font-bold">
                {item}
              </p>
              <p className="text-xs">
                {"stock"}
              </p>
            </CardHeader>
            <CardFooter  className="flex items-center justify-between text-xs text-muted-foreground">
              <p className="lowercase">this is footer</p>
             
            </CardFooter>
          </Link>

                </Card>
            </div>
         ))}
  </div>;
}

export default ModelCom;
