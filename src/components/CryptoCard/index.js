import React from 'react';
import { VStack, HStack, Image, Text, Heading, Badge, Divider} from "@chakra-ui/react";
const CryptoCard = ({
    coin: {name, rank, symbol, iconUrl, price, marketCap, change, color}
}) => {
    return <VStack
            align="space-between"
            spacing="4"
            boxShadow="md" 
            p="4"
            borderRadius="xl"
            >
        <HStack justify="space-between">
            <HStack>
                <Text fontSize="xs">{rank}</Text>
                <Heading size="md">{name}</Heading>
                <Badge colorScheme={change < 0 ? "red" : "green" }>{symbol}</Badge>
            </HStack>
            <Image src={iconUrl} height="20px" width="20px"/>
        </HStack>
        <VStack>
            <Divider bg={color}/>
            <Text>{price}</Text>
            <Text>{marketCap}</Text>
            <Badge colorScheme={change < 0 ? "red" : "green" }>{change}%</Badge>
        </VStack>
    </VStack>
}
export default CryptoCard