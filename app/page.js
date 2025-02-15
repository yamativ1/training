// app/page.js
import Link from "next/link"
import Image from "next/image"

const getAllitems = async() => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/item/readall`,{cache: "no-store"})
  const jsonData = await response.json()
  //console.log(jsonData)
  const allItems = jsonData.allItems
  return allItems
}
const ReadAllItems = async() => {
  console.log(process.env.NEXT_PUBLIC_URL)
  const allItems = await getAllitems()
  //console.log(allItems)
  getAllitems()
  return (
    <div className = "grid-container-in"> 
      {allItems.map(item => 
        <Link href={`/item/readsingle/${item._id}`} key={item._id}>
          <Image src={item.image} width={300} height={200}
                 alt="item-image" priority/>
          <div>
            <h2>{item.price}</h2>
            <h3>{item.title}</h3>
            <p>{item.description.substring(0,150)}...</p>
          </div>
        </Link>
      )}
    </div>
  )
}   

export default ReadAllItems