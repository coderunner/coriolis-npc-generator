import { getName } from './data/names.js';
import { PROFESSIONS } from './data/professions.js';
import { CHARACTERISTICS } from './data/characteristics.js';
import { ACTIVITIES } from './data/activities.js';
import {
  getRandomOrigin,
  isHumanite,
  isSemiIntelligence,
  localizeOrigin,
} from './data/origins.js';
import { ICONS } from './data/icon.js';
import { getFaction } from './data/factions.js';

import { getRandomElement } from './utils.js';
import { getSettings } from './settings.js';
import { createChatMessage, getNpcData, updateChatMessage } from './chat.js';
import { DEFAULT_PORTAIT_IMAGES, getPortrait } from './portrait.js';

export class CoriolisNPCGenerator {
  generateNPC(settings) {
    const activity = getRandomElement(ACTIVITIES);
    const origin = getRandomOrigin(settings);
    const faction = getFaction(origin, settings);
    return {
      name: getName(origin),
      profession: getRandomElement(PROFESSIONS),
      characteristic: getRandomElement(CHARACTERISTICS),
      activity: activity.name,
      motivation: getRandomElement(activity.motivations),
      origin: origin,
      faction: faction,
      icon: getRandomElement(ICONS),
    };
  }

  async generateNPCSheet(message) {
    const settings = getSettings();
    const npcData = getNpcData(message);

    const concept = this._generateConceptDescription(npcData);
    const profile = npcData.profession.profile;
    const portraitImages =
      getPortrait(npcData, settings) ?? DEFAULT_PORTAIT_IMAGES;

    const actor = await Actor.create({
      name: npcData.name,
      type: 'npc',
      img:
        portraitImages.portrait ??
        portraitImages.token ??
        DEFAULT_PORTAIT_IMAGES.portrait,
      prototypeToken: {
        actorLink: true,
        texture: {
          src:
            portraitImages.token ??
            portraitImages.portrait ??
            DEFAULT_PORTAIT_IMAGES.token,
        },
      },
      system: {
        bio: {
          concept: concept,
          origin: localizeOrigin(npcData.origin),
          icon: game.i18n.localize(
            `coriolisNpcGenerator.icons.${npcData.icon}`
          ),
        },
      },
    });

    actor.update({
      system: {
        attributes: profile.attributes,
        skills: profile.skills,
        reputation: profile.reputation,
      },
    });

    await updateChatMessage(message, npcData, settings, actor._id);
  }

  async run() {
    const settings = getSettings();
    const npc = this.generateNPC(settings);
    await createChatMessage(npc, settings);
  }

  _generateConceptDescription(npcData) {
    let concept = game.i18n.localize(
      `coriolisNpcGenerator.professions.${npcData.profession.name}`
    );
    if (npcData.faction) {
      concept +=
        ' - ' +
        game.i18n.localize(`coriolisNpcGenerator.factions.${npcData.faction}`);
    }
    if (isHumanite(npcData.origin)) {
      concept += ` - ${localizeOrigin(npcData.origin)} (${game.i18n.localize(
        'coriolisNpcGenerator.origins.humanite'
      )})`;
    }
    if (isSemiIntelligence(npcData.origin)) {
      concept += ' - ' + localizeOrigin(npcData.origin);
    }
    concept +=
      ' - ' +
      game.i18n.localize(
        `coriolisNpcGenerator.characteristics.${npcData.characteristic}`
      );

    return concept;
  }
}
