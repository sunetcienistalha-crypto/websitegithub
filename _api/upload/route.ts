import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(request: Request) {
  try {
    const data = await request.formData();
    const file = data.get("file");

    if (!file || typeof file === "string") {
      return NextResponse.json({ error: "Geçerli bir dosya yüklenmedi." }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Provide a safe filename using timestamp
    const ext = path.extname(file.name) || ".jpg";
    const filename = `media_${Date.now()}${ext}`;
    
    // Save to public/photos directory
    const publicDir = path.join(process.cwd(), "public", "photos");
    const filepath = path.join(publicDir, filename);

    await writeFile(filepath, buffer);

    // Return the relative URL string that client can use
    return NextResponse.json({ success: true, url: `/photos/${filename}` });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Dosya yükleme başarısız oldu." }, { status: 500 });
  }
}
