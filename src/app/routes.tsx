import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { PracticeAreasPage } from "./components/PracticeAreasPage";
import { AttorneysPage } from "./components/AttorneysPage";
import { ContactPage } from "./components/ContactPage";
import { ResultsPage } from "./components/ResultsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "practice-areas", Component: PracticeAreasPage },
      { path: "attorneys", Component: AttorneysPage },
      { path: "results", Component: ResultsPage },
      { path: "contact", Component: ContactPage },
      { path: "*", Component: HomePage },
    ],
  },
]);
