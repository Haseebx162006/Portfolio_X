"use client";

import { useEffect } from "react";

const HOST_ID = "brand-sprite-host";

export function BrandSprite() {
  useEffect(() => {
    if (document.getElementById(HOST_ID)) return;

    const controller = new AbortController();
    const scheduleIdle =
      typeof requestIdleCallback === "function"
        ? requestIdleCallback
        : (cb: () => void) => window.setTimeout(cb, 200);
    const cancelIdle =
      typeof cancelIdleCallback === "function"
        ? cancelIdleCallback
        : window.clearTimeout;

    const handle = scheduleIdle(() => {
      fetch("/brand-sprite.svg", { signal: controller.signal })
        .then((res) => (res.ok ? res.text() : Promise.reject(res.status)))
        .then((svgText) => {
          if (document.getElementById(HOST_ID)) return;
          const host = document.createElement("div");
          host.id = HOST_ID;
          host.setAttribute("aria-hidden", "true");
          host.style.cssText =
            "position:absolute;width:0;height:0;overflow:hidden";
          host.innerHTML = svgText;
          document.body.prepend(host);
        })
        .catch(() => {});
    });

    return () => {
      cancelIdle(handle);
      controller.abort();
    };
  }, []);

  return null;
}

export function BrandIcon({
  name,
  className = "h-3.5 w-3.5 fill-current",
}: {
  name: string;
  className?: string;
}) {
  const iconId = `brand-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <use href={`#${iconId}`} />
    </svg>
  );
}
