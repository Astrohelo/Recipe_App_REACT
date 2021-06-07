import React from 'react';  
import {Box, Image, Center,Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton}from "@chakra-ui/react"


const Recipe = ({title,ingredients,image}) =>{

    return(
        <Box maxW="sm" overflow="hidden"   fontWeight="semibold" m="40px"  borderWidth="1px" bgColor="telegram.400">
            <Box fontWeight="bold" mt="1" borderWidth="1px" mt="0px" pt="0px">
                {title}
            </Box>
            <Popover placement="top" gutter="-400"  >
                <PopoverTrigger>
                    <Center>
                    <Box m="20px" pb="70px">
                        <Image className="kep" borderRadius="full" src={image} alt={image.alt}/>
                        </Box>
                    </Center>
                </PopoverTrigger>
                    <PopoverContent bg="teal.100">
                    <PopoverArrow />
                    <PopoverCloseButton />
                    
                    <PopoverFooter><Box m="30px" mt='10px' mb="10px">
                                <ol >
                                    {ingredients.map(ingredient =>(
                                        <li>{ingredient.text}</li>
                                    ))}
                                </ol>
                            </Box></PopoverFooter>
                    </PopoverContent>
            </Popover>
            
        </Box>

    );

};

export default Recipe;