// Agentic Commerce — Slide Deck
// Design: clean white bg, cyan accent, neutral card borders, tinted backgrounds for emphasis
// All cards use neutral borders only — no colored borders, no stripes

const PL = "padding:64px 84px";

export const slides = [

  /* =============================================
     SLIDE 1 — TITLE
     ============================================= */
  `<div class="flex flex-col items-center justify-center w-full h-full relative overflow-hidden">
    <div class="orb" style="width:700px;height:700px;background:var(--cyan-light);top:-250px;right:-150px"></div>
    <div class="orb" style="width:500px;height:500px;background:var(--purple);bottom:-200px;left:-100px;opacity:0.1"></div>
    <div class="topline"></div>

    <div class="mono text-[11px] tracking-[0.3em] uppercase" style="color:var(--cyan)">Infrastructure for Autonomous Agents</div>
    <h1 class="mt-6 text-[80px] font-black tracking-tight leading-[0.9] text-center">
      Agentic<br/>Commerce
    </h1>
    <div class="mt-8 w-20 h-[2px]" style="background:linear-gradient(90deg,transparent,var(--cyan-light),transparent)"></div>
    <p class="mt-7 text-lg font-light" style="color:var(--text-3)">The payments stack for the agent economy</p>

    <div class="absolute bottom-7 flex items-center gap-2 text-[11px]" style="color:var(--text-3)">
      <div class="w-1.5 h-1.5 rounded-full animate-pulse" style="background:var(--cyan)"></div>
      <span class="mono">Arrow keys to navigate</span>
    </div>
  </div>`,

  /* =============================================
     SLIDE 2 — AGENDA
     ============================================= */
  `<div class="flex flex-col justify-center w-full h-full relative" style="${PL}">
    <div class="topline"></div>
    <div class="orb" style="width:500px;height:500px;background:var(--cyan-light);top:50%;left:-250px;transform:translateY(-50%)"></div>

    <h2 class="text-3xl font-bold mb-12" style="color:var(--cyan)">Today's Roadmap</h2>

    <div class="space-y-6">
      ${[
        ["01", "Why Agentic Commerce?", "The opportunity & what it means"],
        ["02", "Cards vs Crypto", "The card bull case, why crypto anyway & the nuanced take"],
        ["03", "The Full Stack", "ERC-8004, x402, escrow, privacy & the protocols powering it"],
      ].map(([n, title, sub]) => `
        <div class="flex items-center gap-6">
          <span class="mono text-sm font-bold flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style="background:var(--cyan-soft);color:var(--cyan)">${n}</span>
          <div class="flex-1">
            <p class="text-lg font-semibold">${title}</p>
            <p class="text-sm mt-0.5" style="color:var(--text-3)">${sub}</p>
          </div>
        </div>
      `).join("")}
    </div>

    <span class="slide-num">02 / 27</span>
  </div>`,

  /* =============================================
     SECTION 1: WHY AGENTIC COMMERCE
     ============================================= */

  /* SLIDE 3 — Section Divider */
  `<div class="flex flex-col items-center justify-center w-full h-full relative">
    <div class="orb" style="width:700px;height:700px;background:var(--cyan-light);top:50%;left:50%;transform:translate(-50%,-50%)"></div>
    <div class="topline"></div>

    <div class="mono text-[11px] tracking-[0.3em] uppercase mb-4" style="color:var(--text-3)">Section 01</div>
    <h2 class="text-6xl font-black tracking-tight text-center">Why Agentic<br/>Commerce?</h2>
    <div class="mt-6 w-14 h-[2px]" style="background:linear-gradient(90deg,transparent,var(--cyan-light),transparent)"></div>
    <p class="mt-6 text-lg font-light" style="color:var(--text-3)">The opportunity & what it means</p>

    <span class="slide-num">03 / 27</span>
  </div>`,

  /* SLIDE 4 — Use Cases: Existing + New */
  `<div class="flex flex-col w-full h-full relative" style="padding:48px 44px 40px">
    <div class="topline"></div>

    <h2 class="text-3xl font-bold mb-6">Why Agentic Commerce?</h2>

    <div class="flex gap-10 w-full flex-1 items-center">
    <!-- Left: Existing -->
    <div class="w-1/2 flex flex-col relative">
      <p class="mono text-[10px] tracking-[0.2em] uppercase mb-3" style="color:var(--text-3)">Existing demand, broken checkout</p>
      <h3 class="text-lg font-bold mb-5">Use Cases People Already Want</h3>

      <div class="flex flex-col gap-4">
        ${[
          ["&#9992;&#65039;", "Multi-leg travel booking", "Germany to Italy across 4 train companies. Agents compare, book &amp; pay in one flow."],
          ["&#128240;", "Single-article purchases", "Nobody registers with a newspaper for $1. Papers lose revenue, readers lose information."],
          ["&#128260;", "Price comparison &amp; switching", "Insurance, utilities, subscriptions &mdash; you're overpaying but the friction stops you."],
          ["&#128197;", "Event &amp; appointment booking", "Coordinating across venues, calendars &amp; payment systems. Agents handle the multi-step checkout."],
        ].map(([icon, t, d]) => `
          <div class="card flex items-start gap-3" style="padding:14px 20px">
            <span class="text-lg flex-shrink-0 mt-0.5">${icon}</span>
            <div>
              <p class="text-[13px] font-semibold mb-1">${t}</p>
              <p class="text-[11px] leading-relaxed" style="color:var(--text-2)">${d}</p>
            </div>
          </div>
        `).join("")}
      </div>
    </div>

    <!-- Right: New -->
    <div class="w-1/2 flex flex-col relative">
      <div class="orb" style="width:300px;height:300px;background:var(--cyan-light);bottom:-100px;right:-50px"></div>
      <p class="mono text-[10px] tracking-[0.2em] uppercase mb-3" style="color:var(--cyan)">New primitives, new markets</p>
      <h3 class="text-lg font-bold mb-5">Use Cases That Didn't Exist Before</h3>

      <div class="flex flex-col gap-4">
        ${[
          ["&#9889;", "Pay-per-API-call", "No subscriptions. Fractions of a cent per request &mdash; weather data, FX rates, LLM inference."],
          ["&#129309;", "Agent-to-agent hiring", "Your agent discovers a specialist, negotiates, pays for the subtask &amp; gets the result."],
          ["&#9881;&#65039;", "Compute &amp; storage on demand", "Agents buy GPU time, storage, bandwidth &mdash; paying per second instead of reserved capacity."],
          ["&#127760;", "Everything becomes a payable endpoint", "Dune dashboards per view. Research papers for pennies. No billing integration needed."],
        ].map(([icon, t, d]) => `
          <div class="card-glow flex items-start gap-3" style="padding:14px 20px">
            <span class="text-lg flex-shrink-0 mt-0.5">${icon}</span>
            <div>
              <p class="text-[13px] font-semibold mb-1">${t}</p>
              <p class="text-[11px] leading-relaxed" style="color:var(--text-2)">${d}</p>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
    </div>

    <span class="slide-num">04 / 27</span>
  </div>`,

  /* =============================================
     SECTION 2: FIAT vs CRYPTO
     ============================================= */

  /* SLIDE 5 — Section Divider */
  `<div class="flex flex-col items-center justify-center w-full h-full relative">
    <div class="orb" style="width:600px;height:600px;background:var(--cyan-light);top:50%;left:50%;transform:translate(-50%,-50%);opacity:0.1"></div>
    <div class="topline"></div>

    <div class="mono text-[11px] tracking-[0.3em] uppercase mb-4" style="color:var(--text-3)">Section 02</div>
    <h2 class="text-6xl font-black tracking-tight">Fiat vs Crypto</h2>
    <div class="mt-6 w-14 h-[2px]" style="background:linear-gradient(90deg,transparent,var(--cyan-light),transparent)"></div>
    <p class="mt-6 text-lg font-light" style="color:var(--text-3)">How agentic payments look on each rail</p>

    <span class="slide-num">05 / 27</span>
  </div>`,

  /* SLIDE 6 — Where Cards Fall Short */
  `<div class="flex flex-col justify-center w-full h-full relative" style="${PL}">
    <div class="topline"></div>

    <h2 class="text-4xl font-bold mb-2">Where Cards Fall Short for Agents</h2>
    <p class="text-base mb-6" style="color:var(--text-2)">Every card transaction passes through a 5-party system that wasn't built for machines.</p>

    <!-- 5-party flow compact -->
    <div class="flex items-center justify-center gap-1 mb-8">
      ${[
        ["&#128100;", "Cardholder"],
        ["&#127978;", "Merchant"],
        ["&#128179;", "Acquirer"],
        ["&#128179;", "Network"],
        ["&#127974;", "Issuer"],
      ].map(([icon, name], i, arr) => `
        <div class="flex items-center gap-1">
          <span class="text-base">${icon}</span>
          <span class="mono text-[10px] font-semibold" style="color:var(--text-2)">${name}</span>
        </div>
        ${i < arr.length - 1 ? '<span class="mono text-[10px]" style="color:var(--text-3)">&rarr;</span>' : ''}
      `).join("")}
    </div>

    <div class="grid grid-cols-3 gap-6 mb-8">
      ${[
        ["The 2\u20133% Tax", "~95% of interchange goes back as cashback, points & miles.", "Agents don't earn rewards. For machine-to-machine payments, this is <span style=\"color:var(--rose)\">pure overhead</span>."],
        ["Chargebacks at Scale", "At micro-payment volume, <strong>merchant protection matters more</strong> than consumer protection.", "Merchants flooded with agent micro-payments can't economically fight disputes."],
        ["Rigid Trust Model", "Always requires: human &rarr; KYC'd bank account &rarr; delegate to agent.", "Like a parent opening a child's card. Every agent is leashed to a human identity."],
      ].map(([title, p1, p2]) => `
        <div class="card" style="background:var(--rose-soft)">
          <p class="text-lg font-bold mb-3" style="color:var(--rose)">${title}</p>
          <p class="text-[14px] mb-3" style="color:var(--text-2)">${p1}</p>
          <p class="text-[14px]">${p2}</p>
        </div>
      `).join("")}
    </div>

    <div class="card" style="margin-top:24px;background:var(--bg-alt)">
      <p class="text-[14px]" style="color:var(--text-2)">The dispute problem is already visible. It's so broken that <span class="font-semibold" style="color:var(--text)">Visa and Google had to build entirely new protocols</span> to patch it.</p>
    </div>

    <span class="slide-num">06 / 27</span>
  </div>`,

  /* SLIDE 8 — New Protocols Prove It's Broken */
  `<div class="flex flex-col justify-center w-full h-full relative" style="${PL}">
    <div class="topline"></div>

    <h2 class="text-4xl font-bold mb-2">New Protocols Prove It's Broken</h2>
    <p class="text-base mb-8" style="color:var(--text-2)">If the old system worked for agents, <span style="color:var(--text)">these wouldn't need to exist</span>.</p>

    <div class="grid grid-cols-2 gap-6 mb-8">
      <div class="card" style="background:var(--bg-alt)">
        <div class="flex items-center gap-3 mb-3">
          <span class="badge" style="background:var(--surface);color:var(--text);border:1px solid var(--border)">VISA</span>
          <span class="mono text-[10px]" style="color:var(--text-3)">Oct 2025</span>
        </div>
        <p class="text-lg font-bold mb-2">Trusted Agent Protocol</p>
        <p class="text-[14px]" style="color:var(--text-2)">Cryptographically verifies AI agents vs bots. Adds intent signals. Like Apple Pay &mdash; tokenized credentials with limits &amp; expiry.</p>
        <p class="text-[12px] mt-3" style="color:var(--text-3)">Live with Stripe, Shopify, Akamai.</p>
      </div>
      <div class="card" style="background:var(--bg-alt)">
        <div class="flex items-center gap-3 mb-3">
          <span class="badge" style="background:var(--surface);color:var(--text);border:1px solid var(--border)">GOOGLE</span>
          <span class="mono text-[10px]" style="color:var(--text-3)">Sep 2025</span>
        </div>
        <p class="text-lg font-bold mb-2">AP2 &mdash; Agent Payments Protocol</p>
        <p class="text-[14px]" style="color:var(--text-2)">Tamper-proof "mandates" (signed user instructions) prove agent authorization. Works across cards, stablecoins, any rail.</p>
      </div>
    </div>

    <div class="card-glow" style="margin-top:24px">
      <p class="text-[14px]"><span class="font-bold" style="color:var(--cyan)">These are patches on a legacy system.</span> <span style="color:var(--text-2)">Stablecoins don't need patches &mdash; irreversible payments protect merchants by default. Escrow handles disputes. No 5-party overhead.</span></p>
    </div>

    <span class="slide-num">07 / 27</span>
  </div>`,

  /* SLIDE 9 — Why Crypto Wins for Agents */
  `<div class="flex flex-col justify-center w-full h-full relative" style="${PL}">
    <div class="topline"></div>
    <div class="orb" style="width:500px;height:500px;background:var(--cyan-light);top:-200px;right:-100px"></div>

    <h2 class="text-4xl font-bold mb-2">Why Crypto Wins for Agents</h2>
    <p class="text-base mb-10" style="color:var(--text-2)">Stablecoins aren't just cheaper. They're <span style="color:var(--cyan)">natively built</span> for how agents transact.</p>

    <div class="grid grid-cols-3 gap-6">
      ${[
        ["1", "Expanded Trust Structures", "Wallets attach to <span style=\"color:var(--cyan)\">anything</span>: gov ID, social OAuth, a domain, headless smart contracts. No KYC gate required.", "\u201COn crypto rails, nobody knows you're a bot.\u201D"],
        ["2", "Internet Native Money", "An agent hitting an LLM in the US, data in Europe &amp; compute in SE Asia shouldn't need 3 payment rails.", "Stablecoins: <span style=\"color:var(--cyan)\">global from day one</span>. One rail, any jurisdiction."],
        ["3", "New Payout Primitives", "Everything becomes a payable endpoint. More users that can transact and more things to pay for.", "Dune dashboards, compute APIs, AI agents \u2014 all from one wallet."],
      ].map(([n, title, desc, extra]) => `
        <div class="card-glow">
          <p class="text-3xl font-black mb-3" style="color:var(--cyan);opacity:0.25">${n}</p>
          <p class="text-lg font-bold mb-2">${title}</p>
          <p class="text-[13px] leading-relaxed" style="color:var(--text-2)">${desc}</p>
          <p class="text-[12px] mt-3 italic" style="color:var(--text-3)">${extra}</p>
        </div>
      `).join("")}
    </div>

    <span class="slide-num">08 / 27</span>
  </div>`,

  /* SLIDE 10 — Cards Are Catching Up, Crypto Is Native */
  `<div class="flex flex-col justify-center w-full h-full relative" style="${PL}">
    <div class="topline"></div>

    <h2 class="text-4xl font-bold mb-10">Cards Are Catching Up. Crypto Is Native.</h2>

    <div class="flex gap-6 mb-8">
      <!-- Cards column -->
      <div class="flex-1 card flex flex-col" style="background:var(--bg-alt)">
        <p class="text-xl font-bold mb-5" style="color:var(--text-2)">Cards: Patching Legacy</p>
        <ul class="space-y-3 text-[14px] flex-1" style="color:var(--text-2)">
          <li class="flex items-start gap-2"><span style="color:var(--text-3)">&rsaquo;</span> Bolting agent protocols onto 5-party system</li>
          <li class="flex items-start gap-2"><span style="color:var(--text-3)">&rsaquo;</span> Still requires human KYC backstop</li>
          <li class="flex items-start gap-2"><span style="color:var(--text-3)">&rsaquo;</span> 2&ndash;3% fee for infrastructure agents don't use</li>
          <li class="flex items-start gap-2"><span style="color:var(--text-3)">&rsaquo;</span> Chargebacks break at micro-payment scale</li>
        </ul>
        <p class="text-[12px] mt-5" style="color:var(--text-3)">Ubiquity &amp; compliance still matter for human-facing tasks.</p>
      </div>

      <!-- Crypto column -->
      <div class="flex-1 card-glow flex flex-col">
        <p class="text-xl font-bold mb-5" style="color:var(--cyan)">Crypto: Built for This</p>
        <ul class="space-y-3 text-[14px] flex-1">
          <li class="flex items-start gap-2"><span style="color:var(--cyan)">&rsaquo;</span> Irreversible payments protect merchants</li>
          <li class="flex items-start gap-2"><span style="color:var(--cyan)">&rsaquo;</span> Escrow for disputes where needed</li>
          <li class="flex items-start gap-2"><span style="color:var(--cyan)">&rsaquo;</span> No KYC gate, permissionless by default</li>
          <li class="flex items-start gap-2"><span style="color:var(--cyan)">&rsaquo;</span> Global single rail, micropayments native</li>
        </ul>
        <p class="text-[12px] mt-5" style="color:var(--text-3)">Natively designed for machine-to-machine commerce.</p>
      </div>
    </div>

    <div class="card text-center" style="margin-top:24px;background:var(--cyan-soft)">
      <p class="text-base" style="color:var(--text-2)">Cards are playing catch-up. <span class="font-semibold" style="color:var(--cyan)">Crypto doesn't need patches &mdash; it's the native rail.</span></p>
    </div>

    <span class="slide-num">09 / 27</span>
  </div>`,

  /* =============================================
     SECTION 3: THE FULL STACK
     ============================================= */

  /* SLIDE 11 — Section Divider */
  `<div class="flex flex-col items-center justify-center w-full h-full relative">
    <div class="orb" style="width:700px;height:700px;background:var(--purple);top:50%;left:50%;transform:translate(-50%,-50%);opacity:0.1"></div>
    <div class="topline"></div>

    <div class="mono text-[11px] tracking-[0.3em] uppercase mb-4" style="color:var(--text-3)">Section 03</div>
    <h2 class="text-6xl font-black tracking-tight">The Full Stack</h2>
    <div class="mt-6 w-14 h-[2px]" style="background:linear-gradient(90deg,transparent,var(--cyan-light),transparent)"></div>
    <p class="mt-6 text-lg font-light" style="color:var(--text-3)">ERC-8004, x402, escrow & the protocols behind agent payments</p>

    <span class="slide-num">10 / 27</span>
  </div>`,

  /* SLIDE — The Full Stack Overview */
  `<div class="flex flex-col justify-center w-full h-full relative" style="${PL}">
    <div class="topline"></div>

    <h2 class="text-4xl font-bold mb-8">How It All Fits Together</h2>

    <div class="flex gap-5 mb-8">
      ${[
        ["ERC-8004", "Trust &amp; Discovery", "Identity, reputation, validation. Find services, assess reliability, verify claims.", "var(--purple-soft)", "var(--purple)"],
        ["x402", "Payment", "HTTP-native micropayments. Pay per request, settle on-chain in ~1s.", "var(--cyan-soft)", "var(--cyan)"],
        ["ERC-8183", "Commerce", "The Job primitive. Escrow, evaluator attestation, deterministic settlement.", "var(--purple-soft)", "var(--purple)"],
        ["ERC-8128", "Authentication", "Per-request Ethereum signatures. Same key across the entire stack.", "var(--bg-alt)", "var(--text)"],
        ["ERC-5564", "Privacy", "Stealth addresses. Unlinkable payments, trivial for machines.", "var(--bg-alt)", "var(--text)"],
      ].map(([erc, role, desc, bg, color]) => `
        <div class="card flex-1" style="padding:16px 14px;background:${bg}">
          <p class="mono text-[10px] font-bold mb-1" style="color:${color}">${erc}</p>
          <p class="text-[13px] font-bold mb-2">${role}</p>
          <p class="text-[10px] leading-relaxed" style="color:var(--text-2)">${desc}</p>
        </div>
      `).join("")}
    </div>

    <div class="card" style="margin-top:24px;background:var(--bg-alt)">
      <div class="flex items-center justify-center gap-3 text-[13px]">
        <span class="font-bold" style="color:var(--purple)">Discover (8004)</span>
        <span style="color:var(--text-3)">&rarr;</span>
        <span class="font-bold">Authenticate (8128)</span>
        <span style="color:var(--text-3)">&rarr;</span>
        <span class="font-bold" style="color:var(--cyan)">Pay (x402)</span>
        <span style="color:var(--text-3)">&rarr;</span>
        <span class="font-bold" style="color:var(--purple)">Settle (8183)</span>
        <span style="color:var(--text-3)">&rarr;</span>
        <span class="font-bold" style="color:var(--purple)">Build Reputation (8004)</span>
        <span style="color:var(--text-3)">&rarr; &#128257;</span>
      </div>
      <p class="text-[11px] text-center mt-3" style="color:var(--text-3)">One Ethereum address flows through every layer. Privacy (5564) applies at any payment step. No separate credentials, no fragmented identity.</p>
    </div>

    <span class="slide-num">11 / 27</span>
  </div>`,

  /* SLIDE 12 — You're Reading 8004 Wrong */
  `<div class="flex flex-col justify-center w-full h-full relative" style="${PL}">
    <div class="topline"></div>
    <div class="orb" style="width:500px;height:500px;background:var(--purple);bottom:-200px;right:-100px;opacity:0.1"></div>

    <div class="flex items-center gap-3 mb-4">
      <span class="badge" style="background:var(--purple-soft);color:var(--purple);border:1px solid var(--border)">ERC-8004</span>
      <span class="mono text-[10px]" style="color:var(--text-3)">Ethereum Standard</span>
    </div>

    <h2 class="text-5xl font-black mb-3">You're Reading 8004 Wrong</h2>
    <p class="text-base mb-8" style="color:var(--text-2)">Backed by <strong>Google, Coinbase, MetaMask, Ethereum Foundation</strong>. Competitors collaborating on infrastructure.</p>

    <div class="flex gap-6 mb-8">
      <div class="card flex-1" style="background:var(--rose-soft)">
        <p class="mono text-[10px] mb-2" style="color:var(--rose)">What people think</p>
        <p class="text-[15px] font-semibold mb-2">"It's an agent registry"</p>
        <p class="text-[13px]" style="color:var(--text-2)">AI agents discover other AI agents. ERC-20 for agents. The end.</p>
      </div>
      <div class="card-glow flex-1">
        <p class="mono text-[10px] mb-2" style="color:var(--cyan)">What the spec actually says</p>
        <p class="text-[15px] font-semibold mb-2">"Universal trust infrastructure"</p>
        <p class="text-[13px]" style="color:var(--text-2)">Discover, choose &amp; interact with <strong>any service</strong> across organizational boundaries without pre-existing trust.</p>
      </div>
    </div>

    <div class="card" style="margin-top:24px;background:var(--bg-alt)">
      <p class="mono text-[10px] mb-2" style="color:var(--text-3)">The registration file accepts</p>
      <div class="flex flex-wrap gap-2">
        ${["A2A endpoints", "MCP tool servers", "Plain HTTP APIs", "ENS names", "DIDs", "OASF endpoints", "Email addresses"].map(t => `
          <span class="mono text-[10px] px-3 py-1 rounded-full" style="background:var(--purple-soft);color:var(--purple)">${t}</span>
        `).join("")}
      </div>
    </div>

    <span class="slide-num">12 / 27</span>
  </div>`,

  /* SLIDE 13 — Three Registries as Generic Primitives */
  `<div class="flex flex-col justify-center w-full h-full relative" style="${PL}">
    <div class="topline"></div>

    <div class="flex items-center gap-3 mb-4">
      <span class="badge" style="background:var(--purple-soft);color:var(--purple);border:1px solid var(--border)">ERC-8004</span>
      <span class="mono text-[10px]" style="color:var(--text-3)">Three Generic Primitives</span>
    </div>

    <h2 class="text-4xl font-bold mb-8">The Registries Work for Everything</h2>

    <div class="grid grid-cols-3 gap-6">
      <div class="card" style="background:var(--purple-soft)">
        <div class="w-10 h-10 mb-4 rounded-xl flex items-center justify-center text-xl" style="background:white;color:var(--purple)">&#9741;</div>
        <p class="text-lg font-semibold mb-2">Identity Registry</p>
        <p class="text-[13px] mb-3" style="color:var(--text-2)">ERC-721 token + registration file. Describes what something <strong>is</strong>, what it <strong>does</strong>, and where to <strong>reach</strong> it.</p>
        <p class="text-[12px] italic" style="color:var(--text-3)">Oracles, DeFi services, MCP tools, data providers &mdash; not just agents.</p>
      </div>
      <div class="card" style="background:var(--purple-soft)">
        <div class="w-10 h-10 mb-4 rounded-xl flex items-center justify-center text-xl" style="background:white;color:var(--purple)">&#9733;</div>
        <p class="text-lg font-semibold mb-2">Reputation Registry</p>
        <p class="text-[13px] mb-3" style="color:var(--text-2)">On-chain feedback with generic value/tags. Tracks <strong>reachable</strong>, <strong>uptime</strong>, <strong>responseTime</strong>, <strong>successRate</strong>.</p>
        <p class="text-[12px] italic" style="color:var(--text-3)">Half the default metrics are infrastructure metrics you'd track for any API.</p>
      </div>
      <div class="card" style="background:var(--purple-soft)">
        <div class="w-10 h-10 mb-4 rounded-xl flex items-center justify-center text-xl" style="background:white;color:var(--purple)">&#9889;</div>
        <p class="text-lg font-semibold mb-2">Validation Registry</p>
        <p class="text-[13px] mb-3" style="color:var(--text-2)">Any registered entity requests verification. Any validator contract responds. TEE, zkML, staking.</p>
        <p class="text-[12px] italic" style="color:var(--text-3)">General computation verification &mdash; works for oracles, compute, data pipelines.</p>
      </div>
    </div>

    <span class="slide-num">13 / 27</span>
  </div>`,

  /* SLIDE 13 — Identity Registry */
  `<div class="flex flex-col justify-center w-full h-full relative" style="${PL}">
    <div class="topline"></div>
    <div class="orb" style="width:400px;height:400px;background:var(--purple);top:-150px;left:-100px;opacity:0.08"></div>

    <div class="flex items-center gap-3 mb-2">
      <span class="badge" style="background:var(--purple-soft);color:var(--purple);border:1px solid var(--border)">ERC-8004</span>
      <span class="mono text-[10px]" style="color:var(--text-3)">Pillar 1 &mdash; Identity</span>
    </div>

    <h2 class="text-4xl font-bold mb-8">Identity Registry</h2>

    <div class="flex gap-12 items-start">
      <div class="flex-1">
        <p class="text-xl mb-6">Every agent gets a unique ID &mdash; an <span class="font-semibold" style="color:var(--purple)">NFT on Ethereum</span>.</p>

        <div class="space-y-3 mb-8">
          <p class="text-base line-through" style="color:var(--text-3)">"I'm SecurityAudit Pro, trust me."</p>
          <p class="text-base font-medium" style="color:var(--green)">"Here's my on-chain identity. 8 months of reputation. Verify it."</p>
        </div>

        <div class="card" style="background:var(--rose-soft)">
          <p class="mono text-[10px] mb-2" style="color:var(--rose)">Platform risk today</p>
          <p class="text-sm" style="color:var(--text-2)">X bans you &rarr; followers gone. Stripe freezes you &rarr; payments gone.</p>
          <p class="text-sm mt-2 font-semibold" style="color:var(--green)">ERC-8004 &rarr; you own it. On-chain. No one can delete it.</p>
        </div>
      </div>

      <div class="w-[340px] flex-shrink-0">
        <div class="card mono text-[12px] leading-[1.9]" style="background:var(--bg-alt)">
          <span style="color:var(--text-3)">{</span><br/>
          &nbsp;&nbsp;<span style="color:var(--purple)">"name"</span>: <span style="color:var(--green)">"SecurityAudit Pro"</span>,<br/>
          &nbsp;&nbsp;<span style="color:var(--purple)">"agentId"</span>: <span style="color:var(--green)">"0x1a2b..."</span>,<br/>
          &nbsp;&nbsp;<span style="color:var(--purple)">"capabilities"</span>: [<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:var(--green)">"security-audit"</span>,<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:var(--green)">"gas-optimization"</span><br/>
          &nbsp;&nbsp;],<br/>
          &nbsp;&nbsp;<span style="color:var(--purple)">"protocols"</span>: [<span style="color:var(--green)">"a2a"</span>, <span style="color:var(--green)">"x402"</span>],<br/>
          &nbsp;&nbsp;<span style="color:var(--purple)">"uptime"</span>: <span style="color:var(--cyan)">99.7</span><br/>
          <span style="color:var(--text-3)">}</span>
        </div>
      </div>
    </div>

    <span class="slide-num">14 / 27</span>
  </div>`,

  /* SLIDE 14 — Reputation Registry */
  `<div class="flex flex-col justify-center w-full h-full relative" style="${PL}">
    <div class="topline"></div>

    <div class="flex items-center gap-3 mb-2">
      <span class="badge" style="background:var(--purple-soft);color:var(--purple);border:1px solid var(--border)">ERC-8004</span>
      <span class="mono text-[10px]" style="color:var(--text-3)">Pillar 2 &mdash; Reputation</span>
    </div>

    <h2 class="text-4xl font-bold mb-8">Reputation Registry</h2>

    <div class="flex gap-12 items-start">
      <div class="flex-1">
        <p class="text-xl mb-2">Only agents you've <span class="font-bold" style="color:var(--cyan)">paid</span> can be reviewed.</p>
        <p class="text-base mb-8" style="color:var(--text-2)">Every review links to a real on-chain transaction. No fake 5-stars. No competitor 1-stars.</p>

        <div class="flex gap-6">
          <div class="flex-1 card" style="background:var(--rose-soft)">
            <p class="mono text-[10px] mb-2" style="color:var(--rose)">Twitter Review</p>
            <p class="text-sm" style="color:var(--text-3)">Anonymous. Could be fake. Platform can delete it.</p>
          </div>
          <div class="flex-1 card-glow">
            <p class="mono text-[10px] mb-2" style="color:var(--cyan)">ERC-8004 Review</p>
            <p class="text-sm">Tied to payment proof. Cryptographically verified. Permanent.</p>
          </div>
        </div>
      </div>

      <div class="w-[250px] flex-shrink-0 card" style="background:var(--purple-soft)">
        <p class="mono text-[10px] mb-5" style="color:var(--purple)">SecurityAudit Pro</p>
        <div class="space-y-3 text-sm">
          ${[
            ["Verified jobs", "1,247", ""],
            ["Positive", "96%", "color:var(--green)"],
            ["Avg response", "180ms", ""],
            ["Last job", "12 min ago", ""],
            ["On-chain since", "Jun 2025", ""],
          ].map(([label, val, style]) => `
            <div class="flex justify-between"><span style="color:var(--text-3)">${label}</span><span class="font-bold" ${style ? `style="${style}"` : ''}>${val}</span></div>
            <div class="w-full h-px" style="background:var(--border)"></div>
          `).join("")}
        </div>
      </div>
    </div>

    <span class="slide-num">15 / 27</span>
  </div>`,

  /* SLIDE 15 — Can You Game It? */
  `<div class="flex flex-col justify-center w-full h-full relative" style="${PL}">
    <div class="topline"></div>

    <h2 class="text-4xl font-bold mb-2">Can You Game It?</h2>
    <p class="text-2xl font-semibold mb-10" style="color:var(--text-2)">Yes. But it's expensive and leaves fingerprints.</p>

    <div class="grid grid-cols-2 gap-6">
      <div class="card" style="background:var(--rose-soft)">
        <p class="text-lg font-semibold mb-3" style="color:var(--rose)">The Attack</p>
        <p style="color:var(--text-2)">Create wallets. Pay yourself. Leave fake reviews.</p>
      </div>
      <div class="card" style="background:var(--green-soft)">
        <p class="text-lg font-semibold mb-3" style="color:var(--green)">The Defense</p>
        <ul class="space-y-2">
          <li class="flex items-center gap-2 text-[14px]"><span style="color:var(--cyan)">&rsaquo;</span> Trace fund flows on-chain</li>
          <li class="flex items-center gap-2 text-[14px]"><span style="color:var(--cyan)">&rsaquo;</span> Detect wallets that only review one agent</li>
          <li class="flex items-center gap-2 text-[14px]"><span style="color:var(--cyan)">&rsaquo;</span> Flag circular payment patterns</li>
        </ul>
      </div>
    </div>

    <p class="mt-8 text-[14px]" style="color:var(--text-3)">Everything is on-chain. Blockchain analytics makes sybil attacks <span class="font-semibold" style="color:var(--text-2)">visible</span>.</p>

    <span class="slide-num">16 / 27</span>
  </div>`,

  /* SLIDE 16 — Validation Registry */
  `<div class="flex flex-col justify-center w-full h-full relative" style="${PL}">
    <div class="topline"></div>
    <div class="orb" style="width:400px;height:400px;background:var(--purple);bottom:-150px;left:-100px;opacity:0.08"></div>

    <div class="flex items-center gap-3 mb-2">
      <span class="badge" style="background:var(--purple-soft);color:var(--purple);border:1px solid var(--border)">ERC-8004</span>
      <span class="mono text-[10px]" style="color:var(--text-3)">Pillar 3 &mdash; Validation</span>
    </div>

    <h2 class="text-4xl font-bold mb-2">Validation Registry</h2>
    <p class="text-base mb-10" style="color:var(--text-2)">SecurityAudit claims it uses GPT-4. How do you <span class="font-semibold" style="color:var(--purple)">prove</span> that?</p>

    <div class="grid grid-cols-3 gap-6 mb-8">
      ${[
        ["TEE Attestations", "Trusted Execution Environment. Hardware proves what code is actually running."],
        ["zkML Proofs", "Zero-knowledge proofs verify which model produced an output without revealing weights."],
        ["Economic Staking", "Validators stake money. Lie &rarr; lose stake. Skin in the game."],
      ].map(([title, desc]) => `
        <div class="card" style="background:var(--purple-soft)">
          <p class="text-base font-bold mb-2" style="color:var(--purple)">${title}</p>
          <p class="text-sm" style="color:var(--text-2)">${desc}</p>
        </div>
      `).join("")}
    </div>

    <div class="flex items-center gap-6 card" style="margin-top:24px;background:var(--bg-alt)">
      <p class="text-lg line-through" style="color:var(--rose)">"Trust me bro"</p>
      <div class="w-10 h-[2px]" style="background:linear-gradient(90deg,var(--rose),var(--cyan))"></div>
      <p class="text-lg font-bold" style="color:var(--cyan)">"Verify cryptographically"</p>
    </div>

    <span class="slide-num">17 / 27</span>
  </div>`,

  /* SLIDE 17 — x402: Internet-Native Payments */
  `<div class="flex flex-col justify-center w-full h-full relative" style="${PL}">
    <div class="topline"></div>
    <div class="orb" style="width:400px;height:400px;background:var(--cyan-light);top:-150px;right:-100px"></div>

    <div class="flex items-center gap-3 mb-4">
      <span class="badge" style="background:var(--cyan-soft);color:var(--cyan);border:1px solid var(--border)">x402</span>
      <span class="mono text-[10px]" style="color:var(--text-3)">Open Standard &mdash; Apache 2.0</span>
    </div>

    <h2 class="text-4xl font-bold mb-2">The Payment Layer HTTP Always Needed</h2>
    <p class="text-base mb-6" style="color:var(--text-2)">x402 activates the dormant HTTP 402 status code into a real on-chain payment protocol. Zero fees, ~1s settlement, no accounts required.</p>

    <div class="flex gap-6 mb-8">
      <!-- Flow -->
      <div class="flex-1">
        <p class="mono text-[10px] tracking-[0.15em] uppercase mb-3" style="color:var(--text-3)">Protocol flow</p>
        <div class="space-y-2">
          ${[
            ["1", "Client sends standard HTTP request"],
            ["2", "Server responds 402 + payment requirements"],
            ["3", "Client signs payment with wallet"],
            ["4", "Client retries with PAYMENT-SIGNATURE header"],
            ["5", "Server verifies, settles on-chain, returns response"],
          ].map(([n, text]) => `
            <div class="flex items-center gap-3">
              <span class="mono text-[10px] font-bold w-5 h-5 rounded flex items-center justify-center flex-shrink-0" style="background:var(--cyan-soft);color:var(--cyan)">${n}</span>
              <p class="text-[13px]" style="color:var(--text-2)">${text}</p>
            </div>
          `).join("")}
        </div>
        <div class="mt-4 flex flex-wrap gap-2">
          ${["Base", "Solana", "Polygon", "Avalanche", "Stellar", "Aptos", "Sei"].map(n => `
            <span class="mono text-[9px] px-2 py-0.5 rounded" style="background:var(--bg-alt);color:var(--text-3)">${n}</span>
          `).join("")}
        </div>
      </div>

      <!-- Five zeroes + ecosystem -->
      <div class="flex-1">
        <p class="mono text-[10px] tracking-[0.15em] uppercase mb-3" style="color:var(--text-3)">Design principles</p>
        <div class="space-y-2 mb-4">
          ${[
            ["Zero protocol fees", "Only nominal network gas"],
            ["Zero wait", "Settlement at internet speed (~1s)"],
            ["Zero friction", "No accounts, no personal info"],
            ["Zero centralization", "Open standard, anyone can build"],
            ["Zero restrictions", "Not tied to specific networks"],
          ].map(([title, desc]) => `
            <div class="flex items-start gap-2">
              <span class="text-[11px] font-bold flex-shrink-0" style="color:var(--cyan)">&rsaquo;</span>
              <p class="text-[12px]"><strong>${title}</strong> <span style="color:var(--text-3)">&mdash; ${desc}</span></p>
            </div>
          `).join("")}
        </div>
        <div class="card" style="padding:10px 16px;background:var(--bg-alt)">
          <p class="text-[11px]" style="color:var(--text-3)">SDKs: TypeScript, Go, Python. Frameworks: Express, Hono, Next.js, Gin, FastAPI, Flask. Adopters include Stripe, AWS, Alchemy, Nansen, Vercel, Cloudflare.</p>
        </div>
      </div>
    </div>

    <div class="card" style="margin-top:24px;background:var(--bg-alt)">
      <p class="text-[12px]" style="color:var(--text-3)"><strong style="color:var(--text-2)">x402 + ERC-8183 are complementary.</strong> x402 is the HTTP interface &mdash; agents and services pay per request like standard API calls. ERC-8183 is the settlement layer underneath &mdash; escrow, evaluator attestation, deterministic outcomes for complex jobs. x402 also includes <strong>Bazaar</strong>, a discovery layer for finding x402-compatible endpoints and MCP tools.</p>
    </div>

    <span class="slide-num">18 / 27</span>
  </div>`,

  /* SLIDE 18 — ERC-8183: Not a Payment Protocol */
  `<div class="flex flex-col justify-center w-full h-full relative" style="${PL}">
    <div class="topline"></div>
    <div class="orb" style="width:500px;height:500px;background:var(--cyan-light);bottom:-200px;right:-100px;opacity:0.1"></div>

    <div class="flex items-center gap-3 mb-4">
      <span class="badge" style="background:var(--purple-soft);color:var(--purple);border:1px solid var(--border)">ERC-8183</span>
      <span class="mono text-[10px]" style="color:var(--text-3)">Virtuals Protocol + Ethereum Foundation dAI</span>
    </div>

    <h2 class="text-4xl font-bold mb-2">The Commerce Layer, Not a Payment Protocol</h2>
    <p class="text-base mb-8" style="color:var(--text-2)">A payment moves money. Commerce is everything around it that makes it <strong>trustworthy</strong>.</p>

    <div class="flex gap-6 mb-8">
      <div class="card flex-1" style="background:var(--rose-soft)">
        <p class="mono text-[10px] mb-2" style="color:var(--rose)">Raw payment</p>
        <p class="text-[14px]" style="color:var(--text-2)">Send tokens and hope for the best. No record of what was agreed. No escrow. No evaluation. No recourse.</p>
      </div>
      <div class="card-glow flex-1">
        <p class="mono text-[10px] mb-2" style="color:var(--cyan)">ERC-8183 commerce</p>
        <p class="text-[14px]" style="color:var(--text-2)">Specification &rarr; escrow &rarr; deliverable submission &rarr; evaluator attestation &rarr; deterministic settlement. All on-chain.</p>
      </div>
    </div>

    <div class="card" style="margin-top:24px;background:var(--bg-alt)">
      <p class="text-[13px]" style="color:var(--text-2)"><strong>Why on-chain?</strong> A smart contract is the neutral enforcer &mdash; public, immutable, owned by no one. Every completed job produces portable, verifiable history that feeds reputation. Without on-chain settlement, there's no verifiable history. Without that, every agent interaction starts from zero trust.</p>
    </div>

    <span class="slide-num">19 / 27</span>
  </div>`,

  /* SLIDE 19 — The Job Primitive */
  `<div class="flex flex-col justify-center w-full h-full relative" style="${PL}">
    <div class="topline"></div>

    <div class="flex items-center gap-3 mb-4">
      <span class="badge" style="background:var(--purple-soft);color:var(--purple);border:1px solid var(--border)">ERC-8183</span>
      <span class="mono text-[10px]" style="color:var(--text-3)">The Core Primitive</span>
    </div>

    <h2 class="text-4xl font-bold mb-8">The Job</h2>

    <div class="flex gap-8 mb-8">
      <!-- Three parties -->
      <div class="flex-1">
        <p class="mono text-[10px] tracking-[0.15em] uppercase mb-4" style="color:var(--text-3)">Three parties, defined by wallet address</p>
        <div class="flex flex-col" style="gap:16px">
          ${[
            ["&#128100;", "Client", "Creates job, funds escrow, reclaims on expiry"],
            ["&#9881;&#65039;", "Provider", "Does the work, submits deliverable on-chain"],
            ["&#9878;&#65039;", "Evaluator", "Attests completion or rejects &mdash; can be AI agent, ZK verifier, multisig, or DAO"],
          ].map(([icon, role, desc]) => `
            <div class="card flex items-start gap-3" style="padding:12px 18px">
              <span class="text-lg flex-shrink-0">${icon}</span>
              <div>
                <p class="text-[13px] font-bold">${role}</p>
                <p class="text-[11px]" style="color:var(--text-2)">${desc}</p>
              </div>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- State machine -->
      <div class="flex-1">
        <p class="mono text-[10px] tracking-[0.15em] uppercase mb-4" style="color:var(--text-3)">Job lifecycle</p>
        <div class="flex items-center gap-2 mb-6">
          ${["Open", "Funded", "Submitted", "Terminal"].map((s, i, arr) => `
            <span class="mono text-[11px] font-bold px-3 py-1.5 rounded-lg" style="background:${i === arr.length - 1 ? 'var(--cyan-soft);color:var(--cyan)' : 'var(--bg-alt);color:var(--text-2)'}">${s}</span>
            ${i < arr.length - 1 ? '<span style="color:var(--text-3)">&rarr;</span>' : ''}
          `).join("")}
        </div>
        <div class="space-y-2">
          ${[
            ["Completed", "Evaluator approves &rarr; funds released to provider", "var(--green)"],
            ["Rejected", "Evaluator rejects &rarr; client refunded", "var(--rose)"],
            ["Expired", "Deadline passes &rarr; client reclaims", "var(--text-3)"],
          ].map(([state, desc, color]) => `
            <div class="flex items-center gap-3">
              <span class="mono text-[10px] font-bold w-20 flex-shrink-0" style="color:${color}">${state}</span>
              <p class="text-[11px]" style="color:var(--text-2)">${desc}</p>
            </div>
          `).join("")}
        </div>

        <div class="mt-6 card" style="padding:12px 18px;background:var(--bg-alt)">
          <p class="text-[11px]" style="color:var(--text-3)">Deliberately minimal. No negotiation, fee structures, or dispute resolution in the core &mdash; that's what hooks are for.</p>
        </div>
      </div>
    </div>

    <span class="slide-num">20 / 27</span>
  </div>`,

  /* SLIDE 20 — Hooks & Symbiosis with 8004 */
  `<div class="flex flex-col justify-center w-full h-full relative" style="${PL}">
    <div class="topline"></div>

    <div class="flex items-center gap-3 mb-4">
      <span class="badge" style="background:var(--purple-soft);color:var(--purple);border:1px solid var(--border)">ERC-8183</span>
      <span class="mono text-[10px]" style="color:var(--text-3)">Extensibility &amp; Ecosystem</span>
    </div>

    <h2 class="text-4xl font-bold mb-6">Hooks + The 8004 Loop</h2>

    <div class="flex gap-8">
      <!-- Hooks -->
      <div class="flex-1">
        <p class="mono text-[10px] tracking-[0.15em] uppercase mb-3" style="color:var(--text-3)">Hooks: modular extensibility</p>
        <p class="text-[13px] mb-4" style="color:var(--text-2)">Optional smart contract attached at job creation. Receives callbacks before/after each action. Core stays minimal, hooks add the logic.</p>
        <div class="grid grid-cols-2 gap-4">
          ${[
            ["Service jobs", "No hook needed &mdash; baseline escrow flow"],
            ["Fund transfers", "Two-way capital flow (swaps, yield, rebalancing)"],
            ["Bidding jobs", "Providers compete on price, cryptographic bid verification"],
            ["Reputation-gated", "Query ERC-8004 before allowing actions"],
            ["Privacy-preserving", "Submission contains ZKP or TEE reference"],
            ["Underwriting", "Staked collateral, risk oracles, slashing on failure"],
          ].map(([title, desc]) => `
            <div class="card" style="padding:10px 14px;background:var(--bg-alt)">
              <p class="text-[11px] font-bold mb-1">${title}</p>
              <p class="text-[10px] leading-relaxed" style="color:var(--text-3)">${desc}</p>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Symbiosis -->
      <div class="w-[340px] flex-shrink-0">
        <p class="mono text-[10px] tracking-[0.15em] uppercase mb-3" style="color:var(--text-3)">The 8004 &harr; 8183 loop</p>
        <div class="space-y-4 mb-4">
          ${[
            ["&#128270;", "Discovery (8004)", "Agent finds a service"],
            ["&#128176;", "Commerce (8183)", "Job created, escrow funded"],
            ["&#11088;", "Reputation (8004)", "Completion feeds on-chain history"],
            ["&#128200;", "Better Discovery", "Higher rep = more work"],
          ].map(([icon, title, desc], i, arr) => `
            <div class="card flex items-start gap-3" style="padding:10px 16px;background:var(--purple-soft)">
              <span class="text-base flex-shrink-0">${icon}</span>
              <div>
                <p class="text-[12px] font-bold" style="color:var(--purple)">${title}</p>
                <p class="text-[10px]" style="color:var(--text-2)">${desc}</p>
              </div>
            </div>
            ${i < arr.length - 1 ? '<div class="flex justify-center"><span class="text-[10px]" style="color:var(--text-3)">&darr;</span></div>' : ''}
          `).join("")}
        </div>
        <p class="text-[11px] italic" style="color:var(--text-3)">Neither standard is complete without the other. Identity without commerce is an empty profile. Commerce without reputation starts from zero trust.</p>
      </div>
    </div>

    <span class="slide-num">21 / 27</span>
  </div>`,

  /* SLIDE — ERC-8128: The Authentication Layer */
  `<div class="flex flex-col justify-center w-full h-full relative" style="${PL}">
    <div class="topline"></div>

    <div class="flex items-center gap-3 mb-4">
      <span class="badge" style="background:var(--purple-soft);color:var(--purple);border:1px solid var(--border)">ERC-8128</span>
      <span class="mono text-[10px]" style="color:var(--text-3)">Slice.so &mdash; HTTP Authentication</span>
    </div>

    <h2 class="text-4xl font-bold mb-2">The Missing Auth Layer</h2>
    <p class="text-base mb-6" style="color:var(--text-2)">x402 lets agents <strong>pay</strong> for services. ERC-8004 lets agents <strong>discover</strong> services. But how does a service know <strong>who's calling</strong>?</p>

    <div class="flex gap-6 mb-6">
      <div class="flex-1">
        <p class="mono text-[10px] tracking-[0.15em] uppercase mb-3" style="color:var(--text-3)">The problem for agents</p>
        <div class="space-y-4">
          <div class="card" style="padding:14px 18px;background:var(--rose-soft)">
            <p class="text-[12px] font-bold mb-1" style="color:var(--rose)">API keys &amp; bearer tokens don't work</p>
            <p class="text-[11px]" style="color:var(--text-2)">Agents can't safely store secrets. Tokens leak. Credentials get shared across contexts. Every leaked key is an open door.</p>
          </div>
          <div class="card" style="padding:14px 18px;background:var(--rose-soft)">
            <p class="text-[12px] font-bold mb-1" style="color:var(--rose)">Sessions don't fit machines</p>
            <p class="text-[11px]" style="color:var(--text-2)">SIWE gives you a session token after login. But agents don't "log in" &mdash; they make thousands of stateless requests across many services.</p>
          </div>
        </div>
      </div>

      <div class="flex-1">
        <p class="mono text-[10px] tracking-[0.15em] uppercase mb-3" style="color:var(--cyan)">ERC-8128: per-request Ethereum signatures</p>
        <div class="space-y-4">
          <div class="card-glow" style="padding:14px 18px">
            <p class="text-[12px] font-bold mb-1">Every HTTP call is self-authenticating</p>
            <p class="text-[11px]" style="color:var(--text-2)">Built on RFC 9421. Agent signs each request with its Ethereum key. Server verifies. No stored credentials, no sessions, stateless.</p>
          </div>
          <div class="card-glow" style="padding:14px 18px">
            <p class="text-[12px] font-bold mb-1">Same identity across the entire stack</p>
            <p class="text-[11px]" style="color:var(--text-2)">The address that signs the request is the same address registered on ERC-8004, the same address that pays via x402, the same address that builds reputation on ERC-8183 jobs.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="card" style="background:var(--cyan-soft)">
      <p class="text-[12px]" style="color:var(--text-2)"><strong style="color:var(--cyan)">One Ethereum address = identity + authentication + payment + reputation.</strong> ERC-8128 (authn) + ERC-8004 (discovery &amp; authz) + x402 (payment) + ERC-8183 (commerce). No separate credentials for each layer &mdash; one key does it all.</p>
    </div>

    <span class="slide-num">22 / 27</span>
  </div>`,

  /* SLIDE — Agent Wallets */
  `<div class="flex flex-col justify-center w-full h-full relative" style="${PL}">
    <div class="topline"></div>

    <div class="flex items-center gap-3 mb-4">
      <span class="badge" style="background:var(--cyan-soft);color:var(--cyan);border:1px solid var(--border)">WALLETS</span>
      <span class="mono text-[10px]" style="color:var(--text-3)">Key Management for Agents</span>
    </div>

    <h2 class="text-4xl font-bold mb-2">How Do Agents Hold Keys?</h2>
    <p class="text-base mb-6" style="color:var(--text-2)">Agents need wallets to sign transactions, authenticate, and pay. But they can't use MetaMask. The key management problem is open and evolving fast.</p>

    <div class="grid grid-cols-3 gap-5 mb-6">
      ${[
        ["&#128274;", "Encrypted Keystores", "Keys encrypted at rest, decrypted in memory at runtime. Simple, battle-tested, but only as secure as the encryption key."],
        ["&#128273;", "Hardware Wallets", "HSMs and hardware enclaves. Strongest guarantee &mdash; keys never leave the chip. For high-value agent operations."],
        ["&#9729;&#65039;", "Cloud Secret Managers", "AWS KMS, GCP Secret Manager. Keys managed by cloud infra with access policies, audit logs, rotation."],
      ].map(([icon, title, desc]) => `
        <div class="card" style="padding:16px 20px;background:var(--bg-alt)">
          <span class="text-lg block mb-2">${icon}</span>
          <p class="text-[13px] font-bold mb-1">${title}</p>
          <p class="text-[11px] leading-relaxed" style="color:var(--text-2)">${desc}</p>
        </div>
      `).join("")}
    </div>

    <div class="flex gap-5">
      <div class="card flex-1" style="padding:16px 20px;background:var(--cyan-soft)">
        <p class="text-[13px] font-bold mb-1" style="color:var(--cyan)">openwallet.sh</p>
        <p class="text-[11px]" style="color:var(--text-2)">Open-source agent wallet framework. Designed for programmatic access &mdash; agents create, sign, and manage wallets without human interaction.</p>
      </div>
      <div class="card flex-1" style="padding:16px 20px;background:var(--bg-alt)">
        <p class="text-[13px] font-bold mb-1">Emerging frameworks</p>
        <p class="text-[11px]" style="color:var(--text-2)"><strong>varlock.dev</strong> &mdash; secret management for AI coding agents. <strong>mlld.ai</strong> &mdash; agent infrastructure toolkit. Both early but promising for the key management gap.</p>
      </div>
    </div>

    <span class="slide-num">23 / 27</span>
  </div>`,

  /* SLIDE — Escrow Intro */
  `<div class="flex flex-col justify-center w-full h-full relative" style="${PL}">
    <div class="topline"></div>
    <div class="orb" style="width:500px;height:500px;background:var(--cyan-light);bottom:-200px;right:-100px;opacity:0.1"></div>

    <div class="flex items-center gap-3 mb-4">
      <span class="badge" style="background:var(--purple-soft);color:var(--purple);border:1px solid var(--border)">ERC-8183</span>
      <span class="mono text-[10px]" style="color:var(--text-3)">Escrow &amp; Settlement</span>
    </div>

    <h2 class="text-4xl font-bold mb-2">The Escrow Layer</h2>
    <p class="text-base mb-14" style="color:var(--text-2)">Agent pays $50 upfront. Provider disappears. Money's gone.<br/><span class="font-semibold" style="color:var(--rose)">That's the problem with "pay first, trust later."</span></p>

    <div class="flex items-center gap-4">
      ${[
        ["Agent creates", "escrow", false],
        ["$50 USDC", "locked", true],
        ["Provider", "delivers", false],
        ["Agent", "approves", false],
        ["Payment", "released", true],
      ].map(([line1, line2, highlight], i, arr) => `
        <div class="card flex-1 text-center" style="padding:16px 10px;${highlight ? 'background:var(--cyan-soft)' : ''}">
          <p class="mono text-[10px] font-medium" style="color:${highlight ? 'var(--cyan)' : 'var(--text-2)'}">${line1}</p>
          <p class="mono text-[10px]" style="color:var(--text-3)">${line2}</p>
        </div>
        ${i < arr.length - 1 ? '<div class="mono text-sm flex-shrink-0" style="color:var(--text-3)">&rarr;</div>' : ''}
      `).join("")}
    </div>

    <span class="slide-num">24 / 27</span>
  </div>`,

  /* SLIDE 21 — Escrow Code + Dispute */
  `<div class="flex gap-14 items-center w-full h-full relative" style="${PL}">
    <div class="topline"></div>

    <div class="flex-1">
      <div class="flex items-center gap-3 mb-3">
        <span class="badge" style="background:var(--purple-soft);color:var(--purple);border:1px solid var(--border)">ERC-8183</span>
      </div>
      <h2 class="text-3xl font-bold mb-6">Escrow Smart Contract</h2>
      <div class="card mono text-[12px] leading-[1.9]" style="background:var(--bg-alt)">
        <span style="color:var(--purple)">contract</span> <span style="color:var(--cyan)">AgentEscrow</span> {<br/>
        &nbsp;&nbsp;<span style="color:var(--text-3)">address</span> client;<br/>
        &nbsp;&nbsp;<span style="color:var(--text-3)">address</span> provider;<br/>
        &nbsp;&nbsp;<span style="color:var(--text-3)">uint256</span> amount;<br/>
        &nbsp;&nbsp;<span style="color:var(--text-3)">bool</span> workApproved;<br/><br/>
        &nbsp;&nbsp;<span style="color:var(--purple)">function</span> <span style="color:var(--cyan)">approveWork</span>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;workApproved = <span style="color:var(--cyan)">true</span>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;provider.<span style="color:var(--cyan)">transfer</span>(amount);<br/>
        &nbsp;&nbsp;}<br/><br/>
        &nbsp;&nbsp;<span style="color:var(--purple)">function</span> <span style="color:var(--cyan)">dispute</span>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:var(--text-3)">// Trigger arbitration</span><br/>
        &nbsp;&nbsp;}<br/>
        }
      </div>
    </div>

    <div class="w-[300px] flex-shrink-0">
      <h3 class="text-2xl font-bold mb-6" style="color:var(--rose)">Dispute Flow</h3>
      <div class="space-y-4">
        ${[
          ["Agent claims work is bad", false],
          ["Provider claims it's correct", false],
          ["3rd-party arbiter or DAO reviews", true],
          ["Winner gets the funds", true],
        ].map(([text, highlight]) => `
          <div class="card" style="padding:14px 18px;${highlight ? 'background:var(--cyan-soft)' : 'background:var(--bg-alt)'}">
            <p class="text-sm${highlight ? ' font-semibold' : ''}" style="color:${highlight ? 'var(--cyan)' : 'var(--text-2)'}">${text}</p>
          </div>
        `).join("")}
      </div>
      <p class="mt-5 mono text-[9px]" style="color:var(--text-3)">Live: ChaosChain Genesis Studio (8004.org)</p>
    </div>

    <span class="slide-num">25 / 27</span>
  </div>`,

  /* SLIDE — ERC-5564: Privacy */
  `<div class="flex flex-col justify-center w-full h-full relative" style="${PL}">
    <div class="topline"></div>
    <div class="orb" style="width:400px;height:400px;background:var(--purple);top:-150px;right:-100px;opacity:0.08"></div>

    <div class="flex items-center gap-3 mb-4">
      <span class="badge" style="background:var(--purple-soft);color:var(--purple);border:1px solid var(--border)">ERC-5564</span>
      <span class="mono text-[10px]" style="color:var(--text-3)">Stealth Addresses &mdash; Co-authored by Vitalik</span>
    </div>

    <h2 class="text-4xl font-bold mb-2">Privacy: Built for Machines</h2>
    <p class="text-base mb-6" style="color:var(--text-2)">Ethereum is transparent by default. Every payment, salary, donation is public. ERC-5564 fixes that without mixers, without trusted third parties, without breaking composability.</p>

    <div class="flex gap-6 mb-6">
      <div class="flex-1">
        <p class="mono text-[10px] tracking-[0.15em] uppercase mb-3" style="color:var(--text-3)">How stealth addresses work</p>
        <div class="space-y-4">
          <div class="card" style="padding:14px 18px;background:var(--bg-alt)">
            <p class="text-[12px] font-bold mb-1">One-time addresses</p>
            <p class="text-[11px]" style="color:var(--text-2)">Each payment generates a fresh address derived from elliptic curve math. Sender &amp; receiver are unlinkable on-chain. Non-interactive &mdash; no back-and-forth needed.</p>
          </div>
          <div class="card" style="padding:14px 18px;background:var(--bg-alt)">
            <p class="text-[12px] font-bold mb-1">View tags + singleton announcer</p>
            <p class="text-[11px]" style="color:var(--text-2)">Efficient scanning via view tags so recipients find their payments fast. A single announcer contract for discoverability across the network.</p>
          </div>
        </div>
      </div>

      <div class="flex-1">
        <p class="mono text-[10px] tracking-[0.15em] uppercase mb-3" style="color:var(--cyan)">Why agents will love this</p>
        <div class="space-y-4">
          <div class="card-glow" style="padding:14px 18px">
            <p class="text-[12px] font-bold mb-1">Privacy</p>
            <p class="text-[11px]" style="color:var(--text-2)">Unlinkable by default. An agent's operator doesn't want every transaction publicly traceable. Competitors can't map spending patterns.</p>
          </div>
          <div class="card-glow" style="padding:14px 18px">
            <p class="text-[12px] font-bold mb-1">Cost</p>
            <p class="text-[11px]" style="color:var(--text-2)">Much cheaper than ZK mixer setups. Practical at micropayment scale where per-transaction privacy overhead matters.</p>
          </div>
          <div class="card-glow" style="padding:14px 18px">
            <p class="text-[12px] font-bold mb-1">UX is the killer feature</p>
            <p class="text-[11px]" style="color:var(--text-2)">Multiple keys, event scanning, fragmented balances &mdash; painful for humans, <strong>trivial for agents</strong>. Stealth addresses feel built for machines.</p>
          </div>
        </div>
      </div>
    </div>

    <span class="slide-num">26 / 27</span>
  </div>`,

  /* SLIDE — CLOSING */
  `<div class="flex flex-col items-center justify-center w-full h-full relative">
    <div class="orb" style="width:700px;height:700px;background:var(--cyan-light);top:50%;left:50%;transform:translate(-50%,-50%)"></div>
    <div class="topline"></div>

    <h2 class="text-7xl font-black tracking-tight mb-4">Thank You</h2>
    <div class="w-14 h-[2px] mb-6" style="background:linear-gradient(90deg,transparent,var(--cyan-light),transparent)"></div>
    <p class="text-xl font-light mb-12" style="color:var(--text-3)">Questions?</p>

    <div class="flex gap-4">
      <span class="badge" style="background:var(--purple-soft);color:var(--purple);border:1px solid var(--border)">ERC-8004</span>
      <span class="badge" style="background:var(--cyan-soft);color:var(--cyan);border:1px solid var(--border)">x402</span>
      <span class="badge" style="background:var(--surface);color:var(--text-2);border:1px solid var(--border)">8004.org</span>
    </div>

    <span class="slide-num">27 / 27</span>
  </div>`,

];
