"use server";
import got from "got";
import sharp from "sharp";

sharp.cache(false);

export async function generateLazyImage(src: string) {
	const { body } = await got(src, { responseType: "buffer" });
	const sharpImage = sharp(body);
	const { width, height, format } = await sharpImage.metadata()!;
	const lqipBuf = await sharpImage
		.resize({ width: 30, height: 30, fit: "inside" })
		.toBuffer();
	return {
		src,
		aspectRatio: width! / height!,
		lqip: `data:image/${format};base64,${lqipBuf.toString("base64")}`,
	};
}
