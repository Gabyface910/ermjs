class Billy {
  constructor(apiKey, modelId = "gemini-2.0-flash") {
    this.apiKey = apiKey;
    this.modelId = modelId;
    this.memory = [];
    this.maxMemory = 20;
    this.memoryKey = 'billy_memory';
  }
  
  _loadMemory() {
    try {
      const saved = localStorage.getItem(this.memoryKey);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  }
  
  _saveMemory(history) {
    if (history.length > this.maxMemory) {
      history = history.slice(-this.maxMemory);
    }
    try {
      localStorage.setItem(this.memoryKey, JSON.stringify(history));
    } catch (e) {
      console.warn('Could not save memory:', e);
    }
  }
  
  async code(userInput) {
    // Implementation needed
  }
  
  clearMemory() {
    try {
      localStorage.removeItem(this.memoryKey);
    } catch (e) {
      console.warn('Could not clear memory:', e);
    }
  }
}

export default Billy;
