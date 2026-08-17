import { About, Community, FAQ, Hero, HowToBuy, Token, Why } from "../components/sections";
import { EconomicPulse } from "../components/economic-pulse";
import { Footer, Header } from "../components/shell";

export default function Home() {
  return <><Header /><main><Hero /><EconomicPulse /><About /><Token /><Why /><HowToBuy /><Community /><FAQ /></main><Footer /></>;
}
