import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import remarkBreaks from "remark-breaks";
import "katex/dist/katex.min.css";
// import rehypeMathjax from "rehype-mathjax";

export default function MD({ text }: { text: string }) {
  return (
    <div className="prose w-full markdown">
      <Markdown
        components={{
          p: ({ children }) => <p className="text-justify w-full">{children}</p>,
        }}
        remarkPlugins={[remarkGfm, remarkMath, remarkBreaks]}
        rehypePlugins={[rehypeKatex]}
      >
        {text}
      </Markdown>
    </div>
  );
}
