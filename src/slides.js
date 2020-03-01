import Introduction from "@/components/slides/Introduction";
import KeyFacts from "@/components/slides/KeyFacts";
import Modules from "@/components/slides/Modules";
import Allocator from "@/components/slides/Allocator";
import Crestron from "@/components/slides/Crestron";
import Infoscreen from "@/components/slides/Infoscreen";
import Demo from "@/components/slides/Demo";
import Outlook from "@/components/slides/Outlook";

export default [
  {
    id: "introduction",
    title: "Einleitung",
    backgroundColor: "#efefef",
    component: Introduction
  },
  {
    id: "keyfacts",
    title: "Key Facts",
    backgroundColor: "#e1e1e1",
    component: KeyFacts
  },
  {
    id: "modules",
    title: "Module",
    backgroundColor: "#ffffff",
    component: Modules
  },
  {
    id: "allocator",
    title: "Allocator",
    backgroundColor: "#efefef",
    component: Allocator
  },
  {
    id: "crestron",
    title: "Crestron",
    backgroundColor: "#dcdcdc",
    component: Crestron
  },
  {
    id: "infoscreen",
    title: "Infoscreen",
    backgroundColor: "#d1d1d1",
    component: Infoscreen
  },
  {
    id: "demo",
    title: "Demo",
    backgroundColor: "#eaeaea",
    component: Demo
  },
  {
    id: "outlook",
    title: "Ausblick",
    backgroundColor: "#dbdbdb",
    component: Outlook
  }
];
