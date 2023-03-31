import { FIRST_NAMES, LAST_NAMES } from './data/names.js';
import { PROFESSIONS } from './data/professions.js';
import { CHARACTERISTICS } from './data/characteristics.js';
import { ACTIVITIES } from './data/activities.js';
import { ORIGINS } from './data/origins.js';
import { ICONS } from './data/icon.js';
import { getFaction } from './data/factions.js';

import { getRandomElement } from './utils.js';
import { getSettings } from './settings.js';
import { createChatMessage, getNpcData, updateChatMessage } from './chat.js';

export class CoriolisNPCGenerator {
  generateNPC(settings) {
    const activity = getRandomElement(ACTIVITIES);
    const origin = getRandomElement(ORIGINS);
    const faction = getFaction(origin, settings);
    return {
      firstName: getRandomElement(FIRST_NAMES),
      lastName: getRandomElement(LAST_NAMES),
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
    const npcData = getNpcData(message);

    const concept = this._generateConceptDescription(npcData);
    const profile = npcData.profession.profile;
    const actor = await Actor.create({
      name: `${npcData.firstName} ${npcData.lastName}`,
      type: 'npc',
      img: 'systems/yzecoriolis/css/images/unknown_player.png',
      system: {
        bio: {
          concept: concept,
          origin: game.i18n.localize(
            `coriolisNpcGenerator.origins.${npcData.origin}`
          ),
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

    await updateChatMessage(message, npcData, getSettings(), actor._id);
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
    concept +=
      ' - ' +
      game.i18n.localize(
        `coriolisNpcGenerator.characteristics.${npcData.characteristic}`
      );
    return concept;
  }
}
