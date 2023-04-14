import { CoriolisNPCGenerator } from './generator.js';
import {
  NAME_SETTING,
  PROFESSION_SETTING,
  CHARACTERISTIC_SETTING,
  ACTIVITY_SETTING,
  MOTIVATION_SETTING,
  FACTION_SETTING,
  ICON_SETTING,
  NO_FACTION_PERCENTAGE,
  OTHER_FACTION_PERCENTAGE,
  SEMI_INTELLIGENCE_PERCENTAGE,
  HUMANITE_PERCENTAGE,
  USE_AI_PORTRAIT,
  USE_AI_PORTRAIT_ROUND_TOKEN,
} from './settings.js';
import { localizeOrigin } from './data/origins.js';
import { MODULE_NAME } from './constants.js';

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
  game.settings.register(MODULE_NAME, FACTION_SETTING, {
    name: 'coriolisNpcGenerator.settings.generateFaction',
    hint: 'coriolisNpcGenerator.settings.generateFactionHint',
    scope: 'client',
    type: Boolean,
    default: true,
    config: true,
  });
  game.settings.register(MODULE_NAME, ICON_SETTING, {
    name: 'coriolisNpcGenerator.settings.generateIcon',
    hint: 'coriolisNpcGenerator.settings.generateIconHint',
    scope: 'client',
    type: Boolean,
    default: true,
    config: true,
  });
  game.settings.register(MODULE_NAME, HUMANITE_PERCENTAGE, {
    name: 'coriolisNpcGenerator.settings.humanitePercentage',
    hint: 'coriolisNpcGenerator.settings.humanitePercentageHint',
    scope: 'client',
    type: Number,
    default: 1,
    range: {
      min: 0,
      max: 20,
      step: 1,
    },
    config: true,
  });
  game.settings.register(MODULE_NAME, SEMI_INTELLIGENCE_PERCENTAGE, {
    name: 'coriolisNpcGenerator.settings.semiIntelligencePercentage',
    hint: 'coriolisNpcGenerator.settings.semiIntelligencePercentageHint',
    scope: 'client',
    type: Number,
    default: 1,
    range: {
      min: 0,
      max: 20,
      step: 1,
    },
    config: true,
  });
  game.settings.register(MODULE_NAME, NO_FACTION_PERCENTAGE, {
    name: 'coriolisNpcGenerator.settings.noFactionPercentage',
    hint: 'coriolisNpcGenerator.settings.noFactionPercentageHint',
    scope: 'client',
    type: Number,
    default: 20,
    range: {
      min: 0,
      max: 40,
      step: 1,
    },
    config: true,
  });
  game.settings.register(MODULE_NAME, OTHER_FACTION_PERCENTAGE, {
    name: 'coriolisNpcGenerator.settings.otherFactionPercentage',
    hint: 'coriolisNpcGenerator.settings.otherFactionPercentageHint',
    scope: 'client',
    type: Number,
    default: 2,
    range: {
      min: 0,
      max: 20,
      step: 1,
    },
    config: true,
  });
  game.settings.register(MODULE_NAME, USE_AI_PORTRAIT, {
    name: 'coriolisNpcGenerator.settings.useAIPortrait',
    hint: 'coriolisNpcGenerator.settings.useAIPortraitHint',
    scope: 'client',
    type: Boolean,
    default: true,
    config: true,
  });
  game.settings.register(MODULE_NAME, USE_AI_PORTRAIT_ROUND_TOKEN, {
    name: 'coriolisNpcGenerator.settings.useAIPortraitRoundToken',
    hint: 'coriolisNpcGenerator.settings.useAIPortraitRoundTokenHint',
    scope: 'client',
    type: Boolean,
    default: true,
    config: true,
  });

  console.log('Coriolis NPC Generator | Ready');
});

Hooks.on('renderChatLog', (log, html, data) => {
  html.on('click', '.create-sheet', async (ev) => {
    const button = $(ev.currentTarget);
    const messageId = button.parents('.message').attr('data-message-id');
    const message = game.messages.get(messageId);

    await game.CoriolisNpcGenerator.generateNPCSheet(message);
  });
});

Handlebars.registerHelper('localizeOrigin', function (origin) {
  return localizeOrigin(origin);
});
