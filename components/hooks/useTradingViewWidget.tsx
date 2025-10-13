'use client'
import { useEffect, useRef } from "react"

const useTradingViewWidget = (scripUrl: string, config: Record<string,unknown>, height: number = 600) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    if (el.dataset.loaded) return;

    el.innerHTML = `<div class="tradingview-widget-container__widget" style="width: 100%; height: ${height}px;"></div>`;
    const script = document.createElement("script");
    script.src = scripUrl;
    script.async = true;
    script.innerHTML = JSON.stringify(config);

    el.appendChild(script);
    el.dataset.loaded = "true";

    return () => {
      if (el) {
        el.innerHTML = "";
        delete el.dataset.loaded;
      }
    };
  }, [scripUrl, config, height]);

  return containerRef;
}

export default useTradingViewWidget
