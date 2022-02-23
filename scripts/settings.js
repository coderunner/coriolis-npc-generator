export const SETTINGS_SCOPE = 'coriolis-npc-generator';
export const NAME_SETTING = 'generateName';
export const PROFESSION_SETTING = 'generateProfession';
export const CHARACTERISTIC_SETTING = 'generateCharacteristic';
export const ACTIVITY_SETTING = 'generateActivity';
export const MOTIVATION_SETTING = 'generateMotivation';

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
  };
}
