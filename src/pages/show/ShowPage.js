import axios from "axios";
import React, { useEffect, useState } from "react";
import ShowRender from "../../components/show/ShowRender";
import Pagination from "../../components/Pagination";
import './ShowPgStyles.css'

function ShowPage() {
  // state
  const [shows, setShows] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  useEffect(()=>{
    getShowList()
  }, [])

  const getShowList = () => {
    axios.get("https://kontests.net/api/v1/all").then(
      (response) => {
        const data = response.data
        console.log(data)
        const elements = []
        for (let i=0; i < 25; i++) {
          elements.push(data[i])
        }
        setShows(elements)
      },
      (error) => {
        console.log(error)
      }
    )
  }

  // get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = shows.slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <header className="show-head"></header>
      <h2 className="news-title">Try out these challenges</h2>
      <ShowRender shows={currentPosts} />
      <Pagination postsPerPage={postsPerPage} totalPosts={shows.length} paginate={paginate}/>
    </div>
  )
}

export default ShowPage;