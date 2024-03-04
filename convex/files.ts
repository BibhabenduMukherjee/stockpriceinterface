import {v} from "convex/values"
import {mutation} from "./_generated/server"

export const createFile = mutation({
    args : {
        stockname : v.string(),
        filename : v.string(),
    },
   async handler(ctx , args) {
    await ctx.db.insert("files" , {
       stockname : args.stockname,
       filename : args.filename
    })
   }
})