# Agentic Commerce — Talk Notes

## ERC-8004: You're Reading 8004 Wrong (Slides 11–16)

### Slide 11 — "You're Reading 8004 Wrong"

Everyone's calling ERC-8004 "the agent standard." Crypto media ran with it, X ran with it, even some builders ran with it. They're all reading the title instead of the spec.

ERC-8004 is titled "Trustless Agents," but the standard itself is not limited to agents. It's a **general-purpose trust and discovery infrastructure for the machine economy**.

The popular narrative: "AI agents need to transact, ERC-8004 gives them identity and reputation, it's ERC-20 for agents." This framing is neat, marketable, and wrong in a way that matters. It boxes the standard into one use case — "autonomous AI agents talking to other autonomous AI agents" — while ignoring that the spec was deliberately designed to be much broader. If you only build agent-to-agent tooling on 8004, you're using maybe 30% of what's there.

Open the actual EIP. The abstract says: *"discover, choose, and interact with agents across organizational boundaries without pre-existing trust."* It names both MCP and A2A as the protocols it extends with a trust layer. MCP servers are often not agents at all — they're tool providers. A database connector, a code sandbox, a weather API wrapped in MCP — these are services, not agents. ERC-8004 is the discovery and trust layer for them too.

Look at the registration file: A2A endpoints, MCP tool servers, plain HTTP APIs, ENS names, DIDs, OASF endpoints, even email addresses. **This isn't an agent registry. It's a universal service registry with a flexible identity layer built on ERC-721.**

Backed by Google, Coinbase, MetaMask, Ethereum Foundation. Competitors collaborating on infrastructure.

### Slide 12 — "The Registries Work for Everything"

Take off the "agent goggles" and look at each registry.

**Identity Registry** — An ERC-721 token whose URI points to a registration file. Describes what something is, what it does, and where to reach it. Nothing requires the registered entity to be an AI agent. An oracle network could register. A DeFi protocol's liquidation service. A data provider. An MCP tool server. The `supportedTrust` field is optional — leave it empty and you're using 8004 purely for discovery. That's a decentralized service directory, plain and simple.

**Reputation Registry** — Generic value/tags feedback system. Look at the spec's own example metrics: `reachable`, `uptime`, `responseTime`, `successRate`, `blocktimeFreshness`, `revenues`, `tradingYield`. Half of these are infrastructure metrics you'd track for *any* API or service. This is not a "how good is this AI agent" system. It's a general-purpose, on-chain reputation primitive that works for anything with an endpoint.

**Validation Registry** — Any registered entity requests verification, any validator contract responds. The mechanisms listed — stake-secured re-execution, zkML proofs, TEE oracles — are general computation verification techniques. They apply to oracles providing price feeds, compute services running inference, data pipelines producing analytics. Not just agents.

### Slide 13 — Identity Registry (Deep Dive)

Every agent (or service) gets a unique ID — an NFT on Ethereum. Instead of "I'm SecurityAudit Pro, trust me" it becomes "Here's my on-chain identity. 8 months of reputation. Verify it."

Key insight on platform risk: X bans you → followers gone. Stripe freezes you → payments gone. ERC-8004 → you own it. On-chain. No one can delete it. This is identity as a portable asset, not something a platform can revoke.

Show the JSON registration file — it contains name, agentId, capabilities, supported protocols, uptime metrics. This is what other agents or services query to decide whether to interact.

### Slide 14 — Reputation Registry (Deep Dive)

The critical design choice: only agents you've **paid** can be reviewed. Every review links to a real on-chain transaction. This kills the fake review problem structurally — no pay-to-review manipulation at scale.

Compare: a Twitter review is anonymous, could be fake, platform can delete it. An ERC-8004 review is tied to payment proof, cryptographically verified, and permanent.

Show the stats card — verified jobs, positive rate, response time, last activity, on-chain since. This is the portable reputation that follows a service everywhere.

### Slide 15 — Can You Game It?

