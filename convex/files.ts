import {v} from "convex/values"
import {mutation, query} from "./_generated/server"

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


export const getFiles  = query({
    args : {},
    async handler(ctx,args){
        return await ctx.db.query("files").collect();
    }
})

export const deleteFiles  = mutation({
    args : {
        fileId : v.id("files")
    },
    async handler(ctx,args){
        await ctx.db.delete(args.fileId)
    }
})



