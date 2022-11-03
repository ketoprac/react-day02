import Button from "../../src/components/Button"
import TextField from "../../src/components/TextField"

const SignIn = () => {
  return (
    <div>
      <TextField name="username" label="Username" type="text" placeholder="Username" />
      <TextField name="password" label="Password" type="password" placeholder="Password" />
      <Button>Sign in</Button>
    </div>
  )
}

export default SignIn