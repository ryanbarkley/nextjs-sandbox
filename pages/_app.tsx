import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/globals.css";
console.log(process.env.NEXT_PUBLIC_MSW_ENABLED);

if (
  process.env.NODE_ENV === "development" &&
  process.env.NEXT_PUBLIC_MSW_ENABLED === "true"
) {
  if (typeof window === "undefined") {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { server } = require("../mocks/server");
    server.listen();
  } else {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { worker } = require("../mocks/browser");
    worker.start();
  }
}

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default App;
