// 导航栏
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="wordmark" href="/" aria-label="zhaoxinkun Blog 首页">
          Z<span className="brand-divider">/</span>
          <span>
            zhaoxinkun<span className="brand-suffix">.blog</span>
          </span>
        </Link>
        <nav className="site-nav" aria-label="主导航">
          <Link href="/">首页</Link>
          <a href="#content">探索</a>
          <a href="#about">关于</a>
        </nav>
        <a className="header-read" href="#content">
          开始阅读 <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}
