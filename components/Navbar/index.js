
import { Flex, Spacer, Link, Button, StylesProvider } from "@chakra-ui/react"
import styles from '../../styles/Home.module.css'
export default function Navbar() {
  return (
    <div>
        <Flex flexDirection='row' alignItems='center'>
        <img  className={styles.navbar} src="https://res.cloudinary.com/yosuam19/image/upload/v1611415280/polaroid/logo_vtmwdp.png"/>
        <Spacer/>
         <Link color="teal.500" href="">Features </Link>
          <Spacer/>
          <Link color="teal.500" href="/changelog">Changelog </Link>
          <Spacer/>
          <Link color="teal.500" href="/login">Login </Link>
          <Spacer/>
          <Link color="teal.500" href="/features">Features </Link>
        </Flex>
    </div>
  )
}
