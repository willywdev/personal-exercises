import { Card } from "./components/Card/Card.js";
import { news } from "./utils/news.js";
import { checkFilteredNews, checkSortedNews } from "./utils/results.js";

const container = document.querySelector('[data-js="card-container"]');

// Part 1 - start here
const filteredNews = news.filter((article) =>
  article.categories.includes("politics")
);

// Part 2 - start here
const sortedNews = filteredNews;

sortedNews.sort(
  (articleA, articleB) => articleA.body.length - articleB.body.length
);

sortedNews.forEach((news) => {
  const cardElement = Card(news);
  container.append(cardElement);
});

// Check your filter and sorting order here:
checkFilteredNews(filteredNews);

checkSortedNews(sortedNews);
