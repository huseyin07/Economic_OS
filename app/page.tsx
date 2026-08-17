import { About, FAQ, Hero } from "../components/sections";
import { EconomicPulse } from "../components/economic-pulse";
import { Footer, Header } from "../components/shell";
import { SystemProgress } from "../components/system-progress";

export default function Home() {
  return <><Header /><SystemProgress /><main><Hero /><About /><EconomicPulse /><FAQ /></main><Footer /></>;
}
