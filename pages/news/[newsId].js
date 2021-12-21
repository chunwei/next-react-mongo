import {useRouter} from 'next/router'

function DetailPage(){
  const router=useRouter()
  return <h1>The Detail Page for news {router.query.newsId} {JSON.stringify(router.query)}</h1> 
}

export default DetailPage