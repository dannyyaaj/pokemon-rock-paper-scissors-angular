export interface Pokemon {
  id: number;
  order: number;
  name: string;
  height: number;
  weight: number;
  sprites: Sprite;
}

interface Sprite {
  front_default: string;
}

export type GameType = 'grass' | 'fire' | 'water';

export interface Starter {
  name: string;
  gameType: GameType;
  secondaryType?: string;
}

export interface Generation {
  id: number;
  label: string;
  starters: Starter[];
}

export const TYPE_RULES: { [key in GameType]: GameType } = {
  grass: 'water',
  water: 'fire',
  fire: 'grass'
};

export const GENERATIONS: Generation[] = [
  {
    id: 1, label: 'Gen 1 - Kanto',
    starters: [
      { name: 'bulbasaur', gameType: 'grass', secondaryType: 'poison' },
      { name: 'charmander', gameType: 'fire' },
      { name: 'squirtle', gameType: 'water' }
    ]
  },
  {
    id: 2, label: 'Gen 2 - Johto',
    starters: [
      { name: 'chikorita', gameType: 'grass' },
      { name: 'cyndaquil', gameType: 'fire' },
      { name: 'totodile', gameType: 'water' }
    ]
  },
  {
    id: 3, label: 'Gen 3 - Hoenn',
    starters: [
      { name: 'treecko', gameType: 'grass' },
      { name: 'torchic', gameType: 'fire' },
      { name: 'mudkip', gameType: 'water' }
    ]
  },
  {
    id: 4, label: 'Gen 4 - Sinnoh',
    starters: [
      { name: 'turtwig', gameType: 'grass' },
      { name: 'chimchar', gameType: 'fire' },
      { name: 'piplup', gameType: 'water' }
    ]
  },
  {
    id: 5, label: 'Gen 5 - Unova',
    starters: [
      { name: 'snivy', gameType: 'grass' },
      { name: 'tepig', gameType: 'fire' },
      { name: 'oshawott', gameType: 'water' }
    ]
  },
  {
    id: 6, label: 'Gen 6 - Kalos',
    starters: [
      { name: 'chespin', gameType: 'grass' },
      { name: 'fennekin', gameType: 'fire' },
      { name: 'froakie', gameType: 'water' }
    ]
  },
  {
    id: 7, label: 'Gen 7 - Alola',
    starters: [
      { name: 'rowlet', gameType: 'grass', secondaryType: 'flying' },
      { name: 'litten', gameType: 'fire' },
      { name: 'popplio', gameType: 'water' }
    ]
  },
  {
    id: 8, label: 'Gen 8 - Galar',
    starters: [
      { name: 'grookey', gameType: 'grass' },
      { name: 'scorbunny', gameType: 'fire' },
      { name: 'sobble', gameType: 'water' }
    ]
  },
  {
    id: 9, label: 'Gen 9 - Paldea',
    starters: [
      { name: 'sprigatito', gameType: 'grass' },
      { name: 'fuecoco', gameType: 'fire' },
      { name: 'quaxly', gameType: 'water' }
    ]
  }
];
