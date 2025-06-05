import { type HarryPotter } from "../types/personajes.ts";

// Lógica para cliente (browser)
export async function getCharactersClient() {
    const res = await fetch(`/hyptt/personajesHarryPotter.json`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    const characters = await res.json() as HarryPotter[];
    return characters;
}

// Lógica para servidor (Node.js/Astro)
export async function getCharactersServer() {
    const { promises: fs } = await import("fs");
    const path = await import("path");
    const filePath = path.resolve(process.cwd(), "public/hyptt/personajesHarryPotter.json");
    const data = await fs.readFile(filePath, "utf-8");
    const characters = JSON.parse(data) as HarryPotter[];
    return characters;
}

// Ejemplo de función que usa la lógica adecuada según el entorno
export async function getCharacters() {
    if (typeof window !== "undefined") {
        // Cliente
        return getCharactersClient();
    } else {
        // Servidor
        return getCharactersServer();
    }
}

export const getCharacterByName = async ({ name }: { name: string }) => {
    const characters = await getCharacters();
    const character = characters.find(c => c.name === name || c.alternate_names.includes(name) || c.house.includes(name));
    return character;
}