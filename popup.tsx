import { useEffect, useState } from "react";
import { Container, ErrorMessage, ServicesList } from "./popup.styles";

import "./popup.css";
import type { IServiceItem } from "@shared/interfaces";
import { ServiceItem } from "@components/service-item/service-item";

type Tab = chrome.tabs.Tab;

const services: IServiceItem[] = [
  {
    name: "cx",
    replaceTarget: ".ru",
    replaceValue: ".cx",
    stylesFile: "cx-style.css",
    css: ".page{max-width:75vw!important}",
  },
  {
    name: "gg",
    replaceTarget: "kinopoisk.ru",
    replaceValue: "ggpoisk.ru",
    stylesFile: "gg-style.css",
    css: "body{display:flex;align-items:center;margin:0;padding:0;border:0;width:100%;height:100%;overflow:hidden;background-color:#2a3440}@media screen and (min-width:901px){.wrapper{width:100%;height:calc(100% - 200px)!important}}",
  },
];

function IndexPopup() {
  const [activeTab, setActiveTab] = useState<Tab>();
  const [isMoviePage, setIsMoviePage] = useState<boolean>();

  const getActiveTab = async (): Promise<void> => {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });

    if (tab) {
      setActiveTab(tab);
    }
  };

  const validateTabUrl = (): void => {
    if (!activeTab) return;

    setIsMoviePage(
      activeTab?.url?.includes("kinopoisk.ru/film/") ||
        activeTab.url.includes("kinopoisk.ru/series/"),
    );
  };

  useEffect(validateTabUrl, [activeTab]);
  useEffect(() => {
    getActiveTab();
  }, []);

  return (
    <Container $isInvalid={!isMoviePage}>
      {!isMoviePage && <ErrorMessage>not movie page</ErrorMessage>}
      <ServicesList>
        {services.map((item) => (
          <ServiceItem
            activeTab={activeTab}
            item={item}
            key={item.name}
            isMoviePage={isMoviePage}
          />
        ))}
      </ServicesList>
    </Container>
  );
}

export default IndexPopup;
