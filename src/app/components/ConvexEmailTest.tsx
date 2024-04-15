"use client"

import { api } from '@/convex/_generated/api';
import { sendEmail } from '@/send';
import axios from 'axios';
import { useMutation, useQuery } from 'convex/react';
import React, { useEffect } from 'react'

function ConvexEmailTest({token}:{token:string}) {
    const sendFirstTrainingSuccess = useMutation(
        api.emails.sendFirstTrainingSuccess
      );
      console.log(token);
      
      const userInfo = useQuery(api.emails.getUserEmailStat, { userId: "12463" });
      const updateEmailSts = useMutation(api.emails.updateEmailSts);
      const postData = {
        from: 'Acme <onboarding@resend.dev>',
        to: "mukherjee4004@gmail.com",
        subject: 'hello world',
        text: 'it works 1!'
    };
    //   const option = {
    //     method: 'POST',
    //     mode : "no-cors",
    //     headers: {
    //     'Authorization': "Bearer re_gepbrDhT_DvA2pcyqJ9shrHqGECH43fM1",
    //     'Content-Type': 'application/json'
    // },
    // body : JSON.stringify(postData)
      
    //   }
    // re_gepbrDhT_DvA2pcyqJ9shrHqGECH43fM1   https://api.resend.com/emails
      useEffect(() => {
        async function send(){
          if (userInfo) {
            const user = userInfo[0];
            if (user) {
              if (user.emailSts === false) {
                //@ts-ignore
                try{
                    // "use server"
                    //  await fetch("http://localhost:3000/api/send" ,{method: "POST"})
                   
                }catch(err){
                    console.log(err);
                } 
                
              
                
                updateEmailSts({ id: user._id });
              }
            }
          }
        }
    
        send()
      }, [userInfo]);
    

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
         // sendFirstTrainingSuccess({ userId: "12463" });
        }}
      >
        Click
      </button>
    </div>
  )
}

export default ConvexEmailTest