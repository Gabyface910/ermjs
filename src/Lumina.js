class Lumina {
  constructor(apiKey, instruction = "You are a helpful assistant.", chat = false) {
    this.apiKey = apiKey;
    this.instruction = instruction;
    this.chat = chat;
    this.model = "llama-3.1-8b-instant";
    this.memory = [];
    
    this.memory.push({ role: "system", content: instruction });
  }
  
  async prompt(query) {
    this.memory.push({ role: "user", content: query });
    
    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify({
          model: this.model,
          messages: this.memory,
          temperature: 0.7
        })
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(`API Error: ${error.error?.message || response.statusText}`);
      }
      
      const data = await response.json();
      const assistantResponse = data.choices[0].message.content;
      
      this.memory.push({ role: "assistant", content: assistantResponse });
      
      return this.chat ? assistantResponse.toLowerCase() : assistantResponse;
    } catch (error) {
      console.error('Lumina Error:', error);
      throw error;
    }
  }
  
  clearMemory() {
    this.memory = [{ role: "system", content: this.instruction }];
  }
}

export default Lumina;
