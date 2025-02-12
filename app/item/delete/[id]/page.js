// app\item\delete\page.js

"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import useAuth from "../../../utils/useAuth"

const DeleteItem = (context) => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const [email, setEmail] = useState("")

    const loginUserEmail = useAuth()

    useEffect(( ) => {
        const getSingleItem = async(id) => {
            //console.log(id)
            const response = await fetch(`http://localhost:3000/api/item/readsingle/${id}`, {cache: "no-store"})
            const jsonData = await response.json()
            //console.log(jsonData.singleItem)
            const singleItem = jsonData.singleItem
            //return singleItem
            setTitle(singleItem.title)
            setPrice(singleItem.price)
            setImage(singleItem.image)
            setDescription(singleItem.description)
            setEmail(singleItem.email)
        }
        getSingleItem(context.params.id)
    },[context])

    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            const response = await fetch(`${env.NEXT_PUBLIC_URL}/api/item/delete/${context.params.id}`,{
                method: "DELETE",
                headers: {
                    "Accept": "aaplication.json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                    email: loginUserEmail
                })
        })
            const jsonData = await response.json()
            alert(jsonData.message)
        }catch(err){
            alert("アイテム削除失敗")
        }
    }
    
    if(loginUserEmail === email){

        return (
            <div className="page-title">
                <h1>アイテム削除</h1>
                <form onSubmit={handleSubmit}>
                    <h2>{title}</h2>
                    <Image src={image} width={750} height={500}
                            alt="item-image" priority/>
                    <h3>USD{price}</h3>
                    <p>{description}</p>
                    <button>削除</button>
                </form>
            </div>
        )
    }else{
        return <h1>権限がありません</h1>
    }
}
export default DeleteItem