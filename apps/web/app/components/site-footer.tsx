// 网站说明和链接
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer id="about" className="site-footer">
      <div className="footer-inner frame">
        <div className="footer-intro">
          <Link className="footer-brand" href="/">
            zhaoxinkun.blog
          </Link>
          <p>
            一个记录代码、思考与日常的个人博客。
            <br/>
            分享 Web 开发、工程实践与学习过程。
          </p>
        </div>
        <div className="footer-links">
          <h2>导航</h2>
          <Link href="/">首页</Link>
          <a href="#content">探索</a>
          <a href="#about">关于</a>
        </div>
        <div className="footer-links">
          <h2>技术</h2>
          <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
            Next.js ↗
          </a>
          <a href="https://react.dev/" target="_blank" rel="noreferrer">
            React ↗
          </a>
          <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
            TypeScript ↗
          </a>
        </div>
        <div className="footer-bottom">
          <p>© 2026 zhaoxinkun</p>
          <span>Built with Next.js</span>
          <a href="#main">回到顶部 ↑</a>
        </div>
      </div>
    </footer>
  );
}