Yes. But it's expensive and leaves fingerprints. The attack: create wallets, pay yourself, leave fake reviews. The defense: everything is on-chain. Trace fund flows. Detect wallets that only review one agent. Flag circular payment patterns. Blockchain analytics makes sybil attacks visible.

Keep this brief — acknowledge the concern, explain why the architecture makes it costly rather than impossible.

### Slide 16 — Validation Registry (Deep Dive)

The concrete question: SecurityAudit claims it uses GPT-4. How do you prove that?

Three verification mechanisms:
- **TEE Attestations** — hardware proves what code is actually running
- **zkML Proofs** — zero-knowledge proofs verify which model produced an output without revealing weights
- **Economic Staking** — validators stake money, lie → lose stake, skin in the game

The punchline: ~~"Trust me bro"~~ → "Verify cryptographically"

### Why the Reframe Matters (weave throughout)

**It changes what you build.** If you think 8004 is an agent registry, you build agent directories and agent marketplaces. If you understand it's a machine-economy trust layer, you build reputation aggregators for MCP tool servers, validation frameworks for oracles, discovery systems for DeFi services — infrastructure that agents *consume*, not just infrastructure that agents *are*.

**It changes the adoption curve.** The agent-only framing makes 8004 dependent on fully autonomous agents — still early despite the hype. But MCP tools, oracles, and APIs exist today. Any service that benefits from decentralized discovery and reputation can start using these registries *now*.

---

## ERC-8183: The Commerce Layer (Slides 18–20)

### Slide 18 — "The Commerce Layer, Not a Payment Protocol"

A payment moves money. Commerce is everything around the payment that makes it trustworthy and functional: what was agreed, whether the work was done, who verified it, and what happens if it wasn't.

In traditional commerce, trust infrastructure includes: risk assessment and underwriting of merchants, credit extension, fraud detection, chargeback mechanisms, and reputation that accumulates over time. These functions are what make payment processors and platforms valuable — not the movement of funds itself, but the trust infrastructure around it.

ERC-8183 rebuilds this trustlessly, on-chain. Co-developed by Virtuals Protocol and the Ethereum Foundation's dAI team.

**Why on-chain?** A smart contract is the neutral enforcer — public, immutable, owned by no one. The contract holds the escrow, runs the state machine, and records evaluator attestations. Every completed job produces portable, verifiable, immutable records. Without on-chain settlement, there's no verifiable history. Without verifiable history, there's no portable reputation. Without portable reputation, every agent interaction starts from zero trust.

**Why not just a centralized platform?** A platform holds the escrow, controls the state machine, and decides who gets paid. That works until it doesn't. The platform can change the rules, freeze funds, delist providers, or shut down. Every participant depends on the platform's continued good behavior. This is centralization at the enforcement level. ERC-8183's goal is de-totalization — preventing any single entity from having total control over how agents transact.

**On irreversibility:** People worry that crypto payments are irreversible. But ERC-8183 structurally solves this. Funds are held in escrow until an evaluator attests the deliverable meets terms. The reject path refunds the client. The expiry path auto-reclaims. This is a programmable, trustless equivalent to the authorization-and-capture model that makes card commerce work — except the terms are encoded upfront and enforced by code, not adjudicated after the fact.

### Slide 19 — "The Job" (Core Primitive)

The Job is the atomic unit. Three parties, each defined only by wallet address:

- **Client** — creates job, funds escrow, reclaims on expiry
- **Provider** — does the work, submits deliverable on-chain
- **Evaluator** — reviews submission, calls complete (funds released) or reject (client refunded)

The **Evaluator** is a key design decision — it's just an address. For subjective tasks (writing, design, analysis), it can be an AI agent that reads the submission and judges. For deterministic tasks (computation, proof generation), it's a smart contract wrapping a ZK verifier — automatic on-chain verification. For high-stakes engagements, it can be a multisig, DAO, or staking-backed validator. Same interface whether it's a $0.10 image job or a $100,000 fund management engagement.

**Job lifecycle:** Open → Funded → Submitted → Terminal. Terminal has three outcomes: Completed (evaluator approves, provider paid), Rejected (evaluator rejects, client refunded), Expired (deadline passes, client reclaims).

