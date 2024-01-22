import dbconnection from "../../../../dbConfig/dbConfig";
import { NextRequest,NextResponse } from "next/server";

export async function GET(req:NextRequest) {
  try {
    const query = "SELECT * FROM schools";
    const [data] = await dbconnection.execute(query);
    return NextResponse.json({ data: data },{status: 200});
  } catch (error) {
    return NextResponse.json({ error: error.message },{status: 500});
  }
}

