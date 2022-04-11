import { DiscType, Manufacturer } from "./types";

const contentMaxWidth = 1600;
const sidebarMaxWidth = 400;
const maxSkeletonItems = 20;

const welcoleText = "Welcome to the Discbase!";
const welcomeSubText = "Start by building your bag today";

const manufacturers: Manufacturer[] = [
  "Discraft",
  "Discmania",
  "Dynamic Discs",
  "Prodigy",
  "Innova",
];

const discTypes: DiscType[] = [
  "putter",
  "midrange",
  "fairway driver",
  "distance driver",
];

export default {
  contentMaxWidth,
  sidebarMaxWidth,
  welcoleText,
  welcomeSubText,
  maxSkeletonItems,
  manufacturers,
  discTypes,
};
