```javascript
console.log("Agent USDC Memory Ledger Demo");

function sendPayment(fromAgent, toAgent, amount, task) {
  const memoryObject = {
    from_agent: fromAgent,
    to_agent: toAgent,
    amount: amount,
    currency: "USDC",
    task: task,
    accounting_category: "outsourced_service_cost",
    timestamp: new Date().toISOString()
  };

  console.log("Simulated USDC transfer");
  console.log(memoryObject);
}

sendPayment("AgentB", "AgentA", 5, "news_summarization");
