"use client";

import SyntaxHighlighter from "react-syntax-highlighter";
import { ocean } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import Typography from "../ui/typography";
import { Badge } from "../ui/badge";

interface Props {
  input: string;
  className?: string;
}

const Maths = ({ input, className }: Props) => {
  return (
    <Markdown
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeKatex]}
      className={className}
      components={{
        code(props) {
          const { children, className, ...rest } = props;
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <SyntaxHighlighter
              {...rest}
              PreTag="div"
              language={match[1]}
              style={ocean}
              customStyle={{
                marginTop: "1rem",
                padding: "1rem",
                borderRadius: "calc(var(--radius) - 2px",
              }}
            >
              {children}
            </SyntaxHighlighter>
          ) : (
            <code {...rest} className={className}>
              <Badge variant="outline">{children}</Badge>
            </code>
          );
        },
        h1(props) {
          return (
            <Typography variant="h1" className="mb-7">
              {props.children}
            </Typography>
          );
        },
        h2(props) {
          return <Typography variant="h2">{props.children}</Typography>;
        },
        h3(props) {
          return (
            <Typography variant="h3" className="mt-9 mb-2">
              {props.children}
            </Typography>
          );
        },
        h4(props) {
          return (
            <Typography variant="h4" className="mb-2 mt-12">
              {props.children}
            </Typography>
          );
        },
        h5(props) {
          return (
            <Typography variant="h5" className="my-2">
              {props.children}
            </Typography>
          );
        },
        p(props) {
          return <Typography variant="p">{props.children}</Typography>;
        },
        li(props) {
          return <li {...props} className="ml-4 list-disc mb-5" />;
        },
      }}
    >
      {input}
    </Markdown>
  );
};

export default Maths;
