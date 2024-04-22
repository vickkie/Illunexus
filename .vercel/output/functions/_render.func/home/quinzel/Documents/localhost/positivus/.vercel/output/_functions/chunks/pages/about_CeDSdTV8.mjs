/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderSlot, f as renderComponent, g as addAttribute, h as renderHead } from '../astro_B3f2TmsO.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro$5 = createAstro();
const $$Container = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Container;
  return renderTemplate`${maybeRenderHead()}<div class="max-w-screen-xl mx-auto px-6 md:px-14 xl:px-14"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/home/quinzel/Documents/localhost/positivus/src/components/Container.astro", void 0);

const $$Astro$4 = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Navbar;
  const navLinks = [
    { href: "/about", label: "About us" },
    { href: "/#services", label: "Services" },
    { href: "/#projects", label: "Use Cases" },
    { href: "/pricing", label: "Pricing" },
    { href: "/blog", label: "Blog" }
  ];
  return renderTemplate`${maybeRenderHead()}<nav class="w-full top-0 left-0 z-50 fixed bg-white"> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="flex flex-wrap items-center justify-between mx-auto py-3"> <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse"> <img src="/Logo.svg" class="h-8" alt="Logo"> </a> <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2" aria-controls="navbar-default" aria-expanded="false"> <span class="sr-only">Open main menu</span> <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path> </svg> </button> <div class="hidden w-full md:block md:w-auto" id="navbar-default"> <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white"> ${navLinks.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="block py-2 px-3 text-black rounded md:bg-transparent md:p-0"> ${link.label} </a> </li>`)} <li> <a class="md:hidden px-9 py-5 rounded-2xl border border-zinc-900 bg-white hover:bg-black text-black hover:text-white inline-flex" href="https://hypercritical.vercel.app" target="_blank"> <h2 class="text-center text-xl font-normal leading-7">Let's talk</h2> </a> </li> </ul> </div> <div class="hidden w-full md:block md:w-auto" id="navbar-default"> <a class="px-9 py-5 rounded-2xl border border-zinc-900 bg-white hover:bg-black text-black hover:text-white inline-flex" href="https://hypercritical.vercel.app" target="_blank"><h2 class="text-center text-xl font-normal leading-7">Let's talk</h2> </a> </div> </div> ` })} </nav> `;
}, "/home/quinzel/Documents/localhost/positivus/src/components/Navbar.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$3 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<footer class="bg-lime bg-fixed bg-bottom text-black"> ', ' </footer> <script>\n  const year = new Date().getFullYear();\n  document.getElementById("currentYear").innerHTML = `${year}`;\n<\/script>'], ["", '<footer class="bg-lime bg-fixed bg-bottom text-black"> ', ' </footer> <script>\n  const year = new Date().getFullYear();\n  document.getElementById("currentYear").innerHTML = \\`\\${year}\\`;\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="py-6"> <div class="flex flex-col items-center justify-between md:flex-row"> <div class="flex items-center space-x-3 rtl:space-x-reverse"> <img class="w-auto" src="/Logo.svg" alt="Logo"> </div> <div class="flex mt-4 md:m-0"> <div class="-mx-4">
@ <span id="currentYear"></span>Made by <a href="https://hypercritical.vercel.app" target="_blank" rel="noopener noreferrer" class="underline">Hypercritical</a> </div> </div> </div> </div> ` }));
}, "/home/quinzel/Documents/localhost/positivus/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href=""><meta name="generator"', '><title>Trakexcel</title><meta name="description" content="Making digital products and services"><link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet">', '</head> <body class="bg-white font-SpaceGrotesk space-y-20"> ', " ", " ", ' <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.js"><\/script> </body> </html>'])), addAttribute(Astro2.generator, "content"), renderHead(), renderComponent($$result, "Navbar", $$Navbar, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/home/quinzel/Documents/localhost/positivus/src/layouts/Layout.astro", void 0);

const team = [
	{
		title: "CEO and Founder",
		name: "Uzitrake",
		description: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
		profile: "/team/c1.png",
		link: "/"
	},
	{
		title: "Director of Operations",
		name: "Lucy kimani",
		description: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
		profile: "/team/c2.png",
		link: "/"
	},
	{
		title: "Senior Designer",
		name: "Alexander kamau",
		description: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
		profile: "/team/c3.png",
		link: "/"
	}
];
const process = [
	{
		id: "01",
		hid: "accordion-open-heading-1",
		bid: "accordion-open-body-1",
		target: "#accordion-open-body-1",
		title: "Consultation",
		description: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
	},
	{
		id: "02",
		hid: "accordion-open-heading-2",
		bid: "accordion-open-body-2",
		target: "#accordion-open-body-2",
		title: "Research",
		description: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
	},
	{
		id: "03",
		hid: "accordion-open-heading-3",
		bid: "accordion-open-body-3",
		target: "#accordion-open-body-3",
		title: "Implementation",
		description: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
	},
	{
		id: "04",
		hid: "accordion-open-heading-4",
		bid: "accordion-open-body-4",
		target: "#accordion-open-body-4",
		title: "Optimization",
		description: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
	},
	{
		id: "05",
		hid: "accordion-open-heading-5",
		bid: "accordion-open-body-5",
		target: "#accordion-open-body-5",
		title: "Reporting",
		description: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
	},
	{
		id: "06",
		hid: "accordion-open-heading-6",
		bid: "accordion-open-body-6",
		target: "#accordion-open-body-6",
		title: "Improvement",
		description: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
	}
];
const teamData = {
	team: team,
	process: process
};

const $$Astro$1 = createAstro();
const $$Team = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Team;
  return renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative flex flex-col items-center md:flex-row"> <div class="row items-center py-5 md:pr-16 md:w-6/12 md:py-10"> <div class="text-center md:text-left space-y-3 bg-lime"> <h2 class="text-4xl font-medium leading-none sm:text-6xl">Our Working Process</h2> </div> </div> <div class="flex items-center py-5 md:w-6/12 md:py-10"> <p class="text-xl font-normal leading-7 text-center md:text-left">Step-by-Step Guide to Achieving Your Business Goals</p> </div> </div> <div id="accordion-open" data-accordion="close" class="text-black grid gap-4 my-6"> ${teamData.process.map(({ id, hid, bid, target, title, description }) => renderTemplate`<h2${addAttribute(hid, "id")}> <div class="w-full px-14 py-10 bg-white focus:bg-lime rounded-[45px] shadow border border-black flex-col justify-start items-start gap-7 inline-flex"> <button type="button" class="w-full flex justify-between items-center"${addAttribute(target, "data-accordion-target")} aria-expanded="true"${addAttribute(bid, "aria-controls")}> <div class="justify-start items-center gap-6 flex"> <h2 class="text-xl md:text-6xl font-medium">${id}</h2> <h3 class="text-lg md:text-3xl font-medium">${title}</h3> </div> <div> <img data-accordion-icon src="/team/plus.svg" alt="" class="justify-items-end w-10 h-10" aria-hidden="true"> </div> </button> <div class="text-lg font-normal"${addAttribute(bid, "id")}${addAttribute(hid, "aria-labelledby")}> <hr class="w-full border border-black mb-6"> <p class="mb-2 text-gray-500 text-sm md:text-lg">${description}</p> </div> </div> </h2>`)} </div> <div class="relative flex flex-col items-center md:flex-row"> <div class="row items-center py-5 md:pr-16 md:w-2/12 md:py-10"> <div class="text-center md:text-left space-y-3 bg-lime"> <h2 class="text-4xl font-medium leading-none sm:text-6xl">Team</h2> </div> </div> <div class="flex items-center py-5 md:w-10/12 md:py-10"> <p class="text-xl font-normal leading-7 text-center md:text-left">Meet the skilled and experienced team behind our successful digital marketing strategies</p> </div> </div> <div class="flex-row items-center py-5" id="team"> <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4"> ${teamData.team.map(({ title, description, name, link, profile }) => renderTemplate`<div class="h-[331px] px-[35px] py-10 bg-white rounded-[45px] shadow border border-zinc-900 flex-col justify-start items-start gap-2.5 inline-flex text-black"> <div class="flex-col justify-start items-start gap-7 flex"> <div class="self-stretch justify-start items-start inline-flex"> <div class="grow shrink basis-0 justify-start items-center gap-8 flex"> <div class="h-[102.82px] left-0 top-0 relative"> <img${addAttribute(profile, "src")}${addAttribute(name, "alt")}> </div> <div class="flex-col justify-end items-start inline-flex"> <div class="text-lg font-normal">${title}</div> <div class="text-xl font-medium">${name}</div> </div> </div> <a class="top-0 right-0"${addAttribute(link, "href")}> <img src="/team/lng.svg" alt="vector"> </a> </div> <hr class="w-full border border-black"> <p class="text-sm md:text-lg">${description}</p> </div> </div>`)} </div> </div> <div class="w-full justify-center md:justify-end items-center inline-flex"> <button class="px-8 py-5 bg-zinc-900 hover:bg-white rounded-2xl text-center text-white hover:text-black border text-xl font-normal leading-7">See all team
</button> </div> ` })}`;
}, "/home/quinzel/Documents/localhost/positivus/src/components/Team.astro", void 0);

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to our site" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-20"> ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` <div class="relative flex flex-col-reverse items-center md:flex-row" id="hero"> <div class="row items-center py-5 md:pb-20 md:pt-10"> <div class="text-center space-y-10"> <h2 class="text-5xl font-medium leading-none md:text-6xl">
We Navigate the <br> digital landscape <br> for success
</h2> <p class="mt-6 mb-8 text-xl font-normal leading-7 sm:mb-12">
Our digital marketing agency helps businesses grow and succeed online through a range of services
              including SEO, PPC, social media marketing, and content creation.
