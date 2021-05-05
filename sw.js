if (!self.define) {
  const e = (e) => {
      "require" !== e && (e += ".js");
      let s = Promise.resolve();
      return (
        r[e] ||
          (s = new Promise(async (s) => {
            if ("document" in self) {
              const r = document.createElement("script");
              (r.src = e), document.head.appendChild(r), (r.onload = s);
            } else importScripts(e), s();
          })),
        s.then(() => {
          if (!r[e]) throw new Error(`Module ${e} didn’t register its module`);
          return r[e];
        })
      );
    },
    s = (s, r) => {
      Promise.all(s.map(e)).then((e) => r(1 === e.length ? e[0] : e));
    },
    r = { require: Promise.resolve(s) };
  self.define = (s, i, n) => {
    r[s] ||
      (r[s] = Promise.resolve().then(() => {
        let r = {};
        const c = { uri: location.origin + s.slice(1) };
        return Promise.all(
          i.map((s) => {
            switch (s) {
              case "exports":
                return r;
              case "module":
                return c;
              default:
                return e(s);
            }
          })
        ).then((e) => {
          const s = n(...e);
          return r.default || (r.default = s), r;
        });
      }));
  };
}
define("./sw.js", ["./workbox-39c7d1fe"], function (e) {
  "use strict";
  self.addEventListener("message", (e) => {
    e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
  }),
    e.precacheAndRoute(
      [
        {
          url: "asset-manifest.json",
          revision: "efe34aa3f261211796970700b58655f7",
        },
        { url: "index.html", revision: "cf8140050a892d404b654215cb00f0ab" },
        { url: "manifest.json", revision: "64228478438119f02b0b4cf9b9b9f6a3" },
        {
          url: "static/css/2.00850458.chunk.css",
          revision: "8651ceaaf0ee128a14055f429e96b693",
        },
        {
          url: "static/js/2.a2a9770f.chunk.js",
          revision: "a12f67dc5971f12f6c36faf53691a697",
        },
        {
          url: "static/js/main.6550fe21.chunk.js",
          revision: "8b6f04de38a1f8c956c3818a009f93f0",
        },
        {
          url: "static/js/runtime-main.a64b65a9.js",
          revision: "f9da2ea744657cc0f73120dc8436dcd8",
        },
        { url: "sw.js", revision: "593fa443ecd608cfe59154d6bb1d9176" },
        {
          url: "workbox-39c7d1fe.js",
          revision: "d61022f9950d7ba156c59af5c2ee0a4c",
        },
      ],
      {}
    ),
    e.registerRoute(
      /\.(?:png|jpg|jpeg|svg)$/,
      new e.CacheFirst({
        cacheName: "assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 10, purgeOnQuotaError: !0 }),
        ],
      }),
      "GET"
    );
});
//# sourceMappingURL=sw.js.map
