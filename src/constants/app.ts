const url = "https://wafflehacks.org";
const name = "WaffleHacks";
const email = "operations@wafflehacks.org";
const des =
	"WaffleHacks is a 24-hour hackathon for high school students. Join us for a weekend of coding, workshops, and fun!";

export const app: {
	name: string;
	url: string;
	email: string;
	description?: string;
} = {
	name: name,
	url: url,
	email: email,
	description: des,
};
