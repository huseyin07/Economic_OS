import { About, Community, FAQ, Hero, HowToBuy } from "../components/sections";
import { EconomicPulse } from "../components/economic-pulse";
import { Footer, Header } from "../components/shell";

export default function Home() {
  return <><Header /><main><Hero /><EconomicPulse /><About /><HowToBuy /><Community /><FAQ /></main><Footer /></>;
}
