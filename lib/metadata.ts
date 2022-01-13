import cheerio from 'cheerio';
import { DEFAULT_IMAGE_URL } from './constants';
import { formatImageUrl } from './format';

export const metadata = async (link: string) => {
  const response = await fetch(link);
  const html = await response.text();

  const $ = cheerio.load(html);
  const title =
    $('meta[property="og:title"]').attr('content') ||
    $('title').text() ||
    $('meta[name="title"]').attr('content');

  const description =
    $('meta[property="og:description"]').attr('content') ||
    $('meta[name="description"]').attr('content');

  const image =
    $('meta[property="og:image"]').attr('content') ||
    $('meta[property="og:image:url"]').attr('content');

  return {
    title: title as string,
    desc: description as string,
    image: formatImageUrl(link, image as string) ?? DEFAULT_IMAGE_URL,
  };
};
