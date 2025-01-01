
// 获取搜索框和搜索结果容器
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

// 监听搜索框的输入事件
searchInput.addEventListener("input", () => {
  // 获取搜索框的输入内容
  const query = searchInput.value.trim();

  // 如果输入内容为空，则清空搜索结果
  if (query === "") {
    searchResults.innerHTML = "";
    return;
  }

  // 如果输入内容不为空，则进行搜索
  const results = search(query);

  // 将搜索结果显示在搜索结果容器中
  searchResults.innerHTML = results.map(result => {
    return `<a href="${result.url}">${result.title}</a>`;
  }).join("");
});

// 定义搜索函数
function search(query) {
  // 搜索结果数组
  const results = [];

  // 遍历所有文章
  for (let i = 0; i < articles.length; i++) {
    const article = articles[i];
    // 如果文章标题包含搜索内容，则添加到搜索结果数组中
    if (article.title.toLowerCase().includes(query.toLowerCase())) {
      results.push(article);
    }
  }
  // 返回搜索结果数组
  return results;
}

// 假设articles是一个包含所有文章的数组，其中每个元素都包含title和url属性。
const articles = [
    { title: "Article 1", url: "https://example.com/article1" },
  { title: "Article 2", url: "https://example.com/article2" },
  { title: "Article 3", url: "https://example.com/article3" },
  { title: "Article 4", url: "https://example.com/article4" },
  { title: "Article 5", url: "https://example.com/article5" },
  { title: "Article 6", url: "https://example.com/article6" },
  { title: "Article 7", url: "https://example.com/article7" },
  { title: "Article 8", url: "https://example.com/article8" },
  { title: "Article 9", url: "https://example.com/article9" },
  { title: "Article 10", url: "https://example.com/article10" },
  ];

