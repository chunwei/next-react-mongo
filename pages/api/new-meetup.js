import clientPromise from '../../lib/mongodb'
// /api/new-meeting

async function handler(req,res){
  if(req.method ==='POST'){
    const data=req.body

    const client = await clientPromise
    const db = client.db()
    const collection = db.collection("meetups");
    // perform actions on the collection object
    const result = await collection.insertOne(data)

    res.status(200).json(result)
  }else{
    res.status(200).json({errorMsg:'Please use POST method'})
  }
  
}

export default handler