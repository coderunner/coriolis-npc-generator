import { CoriolisNPCGenerator } from './generator.js';

Hooks.once('ready', async () => {
  game.CoriolisNpcGenerator = new CoriolisNPCGenerator();
  console.log('Coriolis NPC Generator | Ready');
});
