import React, { useEffect, useMemo, useState } from 'react';

type LegacyNewsletterFrameProps = {
  title: string;
  rawHtml: string;
};

const extractBody = (rawHtml: string) => {
  const withoutScripts = rawHtml
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, '');
  const bodyMatch = withoutScripts.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  return (bodyMatch ? bodyMatch[1] : withoutScripts).trim();
};

const buildSrcDoc = (title: string, rawHtml: string) => {
  const bodyContent = extractBody(rawHtml);

  return `<!doctype html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <style>
      :root {
        color-scheme: light;
      }

      html, body {
        margin: 0;
        padding: 0;
        background: transparent;
      }

      body {
        color: #4d413a;
        font-family: Georgia, "Times New Roman", serif;
        line-height: 1.8;
        padding: 18px 10px 28px;
      }

      #bodyTable,
      #bodyCell,
      .templateContainer,
      table {
        max-width: 100% !important;
      }

      #bodyTable,
      #bodyCell {
        background: transparent !important;
        height: auto !important;
        width: 100% !important;
      }

      #bodyCell {
        padding: 0 !important;
      }

      .templateContainer {
        width: min(100%, 920px) !important;
        margin: 0 auto !important;
      }

      img {
        border-radius: 18px !important;
        max-width: 100% !important;
        height: auto !important;
        box-shadow: 0 20px 40px rgba(146, 92, 79, 0.12);
      }

      h1, h2, h3, h4, h5, h6 {
        color: #b35d4c !important;
        font-family: Georgia, "Times New Roman", serif !important;
        letter-spacing: 0.01em !important;
        line-height: 1.28 !important;
        margin-top: 1.35em !important;
      }

      h1:first-child,
      h2:first-child,
      h3:first-child {
        margin-top: 0 !important;
      }

      p,
      li,
      td,
      blockquote,
      .mcnTextContent,
      .mcnTextContent p {
        color: #4d413a !important;
        font-size: 17px !important;
        line-height: 1.9 !important;
      }

      a {
        color: #b35d4c !important;
        font-weight: 600 !important;
      }

      table {
        border-collapse: separate !important;
        border-spacing: 0 !important;
      }

      .mcnTextBlock,
      .mcnImageBlock,
      .mcnDividerBlock,
      .mcnButtonBlock {
        background: rgba(255, 252, 249, 0.94) !important;
        border: 1px solid rgba(179, 93, 76, 0.14) !important;
        border-radius: 22px !important;
        box-shadow: 0 18px 34px rgba(146, 92, 79, 0.08) !important;
        margin-bottom: 18px !important;
        overflow: hidden !important;
      }

      .mcnButtonContent a {
        display: inline-block !important;
        border-radius: 999px !important;
        background: #c8715f !important;
        color: #fff !important;
        padding: 12px 22px !important;
        text-decoration: none !important;
      }

      .mcnImageGroupContent,
      .mcnImageContent,
      .mcnTextContent,
      .mcnButtonContent {
        padding: 20px 24px !important;
      }

      .mcnDividerBlockInner {
        padding: 8px 0 !important;
      }

      @media (max-width: 700px) {
        body {
          padding: 10px 4px 22px;
        }

        p,
        li,
        td,
        blockquote,
        .mcnTextContent,
        .mcnTextContent p {
          font-size: 15px !important;
          line-height: 1.75 !important;
        }

        .mcnImageGroupContent,
        .mcnImageContent,
        .mcnTextContent,
        .mcnButtonContent {
          padding: 16px 16px !important;
        }
      }
    </style>
  </head>
  <body>
    ${bodyContent}
    <script>
      (function () {
        function postHeight() {
          var height = Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight
          );
          parent.postMessage({ type: 'legacy-newsletter-height', height: height }, '*');
        }
        window.addEventListener('load', function () {
          postHeight();
          setTimeout(postHeight, 120);
        });
        window.addEventListener('resize', postHeight);
        if (window.ResizeObserver) {
          new ResizeObserver(postHeight).observe(document.body);
        }
      })();
    </script>
  </body>
</html>`;
};

const LegacyNewsletterFrame: React.FC<LegacyNewsletterFrameProps> = ({ title, rawHtml }) => {
  const [height, setHeight] = useState(1800);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (!event.data || event.data.type !== 'legacy-newsletter-height') {
        return;
      }

      const nextHeight = Number(event.data.height);

      if (Number.isFinite(nextHeight) && nextHeight > 0) {
        setHeight(nextHeight + 8);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const srcDoc = useMemo(() => buildSrcDoc(title, rawHtml), [rawHtml, title]);

  return (
    <iframe
      title={title}
      srcDoc={srcDoc}
      className="w-full rounded-[1.8rem] border-0 bg-transparent"
      style={{ height: `${height}px` }}
    />
  );
};

export default LegacyNewsletterFrame;
