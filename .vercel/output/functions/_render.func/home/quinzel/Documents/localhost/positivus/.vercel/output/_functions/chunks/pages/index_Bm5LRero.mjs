/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, g as addAttribute } from '../astro_B3f2TmsO.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Container, b as $$Team, a as $$Layout } from './about_CeDSdTV8.mjs';

const $$Astro$5 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative flex flex-col-reverse items-center md:flex-row" id="hero"> <div class="row items-center py-5 md:w-6/12 md:pb-20 md:pt-10"> <div class="text-left space-y-3"> <h1 class="text-5xl font-medium leading-none md:text-6xl">
Navigating the <br> digital landscape <br> for success
</h1> <p class="mt-6 mb-8 text-xl font-normal leading-7 sm:mb-12">
Our digital marketing agency helps businesses grow and succeed online through a range of services including
          SEO, PPC, social media marketing, and content creation.
</p> <a class="px-9 py-5 bg-zinc-900 hover:bg-white text-white hover:text-black border rounded-2xl justify-items-center md:justify-items-start gap-2.5 inline-flex" rel="noopener noreferrer" href="https://hypercritical.vercel.app" target="_blank"> <h2 class="text-center text-xl font-normal leading-7">Let's Work Togeher</h2> </a> </div> </div> <div class="flex items-center py-5 md:w-6/12 md:pb-20 md:pt-10"> <img src="/Hero.svg" width="100%" alt="Hero"> </div> </div> <div class="flex-row items-center"> <div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6"> <div class="p-4 grayscale transition duration-200 hover:grayscale-0"> <img src="./clients/01.svg" class="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height=""> </div> <div class="p-4 grayscale transition duration-200 hover:grayscale-0"> <img src="./clients/02.svg" class="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height=""> </div> <div class="p-4 flex grayscale transition duration-200 hover:grayscale-0"> <img src="./clients/03.svg" class="h-9 w-auto m-auto" loading="lazy" alt="client logo" width="" height=""> </div> <div class="p-4 grayscale transition duration-200 hover:grayscale-0"> <img src="./clients/04.svg" class="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height=""> </div> <div class="p-4 flex grayscale transition duration-200 hover:grayscale-0"> <img src="./clients/05.svg" class="h-8 w-auto m-auto" loading="lazy" alt="client logo" width="" height=""> </div> <div class="p-4 grayscale transition duration-200 hover:grayscale-0"> <img src="./clients/06.svg" class="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height=""> </div> </div> </div> ` })}`;
}, "/home/quinzel/Documents/localhost/positivus/src/components/Hero.astro", void 0);

const servicesData = [
	{
		id: 1,
		name1: "Search engine",
		name2: "optimization",
		background: "h-[310px] p-12 bg-zinc-100 rounded-[45px] shadow border border-black justify-between items-center flex text-black",
		arrow: "./services/ag.svg",
		link: "./",
		image: "./services/01.svg"
	},
	{
		id: 2,
		name1: "Pay-per-click",
		name2: "advertising",
		background: "h-[310px] p-12 bg-lime rounded-[45px] shadow border border-black justify-between items-center flex text-black",
		arrow: "./services/ag.svg",
		link: "./",
		image: "./services/02.svg"
	},
	{
		id: 3,
		name1: "Social Media",
		name2: "Marketing",
		background: "h-[310px] p-12 bg-black rounded-[45px] shadow border border-black justify-between items-center flex text-white",
		arrow: "./services/aw.svg",
		link: "./",
		image: "./services/03.svg"
	},
	{
		id: 4,
		name1: "Email",
		name2: "Marketing",
		background: "h-[310px] p-12 bg-zinc-100 rounded-[45px] shadow border border-black justify-between items-center flex text-black",
		arrow: "./services/ag.svg",
		link: "./",
		image: "./services/04.svg"
	},
	{
		id: 5,
		name1: "Content",
		name2: "Creation",
		background: "h-[310px] p-12 bg-lime rounded-[45px] shadow border border-black justify-between items-center flex text-black",
		arrow: "./services/ag.svg",
		link: "./",
		image: "./services/05.svg"
	},
	{
		id: 6,
		name1: "Analytics and",
		name2: "Tracking",
		background: "h-[310px] p-12 bg-black rounded-[45px] shadow border border-black justify-between items-center flex text-white",
		arrow: "./services/aw.svg",
		link: "./",
		image: "./services/06.svg"
	}
];

