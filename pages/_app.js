import { SessionProvider } from "next-auth/react";
import "../styles/global.css";
import { RecoilRoot } from "recoil";
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    // This helps us to persist and use it through out the app
    <SessionProvider session={session}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </SessionProvider>
  );
}

export default MyApp;
