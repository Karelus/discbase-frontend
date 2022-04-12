export type DiscType =
  | "putter"
  | "midrange"
  | "fairway driver"
  | "hybrid driver"
  | "distance driver";

export type Manufacturer =
  | "Discraft"
  | "Prodigy"
  | "Dynamic Discs"
  | "Discmania"
  | "Innova";

export type Disc = {
  id?: number;
  name: string;
  manufacturer: Manufacturer;
  type: DiscType;
  speed: number | string;
  glide: number | string;
  turn: number | string;
  fade: number | string;
};