const $$Astro$4 = createAstro();
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Services;
  return renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative flex flex-col items-center md:flex-row" id="services"> <div class="row items-center py-5 md:pr-20 md:w-3/12 md:py-10"> <div class="text-center md:text-left space-y-3 bg-lime"> <h2 class="text-4xl font-medium leading-none sm:text-6xl">Services</h2> </div> </div> <div class="flex items-center py-5 md:w-9/12 md:py-10"> <p class="text-xl font-normal leading-7 text-center md:text-left">
Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO,
        PPC, social media marketing, and content creation.
</p> </div> </div> <div class="flex-row items-center py-5"> <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4"> <!-- card start--> ${servicesData.map(({ background, name1, name2, arrow, link, image }) => renderTemplate`<div${addAttribute(background, "class")}> <div class="flex-col justify-center items-start gap-[93px] inline-flex"> <div class="flex-col justify-start items-start flex"> <div class="px-[7px] bg-lime-300 rounded-[7px] flex-col justify-start items-start gap-2.5 flex"> <div class=" text-3xl font-medium">${name1}</div> </div> <div class="px-[7px] bg-lime-300 rounded-[7px] flex-col justify-start items-start gap-2.5 flex"> <div class="text-3xl font-medium">${name2}</div> </div> </div> <a class="justify-start items-center gap-[15px] inline-flex"${addAttribute(link, "href")}> <div class="w-[41px] h-[41px] relative"> <img class="w-[41px] h-[41px] left-0 top-0 absolute"${addAttribute(arrow, "src")}> </div> <div class="text-xl font-normal leading-7">Learn more</div> </a> </div> <div class="w-[210px] h-[170px] pt-0.5 pb-[1.95px] justify-center items-center flex"> <img class="hidden md:block"${addAttribute(image, "src")}> </div> </div>`)} <!-- card end--> </div> </div> <div class="flex-row items-center my-6 p-14 bg-zinc-100 rounded-[45px]"> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <div class="justify-start items-center gap-[275px] flex"> <div class="flex-col justify-start items-start gap-[26px] inline-flex text-black"> <div class="text-3xl font-medium">Let’s make things happen</div> <div class="text-lg font-normal">
Contact us today to learn more about how our digital marketing services can help your business grow and
            succeed online.
</div> <a href="/" class="px-[35px] py-5 bg-zinc-900 rounded-[14px] justify-start items-start gap-2.5 inline-flex"> <div class="text-center text-white text-xl font-normal leading-7">Reach out</div> </a> </div> </div> <div class="hidden md:grid justify-items-center -m-20"> <img src="/services/Illustration.svg" width="50%" alt="cat"> </div> </div> </div> ` })}`;
}, "/home/quinzel/Documents/localhost/positivus/src/components/Services.astro", void 0);

const $$Astro$3 = createAstro();
const $$Testimonial = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Testimonial;
  return renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative flex flex-col items-center md:flex-row"> <div class="row items-center py-5 md:pr-16 md:w-4/12 md:py-10"> <div class="text-center md:text-left space-y-3 bg-lime"> <h2 class="text-4xl font-medium leading-none sm:text-6xl">Testimonials</h2> </div> </div> <div class="flex items-center py-5 md:w-8/12 md:py-10"> <p class="text-xl font-normal leading-7 text-center md:text-left">Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</p> </div> </div> <div class="flex-row items-center my-6 p-14 bg-black text-white rounded-[45px]"> <div class="justify-items-center relative w-full border border-lime rounded-3xl"> <div class="p-4 md:p-10"> <p class="items-center justify-center text-white text-sm md:text-lg font-normal mb-4">"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</p> <span class="text-lime text-base md:text-xl font-medium">John Smith<br></span><span class="text-white text-lg font-normal">Marketing Director at XYZ Corp</span> </div> </div> </div> ` })}`;
}, "/home/quinzel/Documents/localhost/positivus/src/components/Testimonial.astro", void 0);

