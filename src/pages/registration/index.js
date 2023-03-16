import FormInput from "@/components/FormInput";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default () => {
  const [formValue, setFormValue] = useState({});
  async function onSubmit(e) {
    e.preventDefault();
    if (formValue.name && formValue.email && formValue.password) {
      const registrationRes = await fetch("/api/user", {
        method: "POST",
        body: JSON.stringify(formValue),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const user = await registrationRes.json()

      console.log(registrationRes);
    }
  }

  return (
    <div>
      <Head>
        <title>login</title>
      </Head>
      <main className="w-full gap-4 h-screen  flex flex-col justify-center items-center ">
        <h1 className="text-4xl">
          Register to{" "}
          <Link href="/" className="btn btn-link text-4xl">
            My Shop
          </Link>{" "}
        </h1>
        <form
          onSubmit={onSubmit}
          className="glass p-10 rounded-xl flex flex-col  w-96 gap-4"
        >
          <FormInput
            className="input"
            onChange={setFormValue}
            placeholder="Enter your email"
            name="email"
          />
          <FormInput
            className="input"
            onChange={setFormValue}
            placeholder="Enter your name"
            name="name"
          />
          <FormInput
            className="input"
            onChange={setFormValue}
            placeholder="Enter your password"
            name="password"
          />
          <button type="submit" className="btn">
            register
          </button>
          <Link href="/login" className="btn btn-link">
            login
          </Link>
        </form>
      </main>
    </div>
  );
};
