import { type HarryPotter } from "../types/personajes.ts"

export const getCharacterByName = async ({name} : {name: string}) => {

    const res = await fetch(`http://192.168.1.140/hyptt/personajesHarryPotter.json`, 
    {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        cache: "no-cache",
    });
    // const character = await res.json() as HarryPotter;
    // console.log(character)
    const characters = await res.json() as HarryPotter[];
    const character = characters.find(c => c.name === name || c.alternate_names.includes(name));
    console.log(character);

    return character

}
