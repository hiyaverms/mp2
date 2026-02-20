import { useState, useEffect } from 'react';
import DogDisplay from './components/Display';

export interface DogBreed {
    id: string;
    attributes: {
        name: string;
        description: string;
        life: { min: number; max: number };
        male_weight: { min: number; max: number };
        female_weight: { min: number; max: number };
        hypoallergenic: boolean;
    };
}

export default function App() {
    const [breeds, setBreeds] = useState<DogBreed[]>([]);

    useEffect(() => {
        async function fetchDogs() {
            try {
                const response = await fetch('https://dogapi.dog/api/v2/breeds');
                const result = await response.json();
                setBreeds(result.data);
            } catch (error) {
                console.error("Error fetching dog data:", error);
            }
        }
        fetchDogs();
    }, []);

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Dog Breeds Explorer</h1>
            <DogDisplay breeds={breeds} />
        </div>
    );
}