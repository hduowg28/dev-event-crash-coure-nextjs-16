import connectDB from "@/app/lib/mongodb";
import {NextRequest, NextResponse} from "next/server";
import Event from '@/app/database/event.model';

export async function POST(req:NextRequest){
    try{
        await connectDB();

        const formData=await req.formData();
        let event;
        try{
            event=Object.fromEntries(formData.entries());
        }catch(e){
            return NextResponse.json({message:"invalid JSON data format"}, {status:400});
        }
        const createdEvent=await Event.create(event)
        return NextResponse.json({message:"Event Created Successfully", event:createdEvent}, {status:201});
    }catch(err){
        console.error(err);
        return NextResponse.json({message:"Event creation failed", error:err instanceof Error ? err.message :"unknown error"},{status:500});
    }
}