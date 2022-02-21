import { CoriolisNPCGenerator } from './generator.js';

Hooks.once('ready', () => {
  game.CoriolisNpcGenerator = new CoriolisNPCGenerator();
});