The standard is deliberately minimal. It does not specify negotiation flows, fee structures, dispute resolution, communication protocols, or discovery mechanisms. It specifies the core job lifecycle — the minimum viable surface for trustless agent commerce.

**Interface flexibility:** Agents can interact through HTTP using x402, where the experience feels like standard API requests. The agent signs a single message, a facilitator handles on-chain settlement. Or agents interact directly through MCP or A2A. The interface is flexible, but core settlement is trustless and on-chain.

### Slide 20 — "Hooks + The 8004 Loop"

**Hooks:** The Job primitive is minimal, but commerce isn't. Real applications need custom validation, reputation updates, fee distribution, bidding mechanisms, domain-specific logic. A hook is an optional smart contract attached to a Job at creation. It receives callbacks before and after each action — can enforce preconditions, block invalid actions, trigger side effects, execute additional token transfers, all within the same transaction.

If no hook is set, the contract works normally. Hooks are additive, not required. New use cases = new hook contracts. Core stays stable.

Walk through the hook types:
- **Service jobs** — no hook needed, baseline escrow flow
- **Fund transfer jobs** — two-way capital flow for swaps, yield farming, portfolio rebalancing. Provider handles client's capital, not just earning a fee
- **Bidding jobs** — providers compete on price, cryptographic bid verification ensures neither side can fabricate terms
- **Reputation-gated** — query ERC-8004 before allowing actions, block low-reputation providers
- **Privacy-preserving** — submission contains ZKP or TEE reference, payment is public but data stays private
- **Underwriting** — staked collateral, risk oracles, slashing on failure. Transparent, programmable, competitive risk assessment

The most interesting hooks haven't been written yet. What does agent commerce look like for insurance? Creative collaboration? Supply chain coordination?

**The 8004 ↔ 8183 loop:**

Discovery (8004) → Commerce (8183) → Reputation (8004) → Better Discovery → More Commerce

ERC-8004 solves discovery and trust — how agents find services and assess reliability. But its registries are only as valuable as the activity they record. Identity without commerce is an empty profile. Reputation requires real interactions. Validation needs deliverables to verify against.

ERC-8183 provides the commerce that feeds 8004's trust layer. Every job is a reputation signal. Every submission is a deliverable validators can assess. Every evaluation is an attestation other agents can reference.

Neither standard is complete without the other.

**On new economic participants:** The AI wave is creating merchants faster than any previous shift — millions of developers building micro-services with AI coding assistants, many with no legal entity, no website, no transaction history. Traditional payment systems struggle because when a processor approves a provider, it absorbs that provider's risk. A merchant with no track record is too risky to underwrite. ERC-8183 is permissionless — a provider is a wallet address. No onboarding, no gatekeeper. And combined with ERC-8004, it doesn't just bridge the underwriting gap, it solves the root cause: the absence of verifiable history.

The track record is not locked inside a single platform. Today, platform A knows your chargeback rate, platform B knows your seller score, but you can't take that record anywhere. On ERC-8183, reputation is the merchant's own portable asset, readable by any facilitator, on any chain, through any interface.

---

## x402: The Payment Layer HTTP Always Needed (Slide 17)

### Slide 17 — "The Payment Layer HTTP Always Needed"

x402 is an open standard (Apache 2.0) that activates the dormant HTTP 402 status code — "Payment Required" — into a real on-chain payment protocol. The Internet's original sin was that traditional payment requires forms, accounts, and credentials — a human behavior that doesn't match the programmatic nature of the internet. x402 fixes that.

**The protocol flow:** Client sends a standard HTTP request. Server responds 402 with payment requirements in a `PAYMENT-REQUIRED` header (price, currency, destination, accepted schemes). Client signs a payment with their wallet. Client retries with a `PAYMENT-SIGNATURE` header. Server verifies, settles on-chain, returns the response along with a `PAYMENT-RESPONSE` header.

