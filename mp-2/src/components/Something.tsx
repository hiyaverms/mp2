import styled from 'styled-components';
import { DogBreed } from '../../App';

const GridContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 20px;
    background-color: #fafafa;
`;

const BreedCard = styled.div`
    border: 2px solid #333;
    border-radius: 15px;
    padding: 20px;
    width: 300px;
    background-color: white;
    box-shadow: 5px 5px 15px rgba(0,0,0,0.1);
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.02);
    }
`;

const BreedName = styled.h2`
    color: #d35400;
    margin-top: 0;
`;

const InfoText = styled.p`
    font-family: 'Arial', sans-serif;
    line-height: 1.4;
`;

interface Props {
    breeds: DogBreed[];
}

export default function DogDisplay({ breeds }: Props) {
    return (
        <GridContainer>
            {breeds.map((breed) => (
                <BreedCard key={breed.id}>
                    {/* Name */}
                    <BreedName>{breed.attributes.name}</BreedName>
                    
                    {/* Description */}
                    <InfoText>
                        {breed.attributes.description || "No description available."}
                    </InfoText>
                    
                    {/* Life Span */}
                    <InfoText>
                        <strong>Life Span:</strong> {breed.attributes.life.min} - {breed.attributes.life.max} years
                    </InfoText>

                    {/* Hypoallergenic? */}
                    <InfoText>
                        <strong>Hypoallergenic:</strong> {breed.attributes.hypoallergenic ? "Yes" : "No"}
                    </InfoText>
                </BreedCard>
            ))}
        </GridContainer>
    );
}