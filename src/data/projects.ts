import urbanLiving from "../assets/urban-living.jpg";
import workStudio from "../assets/work-studio.jpg";
import familyHome from "../assets/warm-family-home.webp";
import nordicCafe from "../assets/nordic-cafe.jpg";

export const projects = [
  {
    id: 1,
    title: "Serene Urban Residence",
    type: "Residential",
    style: "Minimal · Luxury",
    description:
      "A calm urban home designed around light, proportion, and material restraint.",
    images: [urbanLiving],
  },
  {
    id: 2,
    title: "Modern Work Studio",
    type: "Commercial",
    style: "Bold · Modern",
    description:
      "A functional workspace shaped to balance efficiency with visual clarity.",
    images: [workStudio],
  },
  {
    id: 3,
    title: "Warm Family Home",
    type: "Residential",
    style: "Warm · Earthy",
    description:
      "A functional residence shaped to balance efficiency with visual clarity.",
    images: [familyHome],
  },
  {
    id: 4,
    title: "Nordic Café Space",
    type: "Commercial",
    style: "Soft · Scandinavian",
    description:
      "A functional cafe shaped to balance efficiency with visual clarity.",
    images: [nordicCafe],
  },
];
