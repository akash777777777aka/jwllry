import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();

  if (!data?.name || !data?.phone || !data?.service) {
    return NextResponse.json({ error: "Please fill all required fields." }, { status: 400 });
  }

  return NextResponse.json(
    {
      ok: true,
      message: `Thanks ${data.name}, your inquiry is received. Our team will contact you shortly.`
    },
    { status: 200 }
  );
}
