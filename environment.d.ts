declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_TITLE?;
      NEXT_PUBLIC_DESCRIPTION?;
    }
  }
}

export {};
