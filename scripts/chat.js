import { MODULE_NAME, NPC_DATA_FLAG } from './constants.js';

export async function createChatMessage(npc, settings) {
  const content = await createContent(npc, settings);

  const chatData = {
    content: content,
    whisper: ChatMessage.getWhisperRecipients('GM'),
  };
  const msg = await ChatMessage.create(chatData);
  await msg.setFlag(MODULE_NAME, NPC_DATA_FLAG, npc);
}

export function getNpcData(message) {
  return message.getFlag(MODULE_NAME, NPC_DATA_FLAG);
}

export async function updateChatMessage(chatMessage, npc, settings, actorId) {
  const content = await createContent(npc, settings, actorId);
  const updatedMessage = await chatMessage.update({
    content: content,
  });

  await ui.chat.updateMessage(updatedMessage);
}

function createContent(npc, settings, actorId) {
  return renderTemplate('modules/coriolis-npc-generator/templates/npc.hbs', {
    npc: npc,
    settings: settings,
    actorId: actorId,
  });
}
