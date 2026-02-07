"use client"
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { setStorageItem, getStorageItem } from "../utils/storage"
export default function Home() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter();
  
  useEffect(() => {
    let savedEmail = getStorageItem("email");
    if(savedEmail){
      router.push("/dashboard");
    }
  }, [])


  function addEmail(){
      setStorageItem("email", email)
      router.push("/dashboard");
  }
  
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <form onSubmit={
          e => {
            e.preventDefault();
            addEmail()
          }
        }>
          <label htmlFor="email"></label>
          <input type="email" id="email" placeholder="test@gmail.com" value={email} onChange={e => setEmail(e.target.value)}/>
          <label htmlFor="pass"></label>
          <input type="password" id="pass" placeholder="Senha123#" value={password} onChange={e => setPassword(e.target.value)}/>
          <input type="submit" value="Submit" />
        </form>
      </main>
    </div>
  );
}