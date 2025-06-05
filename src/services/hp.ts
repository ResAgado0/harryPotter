import { type HarryPotter } from "../types/personajes.ts"

export async function getCharacters() {
    const res = await fetch(`http://192.168.1.140/hyptt/personajesHarryPotter.json`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        }
    )
    const characters = await res.json() as HarryPotter[];
    console.log(characters);
    return characters;
}

export const getCharacterByName = async ({name} : {name: string}) => {

    const characters = await getCharacters();
    const character = characters.find(c => c.name === name || c.alternate_names.includes(name) || c.house.includes(name));
    console.log(character);

    return character;
}
