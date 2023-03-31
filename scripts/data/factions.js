import { getRandomElement } from '../utils.js';
import { FIRSTCOME } from './origins.js';

export const FIRSTCOME_FACTIONS = [
  'ahlamsTemple',
  'draconites',
  'churchOfTheIcons',
  'orderOfThePariah',
  'nomadFeferation',
];

export const ZENITHIAN_FACTIONS = [
  'consortium',
  'freeLeague',
  'legion',
  'syndicate',
  'zenithianHegemony',
];

export const OTHER_FACTIONS = ['nazareemSacrifice'];

export function getFaction(origin, settings) {
  const randomValue = Math.random();
  if (randomValue < settings.noFactionPercentage / 100) {
    return null;
  }

  if (
    randomValue <
    (settings.noFactionPercentage + settings.otherFactionPercentage) / 100
  ) {
    return getRandomElement(OTHER_FACTIONS);
  }

  if (origin == FIRSTCOME) {
    return getRandomElement(FIRSTCOME_FACTIONS);
  } else {
    return getRandomElement(ZENITHIAN_FACTIONS);
  }
}
