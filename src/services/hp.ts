import { type HarryPotter } from "../types/personajes.ts";

// Lógica para cliente (browser)
export async function getCharacters() {
    const res = await fetch('https://harrypotter.resagado.dev/hyptt/personajes.json', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const characters = await res.json() as HarryPotter[];
    return characters;
}

export const getCharacterByName = async ({ name }: { name: string }) => {
    const characters = await getCharacters();
    const character = characters.find(c => c.name === name || c.alternate_names.includes(name) || c.house.includes(name));
    return character;
}