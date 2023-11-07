
"use client"
import Input from "@/components/input/Input";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";


interface initialStateProps {
  name: String,
  email: String,
  password: String
}

const initialState: initialStateProps = {
  name: "",
  email: "",
  password: ""
}



const Register = () => {

  const router = useRouter();

  const [state, setState] = useState(initialState);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(state)
    axios.post('/api/register', state)
      .then(() => {
        router.refresh();
      })
      .then(() => {
        setTimeout(() => {
          router.push('/login')
        }, 2500)
      })
      .catch((err: any) => {
        console.log(err)
      })


  }

  const handleChange = (event: any) => {
    setState({ ...state, [event.target.name]: event.target.value });

  }


  return (
    <form onSubmit={onSubmit} className="text-center">
      <div className="flex flex-col justify-center text-center mx-auto gap-2">
        <Input type="text" value={state.name} onChange={handleChange} placeholder="name" name="name" id="name" />
        <Input type="email" value={state.email} onChange={handleChange} placeholder="email" name="email" id="email" />
        <Input type="text" value={state.password} onChange={handleChange} placeholder="password" name="password" id="password" />
        <button type="submit">Submit</button>
      </div>

      <div>
        <div>Do you have an account?  <Link className="font-bold text-blue-300 " href="/login">Signin</Link > </div>
      </div>


    </form>
  );
}

export default Register;