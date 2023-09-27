import { isSemiIntelligence, isHumanite } from "./data/origins.js";

const UNKNOWN_PLAYER = "systems/yzecoriolis/css/images/unknown_player.png";
const UNKNOWN_PLAYER_TOKEN =
  "systems/yzecoriolis/css/images/unknown_player_token.png";
export const DEFAULT_PORTAIT_IMAGES = {
  portrait: UNKNOWN_PLAYER,
  token: UNKNOWN_PLAYER_TOKEN,
};

export function getPortrait(npcData, settings) {
  if (!game.CoriolisAiArt || !settings.useAIPortrait) {
    return DEFAULT_PORTAIT_IMAGES;
  }

  let aiArtPortrait = null;
  if (
    isSemiIntelligence(npcData.origin) &&
    game.CoriolisAiArt.getSemiIntelligencePortrait
  ) {
    aiArtPortrait = game.CoriolisAiArt.getSemiIntelligencePortrait(
      npcData.origin
    );
    if (!aiArtPortrait.portrait.includes(npcData.origin)) {
      // if the filename doesn't match the origin, we prefer default image for semi-intelligence
      // the reason beeing that semi-intelligence appearance vary a lot between origins
      aiArtPortrait = DEFAULT_PORTAIT_IMAGES;
    }
  } else if (
    isHumanite(npcData.origin) &&
    game.CoriolisAiArt.getHumanitePortrait
  ) {
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
