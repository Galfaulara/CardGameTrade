import { NextResponse } from "next/server";
import { authenticatedApiRequest } from "../../../../features/auth/authenticated-api";
export async function GET(){try{const response=await authenticatedApiRequest("/me/notifications");return new NextResponse(await response.text(),{status:response.status,headers:{"content-type":"application/json"}})}catch{return NextResponse.json({message:"Authentication is required."},{status:401})}}
