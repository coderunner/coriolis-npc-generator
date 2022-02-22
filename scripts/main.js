import { CoriolisNPCGenerator } from './generator.js';

Hooks.once('ready', () => {
  game.CoriolisNpcGenerator = new CoriolisNPCGenerator();

  //   console.log('Loading template...');
  //   loadTemplates(['modules/coriolis-npc-generator/templates/npc.hbs']);
});