</p> <a class="px-9 py-5 bg-zinc-900 hover:bg-white text-white hover:text-black border rounded-2xl justify-items-center md:justify-items-start gap-2.5 inline-flex" rel="noopener noreferrer" href="https://hypercritical.vercel.app" target="_blank"> <h2 class="text-center text-xl font-normal leading-7">Reach out</h2> </a> </div> </div> </div> <div class="flex-row items-center"> <div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6"> <div class="p-4 grayscale transition duration-200 hover:grayscale-0"> <img src="./clients/01.svg" class="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height=""> </div> <div class="p-4 grayscale transition duration-200 hover:grayscale-0"> <img src="./clients/02.svg" class="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height=""> </div> <div class="p-4 flex grayscale transition duration-200 hover:grayscale-0"> <img src="./clients/03.svg" class="h-9 w-auto m-auto" loading="lazy" alt="client logo" width="" height=""> </div> <div class="p-4 grayscale transition duration-200 hover:grayscale-0"> <img src="./clients/04.svg" class="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height=""> </div> <div class="p-4 flex grayscale transition duration-200 hover:grayscale-0"> <img src="./clients/05.svg" class="h-8 w-auto m-auto" loading="lazy" alt="client logo" width="" height=""> </div> <div class="p-4 grayscale transition duration-200 hover:grayscale-0"> <img src="./clients/06.svg" class="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height=""> </div> </div> </div> ` })} ${renderComponent($$result2, "Team", $$Team, {})} </main> ` })}`;
}, "/home/quinzel/Documents/localhost/positivus/src/pages/about.astro", void 0);

const $$file = "/home/quinzel/Documents/localhost/positivus/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Container as $, $$Layout as a, $$Team as b, about as c };
