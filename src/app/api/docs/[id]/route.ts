import { NextRequest, NextResponse } from 'next/server';
import { connectMongoDB } from "@/lib/mongodb";
import Doc from "@/models/docs.model";
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

export async function PUT(request: any, { params }: Params) {
    const { id } = params
    try {

        const { title, description, tags, category, image, bookmark } = await request.json()

        const newObject = {
            title,
            description,
            tags,
            category,
            image,
            bookmark
        }
        await connectMongoDB()
        await Doc.findByIdAndUpdate(id, newObject)
        return NextResponse.json({ ...newObject })
    } catch (error) {
        return NextResponse.json({ error: "items can't updated" })
    }
}

export async function GET(request: Request, { params }: Params) {
    const { id } = params;
    try {
        await connectMongoDB();
        const doc = await Doc.findOne({ _id: id });
        if (!doc) {
            return NextResponse.json({ error: "Document not found" }, { status: 404 });
        }
        return NextResponse.json({ doc }, { status: 200 });
    } catch (error) {
        console.error("Error finding doc:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}


