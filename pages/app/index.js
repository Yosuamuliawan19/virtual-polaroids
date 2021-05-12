
import Navbar from '../../components/Navbar'
import { Button, Link, Input } from '@chakra-ui/react'

export default function Home() {
  return (
    <div>
        <Navbar/>
     
        <Button>
          <Link color="teal.500" href="/app">Share</Link>
        </Button>
    </div>
  )
}
