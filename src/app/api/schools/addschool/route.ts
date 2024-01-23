import dbconnection from "../../../../dbConfig/dbConfig";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";

export async function POST(req) {
  try {
    const data = await req.formData();
    const file = data.get("file");
    if (!file) {
      return NextResponse.json({ message: "No image found", success: false });
    }

    const byteData = await file.arrayBuffer();
    const buffer = Buffer.from(byteData);
    const path = `./public/schoolImage/${file.name}`;
    await writeFile(path, buffer);

    const name = data.get("name");
    const address = data.get("address");
    const city = data.get("city");
    const state = data.get("state");
    const contact = data.get("contact");
    const email_id = data.get("email_id");
    const image = file.name;
   
    const values = [name, address, city, state, contact, image, email_id];
    const insertQuery = `INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const [results] = await dbconnection.execute(insertQuery, values);

    return NextResponse.json({ results: results }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
