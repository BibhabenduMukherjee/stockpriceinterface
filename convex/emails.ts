import { mutation, internalMutation } from "./_generated/server";
import { internal } from "./_generated/api";
import { v } from "convex/values";

export const sendFirstTrainingSuccess = mutation({
    args: { userId : v.string()},
    handler: async (ctx, args) => {
      const { userId } = args;
      // set 1 for the user
      const isPresent = await ctx.db.query("useremailcount").collect()
      //if( isPresent.length > 0) return ;
      
      await ctx.db.insert("useremailcount" , { userId: userId, count : 1})
      // go for the insertion
      const id = await ctx.db.insert("firsttrainingemails", { userId });
      
    //   await ctx.scheduler.runAfter(5000, internal.messages.destruct, {
    //     messageId: id,
    //   });
    },
  });
  