import Head from "next/head";
import Link from "next/link";
import Button from "../../src/components/Button";
import TextField from "../../src/components/TextField";

const SignUp = () => {
  return (
    <div className="w-screen h-screen">
       <Head>
        <title>Sign Up | Next Redux Saga</title>
      </Head>
      <form className="w-11/12 sm:w-4/12 mx-auto flex flex-col gap-y-2 pt-8">
        <TextField
          name="username"
          label="Username"
          type="text"
        />
        <TextField
          name="email"
          label="Email"
          type="email"
        />
        <TextField
          name="password"
          label="Password"
          type="password"
        />
        <Button>Sign up</Button>
        <Link href="/signin">
          <span className="text-sm text-indigo-700 underline underline-offset-4">
            Already have an account? sign in here
          </span>
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
