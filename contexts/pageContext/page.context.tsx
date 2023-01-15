"use client";

import React, { createContext, useState } from "react";

interface PageContext {
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

export const PageContext = createContext<PageContext>({} as PageContext);

export const PageContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [page, setPage] = useState("/");
  const value = { page, setPage };

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};
