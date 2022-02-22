import { CoriolisNPCGenerator } from './generator.js';

Hooks.once('ready', () => {
  console.log('Coriolis NPC Generator: Ready');
  game.CoriolisNpcGenerator = new CoriolisNPCGenerator();
});
