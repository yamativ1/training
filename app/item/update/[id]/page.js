// app\item\update\[id]\page.js

"use client"
import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { useRouter } from "next/navigation"
import useAuth from "@/app/utils/useAuth"

const UpdateItem = (context) => {
    const { id } = useParams()
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)

    const loginUserEmail = useAuth()
    const router = useRouter()

    useEffect(( ) => {
        
        const getSingleItem = async(id) => {
            //console.log(id)
            const response = await fetch(`http://localhost:3000/api/item/readsingle/${id}`, {cach: "no-store"})
            const jsonData = await response.json()
            //console.log(jsonData.singleItem)
            const singleItem = jsonData.singleItem
            //return singleItem
            setTitle(singleItem.title)
            setPrice(singleItem.price)
            setImage(singleItem.image)
            setDescription(singleItem.description)
            setEmail(singleItem.email)
            setLoading(true)
        }
        getSingleItem(context.params.id)
    },[context])

    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/item/update/${context.params.id}`,{
                method: "PUT",
                headers: {
                    "Accept": "aaplication.json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                    title: title,
                    price: price,
                    image: image,
                    description: description,
                    email: loginUserEmail
                })
        })
        const jsonData = await response.json()
        alert(jsonData.message)
        router.push("/")
        router.refresh()
        }catch(err){
            alert("アイテム編集失敗")
        }
    }
    if(loading){
        if(loginUserEmail === email){
            return (
                <div className="page-title">
                    <h1>アイテム編集</h1>
                    <form onSubmit={handleSubmit}>
                        <input value = {title}
                                onChange={(e) => setTitle(e.target.value)}
                                type="text" name="title"
                                placeholder="アイテム名" required/>
                        <input value = {price}
                                onChange={(e) => setPrice(e.target.value)}
                                type="text" name="price"
                                placeholder="価格" required/>
                        <input value = {image}
                                onChange={(e) => setImage(e.target.value)}
                                type="text" name="image"
                                placeholder="画像" required/>
                        <textarea value = { description }
                                onChange={(e) => setDescription(e.target.value)}
                                name="description" rows={15}
                                placeholder="商品紹介" required ></textarea>
                        <button>編集</button>
                    </form>
                </div>
            )
        }else{
            return <h1>権限がありません</h1>
        }
    }else{
        return <h1>ローディング中...</h1>
    }
}
export default UpdateItem