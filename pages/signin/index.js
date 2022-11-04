import { LockClosedIcon } from "@heroicons/react/20/solid";
import Head from "next/head";
import Link from "next/link";
import Button from "../../src/components/Button";
import TextField from "../../src/components/TextField";

const SignIn = () => {
  return (
    <div className="w-screen h-screen">
      <Head>
        <title>Sign In | Next Redux Saga</title>
      </Head>
      <form className="w-11/12 sm:w-4/12 mx-auto flex flex-col gap-y-2 pt-8">
        <TextField
          name="username"
          label="Username"
          type="text"
        />
        <TextField
          name="password"
          label="Password"
          type="password"
        />
        <Button>
          <span className="flex items-center">
          <LockClosedIcon className="h-4 w-4" />
          Sign in
          {""}
          </span>
        </Button>
        <Link href="/signup">
          <span className="text-sm text-indigo-700 underline underline-offset-4">
            Don&apos;t have account yet? sign up here
          </span>
        </Link>
      </form>
    </div>
  );
};

export default SignIn;
