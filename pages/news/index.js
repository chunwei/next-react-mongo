//  path /news

import { Fragment } from "react"
import Link from 'next/link'

function NewsPage(){
  return <Fragment>
    <h1>The News Page</h1> 
    <ul>
      <li><Link href='/news/news-a'>news A</Link></li>
      <li><Link href='/news/news-b'>news B</Link></li>
    </ul>
  </Fragment>
}

export default NewsPage