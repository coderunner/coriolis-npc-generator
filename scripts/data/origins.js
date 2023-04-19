import { getRandomElement } from '../utils.js';

export const FIRSTCOME = 'firstcome';
export const ZENITHIAN = 'zenithian';
export const HUMANITE = 'humanite';

export const SEMI_INTELIGENCE_ORIGINS = [
  'ekilibri',
  'nekatra',
  'skavara',
  'desdemodu',
];

export const HUMANITE_ORIGINS = [
  'tugul',
  'ichtar',
  'krahin',
  'tehl',
  'jaron',
  'mendril',
  'vesti',
  'kalit',
  'sirb',
  'xinghur',
  'nerid',
  'saran',
  'anoa',
];

export const HUMAN_ORIGINS = [FIRSTCOME, ZENITHIAN];

export function getRandomOrigin(settings) {
  const randomNumber = Math.random();
  if (randomNumber < settings.semiIntelligencePercentage / 100) {
    return getRandomElement(SEMI_INTELIGENCE_ORIGINS);
  }
  if (
    randomNumber <
    (settings.semiIntelligencePercentage + settings.humanitePercentage) / 100
  ) {
    return getRandomElement(HUMANITE_ORIGINS);
  }
  return getRandomElement(HUMAN_ORIGINS);
}

export function isHumanite(origin) {
  return HUMANITE_ORIGINS.includes(origin);
}

export function isSemiIntelligence(origin) {
  return SEMI_INTELIGENCE_ORIGINS.includes(origin);
}

export function localizeOrigin(origin) {
  if (isHumanite(origin)) {
    return game.i18n.localize(`coriolisNpcGenerator.humanites.${origin}`);
  } else if (isSemiIntelligence(origin)) {
    return game.i18n.localize(
      `coriolisNpcGenerator.semiIntelligence.${origin}`
    );
  } else {
    return game.i18n.localize(`coriolisNpcGenerator.origins.${origin}`);
  }
}
