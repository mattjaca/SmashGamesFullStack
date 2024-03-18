import { Game } from "./game";

export interface Studio {
  name: string,
  description: string,
  games: any
}
export interface GameObject {
  $values: Game[]
}
