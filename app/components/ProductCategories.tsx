export interface ProductCategory {
  title: string;
  href: string;
  subItems?: { title: string; href: string; subItems?: { title: string; href: string }[] }[];
}

export const productCategories: ProductCategory[] = [
  {
    title: "Industrial PoE Switch",
    href: "/products/industrial-poe-switch",
    subItems: [
      { title: "10G uplink 24-port L3 managed industrial PoE - NAV-I-L3-P24-021", href: "/products/industrial-poe-switch/nav-i-l3-p24-021" },
      { title: "10G uplink 28-port L2 managed industrial PoE switch - NAV-I-L0-P10-037", href: "/products/industrial-poe-switch/nav-i-l0-p10-037" },
      { title: "Gigabit 16-port L2 managed industrial PoE switch - NAV-I-L2-P28-090", href: "/products/industrial-poe-switch/nav-i-l2-p28-090" },
      { title: "Gigabit 10-port L2 managed industrial bt PoE switch - NAV-I-L2-P16-091", href: "/products/industrial-poe-switch/nav-i-l2-p16-091" },
      { title: "Gigabit 8-port L2 managed industrial PoE switch - NAV-I-L2-P10-092", href: "/products/industrial-poe-switch/nav-i-l2-p10-092" },
    ],
  },
  {
    title: "Industrial Ethernet Switch",
    href: "/products/industrial-ethernet-switch",
    subItems: [
      { title: "Gigabit 24-port L2 managed industrial Ethernet switch NAV-I-E-L2-P24-066", href: "/products/industrial-ethernet-switch/nav-i-e-l2-p24-066" },
      { title: "Gigabit 10-port L2 managed industrial Ethernet switch NAV-I-E-L2-P10-084", href: "/products/industrial-ethernet-switch/nav-i-e-l2-p10-084" },
      { title: "Gigabit 8-port L2 managed industrial Ethernet switch NAV-I-E-L2-P8-085", href: "/products/industrial-ethernet-switch/nav-i-e-l2-p8-085" },
    ],
  },
  {
    title: "PoE Switch",
    href: "/products/poe-switch",
    subItems: [
      { title: "Gigabit 18-port L2 managed PoE switch NAV-P-L2-P18-003", href: "/products/poe-switch/nav-p-l2-p18-003" },
      { title: "Gigabit 26-port L2 managed PoE switch NAV-P-L2-P26-004", href: "/products/poe-switch/nav-p-l2-p26-004" },
      { title: "Gigabit 28-port L2 managed PoE switch NAV-P-L2-P28-012", href: "/products/poe-switch/nav-p-l2-p28-012" },
      { title: "Gigabit 28-port Easy managed PoE switch NAV-P-L0-P28-029", href: "/products/poe-switch/nav-p-l0-p28-029" },
      { title: "Gigabit 27-port PoE switch NAV-P-L0-P27-034", href: "/products/poe-switch/nav-p-l0-p27-034" },
      { title: "10G uplink 52-port L2 managed PoE switch NAV-P-L2-P52-052", href: "/products/poe-switch/nav-p-l2-p52-052" },
      { title: "10G uplink 36-port L2 managed PoE switch NAV-P-L2-P36-072", href: "/products/poe-switch/nav-p-l2-p36-072" },
      { title: "Gigabit 8-port PoE switch NAV-P-L0-P8-085", href: "/products/poe-switch/nav-p-l0-p8-085" },
      { title: "Gigabit uplink 12-port PoE switch NAV-P-L0-P12-087", href: "/products/poe-switch/nav-p-l0-p12-087" },
      { title: "Gigabit uplink 18-port L2 managed PoE switch NAV-P-L2-P18-091", href: "/products/poe-switch/nav-p-l2-p18-091" },
    ],
  },
  {
    title: "Aggregation Core switch",
    href: "/products/aggregation-core-switch",
    subItems: [
      { title: "2.5G 30-port L2 managed Ethernet switch NAV-E-L2-P26-003", href: "/products/aggregation-core-switch/nav-e-l2-p26-003" },
      { title: "10G 54-port L3 managed core routing switch NAV-E-L3-P30-005", href: "/products/aggregation-core-switch/nav-e-l3-p30-005" },
      { title: "10G uplink 54-port L3 managed core switch NAV-E-L3-P54-008", href: "/products/aggregation-core-switch/nav-e-l3-p54-008" },
      { title: "10G uplink 28-port L3 managed core switch NAV-E-L3-P54-010", href: "/products/aggregation-core-switch/nav-e-l3-p54-010" },
    ],
  },
  {
    title: "Wireless bridge AP",
    href: "/products/wireless-bridge-ap",
    subItems: [
      { title: "2.4G 300M wireless bridge NAV-AP-002", href: "/products/wireless-bridge-ap/nav-ap-002" },
      { title: "3000M WiFi6 dual-band 2.5G ceiling wireless NAV-AP-003", href: "/products/wireless-bridge-ap/nav-ap-003" },
    ],
  },
];