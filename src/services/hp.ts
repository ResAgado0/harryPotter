import { type HarryPotter } from "../types/personajes.ts";
import characters from "../../public/hyptt/personajes.json";

// Lógica para cliente (browser)
export async function getCharacters() {
    return characters as HarryPotter[];
}

export const getCharacterByName = async ({ name }: { name: string }) => {
    const characters = await getCharacters();
    const character = characters.find(c => c.name === name || c.alternate_names.includes(name) || c.house.includes(name));
    return character;
}