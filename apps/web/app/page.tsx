import { SiteHeader } from "./components/site-header";
import { HomeHero } from "./components/home-hero";
import { ContentGrid } from "./components/content-grid";
import { SiteFooter } from "./components/site-footer";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        跳转到正文
      </a>
      <SiteHeader />
      <main id="main">
        <HomeHero />
        <ContentGrid />
      </main>
      <SiteFooter />
    </>
  );
}
