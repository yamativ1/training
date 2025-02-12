// app\item\readsingle\[id]\page.js

import Image from "next/image"
import Link from "next/link"

const getSingleItem = async(id) => {
    //console.log(id)
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/item/readsingle/${id}`, {cach: "no-store"})
    const jsonData = await response.json()
    //console.log(jsonData.singleItem)
    const singleItem = jsonData.singleItem
    return singleItem
}

const ReadSingleItem = async(context) => {
    //console.log(context)
    const singleItem = await getSingleItem(context.params.id)
    //console.log(singleItem)
    return (
        <div className="grid-container-in">
            <div>
                <Image src={singleItem.image} width={600} height={400}
                        alt = "item=image" priority/>
            </div>
            <div>
                <h1>{singleItem.title}</h1>
                <h2>{singleItem.price}</h2>
                <hr/>
                <p>{singleItem.description}</p>
                <div>
                    <Link href={`/item/update/${singleItem._id}`}>
                        アイテム編集
                    </Link>
                    <Link href={`/item/delete/${singleItem._id}`}>
                        アイテム削除
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ReadSingleItem