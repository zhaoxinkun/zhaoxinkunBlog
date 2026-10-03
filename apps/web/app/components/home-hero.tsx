// 首屏标题与按钮
export function HomeHero() {
  return (
    <section className="hero frame" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="hero-heading">
        <h1 id="hero-title">zhaoxinkun Blog</h1>
        <p className="hero-subtitle">代码、思考与日常。</p>
      </div>
      <p className="hero-description">
        记录从想法到实现的过程，分享路上的发现。
        <br />
        关于 <strong>Web 开发</strong>、工程实践与持续学习。
      </p>
      <div className="hero-actions">
        <a className="button primary" href="#content">
          开始探索
        </a>
        <a className="button secondary" href="#about">
          关于博客
        </a>
      </div>
      <p className="hero-caption">一行代码，一个想法，一点进步。</p>
    </section>
  );
}
