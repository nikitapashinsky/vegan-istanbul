import { type NextPage } from "next";
import { useFormspark } from "@formspark/use-formspark";
import type { FormEvent } from "react";
import Head from "next/head";
import { useState } from "react";
// import Link from "next/link";
// import { signIn, signOut, useSession } from "next-auth/react";

// import { api } from "~/utils/api";

const FORM_ID = "2FehpDNt";

const Home: NextPage = () => {
  const [submit, submitting] = useFormspark({
    formId: FORM_ID,
  });

  const [email, setEmail] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    await submit({ email });
  }

  return (
    <>
      <Head>
        <title>Vegan Istanbul</title>
        <meta name="description" content="Explore Vegan Istanbul" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <h1>Vegan Istanbul</h1>
        <p>Explore all vegan shops and cafes in Istanbul.</p>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your best email…"
            required
          />
          <button type="submit" disabled={submitting}>
            Let me know!
          </button>
        </form>
      </main>
    </>
  );
};

export default Home;
