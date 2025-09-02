import cleaningbrush from "../assets/cleaningbrush.png";
import cleaningman from "../assets/cleaningman.png";
import leathercleaning from "../assets/leathercleaning.png";
import upholsteryImage from "../assets/upholsterycleaning.png";
import mattressImage from "../assets/mattresscleaning.png";
import tileImage from "../assets/tilecleaning.png";

export const serviceCards = [
  { id: "carpet-cleaning", title: "Carpet Steam Cleaning", desc: "Deep steam cleaning to remove dirt, stains, and allergens.", img: cleaningbrush },
  { id: "upholstery-cleaning", title: "Upholstery Steam Cleaning", desc: "Remove dirt and stains from sofas, chairs, and more.", img: upholsteryImage },
  { id: "mattress-cleaning", title: "Mattress Steam Cleaning", desc: "Sanitize and refresh your mattress for healthier sleep.", img: mattressImage },
  { id: "flood-damage-restoration", title: "Flood Damage Restoration", desc: "Professional restoration to minimize water damage.", img: cleaningman },
  { id: "leather-cleaning", title: "Leather Cleaning", desc: "Special care for leather furniture to restore its shine.", img: leathercleaning },
  { id: "carpet-patch-repair", title: "Carpet Patch Repair", desc: "Fix damaged or worn sections of your carpets.", img: cleaningbrush },
  { id: "stain-removal", title: "Stain Removal", desc: "Remove tough stains effectively from various surfaces.", img: cleaningman },
  { id: "tile-cleaning", title: "Tile Steam Cleaning", desc: "Deep clean tiles and grout to restore shine.", img: tileImage },
  { id: "car-seats-steam-cleaning", title: "Car Seats Steam Cleaning", desc: "Professional cleaning for car interiors and seats.", img: upholsteryImage },
];
