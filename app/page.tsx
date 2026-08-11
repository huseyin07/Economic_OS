import { Architecture, BootSequence, Culture, Hero, Lore, Status, Token, VisionCards } from "../components/sections";
import { CommunityLiveActions, LiveActions, TokenLiveActions } from "../components/live-actions";
import { ArcVisionVisual, HeroCoinVisual, TokenCoinVisual } from "../components/project-visuals";
import { OfficialSignals } from "../components/signals";
import { Footer, Header } from "../components/shell";

export default function Home() {
  return <><Header /><main><Hero /><HeroCoinVisual /><LiveActions /><BootSequence /><VisionCards /><Architecture /><Lore /><ArcVisionVisual /><OfficialSignals /><Status /><Token /><TokenLiveActions /><TokenCoinVisual /><Culture /><CommunityLiveActions /></main><Footer /></>;
}
