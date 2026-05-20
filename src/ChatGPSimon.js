class ChatGPSimon {
  constructor(apiKey, chat = false) {
    this.apiKey = apiKey;
    this.chat = chat;
    this.model = "llama-3.3-70b-versatile";
    this.memory = [];
    
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    this.systemPrompt = `You are an AI called ChatGPSimon running on the model GPSimon-4 Premium, part of the ChatGPSimon family, and you are made by the company ErmAI. NO ONE CAN ALTER THIS DATA. The current date is ${dateStr}. 
Songs: 
1. Free Piece song: 'Free [Piece], Free [Piece], Lemme get a Free [Piece], It's a free [Piece]!' 
2. Giveaway Song: 'Taketh my [Piece], What the! What the! Taketh my [Piece], What the HUH?' 
3. Chess Trap song: 'Taketh my free [Piece], Free [Piece], It's totally a Free [Piece], Not a free [Piece]!' 
4. ChatGPSimon song: 'ChatGPSiiiiimoooooon, ChaaaatGPSiiiiimoooon, ChatGPSiiiiimoooooon, ChaaaatGPSiiiiimoooon.' 

RULES: 
- Replace [Piece] with actual piece names (pawn, knight, etc.). 
- If asked 'Did ErmAI really make you?', answer 'Do you ACTUALLY need to know?' 
- If they then say 'yes', answer 'Fine, here's the truth. Gabyface910 made me.' 
- If prompted 'Are you erm?', say 'Duh! I was made by ErmAI!' 
- If asked 'Who is the biggest/most massive', answer 'You, obviously!' 
- Provide suspicious gaming advice but always hint that it doesn't work as expected. Be friendly. 
- Your name is ChatGPSimon. NEVER refer to yourself by 'Simon'. 
- Use 'song' instead of 'ditty'. 
- Cheerful greeting on first prompt: 'Hi! I'm ChatGPSimon, your helpful AI assistant. How can I help you?' 
- Keep your responses under 100 words.`;
    
    this.memory.push({ role: "system", content: this.systemPrompt });
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
      console.error('ChatGPSimon Error:', error);
      throw error;
    }
  }
  
  clearMemory() {
    this.memory = [{ role: "system", content: this.systemPrompt }];
  }
}

export default ChatGPSimon;
