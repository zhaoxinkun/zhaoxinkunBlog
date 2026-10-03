// ContentGrid
import Image from "next/image";

const topics = [
  { name: "React", detail: "组件、状态与交互，探索现代前端开发的基础。", mark: "{ component }" },
  { name: "TypeScript", detail: "用类型表达意图，让代码更清晰、更可靠。", mark: "TS" },
  {
    name: "工程实践",
    detail: "从开发流程到项目组织，记录实际问题与解决方法。",
    mark: "~/workspace",
  },
  { name: "学习笔记", detail: "把问题、思考和答案写下来，在实践中持续积累。", mark: "01 / NOTES" },
];

export function ContentGrid() {
  return (
    <section id="content" className="content-section frame" aria-labelledby="content-title">
      <div className="section-heading">
        <h2 id="content-title">在这里，探索什么？</h2>
        <p>关于构建 Web 的技术，以及构建过程中的思考。</p>
      </div>
      <div className="content-grid">
        <article className="topic topic-featured">
          <div className="topic-art next-art">
            <Image src="/next.svg" alt="Next.js" width={180} height={38} />
          </div>
          <h3>Next.js</h3>
          <p>从一个页面到完整应用，探索路由、渲染与内容组织。</p>
        </article>
        {topics.map((topic) => (
          <article className="topic" key={topic.name}>
            <div className="topic-mark" aria-hidden="true">
              {topic.mark}
            </div>
            <h3>{topic.name}</h3>
            <p>{topic.detail}</p>
          </article>
        ))}
        <article className="topic topic-banner">
          <div>
            <span className="eyebrow">BUILD · LEARN · SHARE</span>
            <h3>保持好奇，持续构建。</h3>
            <p>让每一次探索，都留下可以回访的记录。</p>
          </div>
          <span className="banner-index" aria-hidden="true">
            &lt;/&gt;
          </span>
        </article>
      </div>
    </section>
  );
}
