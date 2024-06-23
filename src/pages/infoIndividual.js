import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Text, Image, CloseButton } from '@chakra-ui/react';
import { SiAlienware } from "react-icons/si";
import { GiAlienBug } from "react-icons/gi";
import { FaPerson } from "react-icons/fa6";
import './infoIndividual.css';
import { IoIosMale, IoIosFemale } from "react-icons/io";
import { FaBookDead } from "react-icons/fa";
import { GiLifeBar } from "react-icons/gi";

const InfoIndividual = () => {

    const { id } = useParams();

    const [character, setCharater] = useState();
    
    const navigate = useNavigate();

    const getResult = async () => {
        try {
            const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
            setCharater(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getResult();
    }, []);


    if (!character) {
        return (
            <div>carregando...</div>
        );
    }

    return (
        <div className="containerInfo">
            <div className="containerRight">
                <Image src={character.image} borderRadius='0px 60px 60px 0px' height='100%'></Image>
            </div>
            <div className="containerLeft">
                <div className="cima">
                    <div className="header">
                        <div><CloseButton size='lg' color='white' onClick={() => {navigate('/information-api')}}/></div>
                        <div><Text fontSize='6xl' color='white'>{character.name}</Text></div>
                        <div></div>
                    </div>

                    <div className="textContainer">
                        <div>
                            <Text fontSize='3xl' color='white' fontWeight='500'>STATUS</Text>
                            <Text fontSize='2xl' color='white'>{character.status}</Text>

                            <Text fontSize='3xl' color='white' fontWeight='500'>SPECIES</Text>
                            <Text fontSize='2xl' color='white'>{character.species}</Text>

                            <Text fontSize='3xl' color='white' fontWeight='500'>GENDER</Text>
                            <Text fontSize='2xl' color='white'>{character.gender}</Text>
                        </div>

                        <div>
                            <Text fontSize='3xl' color='white' fontWeight='500'>SPECIES</Text>
                            <Text fontSize='2xl' color='white'>{character.species}</Text>

                            <Text fontSize='3xl' color='white' fontWeight='500'>ORIGIN</Text>
                            <Text fontSize='2xl' color='white'>{character.origin.name}</Text>

                            <Text fontSize='3xl' color='white' fontWeight='500'>LOCATION</Text>
                            <Text fontSize='2xl' color='white'>{character.location.name}</Text>
                        </div>
                    </div>
                </div>
                <div className="baixo">
                    <div className="box1">
                        {character.gender === 'Male' ? <IoIosMale color="white" size={40} /> : <IoIosFemale color="white" size={40} />}

                    </div>
                    <div className="box1">
                        {character.species === 'Human' ? <FaPerson color="white" size={40} /> : <GiAlienBug color="white" size={40} />}
                    </div>
                    <div className="box1">
                        {character.status === 'Dead' ? <FaBookDead color="white" size={40} /> : <GiLifeBar color="white" size={40} />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoIndividual;