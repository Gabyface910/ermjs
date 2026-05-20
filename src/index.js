// ErmAI JavaScript SDK - Browser ready

import ChatGPSimon from './ChatGPSimon.js';
import Lumina from './Lumina.js';
import Translate from './Translate.js';
import Billy from './Billy.js';

// Export for browser use
if (typeof window !== 'undefined') {
  window.ChatGPSimon = ChatGPSimon;
  window.Lumina = Lumina;
  window.Translate = Translate;
  window.Billy = Billy;
}

export { ChatGPSimon, Lumina, Translate, Billy };
