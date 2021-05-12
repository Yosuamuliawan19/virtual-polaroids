
import Navbar from '../../components/Navbar'
import { Button, Link, Input, Flex } from '@chakra-ui/react'

export default function Home() {
  return (
    <div>
        <Navbar/>
        <Flex flexDirection="row">
        <Input placeholder="Search polaroids"/>
        <Button>
          <Link color="teal.500" href="/app">Create new</Link>
        </Button>
        </Flex>
       
    </div>
  )
}
