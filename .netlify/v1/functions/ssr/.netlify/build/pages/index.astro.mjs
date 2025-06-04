import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate, k as renderComponent, l as renderHead, n as renderSlot } from '../chunks/astro/server_D37ivfgG.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const getCharacterByName = async ({ name }) => {
  const res = await fetch(
    `http://192.168.1.140/hyptt/personajesHarryPotter.json`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      cache: "no-cache"
    }
  );
  const characters = await res.json();
  const character = characters.find((c) => c.name === name || c.alternate_names.includes(name));
  console.log(character);
  return character;
};

const $$Astro$3 = createAstro();
const $$Personaje = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Personaje;
  const { name, species, gender, house, img } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="buscador-result"> <h2 class="text-2xl font-bold">${name}</h2> <p class="text-gray-700">Especie: ${species}</p> <p class="text-gray-700">Género: ${gender}</p> <p class="text-gray-700">Casa: ${house}</p> <img${addAttribute(Astro2.props.img, "src")}${addAttribute(name, "alt")} class="w-48 h-48 object-cover rounded-lg mt-4"> </div>`;
}, "C:/Users/FAMILIA-MR/Documents/YO/astro/HarryPotter/src/components/Personaje.astro", void 0);

const $$Astro$2 = createAstro();
const $$Buscador = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Buscador;
  const url = new URL(Astro2.request.url);
  const name = url.searchParams.get("name") ?? "";
  const character = name ? await getCharacterByName({ name }) : null;
  return renderTemplate`${maybeRenderHead()}<div class="buscador m-auto w-fit bg-amber-50"> <form action="" method="get" class="flex flex-col gap-3"> <input type="text" id="name" name="name" placeholder="Buscar" class="buscador-input border" autocomplete="off"> <button type="submit" class="buscador-button border">Buscar</button> </form> </div> ${character ? renderTemplate`${renderComponent($$result, "Personaje", $$Personaje, { "name": character.name, "species": character.species, "gender": character.gender, "house": character.house, "img": character.image })}` : name ? renderTemplate`<p class="text-gray-700">Personaje no encontrado</p>` : null}`;
}, "C:/Users/FAMILIA-MR/Documents/YO/astro/HarryPotter/src/components/Buscador.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="es" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Harry Potter</title>${renderHead()}</head> <body class="bg-gray-900" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/FAMILIA-MR/Documents/YO/astro/HarryPotter/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Buscador", $$Buscador, {})} ` })}`;
}, "C:/Users/FAMILIA-MR/Documents/YO/astro/HarryPotter/src/pages/index.astro", void 0);

const $$file = "C:/Users/FAMILIA-MR/Documents/YO/astro/HarryPotter/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
