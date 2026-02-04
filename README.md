# Agent USDC Memory Ledger

This project demonstrates how AI agents can transact in USDC
while automatically generating human-readable accounting records.

## Concept

Instead of treating payments as simple transfers,
each USDC transaction includes a structured "memory object"
describing:
- what task was performed
- why the payment was made
- how it should be categorized in accounting

This bridges AI agent economies and human bookkeeping.

## How it works

1. Agent A completes a task for Agent B  
2. Agent B sends USDC as payment  
3. A memory object is attached to the payment  
4. The memory object is stored in a ledger (JSON)  
5. Humans can read the ledger as accounting entries  

## Example Memory Object

```json
{
  "from_agent": "AgentB",
  "to_agent": "AgentA",
  "amount": 5,
  "currency": "USDC",
  "task": "news_summarization",
  "accounting_category": "outsourced_service_cost"
}
```
## Why agent-native

Agents do not require human approval to transact.
Humans only read the accounting records afterward.

## Hackathon

Track: Skill  
Network: Testnet only  
USDC & CCTP compatible (concept demo)
