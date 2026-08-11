import { Architecture, BootSequence, Culture, Hero, Lore, Status, Token, VisionCards } from "../components/sections";
import { OfficialSignals } from "../components/signals";
import { Footer, Header } from "../components/shell";

export default function Home() {
  return <><Header /><main><Hero /><BootSequence /><VisionCards /><Architecture /><Lore /><OfficialSignals /><Status /><Token /><Culture /></main><Footer /></>;
}
