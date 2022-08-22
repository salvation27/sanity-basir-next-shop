import '../styles/globals.css'
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
const clientSideEmotionCache = createCache({ key: "css" });
// импорт контекста
import { StoreProvider } from "../utils/store";

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache
}) {
  return (
    <CacheProvider value={emotionCache}>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </CacheProvider>
  );
}

export default MyApp
