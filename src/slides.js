// Agentic Commerce — Slide Deck
// Design: clean white bg, cyan accent, neutral card borders, tinted backgrounds for emphasis
// All cards use neutral borders only — no colored borders, no stripes

const PL = "padding:64px 84px";

export const slides = [

  /* =============================================
     SLIDE 1 — TITLE (redesigned)
     ============================================= */
  `<div class="flex flex-col w-full h-full relative" style="background:#f8f9fa;font-family:'Inter',system-ui,sans-serif;overflow:hidden">
    <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;position:relative;padding:0 80px">
      <!-- Background blur -->
      <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:900px;height:900px;border-radius:50%;filter:blur(140px);background:linear-gradient(135deg,#c2e7e6,#f8f9fa);opacity:0.5;pointer-events:none"></div>

      <div style="position:relative;z-index:1;display:flex;flex-direction:column;align-items:center">
        <span style="color:#006565;font-weight:700;letter-spacing:0.2em;font-size:12px;text-transform:uppercase">Infrastructure for Autonomous Agents</span>
        <h1 style="font-weight:800;font-size:88px;color:#191c1d;letter-spacing:-0.04em;line-height:0.9;margin-top:24px">
          Agentic<br/>Commerce
        </h1>
        <div style="width:80px;height:2px;background:linear-gradient(90deg,transparent,#008080,transparent);margin-top:32px"></div>
        <p style="font-size:20px;color:#3e4949;margin-top:28px;font-weight:300">The payments stack for the agent economy</p>
      </div>

      <!-- Corner detail -->
      <div style="position:absolute;bottom:96px;right:96px;width:192px;height:192px;border-right:1px solid rgba(0,101,101,0.2);border-bottom:1px solid rgba(0,101,101,0.2);border-radius:0 0 24px 0"></div>
    </div>
    <div style="position:absolute;bottom:0;left:0;width:100%;height:2px;background:rgba(189,201,200,0.3)">
      <div style="height:100%;background:#006565;width:4%"></div>
    </div>
  </div>`,

  /* =============================================
     THE PAYMENTS FRICTION TIMELINE
     ============================================= */

  /* SLIDE — Why x402 Could Win */
  `<div class="flex flex-col w-full h-full relative" style="background:#f8f9fa;font-family:'Inter',system-ui,sans-serif;overflow:hidden">
    <main style="position:relative;padding:48px 80px 44px;flex:1;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden">
      <!-- Header -->
      <div>
        <h2 style="font-weight:800;font-size:36px;color:#191c1d;letter-spacing:-0.02em;line-height:1.1">Every Major Payments Shift<br/><span style="color:#006565">Removes a Layer of Friction</span></h2>
      </div>

      <!-- Timeline -->
      <div style="position:relative;margin-top:32px;flex:1;display:flex;flex-direction:column;justify-content:center">
        <!-- Timeline line -->
        <div style="position:absolute;top:50%;left:0;right:0;height:3px;background:linear-gradient(90deg,#bdc9c8,#006565);transform:translateY(-50%)"></div>

        <div style="display:flex;justify-content:space-between;align-items:center;position:relative">
          <!-- Era 1: Visa/Mastercard -->
          <div style="display:flex;flex-direction:column;align-items:center;width:320px">
            <div style="background:#edeeef;border-radius:14px;padding:20px;width:100%;margin-bottom:16px">
              <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
                <img src="/visa-logo.svg" alt="Visa" style="height:18px" />
                <span style="font-size:14px;color:#bdc9c8">/</span>
                <svg width="28" height="18" viewBox="0 0 131.39 86.9" xmlns="http://www.w3.org/2000/svg"><circle cx="43.45" cy="43.45" r="43.45" fill="#EB001B"/><circle cx="87.94" cy="43.45" r="43.45" fill="#F79E1B"/><path d="M65.7 10.2a43.35 43.35 0 0 0-16.2 33.25 43.35 43.35 0 0 0 16.2 33.25 43.35 43.35 0 0 0 16.2-33.25A43.35 43.35 0 0 0 65.7 10.2z" fill="#FF5F00"/></svg>
              </div>
              <p style="font-size:14px;font-weight:700;color:#191c1d;margin-bottom:6px">Acceptance friction</p>
              <p style="font-size:12px;color:#3e4949;line-height:1.5">Made it possible to pay anywhere. Cards replaced cash and checks at scale.</p>
            </div>
            <!-- Timeline dot -->
            <div style="width:16px;height:16px;border-radius:50%;background:#6e7979;border:3px solid #f8f9fa;z-index:1"></div>
            <p style="font-size:11px;font-weight:700;color:#6e7979;margin-top:8px">1958 — 2010s</p>
          </div>

          <!-- Era 2: Stripe -->
          <div style="display:flex;flex-direction:column;align-items:center;width:320px">
            <div style="background:#ffffff;border-radius:14px;padding:20px;width:100%;margin-bottom:16px;border:1px solid #edeeef;position:relative;overflow:hidden">
              <div style="position:absolute;top:0;left:0;width:100%;height:3px;background:#635BFF"></div>
              <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;margin-top:4px">
                <img src="/stripe-logo.svg" alt="Stripe" style="height:17px" />
              </div>
              <p style="font-size:14px;font-weight:700;color:#191c1d;margin-bottom:6px">Developer friction</p>
              <p style="font-size:12px;color:#3e4949;line-height:1.5">7 lines of code replaced months of integration work.</p>
            </div>
            <!-- Timeline dot -->
            <div style="width:20px;height:20px;border-radius:50%;background:#635BFF;border:3px solid #f8f9fa;z-index:1"></div>
            <p style="font-size:11px;font-weight:700;color:#635BFF;margin-top:8px">2011</p>
          </div>

          <!-- Era 3: x402 -->
          <div style="display:flex;flex-direction:column;align-items:center;width:320px">
            <div style="background:#ffffff;border-radius:14px;padding:20px;width:100%;margin-bottom:16px;border:1px solid #edeeef;position:relative;overflow:hidden">
              <div style="position:absolute;top:0;left:0;width:100%;height:3px;background:linear-gradient(90deg,#006565,#008080)"></div>
              <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;margin-top:4px">
                <span style="padding:3px 10px;background:#c2e7e6;border-radius:6px;font-size:12px;font-weight:700;color:#006565;font-family:'JetBrains Mono',monospace">x402</span>
              </div>
              <p style="font-size:14px;font-weight:700;color:#006565;margin-bottom:6px">Onboarding friction</p>
              <p style="font-size:12px;color:#3e4949;line-height:1.5">No accounts, no API keys, no setup.</p>
            </div>
            <!-- Timeline dot -->
            <div style="width:20px;height:20px;border-radius:50%;background:#006565;border:3px solid #f8f9fa;z-index:1;box-shadow:0 0 12px rgba(0,101,101,0.4)"></div>
            <p style="font-size:11px;font-weight:700;color:#006565;margin-top:8px">2026</p>
          </div>
        </div>
      </div>

      <!-- Bottom callout -->
      <div style="width:100%;background:#c2e7e6;padding:18px 24px;border-radius:14px;display:flex;align-items:center;gap:20px;margin-top:20px">
        <div style="background:#008080;padding:10px;border-radius:10px;flex-shrink:0">
          <span class="material-symbols-outlined" style="color:#e3fffe;font-size:20px">timeline</span>
        </div>
        <p style="font-size:14px;color:#002020;font-weight:500">Same pattern, next step.</p>
      </div>
    </main>
    <div style="position:absolute;bottom:0;left:0;width:100%;height:2px;background:rgba(189,201,200,0.3)">
      <div style="height:100%;background:#006565;width:10%"></div>
    </div>
  </div>`,


  /* SLIDE — The Friction Moved: From Merchants to Builders */
  `<div class="flex flex-col w-full h-full relative" style="background:#f8f9fa;font-family:'Inter',system-ui,sans-serif;overflow:hidden">
    <main style="position:relative;padding:44px 80px 44px;flex:1;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden">
      <!-- Header -->
      <div>
        <h2 style="font-weight:800;font-size:34px;color:#191c1d;letter-spacing:-0.02em;line-height:1.1">The Friction Moved</h2>
        <p style="font-size:15px;color:#3e4949;margin-top:8px">Stripe solved merchant payments. But today <span style="font-weight:700;color:#006565">everyone is a builder</span> — and the friction is on <span style="font-weight:700;color:#191c1d">their</span> side.</p>
      </div>

      <!-- Real-world example -->
      <div style="margin-top:20px">
        <p style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#6e7979;margin-bottom:12px">Real example: AI-powered video outreach campaign</p>
        <div style="display:flex;align-items:center;gap:8px">
          <!-- Step 1 -->
          <div style="background:#ffffff;padding:14px 16px;border-radius:12px;border:1px solid #edeeef;flex:1;text-align:center">
            <span class="material-symbols-outlined" style="color:#006565;font-size:22px;display:block;margin-bottom:6px">image</span>
            <p style="font-size:11px;font-weight:700;color:#191c1d">Midjourney</p>
            <p style="font-size:10px;color:#6e7979">Generate image</p>
          </div>
          <span class="material-symbols-outlined" style="color:#bdc9c8;font-size:16px;flex-shrink:0">arrow_forward</span>
          <!-- Step 2 -->
          <div style="background:#ffffff;padding:14px 16px;border-radius:12px;border:1px solid #edeeef;flex:1;text-align:center">
            <span class="material-symbols-outlined" style="color:#006565;font-size:22px;display:block;margin-bottom:6px">movie</span>
            <p style="font-size:11px;font-weight:700;color:#191c1d">Sora</p>
            <p style="font-size:10px;color:#6e7979">Animate to video</p>
          </div>
          <span class="material-symbols-outlined" style="color:#bdc9c8;font-size:16px;flex-shrink:0">arrow_forward</span>
          <!-- Step 3 -->
          <div style="background:#ffffff;padding:14px 16px;border-radius:12px;border:1px solid #edeeef;flex:1;text-align:center">
            <span class="material-symbols-outlined" style="color:#006565;font-size:22px;display:block;margin-bottom:6px">person_search</span>
            <p style="font-size:11px;font-weight:700;color:#191c1d">Enrichment API</p>
            <p style="font-size:10px;color:#6e7979">1,000 leads</p>
          </div>
          <span class="material-symbols-outlined" style="color:#bdc9c8;font-size:16px;flex-shrink:0">arrow_forward</span>
          <!-- Step 4 -->
          <div style="background:#ffffff;padding:14px 16px;border-radius:12px;border:1px solid #edeeef;flex:1;text-align:center">
            <span class="material-symbols-outlined" style="color:#006565;font-size:22px;display:block;margin-bottom:6px">campaign</span>
            <p style="font-size:11px;font-weight:700;color:#191c1d">Email Platform</p>
            <p style="font-size:10px;color:#6e7979">Send campaign</p>
          </div>
        </div>
        <p style="font-size:12px;color:#3e4949;margin-top:12px;text-align:center">4 services. Each one requires <span style="font-weight:700;color:#191c1d">the same 3 steps</span> before you can write a single line of code.</p>
      </div>

      <!-- The 3 friction steps — repeated per service -->
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;margin-top:20px">
        <!-- Step 1: Register -->
        <div style="background:#edeeef;padding:24px 20px;border-radius:14px;text-align:center;border-left:4px solid #6e7979">
          <div style="width:44px;height:44px;border-radius:50%;background:#ffffff;display:flex;align-items:center;justify-content:center;margin:0 auto 12px">
            <span class="material-symbols-outlined" style="color:#6e7979;font-size:24px">person_add</span>
          </div>
          <p style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#6e7979;margin-bottom:8px">Step 1</p>
          <p style="font-size:16px;font-weight:700;color:#191c1d;margin-bottom:6px">Create Account</p>
          <p style="font-size:11px;color:#3e4949;line-height:1.5">Sign up, verify email, fill profile. Every. Single. Platform.</p>
        </div>
        <!-- Step 2: Payment -->
        <div style="background:#edeeef;padding:24px 20px;border-radius:14px;text-align:center;border-left:4px solid #6e7979">
          <div style="width:44px;height:44px;border-radius:50%;background:#ffffff;display:flex;align-items:center;justify-content:center;margin:0 auto 12px">
            <span class="material-symbols-outlined" style="color:#6e7979;font-size:24px">credit_card</span>
          </div>
          <p style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#6e7979;margin-bottom:8px">Step 2</p>
          <p style="font-size:16px;font-weight:700;color:#191c1d;margin-bottom:6px">Add Payment Method</p>
          <p style="font-size:11px;color:#3e4949;line-height:1.5">Enter credit card. Subscribe to a plan you'll barely use. Pay for capacity, not usage.</p>
        </div>
        <!-- Step 3: API Key -->
        <div style="background:#edeeef;padding:24px 20px;border-radius:14px;text-align:center;border-left:4px solid #6e7979">
          <div style="width:44px;height:44px;border-radius:50%;background:#ffffff;display:flex;align-items:center;justify-content:center;margin:0 auto 12px">
            <span class="material-symbols-outlined" style="color:#6e7979;font-size:24px">vpn_key</span>
          </div>
          <p style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#6e7979;margin-bottom:8px">Step 3</p>
          <p style="font-size:16px;font-weight:700;color:#191c1d;margin-bottom:6px">Generate API Key</p>
          <p style="font-size:11px;color:#3e4949;line-height:1.5">Stored in plaintext. Shared across agents. Leaked keys = open doors. One key per service.</p>
        </div>
      </div>

      <!-- Bottom callout -->
      <div style="width:100%;background:#c2e7e6;padding:14px 24px;border-radius:14px;display:flex;align-items:center;gap:20px;margin-top:16px">
        <div style="background:#008080;padding:8px;border-radius:8px;flex-shrink:0">
          <span class="material-symbols-outlined" style="color:#e3fffe;font-size:18px">repeat</span>
        </div>
        <p style="font-size:12px;color:#002020;flex:1"><span style="font-weight:700;color:#006565">Multiply this by every service your agent needs.</span> Different agents need different keys. Keys get shared, leaked, forgotten. The signup-pay-key loop is the new integration tax.</p>
      </div>
    </main>
    <div style="position:absolute;bottom:0;left:0;width:100%;height:2px;background:rgba(189,201,200,0.3)">
      <div style="height:100%;background:#006565;width:11.5%"></div>
    </div>
  </div>`,

  /* SLIDE — x402: The Next Removal of Friction */
  `<div class="flex flex-col w-full h-full relative" style="background:#f8f9fa;font-family:'Inter',system-ui,sans-serif;overflow:hidden">
    <main style="position:relative;padding:48px 80px 48px;flex:1;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden">
      <!-- Header -->
      <div>
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">
          <span style="display:inline-block;padding:4px 12px;background:#c2e7e6;color:#006565;font-size:11px;font-weight:700;letter-spacing:0.05em;border-radius:6px">x402</span>
        </div>
        <h2 style="font-weight:800;font-size:36px;color:#191c1d;letter-spacing:-0.02em;line-height:1.1">x402 Removes That Friction</h2>
        <p style="font-size:15px;color:#3e4949;margin-top:8px">Stripe unified the API. x402 <span style="font-weight:700;color:#006565">eliminates the API entirely</span>.</p>
      </div>

      <!-- What x402 removes -->
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:16px;margin-top:28px">
        <div style="background:#ffffff;padding:24px 20px;border-radius:14px;border:1px solid #edeeef;position:relative;overflow:hidden;text-align:center">
          <div style="position:absolute;top:0;left:0;width:100%;height:3px;background:linear-gradient(90deg,#006565,#008080)"></div>
          <span class="material-symbols-outlined" style="color:#006565;font-size:32px;margin-top:4px;display:block;margin-bottom:12px">vpn_key_off</span>
          <p style="font-size:15px;font-weight:700;color:#191c1d;margin-bottom:6px">No API Keys</p>
          <p style="font-size:11px;color:#3e4949;line-height:1.5">HTTP is the protocol. Your wallet signs the request. No credentials to manage, leak, or rotate.</p>
        </div>
        <div style="background:#ffffff;padding:24px 20px;border-radius:14px;border:1px solid #edeeef;position:relative;overflow:hidden;text-align:center">
          <div style="position:absolute;top:0;left:0;width:100%;height:3px;background:linear-gradient(90deg,#006565,#008080)"></div>
          <span class="material-symbols-outlined" style="color:#006565;font-size:32px;margin-top:4px;display:block;margin-bottom:12px">money_off</span>
          <p style="font-size:15px;font-weight:700;color:#191c1d;margin-bottom:6px">0% Fees</p>
          <p style="font-size:11px;color:#3e4949;line-height:1.5">No interchange. No processing fee. Only nominal network gas. Merchants keep everything.</p>
        </div>
        <div style="background:#ffffff;padding:24px 20px;border-radius:14px;border:1px solid #edeeef;position:relative;overflow:hidden;text-align:center">
          <div style="position:absolute;top:0;left:0;width:100%;height:3px;background:linear-gradient(90deg,#006565,#008080)"></div>
          <span class="material-symbols-outlined" style="color:#006565;font-size:32px;margin-top:4px;display:block;margin-bottom:12px">lock_open</span>
          <p style="font-size:15px;font-weight:700;color:#191c1d;margin-bottom:6px">Permissionless</p>
          <p style="font-size:11px;color:#3e4949;line-height:1.5">No account approval. No KYC for merchants. No one can freeze your ability to receive payments.</p>
        </div>
        <div style="background:#ffffff;padding:24px 20px;border-radius:14px;border:1px solid #edeeef;position:relative;overflow:hidden;text-align:center">
          <div style="position:absolute;top:0;left:0;width:100%;height:3px;background:linear-gradient(90deg,#006565,#008080)"></div>
          <span class="material-symbols-outlined" style="color:#006565;font-size:32px;margin-top:4px;display:block;margin-bottom:12px">code</span>
          <p style="font-size:15px;font-weight:700;color:#191c1d;margin-bottom:6px">Fully Open Source</p>
          <p style="font-size:11px;color:#3e4949;line-height:1.5">Apache 2.0. No vendor lock-in. Inspect, fork, and extend. The payment layer belongs to everyone.</p>
        </div>
      </div>

      <!-- Bottom callout -->
      <div style="width:100%;background:#c2e7e6;padding:18px 24px;border-radius:14px;display:flex;align-items:center;gap:20px;margin-top:24px">
        <div style="background:#008080;padding:10px;border-radius:10px;flex-shrink:0">
          <span class="material-symbols-outlined" style="color:#e3fffe;font-size:20px">rocket_launch</span>
        </div>
        <p style="font-size:14px;color:#002020;flex:1">Stripe removed integration friction for <span style="font-weight:700;color:#006565">developers</span>. x402 removes payment friction for <span style="font-weight:700;color:#006565">everyone</span> — developers, merchants, and now agents.</p>
      </div>
    </main>
    <div style="position:absolute;bottom:0;left:0;width:100%;height:2px;background:rgba(189,201,200,0.3)">
      <div style="height:100%;background:#006565;width:12%"></div>
    </div>
  </div>`,

  /* SLIDE — What This Looks Like in Practice */
  `<div class="flex flex-col w-full h-full relative" style="background:#f8f9fa;font-family:'Inter',system-ui,sans-serif;overflow:hidden">
    <main style="position:relative;padding:36px 80px 36px;flex:1;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden">
      <!-- Header -->
      <div>
        <h2 style="font-weight:800;font-size:30px;color:#191c1d;letter-spacing:-0.02em;line-height:1.1">What This Looks Like in Practice</h2>
        <p style="font-size:14px;color:#3e4949;margin-top:6px">No signups. No API keys. No credit cards. Just a wallet and a conversation.</p>
      </div>

      <!-- Chat interface mockup with 3 screenshots -->
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px;margin-top:14px;flex:1;min-height:0">
        <!-- Chat 1: AgentCash setup -->
        <div style="background:#1e2733;border-radius:16px;overflow:hidden;display:flex;flex-direction:column;box-shadow:0 4px 20px rgba(0,0,0,0.15)">
          <!-- Chat header bar -->
          <div style="background:#15202b;padding:10px 16px;display:flex;align-items:center;gap:10px;border-bottom:1px solid rgba(255,255,255,0.06)">
            <div style="width:8px;height:8px;border-radius:50%;background:#34d399"></div>
            <span style="font-size:11px;font-weight:600;color:rgba(255,255,255,0.7)">AgentCash Setup</span>
          </div>
          <div style="flex:1;overflow:hidden">
            <img src="/chat-agentcash.png" alt="AgentCash setup" style="width:100%;height:100%;object-fit:cover;object-position:top left;display:block" />
          </div>
        </div>

        <!-- Chat 2: StableEnrich endpoints -->
        <div style="background:#1e2733;border-radius:16px;overflow:hidden;display:flex;flex-direction:column;box-shadow:0 4px 20px rgba(0,0,0,0.15)">
          <div style="background:#15202b;padding:10px 16px;display:flex;align-items:center;gap:10px;border-bottom:1px solid rgba(255,255,255,0.06)">
            <div style="width:8px;height:8px;border-radius:50%;background:#60a5fa"></div>
            <span style="font-size:11px;font-weight:600;color:rgba(255,255,255,0.7)">StableEnrich — Pay-per-request APIs</span>
          </div>
          <div style="flex:1;overflow:hidden">
            <img src="/chat-enrich.png" alt="StableEnrich endpoints" style="width:100%;height:100%;object-fit:cover;object-position:top;display:block" />
          </div>
        </div>

        <!-- Chat 3: StableStudio endpoints -->
        <div style="background:#1e2733;border-radius:16px;overflow:hidden;display:flex;flex-direction:column;box-shadow:0 4px 20px rgba(0,0,0,0.15)">
          <div style="background:#15202b;padding:10px 16px;display:flex;align-items:center;gap:10px;border-bottom:1px solid rgba(255,255,255,0.06)">
            <div style="width:8px;height:8px;border-radius:50%;background:#f59e0b"></div>
            <span style="font-size:11px;font-weight:600;color:rgba(255,255,255,0.7)">StableStudio — AI Generation</span>
          </div>
          <div style="flex:1;overflow:hidden">
            <img src="/chat-studio.png" alt="StableStudio endpoints" style="width:100%;height:100%;object-fit:cover;object-position:top;display:block" />
          </div>
        </div>
      </div>

      <!-- Bottom callout -->
      <div style="width:100%;background:#c2e7e6;padding:10px 20px;border-radius:12px;display:flex;align-items:center;gap:14px;margin-top:12px;flex-shrink:0">
        <div style="background:#008080;padding:6px;border-radius:6px;flex-shrink:0">
          <span class="material-symbols-outlined" style="color:#e3fffe;font-size:16px">flash_on</span>
        </div>
        <p style="font-size:12px;color:#002020;flex:1"><span style="font-weight:700;color:#006565">One wallet. Every service. Pay-per-use.</span> The agent discovers endpoints, gets pricing, and pays — all through x402 micropayments.</p>
      </div>
    </main>
    <div style="position:absolute;bottom:0;left:0;width:100%;height:2px;background:rgba(189,201,200,0.3)">
      <div style="height:100%;background:#006565;width:12.5%"></div>
    </div>
  </div>`,

  /* =============================================
     SECTION 1: WHY AGENTIC COMMERCE
     ============================================= */

  /* SLIDE 4 — Use Cases: Existing + New (redesigned) */
  `<div class="flex flex-col w-full h-full relative" style="background:#f8f9fa;font-family:'Inter',system-ui,sans-serif">
    <!-- Main Content -->
    <div style="flex:1;padding:48px 80px 48px;display:flex;flex-direction:column">
      <h1 style="font-size:48px;font-weight:800;letter-spacing:-0.02em;color:#191c1d;margin-bottom:40px">Why Agentic Commerce?</h1>

      <div style="flex:1;display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:stretch">
        <!-- Left Column: Existing Demand -->
        <div style="background:#c2e7e6;border-radius:16px;padding:32px;display:flex;flex-direction:column;gap:24px;border:1px solid rgba(189,201,200,0.2);box-shadow:0 1px 3px rgba(0,0,0,0.05)">
          <div>
            <span style="display:inline-block;padding:4px 12px;background:#008080;color:#e3fffe;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;border-radius:9999px;margin-bottom:12px">Existing demand, cumbersome purchasing experience</span>
            <h2 style="font-size:24px;font-weight:700;color:#191c1d;line-height:1.2">Use Cases People Already Want</h2>
          </div>
          <div style="display:flex;flex-direction:column;gap:20px">
            <div style="display:flex;gap:16px;align-items:flex-start">
              <div style="flex-shrink:0;width:40px;height:40px;border-radius:8px;background:#ffffff;display:flex;align-items:center;justify-content:center;color:#006565;box-shadow:0 1px 2px rgba(0,0,0,0.05)">
                <span class="material-symbols-outlined" style="font-size:20px">flight_takeoff</span>
              </div>
              <div>
                <p style="font-weight:600;color:#191c1d;font-size:13px;margin-bottom:4px">Multi-leg travel booking</p>
                <p style="color:#3e4949;font-size:11px;line-height:1.5">Germany to Italy across 4 train companies. Agents compare, book &amp; pay in one flow.</p>
              </div>
            </div>
            <div style="display:flex;gap:16px;align-items:flex-start">
              <div style="flex-shrink:0;width:40px;height:40px;border-radius:8px;background:#ffffff;display:flex;align-items:center;justify-content:center;color:#006565;box-shadow:0 1px 2px rgba(0,0,0,0.05)">
                <span class="material-symbols-outlined" style="font-size:20px">newspaper</span>
              </div>
              <div>
                <p style="font-weight:600;color:#191c1d;font-size:13px;margin-bottom:4px">Single-article purchases</p>
                <p style="color:#3e4949;font-size:11px;line-height:1.5">Nobody registers with a newspaper for $1. Papers lose revenue, readers lose information.</p>
              </div>
            </div>
            <div style="display:flex;gap:16px;align-items:flex-start">
              <div style="flex-shrink:0;width:40px;height:40px;border-radius:8px;background:#ffffff;display:flex;align-items:center;justify-content:center;color:#006565;box-shadow:0 1px 2px rgba(0,0,0,0.05)">
                <span class="material-symbols-outlined" style="font-size:20px">swap_horiz</span>
              </div>
              <div>
                <p style="font-weight:600;color:#191c1d;font-size:13px;margin-bottom:4px">Price comparison &amp; switching</p>
                <p style="color:#3e4949;font-size:11px;line-height:1.5">Insurance, utilities, subscriptions — you're overpaying but the friction stops you.</p>
              </div>
            </div>
            <div style="display:flex;gap:16px;align-items:flex-start">
              <div style="flex-shrink:0;width:40px;height:40px;border-radius:8px;background:#ffffff;display:flex;align-items:center;justify-content:center;color:#006565;box-shadow:0 1px 2px rgba(0,0,0,0.05)">
                <span class="material-symbols-outlined" style="font-size:20px">calendar_month</span>
              </div>
              <div>
                <p style="font-weight:600;color:#191c1d;font-size:13px;margin-bottom:4px">Event &amp; appointment booking</p>
                <p style="color:#3e4949;font-size:11px;line-height:1.5">Coordinating across venues, calendars &amp; payment systems. Agents handle the multi-step checkout.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: New Primitives -->
        <div style="background:#ffffff;border-radius:16px;padding:32px;display:flex;flex-direction:column;gap:24px;border:1px solid rgba(189,201,200,0.1)">
          <div>
            <span style="display:inline-block;padding:4px 12px;background:#e7e8e9;color:#3e4949;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;border-radius:9999px;margin-bottom:12px">New primitives, new markets</span>
            <h2 style="font-size:24px;font-weight:700;color:#191c1d;line-height:1.2">Use Cases That Didn't Exist Before</h2>
          </div>
          <div style="display:flex;flex-direction:column;gap:20px">
            <div style="display:flex;gap:16px;align-items:flex-start">
              <div style="flex-shrink:0;width:40px;height:40px;border-radius:8px;background:rgba(194,231,230,0.3);display:flex;align-items:center;justify-content:center;color:#006565">
                <span class="material-symbols-outlined" style="font-size:20px">bolt</span>
              </div>
              <div>
                <p style="font-weight:600;color:#191c1d;font-size:13px;margin-bottom:4px">Pay-per-API-call without an API key</p>
                <p style="color:#3e4949;font-size:11px;line-height:1.5">No subscriptions. Fractions of a cent per request — weather data, FX rates, LLM inference.</p>
              </div>
            </div>
            <div style="display:flex;gap:16px;align-items:flex-start">
              <div style="flex-shrink:0;width:40px;height:40px;border-radius:8px;background:rgba(194,231,230,0.3);display:flex;align-items:center;justify-content:center;color:#006565">
                <span class="material-symbols-outlined" style="font-size:20px">handshake</span>
              </div>
              <div>
                <p style="font-weight:600;color:#191c1d;font-size:13px;margin-bottom:4px">Agent-to-agent hiring</p>
                <p style="color:#3e4949;font-size:11px;line-height:1.5">Your agent discovers a specialist, negotiates, pays for the subtask &amp; gets the result.</p>
              </div>
            </div>
            <div style="display:flex;gap:16px;align-items:flex-start">
              <div style="flex-shrink:0;width:40px;height:40px;border-radius:8px;background:rgba(194,231,230,0.3);display:flex;align-items:center;justify-content:center;color:#006565">
                <span class="material-symbols-outlined" style="font-size:20px">settings_suggest</span>
              </div>
              <div>
                <p style="font-weight:600;color:#191c1d;font-size:13px;margin-bottom:4px">Compute &amp; storage on demand</p>
                <p style="color:#3e4949;font-size:11px;line-height:1.5">Agents buy GPU time, storage, bandwidth — paying per second instead of reserved capacity.</p>
              </div>
            </div>
            <div style="display:flex;gap:16px;align-items:flex-start">
              <div style="flex-shrink:0;width:40px;height:40px;border-radius:8px;background:rgba(194,231,230,0.3);display:flex;align-items:center;justify-content:center;color:#006565">
                <span class="material-symbols-outlined" style="font-size:20px">language</span>
              </div>
              <div>
                <p style="font-weight:600;color:#191c1d;font-size:13px;margin-bottom:4px">Everything becomes a payable endpoint</p>
                <p style="color:#3e4949;font-size:11px;line-height:1.5">Dune dashboards per view. Research papers for pennies. No billing integration needed.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Progress bar -->
    <div style="position:absolute;bottom:0;left:0;width:100%;height:3px;background:rgba(189,201,200,0.3)">
      <div style="height:100%;background:#006565;width:18%"></div>
    </div>

  </div>`,


  /* =============================================
     SECTION 3: THE FULL STACK
     ============================================= */

  /* SLIDE 11 — Section Divider (redesigned) */
  `<div class="flex flex-col w-full h-full relative" style="background:#f8f9fa;font-family:'Inter',system-ui,sans-serif;overflow:hidden">
    <!-- Main Content -->
    <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;position:relative;padding:0 80px">
      <!-- Background blur -->
      <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:800px;height:800px;border-radius:50%;filter:blur(120px);background:linear-gradient(135deg,#c2e7e6,#f8f9fa);opacity:0.4;pointer-events:none"></div>

      <div style="position:relative;z-index:1;max-width:900px;display:flex;flex-direction:column;align-items:center">
        <!-- Title -->
        <h1 style="font-weight:800;font-size:72px;color:#191c1d;letter-spacing:-0.04em;line-height:1;margin-bottom:32px">
          The Full <span style="color:#008080;font-style:italic">Stack</span>
        </h1>

        <!-- Subtitle -->
        <p style="font-size:24px;color:#3e4949;max-width:640px;line-height:1.5">
          ERC-8004, x402, escrow &amp; the protocols behind agent payments
        </p>

        <!-- Protocol pills -->
        <div style="margin-top:48px;display:flex;align-items:center;gap:12px;flex-wrap:wrap;justify-content:center">
          <span style="padding:6px 16px;background:#c2e7e6;border-radius:9999px;font-size:12px;font-weight:600;color:#006565">ERC-8004</span>
          <span style="padding:6px 16px;background:#c2e7e6;border-radius:9999px;font-size:12px;font-weight:600;color:#006565">x402</span>
          <span style="padding:6px 16px;background:#c2e7e6;border-radius:9999px;font-size:12px;font-weight:600;color:#006565">ERC-8183</span>
          <span style="padding:6px 16px;background:#edeeef;border-radius:9999px;font-size:12px;font-weight:600;color:#3e4949">ERC-8128</span>
          <span style="padding:6px 16px;background:#edeeef;border-radius:9999px;font-size:12px;font-weight:600;color:#3e4949">ERC-5564</span>
        </div>
      </div>

      <!-- Corner detail -->
      <div style="position:absolute;bottom:96px;right:96px;width:192px;height:192px;border-right:1px solid rgba(0,101,101,0.2);border-bottom:1px solid rgba(0,101,101,0.2);border-radius:0 0 24px 0"></div>
    </div>

    <!-- Progress bar -->
    <div style="position:absolute;bottom:0;left:0;width:100%;height:2px;background:rgba(189,201,200,0.3)">
      <div style="height:100%;background:#006565;width:50%"></div>
    </div>
  </div>`,

  /* SLIDE — The Full Stack Overview (redesigned) */
  `<div class="flex flex-col w-full h-full relative" style="background:#f8f9fa;font-family:'Inter',system-ui,sans-serif;overflow:hidden">
    <!-- Main Content -->
    <main style="position:relative;padding:48px 80px 48px;flex:1;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden">
      <!-- Header -->
      <div>
        <h2 style="font-weight:800;font-size:36px;color:#191c1d;letter-spacing:-0.02em;line-height:1.1">How It All Fits Together</h2>
      </div>

      <!-- Five protocol cards -->
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr;gap:14px;margin-top:28px">
        <!-- ERC-8004 -->
        <div style="background:#ffffff;padding:20px 16px;border-radius:14px;border:1px solid #edeeef;position:relative;overflow:hidden">
          <div style="position:absolute;top:0;left:0;width:100%;height:3px;background:#006565"></div>
          <p style="font-size:10px;font-weight:700;color:#006565;letter-spacing:0.05em;margin-bottom:6px;margin-top:4px">ERC-8004</p>
          <p style="font-size:13px;font-weight:700;color:#191c1d;margin-bottom:8px">Trust &amp; Discovery</p>
          <p style="font-size:10px;color:#3e4949;line-height:1.5">Identity, reputation, validation. Find services, assess reliability, verify claims.</p>
        </div>
        <!-- x402 -->
        <div style="background:#ffffff;padding:20px 16px;border-radius:14px;border:1px solid #edeeef;position:relative;overflow:hidden">
          <div style="position:absolute;top:0;left:0;width:100%;height:3px;background:#008080"></div>
          <p style="font-size:10px;font-weight:700;color:#008080;letter-spacing:0.05em;margin-bottom:6px;margin-top:4px">x402</p>
          <p style="font-size:13px;font-weight:700;color:#191c1d;margin-bottom:8px">Payment</p>
          <p style="font-size:10px;color:#3e4949;line-height:1.5">HTTP-native micropayments. Pay per request, settle on-chain in ~1s.</p>
        </div>
        <!-- ERC-8183 -->
        <div style="background:#ffffff;padding:20px 16px;border-radius:14px;border:1px solid #edeeef;position:relative;overflow:hidden">
          <div style="position:absolute;top:0;left:0;width:100%;height:3px;background:#006565"></div>
          <p style="font-size:10px;font-weight:700;color:#006565;letter-spacing:0.05em;margin-bottom:6px;margin-top:4px">ERC-8183</p>
          <p style="font-size:13px;font-weight:700;color:#191c1d;margin-bottom:8px">Commerce</p>
          <p style="font-size:10px;color:#3e4949;line-height:1.5">The Job primitive. Escrow, evaluator attestation, deterministic settlement.</p>
        </div>
        <!-- ERC-8128 -->
        <div style="background:#ffffff;padding:20px 16px;border-radius:14px;border:1px solid #edeeef;position:relative;overflow:hidden">
          <div style="position:absolute;top:0;left:0;width:100%;height:3px;background:#bdc9c8"></div>
          <p style="font-size:10px;font-weight:700;color:#3e4949;letter-spacing:0.05em;margin-bottom:6px;margin-top:4px">ERC-8128</p>
          <p style="font-size:13px;font-weight:700;color:#191c1d;margin-bottom:8px">Authentication</p>
          <p style="font-size:10px;color:#3e4949;line-height:1.5">Per-request Ethereum signatures. Same key across the entire stack.</p>
        </div>
        <!-- ERC-5564 -->
        <div style="background:#ffffff;padding:20px 16px;border-radius:14px;border:1px solid #edeeef;position:relative;overflow:hidden">
          <div style="position:absolute;top:0;left:0;width:100%;height:3px;background:#bdc9c8"></div>
          <p style="font-size:10px;font-weight:700;color:#3e4949;letter-spacing:0.05em;margin-bottom:6px;margin-top:4px">ERC-5564</p>
          <p style="font-size:13px;font-weight:700;color:#191c1d;margin-bottom:8px">Privacy</p>
          <p style="font-size:10px;color:#3e4949;line-height:1.5">Stealth addresses. Unlinkable payments, trivial for machines.</p>
        </div>
      </div>

      <!-- Flow diagram -->
      <div style="background:#edeeef;padding:16px 24px;border-radius:14px;margin-top:20px;text-align:center">
        <div style="display:flex;align-items:center;justify-content:center;gap:8px;font-size:13px">
          <span style="font-weight:700;color:#006565">Discover (8004)</span>
          <span class="material-symbols-outlined" style="color:#bdc9c8;font-size:16px">arrow_forward</span>
          <span style="font-weight:700;color:#191c1d">Authenticate (8128)</span>
          <span class="material-symbols-outlined" style="color:#bdc9c8;font-size:16px">arrow_forward</span>
          <span style="font-weight:700;color:#008080">Pay (x402)</span>
          <span class="material-symbols-outlined" style="color:#bdc9c8;font-size:16px">arrow_forward</span>
          <span style="font-weight:700;color:#006565">Settle (8183)</span>
          <span class="material-symbols-outlined" style="color:#bdc9c8;font-size:16px">arrow_forward</span>
          <span style="font-weight:700;color:#006565">Reputation (8004)</span>
          <span class="material-symbols-outlined" style="color:#006565;font-size:16px">replay</span>
        </div>
      </div>

      <!-- Bottom callout -->
      <div style="width:100%;background:#c2e7e6;padding:18px 24px;border-radius:14px;display:flex;align-items:center;gap:20px;margin-top:16px">
        <div style="background:#008080;padding:10px;border-radius:10px;flex-shrink:0">
          <span class="material-symbols-outlined" style="color:#e3fffe;font-size:20px">key</span>
        </div>
        <p style="font-size:13px;color:#002020;flex:1"><span style="font-weight:700;color:#006565">One Ethereum address flows through every layer.</span> Privacy (5564) applies at any payment step. No separate credentials, no fragmented identity.</p>
      </div>
    </main>

    <!-- Progress bar -->
    <div style="position:absolute;bottom:0;left:0;width:100%;height:2px;background:rgba(189,201,200,0.2)">
      <div style="height:100%;background:#006565;width:54.5%"></div>
    </div>
  </div>`,

  /* SLIDE 12 — You're Reading 8004 Wrong (redesigned) */
  `<div class="flex flex-col w-full h-full relative" style="background:#f8f9fa;font-family:'Inter',system-ui,sans-serif;overflow:hidden">
    <!-- Main Content -->
    <main style="position:relative;padding:48px 80px 48px;flex:1;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden">
      <!-- Header -->
      <div>
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">
          <span style="display:inline-block;padding:4px 12px;background:#c2e7e6;color:#006565;font-size:11px;font-weight:700;letter-spacing:0.05em;border-radius:6px">ERC-8004</span>
          <span style="font-size:11px;color:#6e7979">Ethereum Standard</span>
        </div>
        <h2 style="font-weight:800;font-size:36px;color:#191c1d;letter-spacing:-0.02em;line-height:1.1">What 8004 Really Is About</h2>
        <div style="display:flex;align-items:center;gap:16px;margin-top:12px">
          <span style="font-size:13px;color:#3e4949">Co-authored by</span>
          <div style="display:flex;align-items:center;gap:20px">
            <!-- Ethereum Foundation -->
            <div style="display:flex;align-items:center;gap:6px">
              <svg width="20" height="32" viewBox="0 0 256 417" xmlns="http://www.w3.org/2000/svg"><path fill="#343434" d="M127.961 0l-2.795 9.5v275.668l2.795 2.79 127.962-75.638z"/><path fill="#8C8C8C" d="M127.962 0L0 212.32l127.962 75.639V154.158z"/><path fill="#3C3C3B" d="M127.961 312.187l-1.575 1.92V414.45l1.575 4.6L256 236.587z"/><path fill="#8C8C8C" d="M127.962 419.05V312.187L0 236.587z"/><path fill="#141414" d="M127.961 287.958l127.96-75.637-127.96-58.162z"/><path fill="#393939" d="M0 212.32l127.96 75.638V154.159z"/></svg>
              <span style="font-size:11px;font-weight:600;color:#343434">Ethereum Foundation</span>
            </div>
            <!-- Google -->
            <div style="display:flex;align-items:center;gap:6px">
              <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              <span style="font-size:11px;font-weight:600;color:#343434">Google</span>
            </div>
            <!-- Coinbase -->
            <div style="display:flex;align-items:center;gap:6px">
              <svg width="20" height="20" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="512" fill="#0052FF"/><path d="M512 692c-99.4 0-180-80.6-180-180s80.6-180 180-180c89.1 0 163.1 64.9 177.3 150H870c-15.4-171.8-160-306-336-306-186.5 0-338 151.5-338 338s151.5 338 338 338c176 0 320.6-134.2 336-306H689.3C675.1 627.1 601.1 692 512 692z" fill="white"/></svg>
              <span style="font-size:11px;font-weight:600;color:#343434">Coinbase</span>
            </div>
            <!-- MetaMask -->
            <div style="display:flex;align-items:center;gap:6px">
              <svg width="22" height="20" viewBox="0 0 318.6 318.6" xmlns="http://www.w3.org/2000/svg"><polygon fill="#E2761B" stroke="#E2761B" stroke-linecap="round" stroke-linejoin="round" points="274.1,35.5 174.6,109.4 193,65.8"/><polygon fill="#E4761B" stroke="#E4761B" stroke-linecap="round" stroke-linejoin="round" points="44.4,35.5 143.1,110.1 125.6,65.8"/><polygon fill="#E4761B" stroke="#E4761B" stroke-linecap="round" stroke-linejoin="round" points="238.3,206.8 211.8,247.4 268.5,263 284.8,207.7"/><polygon fill="#E4761B" stroke="#E4761B" stroke-linecap="round" stroke-linejoin="round" points="33.9,207.7 50.1,263 106.8,247.4 80.3,206.8"/><polygon fill="#E4761B" stroke="#E4761B" stroke-linecap="round" stroke-linejoin="round" points="103.6,138.2 87.8,162.1 143.8,164.6 141.7,104.1"/><polygon fill="#E4761B" stroke="#E4761B" stroke-linecap="round" stroke-linejoin="round" points="214.9,138.2 176.1,103.4 174.6,164.6 230.8,162.1"/><polygon fill="#E4761B" stroke="#E4761B" stroke-linecap="round" stroke-linejoin="round" points="106.8,247.4 140.6,230.9 111.4,208.1"/><polygon fill="#E4761B" stroke="#E4761B" stroke-linecap="round" stroke-linejoin="round" points="177.9,230.9 211.8,247.4 207.1,208.1"/><polygon fill="#D7C1B3" stroke="#D7C1B3" stroke-linecap="round" stroke-linejoin="round" points="211.8,247.4 177.9,230.9 180.6,253 180.3,262.3"/><polygon fill="#D7C1B3" stroke="#D7C1B3" stroke-linecap="round" stroke-linejoin="round" points="106.8,247.4 138.3,262.3 138.1,253 140.6,230.9"/><polygon fill="#233447" stroke="#233447" stroke-linecap="round" stroke-linejoin="round" points="138.8,193.5 110.6,185.2 130.5,176.1"/><polygon fill="#233447" stroke="#233447" stroke-linecap="round" stroke-linejoin="round" points="179.7,193.5 188,176.1 208,185.2"/><polygon fill="#CD6116" stroke="#CD6116" stroke-linecap="round" stroke-linejoin="round" points="106.8,247.4 111.6,206.8 80.3,207.7"/><polygon fill="#CD6116" stroke="#CD6116" stroke-linecap="round" stroke-linejoin="round" points="207,206.8 211.8,247.4 238.3,207.7"/><polygon fill="#CD6116" stroke="#CD6116" stroke-linecap="round" stroke-linejoin="round" points="230.8,162.1 174.6,164.6 179.8,193.5 188.1,176.1 208.1,185.2"/><polygon fill="#CD6116" stroke="#CD6116" stroke-linecap="round" stroke-linejoin="round" points="110.6,185.2 130.6,176.1 138.8,193.5 143.8,164.6 87.8,162.1"/><polygon fill="#E4751F" stroke="#E4751F" stroke-linecap="round" stroke-linejoin="round" points="87.8,162.1 111.4,208.1 110.6,185.2"/><polygon fill="#E4751F" stroke="#E4751F" stroke-linecap="round" stroke-linejoin="round" points="208.1,185.2 207.1,208.1 230.8,162.1"/><polygon fill="#E4751F" stroke="#E4751F" stroke-linecap="round" stroke-linejoin="round" points="143.8,164.6 138.8,193.5 145.1,227.6 146.5,182.5"/><polygon fill="#E4751F" stroke="#E4751F" stroke-linecap="round" stroke-linejoin="round" points="174.6,164.6 172,182.3 173.4,227.6 179.8,193.5"/><polygon fill="#F6851B" stroke="#F6851B" stroke-linecap="round" stroke-linejoin="round" points="179.8,193.5 173.4,227.6 177.9,230.9 207.1,208.1 208.1,185.2"/><polygon fill="#F6851B" stroke="#F6851B" stroke-linecap="round" stroke-linejoin="round" points="110.6,185.2 111.4,208.1 140.6,230.9 145.1,227.6 138.8,193.5"/><polygon fill="#C0AD9E" stroke="#C0AD9E" stroke-linecap="round" stroke-linejoin="round" points="180.3,262.3 180.6,253 178.1,250.8 140.4,250.8 138.1,253 138.3,262.3 106.8,247.4 117.8,256.4 140.1,271.9 178.4,271.9 200.8,256.4 211.8,247.4"/><polygon fill="#161616" stroke="#161616" stroke-linecap="round" stroke-linejoin="round" points="177.9,230.9 173.4,227.6 145.1,227.6 140.6,230.9 138.1,253 140.4,250.8 178.1,250.8 180.6,253"/><polygon fill="#763D16" stroke="#763D16" stroke-linecap="round" stroke-linejoin="round" points="278.3,114.2 286.8,73.7 274.1,35.5 177.9,106.9 214.9,138.2 267.2,153.5 278.8,140 273.8,136.4 281.8,129.1 275.6,124.3 283.6,118.2"/><polygon fill="#763D16" stroke="#763D16" stroke-linecap="round" stroke-linejoin="round" points="31.8,73.7 40.3,114.2 34.9,118.2 42.9,124.3 36.8,129.1 44.8,136.4 39.8,140 51.3,153.5 103.6,138.2 140.6,106.9 44.4,35.5"/><polygon fill="#F6851B" stroke="#F6851B" stroke-linecap="round" stroke-linejoin="round" points="267.2,153.5 214.9,138.2 230.8,162.1 207.1,208.1 238.3,207.7 284.8,207.7"/><polygon fill="#F6851B" stroke="#F6851B" stroke-linecap="round" stroke-linejoin="round" points="103.6,138.2 51.3,153.5 33.9,207.7 80.3,207.7 111.4,208.1 87.8,162.1"/><polygon fill="#F6851B" stroke="#F6851B" stroke-linecap="round" stroke-linejoin="round" points="174.6,164.6 177.9,106.9 193.1,65.8 125.6,65.8 140.6,106.9 143.8,164.6 145,182.6 145.1,227.6 173.4,227.6 173.6,182.6"/></svg>
              <span style="font-size:11px;font-weight:600;color:#343434">MetaMask</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Two-column: misconception vs reality -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:28px">
        <!-- Left: What people think -->
        <div style="background:#edeeef;padding:28px 24px;border-radius:14px;position:relative;overflow:hidden">
          <div style="position:absolute;top:0;left:0;width:100%;height:3px;background:#6e7979"></div>
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;margin-top:4px">
            <span class="material-symbols-outlined" style="color:#6e7979;font-size:22px">close</span>
            <span style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#6e7979">What people think</span>
          </div>
          <h3 style="font-weight:700;font-size:20px;color:#191c1d;margin-bottom:10px">"It's an agent registry"</h3>
          <p style="color:#3e4949;line-height:1.5;font-size:13px">AI agents discover other AI agents. ERC-20 for agents. The end.</p>
        </div>

        <!-- Right: What the spec actually says -->
        <div style="background:#ffffff;padding:28px 24px;border-radius:14px;border:1px solid #edeeef;position:relative;overflow:hidden">
          <div style="position:absolute;top:0;left:0;width:100%;height:3px;background:linear-gradient(90deg,#006565,#008080)"></div>
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;margin-top:4px">
            <span class="material-symbols-outlined" style="color:#006565;font-size:22px">check_circle</span>
            <span style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#006565">What the spec actually says</span>
          </div>
          <h3 style="font-weight:700;font-size:20px;color:#006565;margin-bottom:10px">"Universal trust infrastructure"</h3>
          <p style="color:#3e4949;line-height:1.5;font-size:13px">Discover, choose &amp; interact with <span style="font-weight:600;color:#191c1d">any service</span> across organizational boundaries without pre-existing trust.</p>
        </div>
      </div>

      <!-- Registration file accepts -->
      <div style="background:#ffffff;padding:20px 24px;border-radius:14px;border:1px solid #edeeef;margin-top:20px">
        <p style="font-size:11px;color:#6e7979;text-transform:uppercase;letter-spacing:0.05em;font-weight:600;margin-bottom:12px">The registration file accepts</p>
        <div style="display:flex;flex-wrap:wrap;gap:8px">
          <span style="padding:5px 14px;background:#c2e7e6;border-radius:9999px;font-size:11px;font-weight:600;color:#006565">A2A endpoints</span>
          <span style="padding:5px 14px;background:#c2e7e6;border-radius:9999px;font-size:11px;font-weight:600;color:#006565">MCP tool servers</span>
          <span style="padding:5px 14px;background:#c2e7e6;border-radius:9999px;font-size:11px;font-weight:600;color:#006565">Plain HTTP APIs</span>
          <span style="padding:5px 14px;background:#c2e7e6;border-radius:9999px;font-size:11px;font-weight:600;color:#006565">ENS names</span>
          <span style="padding:5px 14px;background:#c2e7e6;border-radius:9999px;font-size:11px;font-weight:600;color:#006565">DIDs</span>
          <span style="padding:5px 14px;background:#c2e7e6;border-radius:9999px;font-size:11px;font-weight:600;color:#006565">OASF endpoints</span>
          <span style="padding:5px 14px;background:#c2e7e6;border-radius:9999px;font-size:11px;font-weight:600;color:#006565">Email addresses</span>
        </div>
      </div>

      <!-- Bottom callout -->
      <div style="width:100%;background:#c2e7e6;padding:18px 24px;border-radius:14px;display:flex;align-items:center;gap:20px;margin-top:16px">
        <div style="background:#008080;padding:10px;border-radius:10px;flex-shrink:0">
          <span class="material-symbols-outlined" style="color:#e3fffe;font-size:20px">hub</span>
        </div>
        <p style="font-size:13px;color:#002020;flex:1"><span style="font-weight:700;color:#006565">8004 is not an agent directory.</span> It's the trust layer — identity, reputation, and service discovery for the entire agentic economy. Any entity, any protocol, one registry.</p>
      </div>
    </main>

    <!-- Progress bar -->
    <div style="position:absolute;bottom:0;left:0;width:100%;height:2px;background:rgba(189,201,200,0.2)">
      <div style="height:100%;background:#006565;width:59.1%"></div>
    </div>
  </div>`,

  /* SLIDE 13 — Three Registries as Generic Primitives (redesigned) */
  `<div class="flex flex-col w-full h-full relative" style="background:#f8f9fa;font-family:'Inter',system-ui,sans-serif;overflow:hidden">
    <!-- Main Content -->
    <main style="position:relative;padding:48px 80px 48px;flex:1;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden">
      <!-- Header -->
      <div>
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">
          <span style="display:inline-block;padding:4px 12px;background:#c2e7e6;color:#006565;font-size:11px;font-weight:700;letter-spacing:0.05em;border-radius:6px">ERC-8004</span>
          <span style="font-size:11px;color:#6e7979">Three Generic Primitives</span>
        </div>
        <h2 style="font-weight:800;font-size:36px;color:#191c1d;letter-spacing:-0.02em;line-height:1.1">The Registries Work for Everything</h2>
      </div>

      <!-- Three registry cards -->
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:20px;margin-top:28px;flex:1">
        <!-- Identity Registry -->
        <div style="background:#ffffff;padding:28px 24px;border-radius:14px;border:1px solid #edeeef;position:relative;overflow:hidden;display:flex;flex-direction:column">
          <div style="position:absolute;top:0;left:0;width:100%;height:3px;background:linear-gradient(90deg,#006565,#008080)"></div>
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;margin-top:4px">
            <div style="width:40px;height:40px;border-radius:10px;background:#c2e7e6;display:flex;align-items:center;justify-content:center">
              <span class="material-symbols-outlined" style="color:#006565;font-size:22px">badge</span>
            </div>
            <span style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:-0.02em;color:#3e4949;opacity:0.4">Pillar 01</span>
          </div>
          <h3 style="font-weight:700;font-size:20px;color:#191c1d;margin-bottom:10px">Identity Registry</h3>
          <p style="color:#3e4949;line-height:1.5;font-size:13px;flex:1">ERC-721 token + registration file. Describes what something <span style="font-weight:600;color:#191c1d">is</span>, what it <span style="font-weight:600;color:#191c1d">does</span>, and where to <span style="font-weight:600;color:#191c1d">reach</span> it.</p>
          <p style="color:#6e7979;font-size:11px;font-style:italic;margin-top:12px">Oracles, DeFi services, MCP tools, data providers — not just agents.</p>
        </div>

        <!-- Reputation Registry -->
        <div style="background:#ffffff;padding:28px 24px;border-radius:14px;border:1px solid #edeeef;position:relative;overflow:hidden;display:flex;flex-direction:column">
          <div style="position:absolute;top:0;left:0;width:100%;height:3px;background:linear-gradient(90deg,#006565,#008080)"></div>
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;margin-top:4px">
            <div style="width:40px;height:40px;border-radius:10px;background:#c2e7e6;display:flex;align-items:center;justify-content:center">
              <span class="material-symbols-outlined" style="color:#006565;font-size:22px">star</span>
            </div>
            <span style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:-0.02em;color:#3e4949;opacity:0.4">Pillar 02</span>
          </div>
          <h3 style="font-weight:700;font-size:20px;color:#191c1d;margin-bottom:10px">Reputation Registry</h3>
          <p style="color:#3e4949;line-height:1.5;font-size:13px;flex:1">On-chain feedback with generic value/tags. Tracks <span style="font-weight:600;color:#191c1d">reachable</span>, <span style="font-weight:600;color:#191c1d">uptime</span>, <span style="font-weight:600;color:#191c1d">responseTime</span>, <span style="font-weight:600;color:#191c1d">successRate</span>.</p>
          <p style="color:#6e7979;font-size:11px;font-style:italic;margin-top:12px">Half the default metrics are infrastructure metrics you'd track for any API.</p>
        </div>

        <!-- Validation Registry -->
        <div style="background:#ffffff;padding:28px 24px;border-radius:14px;border:1px solid #edeeef;position:relative;overflow:hidden;display:flex;flex-direction:column">
          <div style="position:absolute;top:0;left:0;width:100%;height:3px;background:linear-gradient(90deg,#006565,#008080)"></div>
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;margin-top:4px">
            <div style="width:40px;height:40px;border-radius:10px;background:#c2e7e6;display:flex;align-items:center;justify-content:center">
              <span class="material-symbols-outlined" style="color:#006565;font-size:22px">verified</span>
            </div>
            <span style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:-0.02em;color:#3e4949;opacity:0.4">Pillar 03</span>
          </div>
          <h3 style="font-weight:700;font-size:20px;color:#191c1d;margin-bottom:10px">Validation Registry</h3>
          <p style="color:#3e4949;line-height:1.5;font-size:13px;flex:1">Any registered entity requests verification. Any validator contract responds. TEE, zkML, staking.</p>
          <p style="color:#6e7979;font-size:11px;font-style:italic;margin-top:12px">General computation verification — works for oracles, compute, data pipelines.</p>
        </div>
      </div>

      <!-- Bottom callout -->
      <div style="width:100%;background:#c2e7e6;padding:18px 24px;border-radius:14px;display:flex;align-items:center;gap:20px;margin-top:20px">
        <div style="background:#008080;padding:10px;border-radius:10px;flex-shrink:0">
          <span class="material-symbols-outlined" style="color:#e3fffe;font-size:20px">widgets</span>
        </div>
        <p style="font-size:13px;color:#002020;flex:1"><span style="font-weight:700;color:#006565">These aren't agent-specific primitives.</span> They're generic building blocks for any service that needs to be discovered, trusted, and verified on-chain.</p>
      </div>
    </main>

    <!-- Progress bar -->
    <div style="position:absolute;bottom:0;left:0;width:100%;height:2px;background:rgba(189,201,200,0.2)">
      <div style="height:100%;background:#006565;width:63.6%"></div>
    </div>
  </div>`,

  /* SLIDE 13 — Identity Registry (redesigned) */
  `<div class="flex flex-col w-full h-full relative" style="background:#f8f9fa;font-family:'Inter',system-ui,sans-serif;overflow:hidden">
    <main style="position:relative;padding:48px 80px 48px;flex:1;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden">
      <!-- Header -->
      <div>
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">
          <span style="display:inline-block;padding:4px 12px;background:#c2e7e6;color:#006565;font-size:11px;font-weight:700;letter-spacing:0.05em;border-radius:6px">ERC-8004</span>
          <span style="font-size:11px;color:#6e7979">Pillar 1 — Identity</span>
        </div>
        <h2 style="font-weight:800;font-size:36px;color:#191c1d;letter-spacing:-0.02em;line-height:1.1">Identity Registry</h2>
        <p style="font-size:16px;color:#3e4949;margin-top:8px">Every agent gets a unique ID — an <span style="font-weight:700;color:#006565">NFT on Ethereum</span>.</p>
      </div>

      <!-- Two-column: content + code -->
      <div style="display:grid;grid-template-columns:1fr 340px;gap:32px;margin-top:24px;flex:1">
        <!-- Left -->
        <div style="display:flex;flex-direction:column;gap:16px">
          <!-- Before/after -->
          <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:8px">
            <p style="font-size:14px;color:#6e7979;text-decoration:line-through">"I'm cryptoinference.com, trust me."</p>
            <p style="font-size:14px;font-weight:500;color:#006565">"Here's my on-chain identity. 8 months of reputation. Verify it."</p>
          </div>

          <!-- Platform risk card -->
          <div style="background:#edeeef;padding:24px;border-radius:14px;border-left:4px solid #6e7979">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
              <span class="material-symbols-outlined" style="color:#6e7979;font-size:20px">warning</span>
              <span style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#6e7979">Platform risk today</span>
            </div>
            <p style="color:#3e4949;font-size:13px;line-height:1.5">X bans you → followers gone. Stripe freezes you → payments gone.</p>
            <p style="color:#006565;font-size:13px;font-weight:600;margin-top:8px">ERC-8004 → you own it. On-chain. No one can delete it.</p>
          </div>
        </div>

        <!-- Right: JSON code block -->
        <div style="background:#ffffff;padding:24px;border-radius:14px;border:1px solid #edeeef;font-family:'JetBrains Mono',monospace;font-size:12px;line-height:2;position:relative;overflow:hidden">
          <div style="position:absolute;top:0;left:0;width:100%;height:3px;background:linear-gradient(90deg,#006565,#008080)"></div>
          <span style="color:#6e7979">{</span><br/>
          &nbsp;&nbsp;<span style="color:#006565">"name"</span>: <span style="color:#047857">"StableStudio"</span>,<br/>
          &nbsp;&nbsp;<span style="color:#006565">"agentId"</span>: <span style="color:#047857">"0x7f3a..."</span>,<br/>
          &nbsp;&nbsp;<span style="color:#006565">"capabilities"</span>: [<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#047857">"sora-2"</span>,<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#047857">"veo-3.1"</span>,<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#047857">"seedance"</span>,<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#047857">"grok-video"</span><br/>
          &nbsp;&nbsp;],<br/>
          &nbsp;&nbsp;<span style="color:#006565">"protocols"</span>: [<span style="color:#047857">"a2a"</span>, <span style="color:#047857">"x402"</span>],<br/>
          &nbsp;&nbsp;<span style="color:#006565">"uptime"</span>: <span style="color:#008080">99.7</span><br/>
          <span style="color:#6e7979">}</span>
        </div>
      </div>
    </main>
    <div style="position:absolute;bottom:0;left:0;width:100%;height:2px;background:rgba(189,201,200,0.2)">
      <div style="height:100%;background:#006565;width:66%"></div>
    </div>
  </div>`,

  /* SLIDE 14 — Reputation Registry (redesigned) */
  `<div class="flex flex-col w-full h-full relative" style="background:#f8f9fa;font-family:'Inter',system-ui,sans-serif;overflow:hidden">
    <main style="position:relative;padding:48px 80px 48px;flex:1;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden">
      <!-- Header -->
      <div>
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">
          <span style="display:inline-block;padding:4px 12px;background:#c2e7e6;color:#006565;font-size:11px;font-weight:700;letter-spacing:0.05em;border-radius:6px">ERC-8004</span>
          <span style="font-size:11px;color:#6e7979">Pillar 2 — Reputation</span>
        </div>
        <h2 style="font-weight:800;font-size:36px;color:#191c1d;letter-spacing:-0.02em;line-height:1.1">Reputation Registry</h2>
        <p style="font-size:16px;color:#3e4949;margin-top:8px">Only agents you've <span style="font-weight:700;color:#006565">paid</span> can be reviewed. Every review links to a real on-chain transaction.</p>
      </div>

      <!-- Two-column: comparison + stats -->
      <div style="display:grid;grid-template-columns:1fr 280px;gap:24px;margin-top:24px;flex:1">
        <!-- Left: comparison cards -->
        <div style="display:flex;flex-direction:column;gap:16px">
          <!-- Traditional review -->
          <div style="background:#edeeef;padding:24px;border-radius:14px;border-left:4px solid #6e7979">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
              <span class="material-symbols-outlined" style="color:#6e7979;font-size:20px">close</span>
              <span style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#6e7979">Traditional review</span>
            </div>
            <p style="color:#3e4949;font-size:13px;line-height:1.5">Anonymous. Could be fake. Platform can delete it.</p>
          </div>

          <!-- 8004 review -->
          <div style="background:#ffffff;padding:24px;border-radius:14px;border:1px solid #edeeef;position:relative;overflow:hidden">
            <div style="position:absolute;top:0;left:0;width:100%;height:3px;background:linear-gradient(90deg,#006565,#008080)"></div>
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;margin-top:4px">
              <span class="material-symbols-outlined" style="color:#006565;font-size:20px">check_circle</span>
              <span style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#006565">ERC-8004 review</span>
            </div>
            <p style="color:#191c1d;font-size:13px;line-height:1.5">Tied to payment proof. Cryptographically verified. Permanent.</p>
          </div>

          <!-- Callout -->
          <div style="background:#c2e7e6;padding:16px 20px;border-radius:14px;display:flex;align-items:center;gap:16px;margin-top:auto">
            <div style="background:#008080;padding:8px;border-radius:8px;flex-shrink:0">
              <span class="material-symbols-outlined" style="color:#e3fffe;font-size:18px">shield</span>
            </div>
            <p style="font-size:13px;color:#002020"><span style="font-weight:700;color:#006565">No fake 5-stars. No competitor 1-stars.</span> Payment proof makes sybil attacks expensive.</p>
          </div>
        </div>

        <!-- Right: stats card -->
        <div style="background:#ffffff;padding:24px;border-radius:14px;border:1px solid #edeeef;position:relative;overflow:hidden;display:flex;flex-direction:column">
          <div style="position:absolute;top:0;left:0;width:100%;height:3px;background:linear-gradient(90deg,#006565,#008080)"></div>
          <p style="font-size:11px;font-weight:700;color:#006565;letter-spacing:0.05em;margin-bottom:20px;margin-top:4px">cryptoinference.com</p>
          <div style="display:flex;flex-direction:column;gap:12px;flex:1">
            <div style="display:flex;justify-content:space-between;padding-bottom:10px;border-bottom:1px solid #edeeef">
              <span style="font-size:13px;color:#6e7979">Verified jobs</span>
              <span style="font-size:13px;font-weight:700;color:#191c1d">1,247</span>
            </div>
            <div style="display:flex;justify-content:space-between;padding-bottom:10px;border-bottom:1px solid #edeeef">
              <span style="font-size:13px;color:#6e7979">Positive</span>
              <span style="font-size:13px;font-weight:700;color:#006565">96%</span>
            </div>
            <div style="display:flex;justify-content:space-between;padding-bottom:10px;border-bottom:1px solid #edeeef">
              <span style="font-size:13px;color:#6e7979">Avg response</span>
              <span style="font-size:13px;font-weight:700;color:#191c1d">180ms</span>
            </div>
            <div style="display:flex;justify-content:space-between;padding-bottom:10px;border-bottom:1px solid #edeeef">
              <span style="font-size:13px;color:#6e7979">Last job</span>
              <span style="font-size:13px;font-weight:700;color:#191c1d">12 min ago</span>
            </div>
            <div style="display:flex;justify-content:space-between">
              <span style="font-size:13px;color:#6e7979">On-chain since</span>
              <span style="font-size:13px;font-weight:700;color:#191c1d">Jun 2025</span>
            </div>
          </div>
        </div>
      </div>
    </main>
    <div style="position:absolute;bottom:0;left:0;width:100%;height:2px;background:rgba(189,201,200,0.2)">
      <div style="height:100%;background:#006565;width:68%"></div>
    </div>
  </div>`,

  /* SLIDE 15 — Can You Game It? (redesigned) */
  `<div class="flex flex-col w-full h-full relative" style="background:#f8f9fa;font-family:'Inter',system-ui,sans-serif;overflow:hidden">
    <main style="position:relative;padding:48px 80px 48px;flex:1;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden">
      <!-- Header -->
      <div>
        <h2 style="font-weight:800;font-size:36px;color:#191c1d;letter-spacing:-0.02em;line-height:1.1">Can You Game It?</h2>
        <p style="font-size:18px;color:#3e4949;margin-top:8px">Yes. But it's <span style="font-weight:700;color:#191c1d">expensive</span> and leaves <span style="font-weight:700;color:#191c1d">fingerprints</span>.</p>
      </div>

      <!-- Two-column: attack vs defense -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:32px;flex:1">
        <!-- The Attack -->
        <div style="background:#edeeef;padding:28px 24px;border-radius:14px;border-left:4px solid #6e7979;display:flex;flex-direction:column">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:20px">
            <span class="material-symbols-outlined" style="color:#6e7979;font-size:24px">bug_report</span>
            <h3 style="font-weight:700;font-size:20px;color:#3e4949">The Attack</h3>
          </div>
          <p style="color:#3e4949;font-size:14px;line-height:1.6">Create wallets. Pay yourself. Leave fake reviews.</p>
          <p style="color:#6e7979;font-size:12px;font-style:italic;margin-top:auto;padding-top:16px">Every self-payment costs real gas + real capital locked up.</p>
        </div>

        <!-- The Defense -->
        <div style="background:#ffffff;padding:28px 24px;border-radius:14px;border:1px solid #edeeef;position:relative;overflow:hidden;display:flex;flex-direction:column">
          <div style="position:absolute;top:0;left:0;width:100%;height:3px;background:linear-gradient(90deg,#006565,#008080)"></div>
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:20px;margin-top:4px">
            <span class="material-symbols-outlined" style="color:#006565;font-size:24px">security</span>
            <h3 style="font-weight:700;font-size:20px;color:#006565">The Defense</h3>
          </div>
          <div style="display:flex;flex-direction:column;gap:14px">
            <div style="display:flex;align-items:flex-start;gap:10px">
              <span class="material-symbols-outlined" style="color:#006565;font-size:16px;margin-top:2px">check</span>
              <p style="font-size:13px;color:#191c1d;line-height:1.5">Trace fund flows on-chain</p>
            </div>
            <div style="display:flex;align-items:flex-start;gap:10px">
              <span class="material-symbols-outlined" style="color:#006565;font-size:16px;margin-top:2px">check</span>
              <p style="font-size:13px;color:#191c1d;line-height:1.5">Detect wallets that only review one agent</p>
            </div>
            <div style="display:flex;align-items:flex-start;gap:10px">
              <span class="material-symbols-outlined" style="color:#006565;font-size:16px;margin-top:2px">check</span>
              <p style="font-size:13px;color:#191c1d;line-height:1.5">Flag circular payment patterns</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom callout -->
      <div style="width:100%;background:#c2e7e6;padding:18px 24px;border-radius:14px;display:flex;align-items:center;gap:20px;margin-top:20px">
        <div style="background:#008080;padding:10px;border-radius:10px;flex-shrink:0">
          <span class="material-symbols-outlined" style="color:#e3fffe;font-size:20px">visibility</span>
        </div>
        <p style="font-size:13px;color:#002020;flex:1"><span style="font-weight:700;color:#006565">Everything is on-chain.</span> Blockchain analytics makes sybil attacks visible. You can game it — but you can't hide it.</p>
      </div>
    </main>
    <div style="position:absolute;bottom:0;left:0;width:100%;height:2px;background:rgba(189,201,200,0.2)">
      <div style="height:100%;background:#006565;width:70%"></div>
    </div>
  </div>`,

  /* SLIDE 16 — Validation Registry (redesigned) */
  `<div class="flex flex-col w-full h-full relative" style="background:#f8f9fa;font-family:'Inter',system-ui,sans-serif;overflow:hidden">
    <main style="position:relative;padding:48px 80px 48px;flex:1;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden">
      <!-- Header -->
      <div>
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">
          <span style="display:inline-block;padding:4px 12px;background:#c2e7e6;color:#006565;font-size:11px;font-weight:700;letter-spacing:0.05em;border-radius:6px">ERC-8004</span>
          <span style="font-size:11px;color:#6e7979">Pillar 3 — Validation</span>
        </div>
        <h2 style="font-weight:800;font-size:36px;color:#191c1d;letter-spacing:-0.02em;line-height:1.1">Validation Registry</h2>
        <p style="font-size:16px;color:#3e4949;margin-top:8px">An agent offers GPT-OSS-120B inference. How do you <span style="font-weight:700;color:#006565">prove</span> it's not running GPT-OSS-20B?</p>
      </div>

      <!-- Three method cards -->
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:20px;margin-top:28px;flex:1">
        <!-- TEE -->
        <div style="background:#ffffff;padding:28px 24px;border-radius:14px;border:1px solid #edeeef;position:relative;overflow:hidden;display:flex;flex-direction:column">
          <div style="position:absolute;top:0;left:0;width:100%;height:3px;background:linear-gradient(90deg,#006565,#008080)"></div>
          <div style="width:40px;height:40px;border-radius:10px;background:#c2e7e6;display:flex;align-items:center;justify-content:center;margin-bottom:16px;margin-top:4px">
            <span class="material-symbols-outlined" style="color:#006565;font-size:22px">memory</span>
          </div>
          <h3 style="font-weight:700;font-size:18px;color:#006565;margin-bottom:10px">TEE Attestations</h3>
          <p style="color:#3e4949;line-height:1.5;font-size:13px;flex:1">Trusted Execution Environment. Hardware proves what code is actually running.</p>
        </div>

        <!-- zkML -->
        <div style="background:#ffffff;padding:28px 24px;border-radius:14px;border:1px solid #edeeef;position:relative;overflow:hidden;display:flex;flex-direction:column">
          <div style="position:absolute;top:0;left:0;width:100%;height:3px;background:linear-gradient(90deg,#006565,#008080)"></div>
          <div style="width:40px;height:40px;border-radius:10px;background:#c2e7e6;display:flex;align-items:center;justify-content:center;margin-bottom:16px;margin-top:4px">
            <span class="material-symbols-outlined" style="color:#006565;font-size:22px">lock</span>
          </div>
          <h3 style="font-weight:700;font-size:18px;color:#006565;margin-bottom:10px">zkML Proofs</h3>
          <p style="color:#3e4949;line-height:1.5;font-size:13px;flex:1">Zero-knowledge proofs verify which model produced an output without revealing weights.</p>
        </div>

        <!-- Economic Staking -->
        <div style="background:#ffffff;padding:28px 24px;border-radius:14px;border:1px solid #edeeef;position:relative;overflow:hidden;display:flex;flex-direction:column">
          <div style="position:absolute;top:0;left:0;width:100%;height:3px;background:linear-gradient(90deg,#006565,#008080)"></div>
          <div style="width:40px;height:40px;border-radius:10px;background:#c2e7e6;display:flex;align-items:center;justify-content:center;margin-bottom:16px;margin-top:4px">
            <span class="material-symbols-outlined" style="color:#006565;font-size:22px">savings</span>
          </div>
          <h3 style="font-weight:700;font-size:18px;color:#006565;margin-bottom:10px">Economic Staking</h3>
          <p style="color:#3e4949;line-height:1.5;font-size:13px;flex:1">Validators stake money. Lie → lose stake. Skin in the game.</p>
        </div>
      </div>

      <!-- Bottom callout -->
      <div style="width:100%;background:#edeeef;padding:18px 24px;border-radius:14px;display:flex;align-items:center;justify-content:center;gap:16px;margin-top:20px">
        <p style="font-size:16px;color:#6e7979;text-decoration:line-through">"Trust me bro"</p>
        <div style="width:40px;height:2px;background:linear-gradient(90deg,#6e7979,#006565)"></div>
        <p style="font-size:16px;font-weight:700;color:#006565">"Verify cryptographically"</p>
      </div>
    </main>
    <div style="position:absolute;bottom:0;left:0;width:100%;height:2px;background:rgba(189,201,200,0.2)">
      <div style="height:100%;background:#006565;width:72.7%"></div>
    </div>
  </div>`,

  /* SLIDE 17 — x402: Internet-Native Payments (redesigned) */
  `<div class="flex flex-col w-full h-full relative" style="background:#f8f9fa;font-family:'Inter',system-ui,sans-serif;overflow:hidden">
    <main style="position:relative;padding:44px 80px 44px;flex:1;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden">
      <!-- Header -->
      <div>
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px">
          <span style="display:inline-block;padding:4px 12px;background:#c2e7e6;color:#006565;font-size:11px;font-weight:700;letter-spacing:0.05em;border-radius:6px">x402</span>
          <span style="font-size:11px;color:#6e7979">Open Standard — Apache 2.0</span>
        </div>
        <h2 style="font-weight:800;font-size:34px;color:#191c1d;letter-spacing:-0.02em;line-height:1.1">The Payment Layer HTTP Always Needed</h2>
        <p style="font-size:14px;color:#3e4949;margin-top:6px">x402 activates the dormant HTTP 402 status code into a real on-chain payment protocol. Zero fees, ~1s settlement, no accounts required.</p>
      </div>

      <!-- Two-column: flow + principles -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:20px;flex:1">
        <!-- Left: Protocol flow -->
        <div style="background:#ffffff;padding:22px;border-radius:14px;border:1px solid #edeeef;position:relative;overflow:hidden;display:flex;flex-direction:column">
          <div style="position:absolute;top:0;left:0;width:100%;height:3px;background:linear-gradient(90deg,#006565,#008080)"></div>
          <p style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#6e7979;margin-bottom:14px;margin-top:4px">Protocol flow</p>
          <div style="display:flex;flex-direction:column;gap:10px;flex:1">
            <div style="display:flex;align-items:center;gap:10px">
              <span style="width:22px;height:22px;border-radius:6px;background:#c2e7e6;color:#006565;font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-family:'JetBrains Mono',monospace">1</span>
              <p style="font-size:12px;color:#3e4949">Client sends standard HTTP request</p>
            </div>
            <div style="display:flex;align-items:center;gap:10px">
              <span style="width:22px;height:22px;border-radius:6px;background:#c2e7e6;color:#006565;font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-family:'JetBrains Mono',monospace">2</span>
              <p style="font-size:12px;color:#3e4949">Server responds <span style="font-weight:600;color:#191c1d">402</span> + payment requirements</p>
            </div>
            <div style="display:flex;align-items:center;gap:10px">
              <span style="width:22px;height:22px;border-radius:6px;background:#c2e7e6;color:#006565;font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-family:'JetBrains Mono',monospace">3</span>
              <p style="font-size:12px;color:#3e4949">Client signs payment with wallet</p>
            </div>
            <div style="display:flex;align-items:center;gap:10px">
              <span style="width:22px;height:22px;border-radius:6px;background:#c2e7e6;color:#006565;font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-family:'JetBrains Mono',monospace">4</span>
              <p style="font-size:12px;color:#3e4949">Client retries with <span style="font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:600;color:#006565">PAYMENT-SIGNATURE</span> header</p>
            </div>
            <div style="display:flex;align-items:center;gap:10px">
              <span style="width:22px;height:22px;border-radius:6px;background:#c2e7e6;color:#006565;font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-family:'JetBrains Mono',monospace">5</span>
              <p style="font-size:12px;color:#3e4949">Server verifies, settles on-chain, returns response</p>
            </div>
          </div>
          <!-- Chain pills -->
          <div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:14px;padding-top:12px;border-top:1px solid #edeeef">
            <span style="padding:3px 10px;background:#edeeef;border-radius:6px;font-size:10px;color:#6e7979;font-family:'JetBrains Mono',monospace">Base</span>
            <span style="padding:3px 10px;background:#edeeef;border-radius:6px;font-size:10px;color:#6e7979;font-family:'JetBrains Mono',monospace">Ethereum</span>
            <span style="padding:3px 10px;background:#edeeef;border-radius:6px;font-size:10px;color:#6e7979;font-family:'JetBrains Mono',monospace">Polygon</span>
            <span style="padding:3px 10px;background:#edeeef;border-radius:6px;font-size:10px;color:#6e7979;font-family:'JetBrains Mono',monospace">Avalanche</span>
            <span style="padding:3px 10px;background:#edeeef;border-radius:6px;font-size:10px;color:#6e7979;font-family:'JetBrains Mono',monospace">Arbitrum</span>
            <span style="padding:3px 10px;background:#edeeef;border-radius:6px;font-size:10px;color:#6e7979;font-family:'JetBrains Mono',monospace">Optimism</span>
          </div>
        </div>

        <!-- Right: Design principles -->
        <div style="display:flex;flex-direction:column;gap:14px">
          <div style="background:#ffffff;padding:22px;border-radius:14px;border:1px solid #edeeef;position:relative;overflow:hidden;flex:1;display:flex;flex-direction:column">
            <div style="position:absolute;top:0;left:0;width:100%;height:3px;background:linear-gradient(90deg,#008080,#006565)"></div>
            <p style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#6e7979;margin-bottom:14px;margin-top:4px">Design principles</p>
            <div style="display:flex;flex-direction:column;gap:10px;flex:1">
              <div style="display:flex;align-items:flex-start;gap:10px">
                <span class="material-symbols-outlined" style="color:#006565;font-size:16px;margin-top:1px">check</span>
                <p style="font-size:12px;color:#191c1d"><span style="font-weight:700">Zero protocol fees</span> <span style="color:#6e7979">— Only nominal network gas</span></p>
              </div>
              <div style="display:flex;align-items:flex-start;gap:10px">
                <span class="material-symbols-outlined" style="color:#006565;font-size:16px;margin-top:1px">check</span>
                <p style="font-size:12px;color:#191c1d"><span style="font-weight:700">Zero wait</span> <span style="color:#6e7979">— Settlement at internet speed (~1s)</span></p>
              </div>
              <div style="display:flex;align-items:flex-start;gap:10px">
                <span class="material-symbols-outlined" style="color:#006565;font-size:16px;margin-top:1px">check</span>
                <p style="font-size:12px;color:#191c1d"><span style="font-weight:700">Zero friction</span> <span style="color:#6e7979">— No accounts, no personal info</span></p>
              </div>
              <div style="display:flex;align-items:flex-start;gap:10px">
                <span class="material-symbols-outlined" style="color:#006565;font-size:16px;margin-top:1px">check</span>
                <p style="font-size:12px;color:#191c1d"><span style="font-weight:700">Zero centralization</span> <span style="color:#6e7979">— Open standard, anyone can build</span></p>
              </div>
              <div style="display:flex;align-items:flex-start;gap:10px">
                <span class="material-symbols-outlined" style="color:#006565;font-size:16px;margin-top:1px">check</span>
                <p style="font-size:12px;color:#191c1d"><span style="font-weight:700">Zero restrictions</span> <span style="color:#6e7979">— Not tied to specific networks</span></p>
              </div>
            </div>
          </div>
          <!-- Ecosystem note -->
          <div style="background:#edeeef;padding:14px 18px;border-radius:10px">
            <p style="font-size:11px;color:#3e4949;line-height:1.5"><span style="font-weight:600">SDKs:</span> TypeScript, Go, Python. <span style="font-weight:600">Frameworks:</span> Express, Hono, Next.js, Gin, FastAPI, Flask. <span style="font-weight:600">Adopters:</span> Stripe, AWS, Alchemy, Nansen, Vercel, Cloudflare.</p>
          </div>
        </div>
      </div>

      <!-- Bottom callout -->
      <div style="width:100%;background:#c2e7e6;padding:14px 24px;border-radius:14px;display:flex;align-items:center;gap:20px;margin-top:14px">
        <div style="background:#008080;padding:8px;border-radius:8px;flex-shrink:0">
          <span class="material-symbols-outlined" style="color:#e3fffe;font-size:18px">sync_alt</span>
        </div>
        <p style="font-size:12px;color:#002020;flex:1"><span style="font-weight:700;color:#006565">x402 + ERC-8183 are complementary.</span> x402 is the HTTP interface — pay per request. ERC-8183 is the settlement layer — escrow, evaluator attestation, deterministic outcomes. x402 also includes <span style="font-weight:600">Bazaar</span>, a discovery layer for x402-compatible endpoints and MCP tools.</p>
      </div>
    </main>
    <div style="position:absolute;bottom:0;left:0;width:100%;height:2px;background:rgba(189,201,200,0.2)">
      <div style="height:100%;background:#006565;width:77.3%"></div>
    </div>
  </div>`,

  /* SLIDE — ERC-8128: The Authentication Layer (redesigned) */
  `<div class="flex flex-col w-full h-full relative" style="background:#f8f9fa;font-family:'Inter',system-ui,sans-serif;overflow:hidden">
    <main style="position:relative;padding:44px 80px 44px;flex:1;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden">
      <div>
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px">
          <span style="display:inline-block;padding:4px 12px;background:#c2e7e6;color:#006565;font-size:11px;font-weight:700;letter-spacing:0.05em;border-radius:6px">ERC-8128</span>
          <span style="font-size:11px;color:#6e7979">Slice.so — HTTP Authentication</span>
        </div>
        <h2 style="font-weight:800;font-size:34px;color:#191c1d;letter-spacing:-0.02em;line-height:1.1">Providing the Missing Auth Layer</h2>
        <p style="font-size:14px;color:#3e4949;margin-top:6px">x402 handles payment. But how do you make sure only the <span style="font-weight:700">person who paid</span> can access the data?</p>
      </div>

      <!-- The problem -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:20px;flex:1">
        <!-- Left: The gap -->
        <div style="display:flex;flex-direction:column;gap:12px">
          <p style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#6e7979">The problem</p>
          <div style="background:#edeeef;padding:20px;border-radius:14px;border-left:4px solid #6e7979">
            <p style="font-size:12px;font-weight:700;color:#3e4949;margin-bottom:6px">The blockchain is public</p>
            <p style="font-size:11px;color:#3e4949;line-height:1.5">Anyone can see an x402 payment on-chain. Without authentication, someone who didn't pay could replay the request and retrieve the data meant for the actual payer.</p>
          </div>
          <div style="background:#edeeef;padding:20px;border-radius:14px;border-left:4px solid #6e7979">
            <p style="font-size:12px;font-weight:700;color:#3e4949;margin-bottom:6px">Especially critical for reusable endpoints</p>
            <p style="font-size:11px;color:#3e4949;line-height:1.5">If a service lets you retrieve data multiple times after paying, you need to verify every request comes from the wallet that actually made the payment — not a free-rider.</p>
          </div>
        </div>

        <!-- Right: How 8128 solves it -->
        <div style="display:flex;flex-direction:column;gap:12px">
          <p style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#006565">How ERC-8128 closes the gap</p>
          <div style="background:#ffffff;padding:20px;border-radius:14px;border:1px solid #edeeef;position:relative;overflow:hidden">
            <div style="position:absolute;top:0;left:0;width:100%;height:3px;background:linear-gradient(90deg,#006565,#008080)"></div>
            <p style="font-size:12px;font-weight:700;color:#191c1d;margin-bottom:6px;margin-top:4px">Proof of payment ownership per request</p>
            <p style="font-size:11px;color:#3e4949;line-height:1.5">Every HTTP request is signed with the same Ethereum key that made the x402 payment. The server verifies the signature matches the payer — no one else can access the response.</p>
          </div>
          <div style="background:#ffffff;padding:20px;border-radius:14px;border:1px solid #edeeef;position:relative;overflow:hidden">
            <div style="position:absolute;top:0;left:0;width:100%;height:3px;background:linear-gradient(90deg,#006565,#008080)"></div>
            <p style="font-size:12px;font-weight:700;color:#191c1d;margin-bottom:6px;margin-top:4px">Not baked into x402 — but essential alongside it</p>
            <p style="font-size:11px;color:#3e4949;line-height:1.5">x402 is the payment protocol. ERC-8128 is the authentication layer that ties each request back to the payment. Together, they ensure: you paid → you get access.</p>
          </div>
        </div>
      </div>

      <!-- Bottom callout -->
      <div style="width:100%;background:#c2e7e6;padding:14px 24px;border-radius:14px;display:flex;align-items:center;gap:20px;margin-top:14px">
        <div style="background:#008080;padding:8px;border-radius:8px;flex-shrink:0">
          <span class="material-symbols-outlined" style="color:#e3fffe;font-size:18px">verified_user</span>
        </div>
        <p style="font-size:12px;color:#002020;flex:1"><span style="font-weight:700;color:#006565">Payment + authentication from the same Ethereum address.</span> The wallet that pays is the wallet that authenticates. No API keys, no sessions — just cryptographic proof that you're the one who paid.</p>
      </div>
    </main>
    <div style="position:absolute;bottom:0;left:0;width:100%;height:2px;background:rgba(189,201,200,0.2)">
      <div style="height:100%;background:#006565;width:85%"></div>
    </div>
  </div>`,

  /* SLIDE — ERC-8183: The Commerce Layer That Ties It All Together */
  `<div class="flex flex-col w-full h-full relative" style="background:#f8f9fa;font-family:'Inter',system-ui,sans-serif;overflow:hidden">
    <main style="position:relative;padding:44px 80px 44px;flex:1;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden">
      <div>
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px">
          <span style="display:inline-block;padding:4px 12px;background:#c2e7e6;color:#006565;font-size:11px;font-weight:700;letter-spacing:0.05em;border-radius:6px">ERC-8183</span>
          <span style="font-size:11px;color:#6e7979">Virtuals Protocol + Ethereum Foundation dAI</span>
        </div>
        <h2 style="font-weight:800;font-size:34px;color:#191c1d;letter-spacing:-0.02em;line-height:1.1">The Commerce Layer That Ties It All Together</h2>
        <p style="font-size:14px;color:#3e4949;margin-top:6px">ERC-8183 is where <span style="font-weight:700;color:#006565">x402 payments</span> and <span style="font-weight:700;color:#006565">8004 reputation</span> come together into structured, trustworthy commerce.</p>
      </div>

      <!-- How it connects x402 + 8004 -->
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;margin-top:18px">
        <!-- x402 feeds in -->
        <div style="background:#ffffff;padding:20px;border-radius:14px;border:1px solid #edeeef;position:relative;overflow:hidden">
          <div style="position:absolute;top:0;left:0;width:100%;height:3px;background:#008080"></div>
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;margin-top:4px">
            <span class="material-symbols-outlined" style="color:#008080;font-size:20px">payments</span>
            <span style="font-size:10px;font-weight:700;color:#008080">x402 → 8183</span>
          </div>
          <p style="font-size:12px;font-weight:700;color:#191c1d;margin-bottom:6px">Payments fund escrow</p>
          <p style="font-size:11px;color:#3e4949;line-height:1.5">x402 micropayments flow into 8183 job escrows. The payment protocol feeds the commerce layer.</p>
        </div>
        <!-- 8183 core -->
        <div style="background:#c2e7e6;padding:20px;border-radius:14px">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
            <span class="material-symbols-outlined" style="color:#006565;font-size:20px">handshake</span>
            <span style="font-size:10px;font-weight:700;color:#006565">ERC-8183</span>
          </div>
          <p style="font-size:12px;font-weight:700;color:#006565;margin-bottom:6px">Structured commerce</p>
          <p style="font-size:11px;color:#002020;line-height:1.5">Job specs, escrow, deliverable submission, evaluator attestation, deterministic settlement. All on-chain.</p>
        </div>
        <!-- 8183 feeds 8004 -->
        <div style="background:#ffffff;padding:20px;border-radius:14px;border:1px solid #edeeef;position:relative;overflow:hidden">
          <div style="position:absolute;top:0;left:0;width:100%;height:3px;background:#006565"></div>
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;margin-top:4px">
            <span class="material-symbols-outlined" style="color:#006565;font-size:20px">star</span>
            <span style="font-size:10px;font-weight:700;color:#006565">8183 → 8004</span>
          </div>
          <p style="font-size:12px;font-weight:700;color:#191c1d;margin-bottom:6px">Completed jobs build reputation</p>
          <p style="font-size:11px;color:#3e4949;line-height:1.5">Every settled job produces verifiable history that feeds back into 8004 reputation. Trust compounds.</p>
        </div>
      </div>

      <!-- Key features row -->
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:12px;margin-top:14px">
        <div style="background:#edeeef;padding:14px 16px;border-radius:10px;text-align:center">
          <span class="material-symbols-outlined" style="color:#006565;font-size:20px;display:block;margin-bottom:6px">lock</span>
          <p style="font-size:11px;font-weight:700;color:#191c1d">Escrow</p>
          <p style="font-size:10px;color:#6e7979">Funds locked until work is verified</p>
        </div>
        <div style="background:#edeeef;padding:14px 16px;border-radius:10px;text-align:center">
          <span class="material-symbols-outlined" style="color:#006565;font-size:20px;display:block;margin-bottom:6px">description</span>
          <p style="font-size:11px;font-weight:700;color:#191c1d">Job Specs</p>
          <p style="font-size:10px;color:#6e7979">Define what's expected before payment</p>
        </div>
        <div style="background:#edeeef;padding:14px 16px;border-radius:10px;text-align:center">
          <span class="material-symbols-outlined" style="color:#006565;font-size:20px;display:block;margin-bottom:6px">gavel</span>
          <p style="font-size:11px;font-weight:700;color:#191c1d">Disputes</p>
          <p style="font-size:10px;color:#6e7979">3rd-party arbiter or DAO resolves conflicts</p>
        </div>
        <div style="background:#edeeef;padding:14px 16px;border-radius:10px;text-align:center">
          <span class="material-symbols-outlined" style="color:#006565;font-size:20px;display:block;margin-bottom:6px">verified</span>
          <p style="font-size:11px;font-weight:700;color:#191c1d">Evaluators</p>
          <p style="font-size:10px;color:#6e7979">AI, ZK verifier, multisig, or DAO attests</p>
        </div>
      </div>

      <!-- Bottom callout -->
      <div style="width:100%;background:#c2e7e6;padding:14px 24px;border-radius:14px;display:flex;align-items:center;gap:20px;margin-top:14px">
        <div style="background:#008080;padding:8px;border-radius:8px;flex-shrink:0">
          <span class="material-symbols-outlined" style="color:#e3fffe;font-size:18px">sync_alt</span>
        </div>
        <p style="font-size:12px;color:#002020;flex:1"><span style="font-weight:700;color:#006565">8183 is the job escrow and settlement layer.</span> x402 moves money. 8004 tracks trust. 8183 locks funds in escrow, defines job specs, and settles deterministically via evaluator attestation.</p>
      </div>
    </main>
    <div style="position:absolute;bottom:0;left:0;width:100%;height:2px;background:rgba(189,201,200,0.2)">
      <div style="height:100%;background:#006565;width:86%"></div>
    </div>
  </div>`,

  /* SLIDE — Agent Wallets (redesigned) */
  `<div class="flex flex-col w-full h-full relative" style="background:#f8f9fa;font-family:'Inter',system-ui,sans-serif;overflow:hidden">
    <main style="position:relative;padding:44px 80px 44px;flex:1;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden">
      <div>
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px">
          <span style="display:inline-block;padding:4px 12px;background:#c2e7e6;color:#006565;font-size:11px;font-weight:700;letter-spacing:0.05em;border-radius:6px">WALLETS</span>
          <span style="font-size:11px;color:#6e7979">Key Management for Agents</span>
        </div>
        <h2 style="font-weight:800;font-size:34px;color:#191c1d;letter-spacing:-0.02em;line-height:1.1">How Do Agents Hold Keys?</h2>
        <p style="font-size:14px;color:#3e4949;margin-top:6px">Agents need wallets to sign transactions, authenticate, and pay. But they can't use MetaMask.</p>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;margin-top:20px">
        <div style="background:#ffffff;padding:22px 20px;border-radius:14px;border:1px solid #edeeef;position:relative;overflow:hidden;display:flex;flex-direction:column">
          <div style="position:absolute;top:0;left:0;width:100%;height:3px;background:linear-gradient(90deg,#006565,#008080)"></div>
          <div style="width:36px;height:36px;border-radius:8px;background:#c2e7e6;display:flex;align-items:center;justify-content:center;margin-bottom:12px;margin-top:4px">
            <span class="material-symbols-outlined" style="color:#006565;font-size:20px">enhanced_encryption</span>
          </div>
          <p style="font-size:13px;font-weight:700;color:#191c1d;margin-bottom:6px">Encrypted Keystores</p>
          <p style="font-size:11px;color:#3e4949;line-height:1.5;flex:1">Keys encrypted at rest, decrypted in memory at runtime. Simple, battle-tested, but only as secure as the encryption key.</p>
        </div>
        <div style="background:#ffffff;padding:22px 20px;border-radius:14px;border:1px solid #edeeef;position:relative;overflow:hidden;display:flex;flex-direction:column">
          <div style="position:absolute;top:0;left:0;width:100%;height:3px;background:linear-gradient(90deg,#006565,#008080)"></div>
          <div style="width:36px;height:36px;border-radius:8px;background:#c2e7e6;display:flex;align-items:center;justify-content:center;margin-bottom:12px;margin-top:4px">
            <span class="material-symbols-outlined" style="color:#006565;font-size:20px">memory</span>
          </div>
          <p style="font-size:13px;font-weight:700;color:#191c1d;margin-bottom:6px">Hardware Wallets</p>
          <p style="font-size:11px;color:#3e4949;line-height:1.5;flex:1">HSMs and hardware enclaves. Strongest guarantee — keys never leave the chip. For high-value agent operations.</p>
        </div>
        <div style="background:#ffffff;padding:22px 20px;border-radius:14px;border:1px solid #edeeef;position:relative;overflow:hidden;display:flex;flex-direction:column">
          <div style="position:absolute;top:0;left:0;width:100%;height:3px;background:linear-gradient(90deg,#006565,#008080)"></div>
          <div style="width:36px;height:36px;border-radius:8px;background:#c2e7e6;display:flex;align-items:center;justify-content:center;margin-bottom:12px;margin-top:4px">
            <span class="material-symbols-outlined" style="color:#006565;font-size:20px">cloud_done</span>
          </div>
          <p style="font-size:13px;font-weight:700;color:#191c1d;margin-bottom:6px">Cloud Secret Managers</p>
          <p style="font-size:11px;color:#3e4949;line-height:1.5;flex:1">AWS KMS, GCP Secret Manager. Keys managed by cloud infra with access policies, audit logs, rotation.</p>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:14px">
        <div style="background:#c2e7e6;padding:18px 20px;border-radius:14px">
          <p style="font-size:13px;font-weight:700;color:#006565;margin-bottom:4px">openwallet.sh</p>
          <p style="font-size:11px;color:#002020;line-height:1.5">Open-source agent wallet framework. Designed for programmatic access — agents create, sign, and manage wallets without human interaction.</p>
        </div>
        <div style="background:#edeeef;padding:18px 20px;border-radius:14px">
          <p style="font-size:13px;font-weight:700;color:#191c1d;margin-bottom:4px">Emerging frameworks</p>
          <p style="font-size:11px;color:#3e4949;line-height:1.5"><span style="font-weight:600">varlock.dev</span> — secret management for AI coding agents. <span style="font-weight:600">mlld.ai</span> — agent infrastructure toolkit.</p>
        </div>
      </div>
    </main>
    <div style="position:absolute;bottom:0;left:0;width:100%;height:2px;background:rgba(189,201,200,0.2)">
      <div style="height:100%;background:#006565;width:87%"></div>
    </div>
  </div>`,

  /* SLIDE — ERC-5564: Privacy (redesigned) */
  `<div class="flex flex-col w-full h-full relative" style="background:#f8f9fa;font-family:'Inter',system-ui,sans-serif;overflow:hidden">
    <main style="position:relative;padding:44px 80px 44px;flex:1;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden">
      <div>
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px">
          <span style="display:inline-block;padding:4px 12px;background:#c2e7e6;color:#006565;font-size:11px;font-weight:700;letter-spacing:0.05em;border-radius:6px">ERC-5564</span>
          <span style="font-size:11px;color:#6e7979">Stealth Addresses — Co-authored by Vitalik</span>
        </div>
        <h2 style="font-weight:800;font-size:34px;color:#191c1d;letter-spacing:-0.02em;line-height:1.1">Privacy: Built for Machines</h2>
        <p style="font-size:14px;color:#3e4949;margin-top:6px">Ethereum is transparent by default. ERC-5564 fixes that without mixers, without trusted third parties, without breaking composability.</p>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:20px;flex:1">
        <!-- Left: How it works -->
        <div style="display:flex;flex-direction:column;gap:12px">
          <p style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#6e7979">How stealth addresses work</p>
          <div style="background:#ffffff;padding:20px;border-radius:14px;border:1px solid #edeeef;position:relative;overflow:hidden">
            <div style="position:absolute;top:0;left:0;width:100%;height:3px;background:linear-gradient(90deg,#006565,#008080)"></div>
            <p style="font-size:12px;font-weight:700;color:#191c1d;margin-bottom:6px;margin-top:4px">One-time addresses</p>
            <p style="font-size:11px;color:#3e4949;line-height:1.5">Each payment generates a fresh address derived from elliptic curve math. Sender &amp; receiver are unlinkable on-chain. Non-interactive — no back-and-forth needed.</p>
          </div>
          <div style="background:#ffffff;padding:20px;border-radius:14px;border:1px solid #edeeef;position:relative;overflow:hidden">
            <div style="position:absolute;top:0;left:0;width:100%;height:3px;background:linear-gradient(90deg,#006565,#008080)"></div>
            <p style="font-size:12px;font-weight:700;color:#191c1d;margin-bottom:6px;margin-top:4px">View tags + singleton announcer</p>
            <p style="font-size:11px;color:#3e4949;line-height:1.5">Efficient scanning via view tags so recipients find their payments fast. A single announcer contract for discoverability across the network.</p>
          </div>
        </div>
        <!-- Right: Why agents love it -->
        <div style="display:flex;flex-direction:column;gap:12px">
          <p style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#006565">Why agents will love this</p>
          <div style="background:#ffffff;padding:18px;border-radius:14px;border:1px solid #edeeef">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px">
              <span class="material-symbols-outlined" style="color:#006565;font-size:18px">visibility_off</span>
              <p style="font-size:12px;font-weight:700;color:#191c1d">Privacy</p>
            </div>
            <p style="font-size:11px;color:#3e4949;line-height:1.5">Unlinkable by default. Competitors can't map spending patterns.</p>
          </div>
          <div style="background:#ffffff;padding:18px;border-radius:14px;border:1px solid #edeeef">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px">
              <span class="material-symbols-outlined" style="color:#006565;font-size:18px">savings</span>
              <p style="font-size:12px;font-weight:700;color:#191c1d">Cost</p>
            </div>
            <p style="font-size:11px;color:#3e4949;line-height:1.5">Much cheaper than ZK mixer setups. Practical at micropayment scale.</p>
          </div>
          <div style="background:#c2e7e6;padding:18px;border-radius:14px">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px">
              <span class="material-symbols-outlined" style="color:#006565;font-size:18px">smart_toy</span>
              <p style="font-size:12px;font-weight:700;color:#006565">UX is the killer feature</p>
            </div>
            <p style="font-size:11px;color:#002020;line-height:1.5">Multiple keys, event scanning, fragmented balances — painful for humans, <span style="font-weight:700">trivial for agents</span>.</p>
          </div>
        </div>
      </div>
    </main>
    <div style="position:absolute;bottom:0;left:0;width:100%;height:2px;background:rgba(189,201,200,0.2)">
      <div style="height:100%;background:#006565;width:95%"></div>
    </div>
  </div>`,

  /* SLIDE — How It All Fits Together (process flow) */
  `<div class="flex flex-col w-full h-full relative" style="background:#f8f9fa;font-family:'Inter',system-ui,sans-serif;overflow:hidden">
    <main style="position:relative;padding:36px 80px 36px;flex:1;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden">
      <div>
        <h2 style="font-weight:800;font-size:30px;color:#191c1d;letter-spacing:-0.02em;line-height:1.1">How It All Fits Together</h2>
        <p style="font-size:13px;color:#3e4949;margin-top:4px">An agent wants to generate a video via <span style="font-weight:600;color:#006565">StableStudio</span></p>
      </div>

      <!-- Process flow -->
      <div style="position:relative;margin-top:14px;flex:1;display:flex;flex-direction:column;justify-content:center">

        <!-- ERC-5564 privacy wrapper -->
        <div style="border:1.5px dashed #bdc9c8;border-radius:20px;padding:14px 18px 14px;position:relative">
          <div style="position:absolute;top:-10px;right:24px;background:#f8f9fa;padding:0 10px;display:flex;align-items:center;gap:5px">
            <span class="material-symbols-outlined" style="color:#6e7979;font-size:12px">visibility_off</span>
            <span style="font-size:9px;font-weight:700;color:#6e7979">ERC-5564 — Entire flow can be private via stealth addresses</span>
          </div>

          <!-- Main horizontal flow -->
          <div style="display:flex;align-items:flex-start;gap:10px">

            <!-- Step 1: Discover -->
            <div style="flex:1;background:#ffffff;padding:14px 12px;border-radius:12px;border:1px solid #edeeef;position:relative;overflow:hidden">
              <div style="position:absolute;top:0;left:0;width:100%;height:3px;background:#006565"></div>
              <div style="display:flex;align-items:center;gap:5px;margin-bottom:6px;margin-top:4px">
                <div style="width:20px;height:20px;border-radius:50%;background:#c2e7e6;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:800;color:#006565">1</div>
                <span style="font-size:8px;font-weight:700;color:#006565">ERC-8004</span>
              </div>
              <p style="font-size:11px;font-weight:700;color:#191c1d;margin-bottom:2px">Discover / Trust</p>
              <p style="font-size:9px;color:#3e4949;line-height:1.4">Query registry. Find StableStudio. Check reviews, prices, uptime.</p>
            </div>

            <span class="material-symbols-outlined" style="color:#bdc9c8;font-size:16px;margin-top:40px;flex-shrink:0">arrow_forward</span>

            <!-- Step 2: Authenticate -->
            <div style="flex:1;background:#ffffff;padding:14px 12px;border-radius:12px;border:1px solid #edeeef;position:relative;overflow:hidden">
              <div style="position:absolute;top:0;left:0;width:100%;height:3px;background:#3e4949"></div>
              <div style="display:flex;align-items:center;gap:5px;margin-bottom:6px;margin-top:4px">
                <div style="width:20px;height:20px;border-radius:50%;background:#edeeef;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:800;color:#3e4949">2</div>
                <span style="font-size:8px;font-weight:700;color:#3e4949">ERC-8128</span>
              </div>
              <p style="font-size:11px;font-weight:700;color:#191c1d;margin-bottom:2px">Authenticate</p>
              <p style="font-size:9px;color:#3e4949;line-height:1.4">Sign request with Ethereum key. Prove identity = payer.</p>
            </div>

            <span class="material-symbols-outlined" style="color:#bdc9c8;font-size:16px;margin-top:40px;flex-shrink:0">arrow_forward</span>

            <!-- Step 3: Pay -->
            <div style="flex:1;background:#ffffff;padding:14px 12px;border-radius:12px;border:1px solid #edeeef;position:relative;overflow:hidden">
              <div style="position:absolute;top:0;left:0;width:100%;height:3px;background:#008080"></div>
              <div style="display:flex;align-items:center;gap:5px;margin-bottom:6px;margin-top:4px">
                <div style="width:20px;height:20px;border-radius:50%;background:#c2e7e6;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:800;color:#006565">3</div>
                <span style="font-size:8px;font-weight:700;color:#008080">x402</span>
              </div>
              <p style="font-size:11px;font-weight:700;color:#191c1d;margin-bottom:2px">Pay</p>
              <p style="font-size:9px;color:#3e4949;line-height:1.4">402 response → sign USDC → ~1s settlement on Base.</p>
            </div>

            <span class="material-symbols-outlined" style="color:#bdc9c8;font-size:16px;margin-top:40px;flex-shrink:0">arrow_forward</span>

            <!-- Step 4: Receive -->
            <div style="flex:1;background:#c2e7e6;padding:14px 12px;border-radius:12px">
              <div style="display:flex;align-items:center;gap:5px;margin-bottom:6px">
                <div style="width:20px;height:20px;border-radius:50%;background:#008080;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:800;color:#e3fffe">4</div>
                <span style="font-size:8px;font-weight:700;color:#006565">Result</span>
              </div>
              <p style="font-size:11px;font-weight:700;color:#006565;margin-bottom:2px">Receive</p>
              <p style="font-size:9px;color:#002020;line-height:1.4">Video generated. Data returned. Only the paying wallet can access it.</p>
            </div>
          </div>
        </div>

        <!-- Branch: Escrow + Dispute (above), Reputation (below) -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:14px">

          <!-- Escrow branch -->
          <div style="background:#ffffff;padding:14px 16px;border-radius:12px;border:1px solid #edeeef;position:relative;overflow:hidden">
            <div style="position:absolute;top:0;left:0;width:100%;height:3px;background:linear-gradient(90deg,#006565,#008080)"></div>
            <div style="display:flex;align-items:flex-start;gap:10px;margin-top:4px">
              <span class="material-symbols-outlined" style="color:#006565;font-size:20px;margin-top:2px">lock</span>
              <div>
                <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px">
                  <span style="font-size:9px;font-weight:700;color:#006565">ERC-8183</span>
                  <span style="font-size:9px;color:#6e7979">— if complex job</span>
                </div>
                <p style="font-size:11px;font-weight:700;color:#191c1d;margin-bottom:2px">Escrow &amp; Settlement</p>
                <p style="font-size:9px;color:#3e4949;line-height:1.4">For larger jobs: funds locked in escrow → provider delivers → evaluator attests → payment released. If disputed, 3rd-party arbiter resolves.</p>
              </div>
            </div>
          </div>

          <!-- Reputation feedback -->
          <div style="background:#c2e7e6;padding:14px 16px;border-radius:12px">
            <div style="display:flex;align-items:flex-start;gap:10px">
              <span class="material-symbols-outlined" style="color:#006565;font-size:20px;margin-top:2px">star</span>
              <div>
                <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px">
                  <span style="font-size:9px;font-weight:700;color:#006565">ERC-8004</span>
                  <span class="material-symbols-outlined" style="color:#006565;font-size:10px">replay</span>
                  <span style="font-size:9px;color:#006565">feeds back</span>
                </div>
                <p style="font-size:11px;font-weight:700;color:#006565;margin-bottom:2px">Reputation Builds</p>
                <p style="font-size:9px;color:#002020;line-height:1.4">Every completed job (x402 or 8183) feeds on-chain reputation. StableStudio now has 1,248 verified jobs. Better discovery next time.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom callout -->
      <div style="width:100%;background:#edeeef;padding:10px 20px;border-radius:12px;display:flex;align-items:center;gap:14px;margin-top:12px">
        <div style="background:#006565;padding:6px;border-radius:6px;flex-shrink:0">
          <span class="material-symbols-outlined" style="color:#e3fffe;font-size:16px">key</span>
        </div>
        <p style="font-size:11px;color:#3e4949;flex:1"><span style="font-weight:700;color:#191c1d">One Ethereum address through every step.</span> Same key discovers, authenticates, pays, settles, and builds reputation. 5564 makes the whole flow private when needed.</p>
      </div>
    </main>
    <div style="position:absolute;bottom:0;left:0;width:100%;height:2px;background:rgba(189,201,200,0.2)">
      <div style="height:100%;background:#006565;width:96%"></div>
    </div>
  </div>`,

  /* SLIDE — Agentic Commerce Market Map */
  `<div class="flex flex-col w-full h-full relative" style="background:#f8f9fa;font-family:'Inter',system-ui,sans-serif;overflow:hidden">
    <main style="position:relative;padding:48px 80px 48px;flex:1;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden">
      <!-- Header -->
      <div>
        <div style="display:flex;align-items:center;gap:16px">
          <div style="width:48px;height:48px;border-radius:12px;background:linear-gradient(135deg,#006565,#008080);display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(0,101,101,0.25)">
            <span class="material-symbols-outlined" style="color:#e3fffe;font-size:26px">map</span>
          </div>
          <div>
            <h2 style="font-weight:800;font-size:32px;color:#191c1d;letter-spacing:-0.02em;line-height:1.1">View the Entire Agentic Commerce Map</h2>
            <p style="font-size:15px;color:#006565;margin-top:4px;font-weight:600;display:flex;align-items:center;gap:6px">
              <span class="material-symbols-outlined" style="font-size:16px">open_in_new</span>
              agenticcommercemap.com
            </p>
          </div>
        </div>
      </div>

      <!-- Content: Screenshot + QR -->
      <div style="display:grid;grid-template-columns:1fr 240px;gap:32px;margin-top:24px;flex:1;align-items:center">
        <!-- Left: Screenshot -->
        <div style="border-radius:14px;overflow:hidden;border:1px solid #edeeef;box-shadow:0 4px 24px rgba(0,0,0,0.08);height:100%">
          <img src="/market-map.png" alt="Agentic Commerce Market Map" style="width:100%;height:100%;object-fit:cover;object-position:top left;display:block" />
        </div>

        <!-- Right: QR Code -->
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px">
          <div style="background:#ffffff;padding:16px;border-radius:14px;border:1px solid #edeeef;box-shadow:0 2px 12px rgba(0,0,0,0.06)">
            <img src="/qr-code.png" alt="QR Code" style="width:200px;height:200px;display:block" />
          </div>
          <p style="font-size:12px;color:#6e7979;text-align:center">Scan to explore<br/><span style="font-weight:600;color:#006565">207 companies &middot; 16 categories</span></p>
        </div>
      </div>
    </main>
    <div style="position:absolute;bottom:0;left:0;width:100%;height:2px;background:rgba(189,201,200,0.2)">
      <div style="height:100%;background:#006565;width:97%"></div>
    </div>
  </div>`,


];

