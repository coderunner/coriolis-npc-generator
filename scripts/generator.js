import { FIRST_NAMES, LAST_NAMES } from './data/names.js';
import { PROFESSIONS } from './data/professions.js';
import { CHARACTERISTICS } from './data/characteristics.js';
import { ACTIVITIES } from './data/activities.js';

import { getRandomElement } from './utils.js';

export class CoriolisNPCGenerator {
  generateNPC() {
    return {
      firstName: getRandomElement(FIRST_NAMES),
      lastName: getRandomElement(LAST_NAMES),
      profession: getRandomElement(PROFESSIONS),
      characteristic: getRandomElement(CHARACTERISTICS),
      activity: getRandomElement(ACTIVITIES),
    };
  }

  run() {
    const npc = this.generateNPC();
    const content = renderTemplate(
      'modules/coriolis-npc-generator/templates/npc.hbs',
      npc
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