const $$Astro$2 = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative flex flex-col items-center md:flex-row"> <div class="row items-center py-5 md:pr-16 md:w-4/12 md:py-10"> <div class="text-center md:text-left space-y-3 bg-lime"> <h2 class="text-4xl font-medium leading-none sm:text-6xl">Contact Us</h2> </div> </div> <div class="flex items-center py-5 md:w-8/12 md:py-10"> <p class="text-xl font-normal leading-7 text-center md:text-left">
Connect with Us: Let's Discuss Your Digital Marketing Needs
</p> </div> </div> <div class="relative flex flex-col items-center md:flex-row my-6 bg-zinc-100 rounded-[45px]"> <div class="row items-center py-12 px-4 md:px-20 md:w-8/12 md:py-10"> <form action="#" class="space-y-8 md:w-full"> <div class="flex"> <div class="flex items-center me-4"> <input id="inline-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-lime bg-black border-black focus:ring-lime"> <label for="inline-radio" class="ms-2 text-base font-medium text-black">Say Hi</label> </div> <div class="flex items-center me-4 mx-8 md:mx-20"> <input id="inline-2-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-lime bg-black border-black focus:ring-lime"> <label for="inline-2-radio" class="ms-2 text-base font-medium text-black">Reach out</label> </div> </div> <div> <label for="email" class="block mb-2 text-base font-medium text-black">Name</label> <input type="email" id="email" class="shadow-sm bg-white border text-black text-base rounded-lg focus:ring-black focus:border-black block w-full p-2.5" placeholder="Name" required> </div> <div> <label for="subject" class="block mb-2 text-base font-medium text-black">Email</label> <input type="text" id="subject" class="block p-3 w-full text-base text-black bg-white rounded-lg border shadow-sm focus:ring-black focus:border-black" placeholder="Email" required> </div> <div class="sm:col-span-2"> <label for="message" class="block mb-2 text-base font-medium text-black dark:text-gray-400">Message</label> <textarea id="message" rows="6" class="block p-2.5 w-full text-base text-black bg-white rounded-lg shadow-sm border focus:ring-black focus:border-black" placeholder="Message"></textarea> </div> <button type="submit" class="w-full py-5 bg-zinc-900 rounded-[14px] justify-center gap-2.5 inline-flex"> <div class="text-center text-white text-xl font-normal leading-7">Send Message</div> </button> </form> </div> <div class="hidden md:grid md:justify-items-end md:w-4/12 md:py-2"> <img src="./clients/contact.svg" alt="c" width="80%"> </div> </div> ` })}`;
}, "/home/quinzel/Documents/localhost/positivus/src/components/Contact.astro", void 0);

const $$Astro$1 = createAstro();
const $$Case = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Case;
  return renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative flex flex-col items-center md:flex-row" id="projects"> <div class="row items-center py-5 md:pr-40 md:w-5/12 md:py-10"> <div class="text-center md:text-left space-y-3 bg-lime"> <h2 class="text-4xl font-medium leading-none sm:text-6xl">Case Studies</h2> </div> </div> <div class="flex items-center py-5 md:w-7/12 md:py-10"> <p class="text-xl font-normal leading-7 text-center md:text-left">Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p> </div> </div> <div class="w-full p-12 bg-zinc-900 rounded-[45px] justify-start items-start gap-16 inline-flex text-white"> <div class="grid grid-cols-1 md:grid-cols-3 gap-2 divide-x-0 md:divide-x divide-y md:divide-y-0"> <div class="flex-col items-start gap-5 inline-flex px-2 md:px-6 py-6 md:py-2"> <div class="w-full text-lg font-normal">For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</div> <div class="justify-start items-center gap-[15px] inline-flex"> <div class="text-lime text-xl font-normal leading-7">Learn more</div> <img src="/services/agc.svg" alt="arrow"> </div> </div> <div class="flex-col items-start gap-5 inline-flex px-2 md:px-6 py-6 md:py-2"> <div class="w-full text-lg font-normal">For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</div> <div class="justify-start items-center gap-[15px] inline-flex"> <div class="text-lime text-xl font-normal leading-7">Learn more</div> <img src="/services/agc.svg" alt="arrow"> </div> </div> <div class="flex-col items-start gap-5 inline-flex px-2 md:px-6 py-6 md:py-2"> <div class="w-full text-lg font-normal">For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</div> <div class="justify-start items-center gap-[15px] inline-flex"> <div class="text-lime text-xl font-normal leading-7">Learn more</div> <img src="/services/agc.svg" alt="arrow"> </div> </div> </div> <!-- <div class="w-[186px] h-[0px] origin-top-left rotate-90 border border-white"></div> --> <!-- <div class="w-[186px] h-[0px] origin-top-left rotate-90 border border-white"></div> --> </div> ` })}`;
}, "/home/quinzel/Documents/localhost/positivus/src/components/Case.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Positivus" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-20"> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "Case", $$Case, {})} ${renderComponent($$result2, "Team", $$Team, {})} ${renderComponent($$result2, "Testimonial", $$Testimonial, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} </main> ` })}`;
}, "/home/quinzel/Documents/localhost/positivus/src/pages/index.astro", void 0);

const $$file = "/home/quinzel/Documents/localhost/positivus/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
