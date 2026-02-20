import styled from 'styled-components';
import type { DogBreed } from '../../App';

const GridContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 20px;
    background-color: #f8f9fa;
`;

const BreedCard = styled.div`
    border: 2px solid #0a2647;
    border-radius: 15px;
    padding: 20px;
    width: 300px;
    background-color: white;
    box-shadow: 0 4px 6px rgba(10, 38, 71, 0.1);
    transition: transform 0.2s;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

    &:hover {
        transform: scale(1.02);
        box-shadow: 0 10px 20px rgba(162, 210, 255, 0.4);
    }
`;

const BreedName = styled.h2`
    color: #0a2647;
    margin-top: 0;
    font-weight: 700;
    border-bottom: 3px solid #a2d2ff;
    padding-bottom: 8px;
`;

const InfoText = styled.p`
    color: #333;
    line-height: 1.6;
    font-size: 0.95rem;
    strong {
        color: #0a2647; 
    }
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