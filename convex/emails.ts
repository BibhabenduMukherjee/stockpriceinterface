import { mutation, internalMutation, query } from "./_generated/server";
import { internal } from "./_generated/api";

import { v } from "convex/values";
//import EmailTemplate from "../src/app/components/EmailTemplate.tsx"
export const getUserEmailStat = query({
  args: {
    userId: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("useremailcount")
      .filter((q) => q.eq(q.field("userId"), args.userId))
      .collect();
  },
});

export const updateEmailSts = mutation({
  args: {
    id: v.id("useremailcount"),
  },
  handler: async (ctx, args) => {
    const { id } = args;
    await ctx.db.patch(id, { emailSts: true });
  },
});

export const sendFirstTrainingSuccess = mutation({
  args: { userId: v.string() , user_name : v.string() , modelName: v.string() },
  handler: async (ctx, args) => {
    const { userId , user_name , modelName } = args;
    // Check the user is already present
    const isPresent = await ctx.db
      .query("useremailcount")
      .filter((q) => q.eq(q.field("userId"), userId))
      .collect();
    if (isPresent.length > 0) return;
    // insert the record with false emailSts
    await ctx.db.insert("useremailcount", {
      userId: userId,
      count: 1,
      user_name : user_name,
      modelName : modelName,
      emailSts: false,
    });
    // send the same record
    return await ctx.db
      .query("useremailcount")
      .filter((q) => q.eq(q.field("userId"), userId))
      .collect();
  },
});

// export const send = internalMutation({
//   args: {},
//   handler: async (ctx, args) => {
//     const { data, error } = await resend.emails.send({
//       from: "Acme <onboarding@resend.dev>",
//       to: ["mukherjee4004@gmail.com"],
//       subject: "Hello world",
//       text: "hello",
//     });

//     if (error) {
//       console.log(error);
//     }
//   },
// });
