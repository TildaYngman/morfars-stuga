import { useEffect } from "react";
import * as React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "webcomet-faq": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

const FaqWidget: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://app.webcomet.io/webcomet-components/webcomet-components.esm.js";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <webcomet-faq faq-id="869-morfarsstuga"></webcomet-faq>
    </div>
  );
};

export default FaqWidget;
