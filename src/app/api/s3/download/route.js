import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export async function GET(request) {
    const fileName = request.nextUrl.searchParams.get('fileName');
    
    const client = new S3Client({
        region: "eu-central-1",
    });
 
    try {
        const command = new GetObjectCommand({
            Bucket: 'registate-dashboard',
            Key: fileName,
        });
        
        // await the signed URL and return it
        const signedURL =  await getSignedUrl(client, command, { expiresIn: 3600 });
        console.log(signedURL)
        return new Response(signedURL, { status: 200 });
    }
    catch (err) {
        console.log(err);
        return new Response('Error uploading file', { status: 500 });
    }
}


