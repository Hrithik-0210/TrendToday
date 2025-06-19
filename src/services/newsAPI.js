const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const fetchNews = async (category = "general") => {
  const base = "https://newsdata.io/api/1/latest";
  const urlHi = `${base}?apikey=${API_KEY}&language=hi&country=in&q=${category}`;
  const urlEn = `${base}?apikey=${API_KEY}&language=en&country=in&q=${category}`;

  try {
    const [hiRes, enRes] = await Promise.all([fetch(urlHi), fetch(urlEn)]);

    const hiData = await hiRes.json();
    const enData = await enRes.json();

    const hindiNews = hiData.results || [];
    const englishNews = enData.results || [];

    // ✅ Combine both arrays
    return [...englishNews, ...hindiNews];
  } catch (error) {
    console.error("Error fetching bilingual news:", error);
    return [];
  }
};
