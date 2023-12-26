export const appOrigin = process.env.BASE_URL as string || 'https://wafflehacks.org';
const regex = /https?:\/\/(?:www\.)?([^\/]+)/;
const match = process.env.BASE_URL?.match(regex);
export const appName = match ? match[1] : 'WaffleHacks';
export const email = '[]@wafflehacks.org'