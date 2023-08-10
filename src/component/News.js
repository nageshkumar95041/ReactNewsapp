import React from 'react'

function News(props) {
  return (
    <>
      <div class="card" style={{width:"18rem"}}>
  <img src={props.urlToImage?props.urlToImage:"https://cdn.ndtv.com/common/images/ogndtv.png"} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.title?props.title.slice(0,45):props.title}</h5>
    <p class="card-text">{props.description?props.description.slice(0,88):props.description}</p>
    <a href={props.url} class="btn btn-primary">Read more</a>
  </div>
</div>
    </>
  )
}

export default News