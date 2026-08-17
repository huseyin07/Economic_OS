import { About, FAQ, Hero } from "../components/sections";
import { EconomicPulse } from "../components/economic-pulse";
import { Footer, Header } from "../components/shell";
import { SystemProgress } from "../components/system-progress";
import { SystemExperience } from "../components/system-experience";

export default function Home() {
  return <><Header /><SystemProgress /><SystemExperience /><main><Hero /><About /><EconomicPulse /><FAQ /></main><Footer /></>;
}
