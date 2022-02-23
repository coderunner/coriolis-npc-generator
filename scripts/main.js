import { CoriolisNPCGenerator } from './generator.js';
import {
  NAME_SETTING,
  PROFESSION_SETTING,
  CHARACTERISTIC_SETTING,
  ACTIVITY_SETTING,
  MOTIVATION_SETTING,
} from './settings.js';
import { MODULE_NAME } from './module-name.js';

Hooks.once('ready', async () => {
  game.CoriolisNpcGenerator = new CoriolisNPCGenerator();

  game.settings.register(MODULE_NAME, NAME_SETTING, {
    name: 'coriolisNpcGenerator.settings.generateName',
    hint: 'coriolisNpcGenerator.settings.generateNameHint',
    scope: 'client',
    type: Boolean,
    default: true,
    config: true,
  });
  game.settings.register(MODULE_NAME, PROFESSION_SETTING, {
    name: 'coriolisNpcGenerator.settings.generateProfession',
    hint: 'coriolisNpcGenerator.settings.generateProfessionHint',
    scope: 'client',
    type: Boolean,
    default: true,
    config: true,
  });
  game.settings.register(MODULE_NAME, CHARACTERISTIC_SETTING, {
    name: 'coriolisNpcGenerator.settings.generateCharacteristic',
    hint: 'coriolisNpcGenerator.settings.generateCharacteristicHint',
    scope: 'client',
    type: Boolean,
    default: true,
    config: true,
  });
  game.settings.register(MODULE_NAME, ACTIVITY_SETTING, {
    name: 'coriolisNpcGenerator.settings.generateActivity',
    hint: 'coriolisNpcGenerator.settings.generateActivityHint',
    scope: 'client',
    type: Boolean,
    default: true,
    config: true,
  });
  game.settings.register(MODULE_NAME, MOTIVATION_SETTING, {
    name: 'coriolisNpcGenerator.settings.generateMotivation',
    hint: 'coriolisNpcGenerator.settings.generateMotivationHint',
    scope: 'client',
    type: Boolean,
    default: true,
    config: true,
  });

  console.log('Coriolis NPC Generator | Ready');
});
