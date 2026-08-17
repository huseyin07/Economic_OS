"use client";

import { useMemo, useState } from "react";

const modules = [
  { id: "money", label: "MONEY", desc: "Programmable value enters the economy." },
  { id: "payments", label: "PAYMENTS", desc: "Value moves between people and software." },
  { id: "markets", label: "MARKETS", desc: "Capital finds price, liquidity and opportunity." },
  { id: "apps", label: "APPS", desc: "Applications turn economic primitives into products." },
  { id: "settlement", label: "SETTLEMENT", desc: "Economic activity resolves into final state." },
  { id: "liquidity", label: "LIQUIDITY", desc: "Capital connects markets and keeps value moving." },
];

const streams = ["VALUE", "USDC", "TX", "MARKET", "APP", "LIQUIDITY", "STATE", "PAYMENT", "BLOCK"];

export function EconomicPulse() {
  const [active, setActive] = useState(["money", "payments", "settlement"]);
  const [running, setRunning] = useState(true);
  const [cycles, setCycles] = useState(1842);

  const selected = useMemo(() => modules.filter((module) => active.includes(module.id)), [active]);

  const toggle = (id: string) => {
    setActive((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
    setCycles((value) => value + 1);
  };

  return (
    <section className={`economy-builder ${running ? "is-running" : "is-paused"}`} aria-label="Build your Economic OS">
      <div className="builder-head">
        <div>
          <span>ECONOMIC OS / BUILD AN ECONOMY</span>
          <h2>Connect it. Run it. Watch value move.</h2>
          <p>Compose the layers of an internet-native economy and watch your system process continuous economic flow.</p>
        </div>
        <div className="system-state"><i /> {running ? "ECONOMY RUNNING" : "ECONOMY PAUSED"}</div>
      </div>

      <div className="builder-shell">
        <div className="module-rail">
          <div className="rail-label">ECONOMIC PRIMITIVES</div>
          {modules.map((module) => (
            <button key={module.id} className={active.includes(module.id) ? "module active" : "module"} onClick={() => toggle(module.id)}>
              <span className="module-dot" />
              <span><b>{module.label}</b><small>{module.desc}</small></span>
              <em>{active.includes(module.id) ? "CONNECTED" : "+ ADD"}</em>
            </button>
          ))}
        </div>

        <div className="economy-stage">
          <div className="stage-grid" />
          <div className="stream stream-one">{streams.map((item, i) => <span key={`${item}-a`} style={{ animationDelay: `${-i * .75}s` }}>{item}</span>)}</div>
          <div className="stream stream-two">{[...streams].reverse().map((item, i) => <span key={`${item}-b`} style={{ animationDelay: `${-i * .9}s` }}>{item}</span>)}</div>
          <div className="stream stream-three">{streams.slice(2).map((item, i) => <span key={`${item}-c`} style={{ animationDelay: `${-i * 1.1}s` }}>{item}</span>)}</div>

          <div className="economy-core">
            <div className="core-orbit orbit-one" />
            <div className="core-orbit orbit-two" />
            <div className="core-face">
              <span>ECONOMIC</span>
              <strong>OS</strong>
              <small>{running ? "EXECUTING" : "STANDBY"}</small>
            </div>
          </div>

          <div className="connected-map">
            {selected.map((module, index) => (
              <div className={`connected-node node-${index % 6}`} key={module.id}>
                <i />
                <b>{module.label}</b>
              </div>
            ))}
          </div>

          <div className="flow-line line-a" /><div className="flow-line line-b" /><div className="flow-line line-c" /><div className="flow-line line-d" />
        </div>

        <aside className="economy-readout">
          <div className="readout-title">YOUR ECONOMY</div>
          <div className="metric"><span>MODULES</span><b>{active.length.toString().padStart(2, "0")}</b></div>
          <div className="metric"><span>CONNECTIONS</span><b>{Math.max(0, active.length * 2 - 1).toString().padStart(2, "0")}</b></div>
          <div className="metric"><span>FLOW</span><b className={running ? "live" : ""}>{running ? "ACTIVE" : "PAUSED"}</b></div>
          <div className="metric"><span>CYCLE</span><b>#{cycles}</b></div>
          <div className="stack-preview">
            <span>STACK</span>
            {selected.length ? selected.map((module, index) => <div key={module.id}><i>{index + 1}</i>{module.label}</div>) : <small>Select a primitive to begin.</small>}
          </div>
          <button className="run-button" onClick={() => setRunning((value) => !value)}>{running ? "PAUSE ECONOMY" : "RUN ECONOMY"}</button>
          <button className="reset-button" onClick={() => { setActive([]); setCycles((value) => value + 1); }}>RESET SYSTEM</button>
        </aside>
      </div>

      <div className="builder-foot"><span>BUILD</span><i /><span>CONNECT</span><i /><span>PROCESS</span><i /><span>SETTLE</span><i /><span>REPEAT</span></div>

      <style jsx>{`
        .economy-builder{width:min(1380px,calc(100% - 48px));margin:24px auto 72px;padding:30px;border:1px solid rgba(73,159,255,.3);border-radius:22px;background:radial-gradient(circle at 58% 40%,rgba(25,114,239,.1),transparent 31%),linear-gradient(180deg,rgba(4,17,33,.98),rgba(2,10,21,.99));box-shadow:0 34px 100px rgba(0,0,0,.34),inset 0 1px rgba(255,255,255,.025);overflow:hidden}
        .builder-head{display:flex;justify-content:space-between;align-items:flex-end;gap:28px;margin-bottom:24px}.builder-head>div:first-child{max-width:820px}.builder-head span,.rail-label,.readout-title{font:9px ui-monospace,monospace;letter-spacing:.14em;color:#58b4ff}.builder-head h2{font-size:clamp(34px,4.4vw,58px);line-height:1.02;letter-spacing:-.05em;margin:11px 0}.builder-head p{color:#8299af;line-height:1.65;margin:0;max-width:720px}.system-state{display:flex;align-items:center;gap:9px;padding:10px 13px;border:1px solid rgba(75,163,248,.24);border-radius:999px;font:9px monospace;letter-spacing:.1em;color:#9bd1ff;white-space:nowrap}.system-state i{width:7px;height:7px;border-radius:50%;background:#48a8ff;box-shadow:0 0 14px #278eff;animation:statePulse 1.4s ease-in-out infinite}.is-paused .system-state i{animation:none;opacity:.35}
        .builder-shell{display:grid;grid-template-columns:270px minmax(0,1fr) 220px;min-height:570px;border:1px solid rgba(65,145,229,.2);border-radius:16px;overflow:hidden;background:#020d1a}.module-rail,.economy-readout{position:relative;z-index:5;background:rgba(4,17,32,.93);padding:18px}.module-rail{border-right:1px solid rgba(66,145,228,.17)}.rail-label,.readout-title{margin-bottom:15px}.module{width:100%;display:grid;grid-template-columns:9px 1fr auto;align-items:center;gap:10px;text-align:left;padding:13px 10px;margin-bottom:8px;border:1px solid rgba(70,142,214,.14);border-radius:10px;background:rgba(6,24,44,.7);color:#a7bbcd;cursor:pointer;transition:.2s ease}.module:hover{border-color:rgba(83,173,255,.4);transform:translateX(2px)}.module.active{border-color:rgba(75,170,255,.42);background:linear-gradient(90deg,rgba(18,75,130,.48),rgba(6,26,48,.8));box-shadow:inset 3px 0 #43a8ff}.module-dot{width:6px;height:6px;border-radius:2px;border:1px solid #407baa}.module.active .module-dot{background:#49abff;box-shadow:0 0 9px #298fff}.module b{display:block;font:10px monospace;letter-spacing:.08em;color:#d6eaff}.module small{display:block;font-size:8px;line-height:1.35;color:#657f98;margin-top:4px}.module em{font:7px monospace;font-style:normal;color:#4fa9f4;white-space:nowrap}
        .economy-stage{position:relative;min-height:570px;overflow:hidden;background:radial-gradient(circle at 50% 50%,rgba(28,124,255,.16),transparent 25%),#020d1b}.stage-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(69,144,221,.055) 1px,transparent 1px),linear-gradient(90deg,rgba(69,144,221,.055) 1px,transparent 1px);background-size:34px 34px;mask-image:radial-gradient(circle,black 35%,transparent 90%)}
        .economy-core{position:absolute;left:50%;top:50%;width:190px;height:190px;transform:translate(-50%,-50%);display:grid;place-items:center;z-index:4}.core-orbit{position:absolute;inset:0;border:1px solid rgba(74,165,255,.38);border-radius:50%;animation:orbitSpin 13s linear infinite}.orbit-one:after,.orbit-two:after{content:"";position:absolute;width:7px;height:7px;border-radius:50%;background:#58b5ff;box-shadow:0 0 14px #2891ff;left:20px;top:20px}.orbit-two{inset:22px;border-style:dashed;animation-direction:reverse;animation-duration:9s}.core-face{width:112px;height:112px;border:1px solid rgba(112,193,255,.55);border-radius:24px;background:linear-gradient(145deg,#0a315b,#06182d);box-shadow:0 0 60px rgba(25,123,255,.32),inset 0 1px rgba(255,255,255,.08);display:flex;flex-direction:column;align-items:center;justify-content:center}.core-face span{font:8px monospace;letter-spacing:.15em;color:#82c7ff}.core-face strong{font-size:32px;line-height:1;margin:3px 0;color:#eef8ff}.core-face small{font:7px monospace;letter-spacing:.12em;color:#4caeff}
        .stream{position:absolute;left:-90px;right:-90px;height:44px;z-index:2;pointer-events:none}.stream-one{top:17%;transform:rotate(-5deg)}.stream-two{top:49%;transform:rotate(4deg)}.stream-three{top:80%;transform:rotate(-3deg)}.stream span{position:absolute;left:-90px;width:76px;height:30px;display:flex;align-items:center;justify-content:center;border:1px solid rgba(83,170,255,.28);border-radius:7px;background:linear-gradient(145deg,rgba(9,36,65,.96),rgba(4,18,34,.98));font:7px monospace;letter-spacing:.08em;color:#9fd2ff;box-shadow:0 8px 18px rgba(0,0,0,.24);animation:streamBlock 7s linear infinite}.stream-two span{animation-duration:8.5s}.stream-three span{animation-duration:10s}.is-paused .stream span,.is-paused .core-orbit,.is-paused .flow-line{animation-play-state:paused}
        .connected-map{position:absolute;inset:0;z-index:3}.connected-node{position:absolute;min-width:82px;padding:9px 10px;border:1px solid rgba(76,166,250,.3);border-radius:9px;background:rgba(5,24,45,.94);font:8px monospace;letter-spacing:.08em;color:#a9d7ff;box-shadow:0 10px 25px rgba(0,0,0,.24)}.connected-node i{display:inline-block;width:5px;height:5px;border-radius:50%;background:#4caeff;box-shadow:0 0 9px #248fff;margin-right:7px}.node-0{left:10%;top:28%}.node-1{right:9%;top:24%}.node-2{left:9%;bottom:25%}.node-3{right:8%;bottom:27%}.node-4{left:18%;top:8%}.node-5{right:17%;bottom:8%}
        .flow-line{position:absolute;z-index:1;height:1px;width:42%;left:29%;top:50%;background:linear-gradient(90deg,transparent,#2e8fe8,transparent);opacity:.35;animation:linePulse 2s ease-in-out infinite}.line-b{transform:rotate(45deg)}.line-c{transform:rotate(-45deg)}.line-d{transform:rotate(90deg)}
        .economy-readout{border-left:1px solid rgba(66,145,228,.17)}.metric{display:flex;justify-content:space-between;align-items:center;padding:13px 0;border-bottom:1px solid rgba(74,144,211,.12)}.metric span,.stack-preview>span{font:8px monospace;letter-spacing:.1em;color:#607e9b}.metric b{font:11px monospace;color:#c8e5ff}.metric b.live{color:#57b5ff;text-shadow:0 0 10px rgba(55,162,255,.4)}.stack-preview{margin:18px 0;padding:12px;border:1px solid rgba(69,146,220,.14);border-radius:10px;background:#041426;min-height:156px}.stack-preview>span{display:block;margin-bottom:10px}.stack-preview div{display:flex;align-items:center;gap:8px;padding:7px 0;border-bottom:1px solid rgba(72,143,211,.09);font:8px monospace;color:#9fc7e8}.stack-preview i{display:grid;place-items:center;width:17px;height:17px;border-radius:5px;background:rgba(48,140,231,.14);color:#55b2ff;font-style:normal}.stack-preview small{font-size:9px;color:#5f7891}.run-button,.reset-button{width:100%;border-radius:9px;padding:11px;font:8px monospace;letter-spacing:.1em;cursor:pointer}.run-button{border:1px solid rgba(79,177,255,.45);background:linear-gradient(180deg,#1689e8,#0c68c1);color:white;box-shadow:0 8px 25px rgba(21,123,222,.2)}.reset-button{margin-top:8px;border:1px solid rgba(72,143,211,.18);background:#06172a;color:#708ba4}
        .builder-foot{display:flex;justify-content:center;align-items:center;gap:13px;margin-top:20px;font:8px monospace;letter-spacing:.12em;color:#607e99}.builder-foot i{width:30px;height:1px;background:linear-gradient(90deg,transparent,#2d78b8,transparent)}
        @keyframes streamBlock{0%{left:-90px;opacity:0}7%{opacity:1}48%{filter:brightness(1)}52%{filter:brightness(1.65);box-shadow:0 0 25px rgba(47,151,255,.35)}93%{opacity:1}100%{left:calc(100% + 20px);opacity:0}}@keyframes orbitSpin{to{transform:rotate(360deg)}}@keyframes linePulse{50%{opacity:.75;filter:brightness(1.5)}}@keyframes statePulse{50%{opacity:.4;transform:scale(.72)}}
        @media(max-width:980px){.builder-shell{grid-template-columns:220px minmax(0,1fr)}.economy-readout{grid-column:1/-1;border-left:0;border-top:1px solid rgba(66,145,228,.17);display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.readout-title,.stack-preview,.run-button,.reset-button{grid-column:1/-1}.stack-preview{min-height:0}}
        @media(max-width:700px){.economy-builder{width:calc(100% - 28px);padding:18px}.builder-head{align-items:flex-start;flex-direction:column}.builder-shell{display:block}.module-rail{border-right:0;border-bottom:1px solid rgba(66,145,228,.17)}.module small{display:none}.economy-stage{min-height:430px}.economy-core{width:145px;height:145px}.core-face{width:92px;height:92px}.connected-node{min-width:auto}.economy-readout{display:block;border-top:1px solid rgba(66,145,228,.17)}.builder-foot{flex-wrap:wrap}.builder-foot i{width:12px}}
        @media(prefers-reduced-motion:reduce){.stream span,.core-orbit,.flow-line,.system-state i{animation:none}}
      `}</style>
    </section>
  );
}
