import React, { useState } from "react";
import { NavigationItem } from "interfaces/common";
import Head from "next/head";
import { HideOnScroll } from "components/common/HideOnScroll";
import { AppBar } from "@mui/material";
import dynamic from "next/dynamic";
import { useInit } from "hooks/useInit";
import classNames from "classnames";
import { inter } from "config/font";
import { StakeLoadingModal } from "components/modal/StakeLoadingModal";
import { UnstakeLoadingModal } from "components/modal/UnstakeLoadingModal";
import { WithdrawLoadingModal } from "components/modal/WithdrawLoadingModal";
import { StakeLoadingSidebar } from "components/modal/StakeLoadingSidebar";
import { UnstakeLoadingSidebar } from "components/modal/UnstakeLoadingSidebar";
import { WithdrawLoadingSidebar } from "components/modal/WithdrawLoadingSidebar";
import { getAppTitle } from "utils/configUtils";

const Navbar = dynamic(() => import("./Navbar"), { ssr: false });

export const MyLayoutContext = React.createContext<{
  navigation: NavigationItem[] | undefined;
  setNavigation: any;
}>({
  navigation: undefined,
  setNavigation: undefined,
});

export const Layout = (props: React.PropsWithChildren) => {
  useInit();

  const [navigation, setNavigation] = useState<NavigationItem[]>([]);

  return (
    <MyLayoutContext.Provider
      value={{
        navigation,
        setNavigation,
      }}
    >
      <div className={classNames("bg-[#101112] text-[#6C6F77]", inter.className)}>
        <Head>
          <title>{getAppTitle()}</title>

          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="index,follow" />
          <meta name="description" content="Stratis Staking Solution" />
          <meta name="twitter:image" content="/splash.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="STRAX LSD APP" />
          <meta name="twitter:description" content="Stratis Staking Solution" />

          <meta property="og:title" content="STRAX LSD APP" />
          <meta property="og:description" content="Stratis Staking Solution" />

          <meta property="og:type" content="website" />
          <meta property="og:image" content="/splash.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="600" />
          <meta property="og:locale" content="en" />

          <meta name="description" content="Stratis Staking Solution" />
        </Head>

        <HideOnScroll>
          <AppBar
            position="fixed"
            color="transparent"
            elevation={0}
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
          >
            <Navbar />
          </AppBar>
        </HideOnScroll>

        <main className="flex flex-col items-center pt-[1.16rem]">
          <div className="w-full">{props.children}</div>
        </main>

        <StakeLoadingModal />
        <UnstakeLoadingModal />
        <WithdrawLoadingModal />

        <div className="fixed right-0 top-[4rem]">
          <StakeLoadingSidebar />
          <UnstakeLoadingSidebar />
          <WithdrawLoadingSidebar />
        </div>
      </div>
    </MyLayoutContext.Provider>
  );
};
