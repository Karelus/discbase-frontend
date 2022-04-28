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
  id?: string;
  name: string;
  manufacturer: Manufacturer;
  type: DiscType;
  speed: number;
  glide: number;
  turn: number;
  fade: number;
};
