import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

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
        
        return new Response('File uploaded', { status: 200 });
    }
    catch (err) {
        console.log(err);
        return new Response('Error uploading file', { status: 500 });
    }
}