slides.splice(slides.length - 1, 0,
  /* SLIDE - Practical Stack: From API to Agent Tool */
  `<div class="flex flex-col w-full h-full relative" style="background:#f8f9fa;font-family:'Inter',system-ui,sans-serif;overflow:hidden">
    <main style="position:relative;padding:44px 80px 44px;flex:1;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden">
      <div>
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px">
          <span style="display:inline-block;padding:4px 12px;background:#c2e7e6;color:#006565;font-size:11px;font-weight:700;letter-spacing:0.05em;border-radius:6px">PRACTICAL</span>
          <span style="font-size:11px;color:#6e7979">How builders expose paid endpoints to agents</span>
        </div>
        <h2 style="font-weight:800;font-size:34px;color:#191c1d;letter-spacing:-0.02em;line-height:1.1">Turn Any API Into a Paid Agent Tool</h2>
        <p style="font-size:14px;color:#3e4949;margin-top:6px">The resource stays normal HTTP. x402 adds a payment challenge in front of it.</p>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:14px;margin-top:24px">
        <div style="background:#ffffff;padding:20px 18px;border-radius:14px;border:1px solid #edeeef;position:relative;overflow:hidden">
          <div style="position:absolute;top:0;left:0;width:100%;height:3px;background:#006565"></div>
          <div style="width:32px;height:32px;border-radius:8px;background:#c2e7e6;display:flex;align-items:center;justify-content:center;margin-bottom:12px;margin-top:4px"><span class="material-symbols-outlined" style="color:#006565;font-size:18px">api</span></div>
          <p style="font-size:13px;font-weight:700;color:#191c1d;margin-bottom:6px">1. Existing API</p>
          <p style="font-size:11px;color:#3e4949;line-height:1.5">Start with a route: inference, data, scraping, verification, storage, search, or any bounded service.</p>
        </div>
        <div style="background:#ffffff;padding:20px 18px;border-radius:14px;border:1px solid #edeeef;position:relative;overflow:hidden">
          <div style="position:absolute;top:0;left:0;width:100%;height:3px;background:#006565"></div>
          <div style="width:32px;height:32px;border-radius:8px;background:#c2e7e6;display:flex;align-items:center;justify-content:center;margin-bottom:12px;margin-top:4px"><span class="material-symbols-outlined" style="color:#006565;font-size:18px">payments</span></div>
          <p style="font-size:13px;font-weight:700;color:#191c1d;margin-bottom:6px">2. x402 Middleware</p>
          <p style="font-size:11px;color:#3e4949;line-height:1.5">Declare price, token, chain, recipient, method, and resource description.</p>
        </div>
        <div style="background:#ffffff;padding:20px 18px;border-radius:14px;border:1px solid #edeeef;position:relative;overflow:hidden">
          <div style="position:absolute;top:0;left:0;width:100%;height:3px;background:#006565"></div>
          <div style="width:32px;height:32px;border-radius:8px;background:#c2e7e6;display:flex;align-items:center;justify-content:center;margin-bottom:12px;margin-top:4px"><span class="material-symbols-outlined" style="color:#006565;font-size:18px">verified</span></div>
          <p style="font-size:13px;font-weight:700;color:#191c1d;margin-bottom:6px">3. Facilitator</p>
          <p style="font-size:11px;color:#3e4949;line-height:1.5">Verifies the signed payment and settles it onchain before the API response is released.</p>
        </div>
        <div style="background:#c2e7e6;padding:20px 18px;border-radius:14px;position:relative;overflow:hidden">
          <div style="width:32px;height:32px;border-radius:8px;background:#008080;display:flex;align-items:center;justify-content:center;margin-bottom:12px"><span class="material-symbols-outlined" style="color:#e3fffe;font-size:18px">smart_toy</span></div>
          <p style="font-size:13px;font-weight:700;color:#006565;margin-bottom:6px">4. Agent Discovery</p>
          <p style="font-size:11px;color:#002020;line-height:1.5">Expose OpenAPI, MCP tools, llms.txt, agent.json, or an x402 discovery registry.</p>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:1.1fr 1fr;gap:18px;margin-top:22px">
        <div style="background:#ffffff;border:1px solid #edeeef;border-radius:14px;padding:20px 22px">
          <p style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#6e7979;margin-bottom:12px">Runtime flow</p>
          <div style="display:flex;align-items:center;gap:8px">
            <span style="font-family:'JetBrains Mono',monospace;font-size:11px;color:#191c1d;background:#edeeef;padding:8px 10px;border-radius:8px">GET /tool</span>
            <span class="material-symbols-outlined" style="color:#bdc9c8;font-size:16px">arrow_forward</span>
            <span style="font-family:'JetBrains Mono',monospace;font-size:11px;color:#006565;background:#c2e7e6;padding:8px 10px;border-radius:8px">402 price</span>
            <span class="material-symbols-outlined" style="color:#bdc9c8;font-size:16px">arrow_forward</span>
            <span style="font-family:'JetBrains Mono',monospace;font-size:11px;color:#191c1d;background:#edeeef;padding:8px 10px;border-radius:8px">sign USDC</span>
            <span class="material-symbols-outlined" style="color:#bdc9c8;font-size:16px">arrow_forward</span>
            <span style="font-family:'JetBrains Mono',monospace;font-size:11px;color:#006565;background:#c2e7e6;padding:8px 10px;border-radius:8px">200 result</span>
          </div>
        </div>
        <div style="background:#edeeef;border-radius:14px;padding:20px 22px">
          <p style="font-size:13px;font-weight:700;color:#191c1d;margin-bottom:6px">Key message</p>
          <p style="font-size:12px;color:#3e4949;line-height:1.5">The endpoint does not need accounts, subscriptions, or API keys. The payment becomes part of the HTTP request/response loop.</p>
        </div>
      </div>
    </main>
    <div style="position:absolute;bottom:0;left:0;width:100%;height:2px;background:rgba(189,201,200,0.2)"><div style="height:100%;background:#006565;width:96.5%"></div></div>
  </div>`,

  /* SLIDE - x402 Provider Landscape */
  `<div class="flex flex-col w-full h-full relative" style="background:#f8f9fa;font-family:'Inter',system-ui,sans-serif;overflow:hidden">
    <main style="position:relative;padding:44px 80px 44px;flex:1;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden">
      <div>
        <h2 style="font-weight:800;font-size:34px;color:#191c1d;letter-spacing:-0.02em;line-height:1.1">The x402 Provider Landscape</h2>
        <p style="font-size:14px;color:#3e4949;margin-top:6px">Same protocol, different trust models. The choice is less about payments and more about control.</p>
      </div>
      <div style="display:grid;grid-template-columns:1.15fr 1fr 1fr;gap:14px;margin-top:22px">
        <div style="background:#c2e7e6;padding:22px 20px;border-radius:14px;position:relative;overflow:hidden">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px"><span class="material-symbols-outlined" style="color:#006565;font-size:22px">dns</span><p style="font-size:16px;font-weight:800;color:#006565">OpenFacilitator</p></div>
          <p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#006565;margin-bottom:10px">Open + self-hostable</p>
          <p style="font-size:12px;color:#002020;line-height:1.5;margin-bottom:14px">Apache 2.0 facilitator stack. Run your own /verify, /settle, /supported, and /discovery/resources endpoints.</p>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
            <span style="font-size:10px;color:#002020;background:rgba(255,255,255,0.45);padding:7px 8px;border-radius:8px">Self-host</span>
            <span style="font-size:10px;color:#002020;background:rgba(255,255,255,0.45);padding:7px 8px;border-radius:8px">No vendor lock-in</span>
            <span style="font-size:10px;color:#002020;background:rgba(255,255,255,0.45);padding:7px 8px;border-radius:8px">EVM chains</span>
            <span style="font-size:10px;color:#002020;background:rgba(255,255,255,0.45);padding:7px 8px;border-radius:8px">Own domain</span>
          </div>
        </div>
        <div style="background:#ffffff;padding:22px 20px;border-radius:14px;border:1px solid #edeeef;position:relative;overflow:hidden">
          <div style="position:absolute;top:0;left:0;width:100%;height:3px;background:#008080"></div>
          <p style="font-size:15px;font-weight:800;color:#191c1d;margin-top:4px;margin-bottom:10px">Open-source, non-centralized solutions</p>
          <div style="display:flex;flex-direction:column;gap:10px">
            <div><p style="font-size:12px;font-weight:700;color:#006565">OpenX402</p><p style="font-size:10px;color:#3e4949;line-height:1.45">Public facilitator positioned as no-login, no-KYC, Base-mainnet compatible.</p></div>
            <div><p style="font-size:12px;font-weight:700;color:#006565">OpenFacilitator self-host</p><p style="font-size:10px;color:#3e4949;line-height:1.45">Run the facilitator under your own domain and infrastructure.</p></div>
            <div><p style="font-size:12px;font-weight:700;color:#006565">Raw x402 SDK</p><p style="font-size:10px;color:#3e4949;line-height:1.45">Maximum neutrality, but teams own more chain/RPC operational complexity.</p></div>
          </div>
        </div>
        <div style="background:#ffffff;padding:22px 20px;border-radius:14px;border:1px solid #edeeef;position:relative;overflow:hidden">
          <div style="position:absolute;top:0;left:0;width:100%;height:3px;background:#6e7979"></div>
          <p style="font-size:15px;font-weight:800;color:#191c1d;margin-top:4px;margin-bottom:10px">Managed convenience layers</p>
          <div style="display:flex;flex-direction:column;gap:10px">
            <div><p style="font-size:12px;font-weight:700;color:#191c1d">Coinbase CDP + Bazaar</p><p style="font-size:10px;color:#3e4949;line-height:1.45">Production facilitator plus discovery/search catalog for agents.</p></div>
            <div><p style="font-size:12px;font-weight:700;color:#191c1d">Thirdweb Nexus</p><p style="font-size:10px;color:#3e4949;line-height:1.45">Hosted facilitator/router and agent tooling, authenticated by wallet/project secrets.</p></div>
            <div><p style="font-size:12px;font-weight:700;color:#191c1d">PayAI</p><p style="font-size:10px;color:#3e4949;line-height:1.45">Managed facilitator option with EVM support and provider-operated infrastructure.</p></div>
          </div>
        </div>
      </div>
      <div style="background:#edeeef;padding:18px 22px;border-radius:14px;margin-top:18px;display:flex;align-items:center;gap:16px">
        <div style="background:#006565;padding:9px;border-radius:9px;flex-shrink:0"><span class="material-symbols-outlined" style="color:#e3fffe;font-size:20px">balance</span></div>
        <p style="font-size:12px;color:#3e4949;line-height:1.5;flex:1"><span style="font-weight:700;color:#191c1d">Tradeoff:</span> managed providers are faster to demo, but open/self-hosted facilitators better match credible neutrality, privacy, and permissionless deployment.</p>
      </div>
    </main>
    <div style="position:absolute;bottom:0;left:0;width:100%;height:2px;background:rgba(189,201,200,0.2)"><div style="height:100%;background:#006565;width:97%"></div></div>
  </div>`,

  /* SLIDE - OpenX402 vs OpenFacilitator */
  `<div class="flex flex-col w-full h-full relative" style="background:#f8f9fa;font-family:'Inter',system-ui,sans-serif;overflow:hidden">
    <main style="position:relative;padding:40px 72px 40px;flex:1;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden">
      <div>
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px">
          <span style="display:inline-block;padding:4px 12px;background:#c2e7e6;color:#006565;font-size:11px;font-weight:700;letter-spacing:0.05em;border-radius:6px">FACILITATOR CHOICE</span>
        </div>
        <h2 style="font-weight:800;font-size:32px;color:#191c1d;letter-spacing:-0.02em;line-height:1.1">OpenX402 vs OpenFacilitator</h2>
        <p style="font-size:13px;color:#3e4949;margin-top:6px">Both can be permissionless. That does not mean both are equally private.</p>
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:18px">
        <div style="background:#ffffff;border:1px solid #edeeef;border-radius:14px;padding:20px 22px;position:relative;overflow:hidden">
          <div style="position:absolute;top:0;left:0;width:100%;height:3px;background:#008080"></div>
          <p style="font-size:17px;font-weight:800;color:#006565;margin-top:4px;margin-bottom:8px">OpenX402</p>
          <p style="font-size:12px;color:#3e4949;line-height:1.5;margin-bottom:14px">A public hosted facilitator you can point at without signup.</p>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
            <p style="font-size:10px;color:#3e4949;line-height:1.35"><span style="font-weight:700;color:#191c1d">Runs by:</span> OpenX402 team</p>
            <p style="font-size:10px;color:#3e4949;line-height:1.35"><span style="font-weight:700;color:#191c1d">Setup:</span> fastest</p>
            <p style="font-size:10px;color:#3e4949;line-height:1.35"><span style="font-weight:700;color:#191c1d">Endpoint:</span> facilitator.openx402.ai</p>
            <p style="font-size:10px;color:#3e4949;line-height:1.35"><span style="font-weight:700;color:#191c1d">Keys:</span> no signup/API keys</p>
            <p style="font-size:10px;color:#3e4949;line-height:1.35"><span style="font-weight:700;color:#191c1d">Control:</span> low to medium</p>
            <p style="font-size:10px;color:#3e4949;line-height:1.35"><span style="font-weight:700;color:#191c1d">Privacy:</span> hosted operator can see payment flow metadata</p>
            <p style="font-size:10px;color:#3e4949;line-height:1.35"><span style="font-weight:700;color:#191c1d">Best for:</span> demos, tutorials, MVPs</p>
          </div>
        </div>

        <div style="background:#c2e7e6;border-radius:14px;padding:20px 22px;position:relative;overflow:hidden">
          <p style="font-size:17px;font-weight:800;color:#006565;margin-bottom:8px">OpenFacilitator</p>
          <p style="font-size:12px;color:#002020;line-height:1.5;margin-bottom:14px">A project focused on hosted, custom-domain, or self-hosted facilitator infrastructure.</p>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
            <p style="font-size:10px;color:#002020;line-height:1.35"><span style="font-weight:700;color:#006565">Runs by:</span> you, or hosted provider</p>
            <p style="font-size:10px;color:#002020;line-height:1.35"><span style="font-weight:700;color:#006565">Setup:</span> fast hosted; more work self-hosted</p>
            <p style="font-size:10px;color:#002020;line-height:1.35"><span style="font-weight:700;color:#006565">Endpoint:</span> pay.openfacilitator.io or your domain</p>
            <p style="font-size:10px;color:#002020;line-height:1.35"><span style="font-weight:700;color:#006565">Keys:</span> free endpoint no account; paid features may use dashboard</p>
            <p style="font-size:10px;color:#002020;line-height:1.35"><span style="font-weight:700;color:#006565">Control:</span> high when self-hosted</p>
            <p style="font-size:10px;color:#002020;line-height:1.35"><span style="font-weight:700;color:#006565">Privacy:</span> self-hosting removes third-party facilitator logs</p>
            <p style="font-size:10px;color:#002020;line-height:1.35"><span style="font-weight:700;color:#006565">Best for:</span> production control, branding, custom logic</p>
          </div>
        </div>
      </div>

      <div style="display:grid;grid-template-columns:1.15fr 1fr;gap:16px;margin-top:16px">
        <div style="background:#ffffff;border:1px solid #edeeef;border-radius:14px;padding:18px 20px">
          <p style="font-size:13px;font-weight:800;color:#191c1d;margin-bottom:8px">Permissionless is not private</p>
          <p style="font-size:11px;color:#3e4949;line-height:1.5">A hosted facilitator can observe amount, token, network, recipient, timing, settlement status, and any resource metadata included in the payment requirements. Self-hosting reduces that third-party data exposure, but on-chain settlement remains public.</p>
        </div>
        <div style="background:#edeeef;border-radius:14px;padding:18px 20px">
          <p style="font-size:13px;font-weight:800;color:#191c1d;margin-bottom:8px">Adoption path</p>
          <p style="font-size:11px;color:#3e4949;line-height:1.5">Start with a public hosted facilitator for speed. Move to a hosted custom-domain setup for product control. Self-host when the facilitator layer becomes critical infrastructure.</p>
        </div>
      </div>
    </main>
    <div style="position:absolute;bottom:0;left:0;width:100%;height:2px;background:rgba(189,201,200,0.2)"><div style="height:100%;background:#006565;width:97.25%"></div></div>
  </div>`,

  /* SLIDE - Recommended Path */
  `<div class="flex flex-col w-full h-full relative" style="background:#f8f9fa;font-family:'Inter',system-ui,sans-serif;overflow:hidden">
    <main style="position:relative;padding:44px 80px 44px;flex:1;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden">
      <div>
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px"><span style="display:inline-block;padding:4px 12px;background:#c2e7e6;color:#006565;font-size:11px;font-weight:700;letter-spacing:0.05em;border-radius:6px">IMPLEMENTATION PATH</span></div>
        <h2 style="font-weight:800;font-size:34px;color:#191c1d;letter-spacing:-0.02em;line-height:1.1">Start Open: x402 + OpenFacilitator</h2>
        <p style="font-size:14px;color:#3e4949;margin-top:6px">The strongest story is not "use this vendor." It is "run the payment layer yourself if you need to."</p>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-top:24px;flex:1">
        <div style="background:#ffffff;border:1px solid #edeeef;border-radius:14px;padding:22px 24px;position:relative;overflow:hidden">
          <div style="position:absolute;top:0;left:0;width:100%;height:3px;background:linear-gradient(90deg,#006565,#008080)"></div>
          <p style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#006565;margin-bottom:14px;margin-top:4px">How a builder ships it</p>
          <div style="display:flex;flex-direction:column;gap:12px">
            <div style="display:flex;gap:10px"><div style="width:22px;height:22px;border-radius:50%;background:#c2e7e6;color:#006565;font-size:10px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0">1</div><p style="font-size:12px;color:#3e4949;line-height:1.45"><span style="font-weight:700;color:#191c1d">Protect one route</span> with x402 middleware and a price.</p></div>
            <div style="display:flex;gap:10px"><div style="width:22px;height:22px;border-radius:50%;background:#c2e7e6;color:#006565;font-size:10px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0">2</div><p style="font-size:12px;color:#3e4949;line-height:1.45"><span style="font-weight:700;color:#191c1d">Point it at OpenFacilitator</span> for verify and settle.</p></div>
            <div style="display:flex;gap:10px"><div style="width:22px;height:22px;border-radius:50%;background:#c2e7e6;color:#006565;font-size:10px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0">3</div><p style="font-size:12px;color:#3e4949;line-height:1.45"><span style="font-weight:700;color:#191c1d">Publish schemas</span> through OpenAPI, MCP, and discovery metadata.</p></div>
            <div style="display:flex;gap:10px"><div style="width:22px;height:22px;border-radius:50%;background:#c2e7e6;color:#006565;font-size:10px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0">4</div><p style="font-size:12px;color:#3e4949;line-height:1.45"><span style="font-weight:700;color:#191c1d">Let an agent call it</span>, receive 402, pay, retry, and get the result.</p></div>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;gap:14px">
          <div style="background:#ffffff;border:1px solid #edeeef;border-radius:14px;padding:22px 24px;flex:1">
            <p style="font-size:13px;font-weight:700;color:#191c1d;margin-bottom:8px">Be honest about the tradeoffs</p>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
              <p style="font-size:11px;color:#3e4949;line-height:1.45"><span style="font-weight:700;color:#191c1d">Operations:</span> someone must run RPC, keys, logs, uptime, and upgrades.</p>
              <p style="font-size:11px;color:#3e4949;line-height:1.45"><span style="font-weight:700;color:#191c1d">Privacy:</span> payment metadata can reveal what the agent is buying.</p>
              <p style="font-size:11px;color:#3e4949;line-height:1.45"><span style="font-weight:700;color:#191c1d">Discovery:</span> registries help agents, but no single registry should become mandatory.</p>
              <p style="font-size:11px;color:#3e4949;line-height:1.45"><span style="font-weight:700;color:#191c1d">Fallback:</span> managed providers are useful when teams need speed over neutrality.</p>
            </div>
          </div>
        </div>
      </div>
      <div style="background:#006565;padding:16px 22px;border-radius:14px;margin-top:18px">
        <p style="font-size:14px;color:#e3fffe;line-height:1.45"><span style="font-weight:800">Positioning:</span> open x402 is the standard; OpenFacilitator is the practical self-hosted facilitator; Coinbase, Thirdweb, and PayAI are managed/productized routes for teams that want convenience.</p>
      </div>
    </main>
    <div style="position:absolute;bottom:0;left:0;width:100%;height:2px;background:rgba(189,201,200,0.2)"><div style="height:100%;background:#006565;width:97.5%"></div></div>
  </div>`
);
