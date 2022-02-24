import { FIRST_NAMES, LAST_NAMES } from './data/names.js';
import { PROFESSIONS } from './data/professions.js';
import { CHARACTERISTICS } from './data/characteristics.js';
import { ACTIVITIES } from './data/activities.js';

import { getRandomElement } from './utils.js';
import { getSettings } from './settings.js';

export class CoriolisNPCGenerator {
  generateNPC() {
    const activity = getRandomElement(ACTIVITIES);
    return {
      firstName: getRandomElement(FIRST_NAMES),
      lastName: getRandomElement(LAST_NAMES),
      profession: getRandomElement(PROFESSIONS),
      characteristic: getRandomElement(CHARACTERISTICS),
      activity: activity.name,
      motivation: getRandomElement(activity.motivations),
    };
  }

  run() {
    const npc = this.generateNPC();
    const settings = getSettings();
    const content = renderTemplate(
      'modules/coriolis-npc-generator/templates/npc.hbs',
      { npc: npc, settings: settings }
    );

    content.then((d) => {
      const chatData = {
        content: d,
        whisper: ChatMessage.getWhisperRecipients('GM'),
      };
      ChatMessage.create(chatData);
    });
  }
}
