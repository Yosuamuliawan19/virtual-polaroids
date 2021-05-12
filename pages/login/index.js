
import {  Link, Button } from "@chakra-ui/react"
import Navbar from '../../components/Navbar'
import GoogleLogin from 'react-google-login';
const responseGoogle = (response) => {
  console.log(response);
}
export default function Login() {
  return (
    <div>
        This is home
        <Navbar/>
        <Button>
          <Link color="teal.500" href="/app">Get started </Link>
        </Button>
        <GoogleLogin
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          render={renderProps => (
            <Button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</Button>
          )}
        />
    </div>
  )
}
