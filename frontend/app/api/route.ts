import { NextResponse } from "next/server";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "My portfolio built with Next.js and Tailwind",
    github: "",
    link: ""
  }
];

export async function GET() {
  return NextResponse.json(projects);
}
