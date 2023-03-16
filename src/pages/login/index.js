import FormInput from "@/components/FormInput"
import Head from "next/head"
import Link from "next/link"
import { useState } from "react"

export default ()=>{
  const [formValue,setFormValue] = useState({})
  async function onSubmit(e){
    e.preventDefault()
    const userRes = await fetch("/api/user/login",{
      method:"POST",
      body:JSON.stringify(formValue),
      headers:{
        "Content-Type":"application/json"
      }
    })
    if(userRes.ok){
    const user = await userRes.json()
    console.log(user)
    }
  }
 return (<div>
     <Head>
      <title>login</title>
    </Head>
    <main className="w-full gap-4 h-screen  flex flex-col justify-center items-center ">
      <h1 className="text-4xl">Login to <Link href="/" className="btn btn-link text-4xl">My Shop</Link> </h1>
      <form onSubmit={onSubmit} className="glass p-10 rounded-xl flex flex-col  w-96 gap-4 ">
        <FormInput className="input" placeholder="Enter your email" name="email" onChange={setFormValue}/>
        <FormInput className="input" placeholder="Enter your password" name="password" onChange={setFormValue}/>
        <button type="submit" className="btn">login</button>
        <Link href="/registration" className="btn btn-link">register</Link>
      </form> 
    </main>
  </div>)
}
