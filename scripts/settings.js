export const SETTINGS_SCOPE = 'coriolis-npc-generator';
export const NAME_SETTING = 'generateName';
export const PROFESSION_SETTING = 'generateProfession';
export const CHARACTERISTIC_SETTING = 'generateCharacteristic';
export const ACTIVITY_SETTING = 'generateActivity';
export const MOTIVATION_SETTING = 'generateMotivation';
export const FACTION_SETTING = 'generateFaction';
export const ICON_SETTING = 'generateIcon';
export const HUMANITE_PERCENTAGE = 'humanitePercentage';
export const SEMI_INTELLIGENCE_PERCENTAGE = 'semiIntelligencePercentage';
export const NO_FACTION_PERCENTAGE = 'noFactionPercentage';
export const OTHER_FACTION_PERCENTAGE = 'otherFactionPercentage';
export const USE_AI_PORTRAIT = 'useAIPortrait';
export const USE_AI_PORTRAIT_ROUND_TOKEN = 'useAIPortraitRoundToken';

export function getSettings() {
  return {
    [NAME_SETTING]: game.settings.get(SETTINGS_SCOPE, NAME_SETTING),
    [PROFESSION_SETTING]: game.settings.get(SETTINGS_SCOPE, PROFESSION_SETTING),
    [CHARACTERISTIC_SETTING]: game.settings.get(
      SETTINGS_SCOPE,
      CHARACTERISTIC_SETTING
    ),
    [ACTIVITY_SETTING]: game.settings.get(SETTINGS_SCOPE, ACTIVITY_SETTING),
    [MOTIVATION_SETTING]: game.settings.get(SETTINGS_SCOPE, MOTIVATION_SETTING),
    [FACTION_SETTING]: game.settings.get(SETTINGS_SCOPE, FACTION_SETTING),
    [ICON_SETTING]: game.settings.get(SETTINGS_SCOPE, ICON_SETTING),
    [SEMI_INTELLIGENCE_PERCENTAGE]: game.settings.get(
      SETTINGS_SCOPE,
      SEMI_INTELLIGENCE_PERCENTAGE
    ),
    [HUMANITE_PERCENTAGE]: game.settings.get(
      SETTINGS_SCOPE,
      HUMANITE_PERCENTAGE
    ),
    [NO_FACTION_PERCENTAGE]: game.settings.get(
      SETTINGS_SCOPE,
      NO_FACTION_PERCENTAGE
    ),
    [OTHER_FACTION_PERCENTAGE]: game.settings.get(
      SETTINGS_SCOPE,
      OTHER_FACTION_PERCENTAGE
    ),
    [USE_AI_PORTRAIT]: game.settings.get(SETTINGS_SCOPE, USE_AI_PORTRAIT),
    [USE_AI_PORTRAIT_ROUND_TOKEN]: game.settings.get(
      SETTINGS_SCOPE,
      USE_AI_PORTRAIT_ROUND_TOKEN
    ),
  };
}
