
import { Flex, Spacer, Link, Button } from "@chakra-ui/react"
import Navbar from '../../components/Navbar'
import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <div>
        <Navbar/>
        <div style={{fontSize: 32, fontWeight: 'bold'}}>
          Display your favourite memories for the world to see
        </div>
        <Button>
          <Link color="teal.500" href="/dashboard">Get started </Link>
        </Button>
    </div>
  )
}
