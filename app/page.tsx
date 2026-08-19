import { About, FAQ } from "../components/sections";
import { Hero } from "../components/hero-fast";
import { EconomicPulse } from "../components/economic-pulse";
import { Footer, Header } from "../components/shell";
import { SystemProgress } from "../components/system-progress";
import { SystemExperience } from "../components/system-experience";
import "./build-controls.css";

export default function Home() {
  return <><Header /><SystemProgress /><SystemExperience /><main><Hero /><About /><div id="build"><EconomicPulse /></div><FAQ /></main><Footer /></>;
}