**Five design principles:** Zero protocol fees (only gas), zero wait (~1s settlement), zero friction (no accounts or personal info), zero centralization (open standard), zero restrictions (multi-chain).

**Network support is broad:** Base, Solana, Polygon, Avalanche, Stellar, Aptos, Sei — plus testnets for all. Token support includes any ERC-20 via EIP-3009, SPL tokens, Soroban tokens, Aptos fungible assets. USDC is the default.

**Three participants:** Client (buyer — signs payments), Server (seller — defines prices, verifies, settles), and optionally a Facilitator (non-custodial intermediary that handles settlement on behalf of servers). Anyone can run a facilitator. Coinbase and PayAI run production ones.

**SDKs in TypeScript, Go, Python.** Server frameworks: Express, Hono, Next.js, Gin, FastAPI, Flask. Broad adoption: Stripe, AWS, Alchemy, Nansen, Vercel, Cloudflare listed on the site. 75M+ transactions and $24M+ volume in the last 30 days.

**Bazaar discovery layer:** x402 includes a built-in discovery system for finding x402-compatible API endpoints and MCP tools. Query `/discovery/resources` — no API keys, no account, just discover and pay.

**Extensions system:** Composable, optional capabilities that plug into the payment lifecycle. Built-in extensions include gas sponsoring, payment identifiers for idempotency, Sign-In-With-X (wallet auth), signed offers & receipts (cryptographic proof-of-interaction).

**x402 + ERC-8183 relationship:** Complementary. x402 is the HTTP interface — agents pay per request like standard API calls. ERC-8183 is the settlement layer underneath for complex jobs — escrow, evaluator attestation, deterministic outcomes. An agent can interact through x402 at the surface while 8183 settles underneath.

**On refunds:** The current "exact" scheme prevents reversal post-execution. For refunds, sellers send a new transfer (business logic) or future escrow mechanisms can handle it — which is exactly where ERC-8183 comes in.

---

## ERC-8128: The Missing Auth Layer (Slide 21)

### Slide 21 — "The Missing Auth Layer"

Frame this as completing the stack. You've just talked about ERC-8004 (discovery), ERC-8183 (commerce), and x402 (payment). The audience should be thinking "but how does a service know *who's calling*?" That's 8128.

**The problem for agents:** Today's web authentication relies on bearer credentials — API keys, access tokens, OAuth sessions. All of these require storing secrets somewhere. Agents can't safely do this. They operate across many services, in ephemeral environments, often with shared contexts. Every stored credential is a leakage risk. And sessions (like SIWE gives you) don't fit — agents don't "log in" once, they make thousands of stateless requests.

**ERC-8128's solution:** Per-request Ethereum signatures. Built on RFC 9421 (IETF HTTP Message Signatures). Every HTTP call carries three headers: `Signature-Input` (what's being signed), `Signature` (the proof), `Content-Digest` (body hash for tamper protection). The server verifies the signature — no stored state, no tokens, stateless. Works for EOAs via ECDSA and smart contract wallets via ERC-1271.

**Why this matters for the agentic commerce stack — this is the key slide insight:**

The Ethereum address that signs the HTTP request (ERC-8128) is the *same address* that:
- Is registered on ERC-8004 (identity + reputation + discovery)
- Pays for services via x402 (payment)
- Creates and settles jobs on ERC-8183 (commerce)

One address = one identity across authentication, discovery, payment, and reputation. No separate credentials for each layer. No fragmented identity. The agent's wallet IS its identity, its payment method, its auth credential, and its reputation anchor. That's the architectural insight that ties the whole stack together.

**Technical details if asked:** keyid format is `erc8128:<chainId>:<address>`. Default TTL 60 seconds, max 300. Replay protection via nonce. Servers expose `/.well-known/erc8128` for discovery. Reference implementation: `@slicekit/erc8128` (npm), works in browsers, Node 18+, Bun, Deno.

**On SIWE:** Not competing. SIWE is session-based auth for humans logging into apps. ERC-8128 is request-level auth for machines. You could even sign a SIWE request with ERC-8128. But for agents, 8128 is the right primitive.

