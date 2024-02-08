import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import Workspace from '@/app/lib/db/models/WorkspaceModel'
import mongoose from 'mongoose'

export async function POST(req) { 
    const formData = await req.formData();
    
    if (!formData) {
        return new Response('No file uploaded', { status: 400 });
    }

    const file = formData.get('file');
    const fileBuffer = Buffer.from(await file.arrayBuffer());
    const fileName = formData.get('fileName');
    
    const client = new S3Client({
        region: "eu-central-1",
    });

    const command = new PutObjectCommand({
        Bucket: "registate-dashboard", 
        Key: fileName,
        Body: fileBuffer,
    });

    try {
        const res = await client.send(command);
        console.log(res);
        
        //* Add the file to the database 
        const match = fileName.match(/_([^_]+)\.pdf/);
        const cID = new mongoose.Types.ObjectId(match[1]);  
        const workspace = await Workspace.findOne({ 'companies._id': cID });
        const company = workspace.companies.find(company => company._id.equals(cID));
        company.documents.push(fileName);
        await workspace.save();
        
        return new Response('File uploaded', { status: 200 });
    }
    catch (err) {
        console.log(err);
        return new Response('Error uploading file', { status: 500 });
    }
}


