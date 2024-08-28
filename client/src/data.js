import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { GiWindmill, GiBoatFishing, GiCastle, GiForestCamp, GiIsland } from 'react-icons/gi';
import { MdOutlineVilla } from 'react-icons/md';
import beachCat from './assets/beach_cat.jpg';
import windmillCat from './assets/windmill_cat.webp';
import modernCat from './assets/modern_cat.webp';
import countrysideCat from './assets/countryside_cat.webp';
import poolCat from './assets/pool_cat.jpg';
import islandCat from './assets/island_cat.webp';
import lakeCat from './assets/lake_cat.webp';
import castleCat from './assets/castle_cat.webp';
import campingCat from './assets/camping_cat.jpg';

export const categories = [
  {
    img: beachCat,
    label: 'Beachfront',
    icon: TbBeach,
  },
  {
    img: windmillCat,
    label: 'Windmills',
    icon: GiWindmill,
  },
  {
    img: modernCat,
    label: 'Iconic cities',
    icon: MdOutlineVilla,
  },
  {
    img: countrysideCat,
    label: 'Countryside',
    icon: TbMountain,
  },
  {
    img: poolCat,
    label: 'Amazing Pools',
    icon: TbPool,
  },
  {
    img: islandCat,
    label: 'Islands',
    icon: GiIsland,
  },
  {
    img: lakeCat,
    label: 'Lakefront',
    icon: GiBoatFishing,
  },
  {
    img: castleCat,
    label: 'Castles',
    icon: GiCastle,
  },
  {
    img: campingCat,
    label: 'Camping',
    icon: GiForestCamp,
  },
];
