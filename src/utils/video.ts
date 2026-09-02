export const toEmbedUrl = (watchUrl: string) => {
  try {
    const url = new URL(watchUrl);
    const videoId = url.searchParams.get("v");

    if (!videoId) {
      return watchUrl;
    }

    const start = parseInt(url.searchParams.get("t") ?? "", 10);

    return `https://www.youtube.com/embed/${videoId}${
      Number.isNaN(start) ? "" : `?start=${start}`
    }`;
  } catch {
    return "";
  }
};
