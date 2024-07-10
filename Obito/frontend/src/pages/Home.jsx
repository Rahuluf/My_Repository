import React from 'react'
import{ Box , Heading,Button , useToast , Img} from "@chakra-ui/react"
import {useNavigate} from "react-router-dom"

export default  function  Home()  {
  // const toast = useToast();
  // const navigate =useNavigate();



  // function handleClick(){
  //    toast({
  //         title: 'You are going to About Page',
  //         description: "User is going to about page",
  //         status: 'success',
  //         duration: 2000,
  //         isClosable: true,
  //       });


  //       navigate(`/about`)
  // }



  return (
    <Box>
      <Heading as="h1" size="xl"> 
        Home Page
      </Heading>

    <img src="https://cdn.usegalileo.ai/screenshots/7ffa671c-631c-4dea-86cb-e64d493ad8df.webp" alt="" />



      {/* <Button colorScheme='teal' variant='solid' onClick={handleClick}>
        go to about page
      </Button> */}
    </Box>
  )
}
