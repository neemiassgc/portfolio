import {
  S3Client,
  GetObjectCommand,
} from "@aws-sdk/client-s3";

export async function getBase64Screenshot(key: string) {
  const s3Client = new S3Client({});

  try {
    const { Body } = await s3Client.send(
      new GetObjectCommand({
        Bucket: "static-10",
        Key: `screenshots/${key}.png`,
      }),
    );

    if (!Body) return undefined;
    const bytes = await Body.transformToByteArray();
    return Buffer.from(bytes).toString("base64");
  }
  catch {
    return undefined;
  }
}