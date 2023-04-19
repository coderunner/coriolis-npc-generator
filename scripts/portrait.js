import { isSemiIntelligence, isHumanite } from './data/origins.js';

const UNKNOWN_PLAYER = 'systems/yzecoriolis/css/images/unknown_player.png';
export const DEFAULT_PORTAIT_IMAGES = {
  portrait: UNKNOWN_PLAYER,
  token: UNKNOWN_PLAYER,
};

export function getPortrait(npcData, settings) {
  if (!game.CoriolisAiArt || !settings.useAIPortrait) {
    return DEFAULT_PORTAIT_IMAGES;
  }

  if (isSemiIntelligence(npcData.origin)) {
    // Not supported yet by the AI pack module
    return DEFAULT_PORTAIT_IMAGES;
  }

  let aiArtPortrait = null;
  if (isHumanite(npcData.origin)) {
    aiArtPortrait = game.CoriolisAiArt.getHumanitePortrait(npcData.origin);
    if (!aiArtPortrait.portrait.includes(npcData.origin)) {
      // if the filename doesn't match the origin, we prefer default image for humanites
      // the reason beeing that humanites appearance vary a lot between origins
      aiArtPortrait = DEFAULT_PORTAIT_IMAGES;
    }
  } else {
    aiArtPortrait = game.CoriolisAiArt.getHumanPortrait(
      npcData.profession.profile.name
    );
  }

  if (!aiArtPortrait) {
    return DEFAULT_PORTAIT_IMAGES;
  }

  if (!settings.useAIPortraitRoundToken) {
    return { portrait: aiArtPortrait.portrait };
  }

  return { portrait: aiArtPortrait.portrait, token: aiArtPortrait.token };
}