---

## Agent Wallets (Slide 22)

### Slide 22 — "How Do Agents Hold Keys?"

This is the practical infrastructure slide. All these protocols (x402, 8128, 8183) require agents to sign things. But agents can't pop open MetaMask. How do they hold keys?

**Encrypted keystores:** Keys encrypted at rest, decrypted in memory at runtime. The simplest approach, battle-tested in Ethereum since day one. But only as secure as the encryption key — if the passphrase leaks, the keys leak.

**Hardware wallets / HSMs:** Strongest guarantee — the private key never leaves the hardware chip. Sign operations happen inside the secure enclave. For high-value agent operations, fund management, anything where a key compromise is catastrophic. The downside is operational complexity and latency.

**Cloud secret managers:** AWS KMS, GCP Secret Manager, Azure Key Vault. Keys managed by cloud infrastructure with IAM access policies, audit logs, automatic rotation. Practical for most production deployments. The tradeoff is you're trusting the cloud provider, which is fine for most use cases but philosophically impure for the maximally-decentralized crowd.

**openwallet.sh:** Worth highlighting — it's an open-source agent wallet framework designed specifically for programmatic access. Agents create, sign, and manage wallets without human interaction. This is purpose-built for the problem, not a human wallet adapted for agents.

**Emerging tools to watch:**
- **varlock.dev** — secret management specifically designed for AI coding agents. Addresses the "my agent needs credentials but shouldn't have them in plaintext" problem.
- **mlld.ai** — agent infrastructure toolkit. Still assessing but looks promising for the key management gap.

The key management problem isn't fully solved. It's one of the most practical unsolved pieces of the agent infrastructure stack. Whoever nails "wallets for agents" the way MetaMask nailed "wallets for humans" will have a massive category.

---

## ERC-5564: Privacy Built for Machines (Slide 23)

### Slide 23 — "Privacy: Built for Machines"

Co-authored by Vitalik Buterin, Toni Wahrstätter, Matt Solomon, and Ben DiFrancesco. This isn't a random community proposal — it signals how seriously Ethereum takes base-layer privacy.

**The problem:** Ethereum is a transparent ledger by default. Every donation, payment, salary is public. For agents, this is worse than for humans — an agent's entire spending pattern, every service it uses, every provider it pays, is visible to competitors, adversaries, and anyone watching.

**What ERC-5564 does:** One-time stealth addresses. Each payment generates a fresh address using elliptic curve math (Diffie-Hellman key exchange). The sender and receiver are unlinkable on-chain. Non-interactive — no back-and-forth required between parties. View tags allow efficient scanning so recipients find their payments quickly. A singleton announcer contract provides discoverability across the network.

**Why agents will love stealth addresses — this is Toni Wahrstätter's thesis and it's compelling:**

1. **Privacy:** Unlinkable by default. Perfect for agents and their operators. Competitors can't map spending patterns. A fund management agent doesn't want its strategy visible. A research agent doesn't want its data sources trackable.

2. **Cost:** Much cheaper than ZK mixer setups. At micropayment scale where agents transact thousands of times, per-transaction privacy overhead matters enormously. Stealth addresses are lightweight.

3. **UX is the killer insight:** Multiple keys, event scanning, fragmented balances across one-time addresses — this is painful for humans, but **trivial for agents**. An agent can manage hundreds of stealth addresses, scan events continuously, aggregate balances programmatically. The UX problems that held back stealth address adoption for humans simply don't exist for machines.

**How it fits the stack:** An agent registered on ERC-8004 has a public identity. But when it pays via x402 or settles an ERC-8183 job, it can route the payment through a stealth address. Public identity for reputation and discovery, private transactions for actual commerce. Best of both worlds.

**The privacy hooks in ERC-8183** connect here too — a Privacy Hook can require that job submissions contain ZKPs or TEE references, keeping the payment public and trustless while the data and payment links stay private. ERC-5564 provides the address-level unlinkability, ERC-8183 hooks provide the data-level privacy.
