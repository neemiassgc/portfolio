import {
  S3Client,
  GetObjectCommand,
} from "@aws-sdk/client-s3";

export async function getBase64Screenshot() {
  const s3Client = new S3Client({});

  const { Body } = await s3Client.send(
    new GetObjectCommand({
      Bucket: "static-10",
      Key: "screenshots/password-generator.png",
    }),
  );

  if (Body) {
    const bytes = await Body.transformToByteArray();
    return Buffer.from(bytes).toString("base64");

  }
  return undefined;
}