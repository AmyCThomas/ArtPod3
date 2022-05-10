import React, { useEffect, useState } from "react";
import NewsArticles from "../../components/news/NewsArticles";
import Pagination from "../../components/Pagination";
import './NewsPgStyles.css'

function NewsPage() {
  const axios = require("axios");
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
 
  const options = {
    method: 'GET',
    url: 'https://newsapi.org/v2/everything?q=Art&from=2022-05-10&sortBy=popularity&apiKey=9630189558ac46c89b17e9b77c02c080',
  };

  useEffect(() => {
    axios.request(options).then(function (response) {
      const data = response.data
      const elements = []
      for (let i=0; i < 25; i++) {
        elements.push(data.articles[i])
      }
      setArticles(elements)
    }).catch(function (error) {
      console.error(error);
    });
  }, [])

  // get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = articles.slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  
  return (
    <div>
      <header className="news-header">
      </header>
      <h2 className="news-title">Current News in the Art World</h2>
      <NewsArticles articles={currentPosts} />
      <Pagination postsPerPage={postsPerPage} totalPosts={articles.length} paginate={paginate}/>
    </div>   
  )
}

export default NewsPage;