export interface ProductCategory {
  title: string;
  href: string;
  subItems?: { title: string; href: string }[];
}

export const productCategories: ProductCategory[] = [
  {
    title: "Featured",
    href: "/products/featured",
  },
  {
    title: "Microsoft Teams Rooms",
    href: "/products/microsoft-teams-rooms",
    subItems: [
      { title: "XBar Series", href: "/products/microsoft-teams-rooms/xbar-series" },
      { title: "XBoard for Microsoft Teams Rooms", href: "/products/microsoft-teams-rooms/xboard" },
      { title: "XCore Kit Pro", href: "/products/microsoft-teams-rooms/xcore-kit-pro" },
      { title: "XCore Kit", href: "/products/microsoft-teams-rooms/xcore-kit" },
      { title: "XT10-VB Kit", href: "/products/microsoft-teams-rooms/xt10-vb-kit" },
      { title: "XT10-WS Kit", href: "/products/microsoft-teams-rooms/xt10-ws-kit" },
      { title: "XT20-VB kit", href: "/products/microsoft-teams-rooms/xt20-vb-kit" },
      { title: "XT20-PS Kit", href: "/products/microsoft-teams-rooms/xt20-ps-kit" },
      { title: "UC S07", href: "/products/microsoft-teams-rooms/uc-s07" },
      { title: "UC W31", href: "/products/microsoft-teams-rooms/uc-w31" },
      { title: "UC BM35", href: "/products/microsoft-teams-rooms/uc-bm35" },
      { title: "UC P30", href: "/products/microsoft-teams-rooms/uc-p30" },
      { title: "UC BM45", href: "/products/microsoft-teams-rooms/uc-bm45" },
      { title: "Stand For Express Install", href: "/products/microsoft-teams-rooms/stand-for-express-install" },
    ],
  },
  {
    title: "Interactive Flat Panel",
    href: "/products/interactive-flat-panel",
    subItems: [
      { title: "XBoard V7 Series", href: "/products/interactive-flat-panel/xboard-v7" },
      { title: "V6 Classic Series", href: "/products/interactive-flat-panel/v6-classic" },
      { title: "V6 ViewPro Series", href: "/products/interactive-flat-panel/v6-viewpro" },
      { title: "V6 Transcend Series", href: "/products/interactive-flat-panel/v6-transcend" },
      { title: "Smart Blackboard", href: "/products/interactive-flat-panel/smart-blackboard" },
      { title: "U4 Series", href: "/products/interactive-flat-panel/u4" },
      { title: "U3 Series", href: "/products/interactive-flat-panel/u3" },
      { title: "E3 Series", href: "/products/interactive-flat-panel/e3" },
      { title: "E2 Series", href: "/products/interactive-flat-panel/e2" },
    ],
  },
  {
    title: "Commercial Display",
    href: "/products/commercial-display",
    subItems: [
      { title: "CMA Series", href: "/products/commercial-display/cma-series" },
      { title: "UW Series", href: "/products/commercial-display/uw-series" },
      { title: "CMA-T Series", href: "/products/commercial-display/cma-t-series" },
      { title: "CMD Series", href: "/products/commercial-display/cmd-series" },
    ],
  },
  {
    title: "LED Display",
    href: "/products/led-display",
    subItems: [
      { title: "All-in-one LED", href: "/products/led-display/all-in-one-led" },
      { title: "Indoor LED Wall", href: "/products/led-display/indoor-led-wall" },
      { title: "Outdoor LED Wall", href: "/products/led-display/outdoor-led-wall" },
      { title: "LED Configurator", href: "/products/led-display/led-configurator" },
    ],
  },
  {
    title: "Unified Communication",
    href: "/products/unified-communication",
    subItems: [
      { title: "XBar Series", href: "/products/unified-communication/xbar-series" },
      { title: "USB Camera", href: "/products/unified-communication/usb-camera" },
      { title: "Conference Bar", href: "/products/unified-communication/conference-bar" },
      { title: "PTZ Camera", href: "/products/unified-communication/ptz-camera" },
      { title: "Speakerphone", href: "/products/unified-communication/speakerphone" },
    ],
  },
  {
    title: "Capture System",
    href: "/products/capture-system",
    subItems: [
      { title: "Capture System V3", href: "/products/capture-system/capture-system-v3" },
      { title: "Portable Capture System", href: "/products/capture-system/portable-capture-system" },
      { title: "Capture System", href: "/products/capture-system/capture-system" },
    ],
  },
  {
    title: "Accessories",
    href: "/products/accessories",
    subItems: [
      { title: "Smart Lectern", href: "/products/accessories/smart-lectern" },
      { title: "Stylus", href: "/products/accessories/stylus" },
      { title: "Wireless Box WB05", href: "/products/accessories/wireless-box-wb05" },
      { title: "Wireless Dongle WT13", href: "/products/accessories/wireless-dongle-wt13" },
    ],
  },
  {
    title: "Software",
    href: "/products/software",
    subItems: [
      { title: "MAXHUB OS", href: "/products/software/maxhub-os" },
      { title: "MAXHUB Share", href: "/products/software/maxhub-share" },
      { title: "MAXHUB Whiteboard", href: "/products/software/maxhub-whiteboard" },
      { title: "MAXHUB EDU OS", href: "/products/software/maxhub-edu-os" },
      { title: "MAXHUB Class", href: "/products/software/maxhub-class" },
      { title: "MAXHUB EasiClass", href: "/products/software/maxhub-easiclass" },
      { title: "MAXHUB Connect", href: "/products/software/maxhub-connect" },
      { title: "MAXHUB Pivot", href: "/products/software/maxhub-pivot" },
    ],
  },
];