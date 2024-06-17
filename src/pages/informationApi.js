import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import './informationApi.css'
import { Button, ButtonGrou, Text, Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, color } from '@chakra-ui/react'

const url = 'https://rickandmortyapi.com/api/character?page=1';

const InformationApi = () => {

    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(1);
    const [results, setResults] = useState([]);

    const getResults = useCallback(async () => {
        try {
            console.log('page:' + page);
            const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
            setResults(response.data.results);
            setMaxPage(response.data.info.pages);

        } catch (error) {
            console.log(error);
        }
    }, [page]);

    useEffect(() => {
        getResults();
    }, [getResults]);

    if (!results.length) {
        return <div>carregando</div>
    }

    return (
        <div className={page === maxPage? 'containerVh' : 'container2'}>
            <div className="grid">
                {results.map(character => (
                    <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    margin='3'
                    color='white'
                    colorScheme="red"

                    >
                        <Image
                            objectFit='cover'
                            maxW={{ base: '100%', sm: '150px' }}
                            src={character.image}
                            alt={character.name}
                        />

                        <Stack w='100%' >
                            <CardBody bgColor='#333333'>
                                <Heading size='md'>{character.name}</Heading>

                                <Text py='2'>
                                    <p>Status: {character.status}</p>
                                    <p>Species: {character.species}</p>
                                </Text>
                            </CardBody>
                        </Stack>
                    </Card>
                ))}
            </div>
            <div className="foot">

                <div className="left">{(page - 1 > 0) && <Button colorScheme='teal' size='xs' onClick={() => setPage(page - 1)}>PREV</Button>}</div>
                <div className="center"><Text as='b' color="white">{page}/{maxPage}</Text></div>
                <div className="rigth">{(page + 1 <= maxPage) && <Button colorScheme='teal' size='xs' onClick={() => setPage(page + 1)}>NEXT</Button>}</div>

            </div>
        </div>
    )
}

export default InformationApi;