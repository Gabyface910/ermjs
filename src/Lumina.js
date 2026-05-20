class Lumina {
  constructor(apiKey, instruction = "You are a helpful assistant.", chat = false) {
    this.apiKey = apiKey;
    this.instruction = instruction;
    this.chat = chat;
    this.model = "llama-3.1-8b-instant";
    this.memory = [];
  }
  
  async prompt(query) {
    // Implementation needed
  }
  
  clearMemory() {
    this.memory = [];
  }
}

export default Lumina;
