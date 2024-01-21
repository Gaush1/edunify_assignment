import dbconnection from "@/dbConfig/dbConfig";
import { NextRequest,NextResponse } from "next/server";

export async function POST(req:NextRequest) {
  try {
    const data = await req.json();
    const { name, address, city, state, contact, image, email_id } = data;
    const values = [name, address, city, state, contact, image, email_id];
    const insertQuery = `INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const [results] = await dbconnection.execute(insertQuery, values);
    return NextResponse.json({ results: results },{status: 201});
  } catch (error) {
    NextResponse.json({ error: error.message },{status: 500});
  }
}
