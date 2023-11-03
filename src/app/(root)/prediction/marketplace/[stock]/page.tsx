import IntroSelectionMarket from "@/src/app/components/IntroSelectionMarket";
import React from "react";

interface PageProps {
  params: {
    stock: string;
  };
}

function page({ params }: PageProps) {
  const s = decodeURIComponent(params.stock).split(" ")[0];
  return (
    <div className="flex space-y-5 flex-col h-screen">
      <IntroSelectionMarket s={s} />
      {s}
    </div>
  );
}

export default page;
