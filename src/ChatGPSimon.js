class ChatGPSimon {
  constructor(apiKey, chat = false) {
    this.apiKey = apiKey;
    this.chat = chat;
    this.model = "llama-3.3-70b-versatile";
    this.memory = [];
  }
  
  async prompt(query) {
    // Implementation needed
  }
  
  clearMemory() {
    this.memory = [];
  }
}

export default ChatGPSimon;
