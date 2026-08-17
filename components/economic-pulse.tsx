"use client";

const lanes = [
  { label: "MONEY", delay: "0s", duration: "8s", top: "14%" },
  { label: "MARKETS", delay: "-2.1s", duration: "9.5s", top: "30%" },
  { label: "APPS", delay: "-4.4s", duration: "7.8s", top: "46%" },
  { label: "SETTLEMENT", delay: "-1.2s", duration: "10.2s", top: "62%" },
  { label: "COMMUNITY", delay: "-5.8s", duration: "8.8s", top: "78%" },
];

export function EconomicPulse() {
  return (
    <section className="pulse-wrap" aria-label="Economic OS processing visualization">
      <div className="pulse-head">
        <div>
          <span>ECONOMIC OS / PROCESSING LAYER</span>
          <h2>One system. Constant motion.</h2>
        </div>
        <div className="pulse-status"><i /> SYSTEM ACTIVE</div>
      </div>

      <div className="pulse-stage">
        <div className="pulse-grid" />
        <div className="pulse-core">
          <div className="core-ring ring-a" />
          <div className="core-ring ring-b" />
          <div className="core-box">
            <b>Economic OS</b>
            <small>PROCESSING</small>
          </div>
        </div>

        {lanes.map((lane, index) => (
          <div className="lane" style={{ top: lane.top }} key={lane.label}>
            <div className="lane-line" />
            <div
              className={`moving-block block-${index + 1}`}
              style={{ animationDelay: lane.delay, animationDuration: lane.duration }}
            >
              <span>{lane.label}</span>
              <i />
            </div>
          </div>
        ))}

        <div className="out-node n1">VALUE</div>
        <div className="out-node n2">LIQUIDITY</div>
        <div className="out-node n3">SOFTWARE</div>
        <div className="out-node n4">INTERNET</div>
      </div>

      <div className="pulse-foot">
        <span>Money</span><i />
        <span>Markets</span><i />
        <span>Software</span><i />
        <span>Internet</span>
      </div>

      <style jsx>{`
        .pulse-wrap{width:min(1280px,calc(100% - 48px));margin:10px auto 70px;padding:30px;border:1px solid rgba(80,160,255,.26);border-radius:18px;background:linear-gradient(180deg,rgba(5,18,35,.96),rgba(3,12,25,.98));box-shadow:0 30px 90px rgba(0,0,0,.28);overflow:hidden}
        .pulse-head{display:flex;justify-content:space-between;gap:24px;align-items:flex-end;margin-bottom:24px}
        .pulse-head span{font:10px monospace;letter-spacing:.12em;color:#55adff}
        .pulse-head h2{font-size:clamp(32px,4vw,54px);line-height:1;margin:12px 0 0;letter-spacing:-.04em}
        .pulse-status{font:10px monospace;letter-spacing:.08em;color:#9fd2ff;display:flex;align-items:center;gap:9px;padding:10px 13px;border:1px solid rgba(80,160,255,.22);border-radius:999px;background:rgba(4,18,35,.75);white-space:nowrap}
        .pulse-status i{width:7px;height:7px;border-radius:50%;background:#54aaff;box-shadow:0 0 14px #2d8dff;animation:statusPulse 1.6s ease-in-out infinite}
        .pulse-stage{height:430px;position:relative;border:1px solid rgba(65,139,221,.18);border-radius:14px;overflow:hidden;background:radial-gradient(circle at 50% 50%,rgba(23,112,232,.15),transparent 30%),#031020}
        .pulse-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(74,146,220,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(74,146,220,.07) 1px,transparent 1px);background-size:38px 38px;mask-image:linear-gradient(90deg,transparent,black 16%,black 84%,transparent)}
        .pulse-core{position:absolute;left:50%;top:50%;width:170px;height:170px;transform:translate(-50%,-50%);display:grid;place-items:center;z-index:4}
        .core-ring{position:absolute;border:1px solid rgba(87,169,255,.35);border-radius:28px;inset:0;animation:coreSpin 14s linear infinite}
        .ring-b{inset:18px;border-style:dashed;animation-direction:reverse;animation-duration:10s}
        .core-box{width:108px;height:108px;border-radius:20px;border:1px solid rgba(120,196,255,.5);background:linear-gradient(145deg,#0a2b51,#061426);display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;box-shadow:0 0 55px rgba(25,119,255,.28),inset 0 1px rgba(255,255,255,.08)}
        .core-box b{font-size:15px}.core-box small{margin-top:8px;font:8px monospace;letter-spacing:.14em;color:#5cb6ff}
        .lane{position:absolute;left:4%;right:4%;height:48px;transform:translateY(-50%)}
        .lane-line{position:absolute;left:0;right:0;top:50%;height:1px;background:linear-gradient(90deg,transparent,rgba(64,143,229,.22) 12%,rgba(64,143,229,.34) 44%,rgba(64,143,229,.14) 56%,rgba(64,143,229,.24) 88%,transparent)}
        .moving-block{position:absolute;top:5px;left:-110px;width:94px;height:38px;border-radius:9px;border:1px solid rgba(105,185,255,.38);background:linear-gradient(145deg,rgba(11,37,68,.98),rgba(5,20,38,.98));display:flex;align-items:center;justify-content:center;gap:8px;box-shadow:0 8px 22px rgba(0,0,0,.3);animation:blockFlow linear infinite;z-index:3}
        .moving-block:before{content:"";position:absolute;inset:5px;border:1px solid rgba(76,156,236,.12);border-radius:6px}
        .moving-block span{font:9px monospace;letter-spacing:.08em;color:#b9dcff}.moving-block i{width:5px;height:5px;border-radius:50%;background:#3c9fff;box-shadow:0 0 9px #2790ff}
        .out-node{position:absolute;right:4%;font:8px monospace;letter-spacing:.09em;color:#7394b5;border:1px solid rgba(70,145,222,.16);padding:7px 9px;border-radius:7px;background:#061426}.n1{top:9%}.n2{top:34%}.n3{top:61%}.n4{top:84%}
        .pulse-foot{display:flex;justify-content:center;align-items:center;gap:14px;margin-top:20px;color:#7f97ad;font-size:11px}.pulse-foot i{width:26px;height:1px;background:rgba(84,157,230,.25)}
        @keyframes blockFlow{0%{left:-110px;opacity:0;transform:scale(.94)}8%{opacity:1}42%{left:calc(50% - 47px);transform:scale(1)}50%{left:calc(50% - 47px);box-shadow:0 0 35px rgba(37,132,255,.55);transform:scale(.86)}58%{left:calc(50% - 47px);transform:scale(1)}92%{opacity:1}100%{left:calc(100% + 16px);opacity:0;transform:scale(.94)}}
        @keyframes coreSpin{to{transform:rotate(360deg)}}
        @keyframes statusPulse{50%{opacity:.4;transform:scale(.75)}}
        @media(max-width:760px){.pulse-wrap{width:calc(100% - 28px);padding:18px}.pulse-head{align-items:flex-start;flex-direction:column}.pulse-stage{height:390px}.pulse-core{width:130px;height:130px}.core-box{width:86px;height:86px}.moving-block{width:78px;height:34px}.out-node{display:none}.pulse-foot{gap:8px;flex-wrap:wrap}.pulse-foot i{width:12px}}
        @media(prefers-reduced-motion:reduce){.moving-block,.core-ring,.pulse-status i{animation:none}.moving-block{left:15%}}
      `}</style>
    </section>
  );
}
