"use client"
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { setStorageItem, getStorageItem } from "../utils/storage"
import Input from "../components/Input";
import Button from "../components/Button";
import Label from "../components/Label";


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
        <form className={styles.formLogin} onSubmit={
          e => {
            e.preventDefault();
            addEmail()
          }
        }>
          <h1>Log in</h1>
          <div>
            <Label htmlFor="email" value="Email" />
            <Input type="email" Icon="alternate_email" id="email" placeholder="test@gmail.com" value={email} onChange={e => setEmail(e.target.value)}/>
          </div>
          <div> 
            <Label htmlFor="emaipassl" value="Password" />
            <Input type="password" Icon="lock" id="pass" placeholder="Senha123#" value={password} onChange={e => setPassword(e.target.value)}/>
          </div>
          <Button type="submit" value="Log in" />
        </form>
      </main>
    </div>
  );
}