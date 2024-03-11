"use client";

import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import React, { useEffect } from "react";

function page() {
  const sendFirstTrainingSuccess = useMutation(
    api.emails.sendFirstTrainingSuccess
  );
  const userInfo = useQuery(api.emails.getUserEmailStat, { userId: "12463" });
  const updateEmailSts = useMutation(api.emails.updateEmailSts);
  //console.log(userInfo);

  useEffect(() => {
    if (userInfo) {
      const user = userInfo[0];
      if (user) {
        if (user.emailSts === false) {
          // send the email

          updateEmailSts({ id: user._id });
        }
      }
    }
  }, [userInfo]);

  //console.log();

  return (
    <div>
      {userInfo &&
        userInfo.map((item) => (
          <>
            <p key={item._id}>{item.userId}</p>
          </>
        ))}

      <button
        onClick={() => {
          sendFirstTrainingSuccess({ userId: "12463" });
        }}
      >
        Click
      </button>
    </div>
  );
}

export default page;
