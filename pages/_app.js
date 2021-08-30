import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "next-auth/client";
import NextNprogress from "nextjs-progressbar";
import { CartProvider, useCart } from "react-use-cart";
import { AnimateSharedLayout, motion } from "framer-motion"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps, router }) {

  const spring = {
    type: "spring",
    damping: 20,
    stiffness: 100,
    when: "afterChildren"
  };
  return (
    
    <Provider session={pageProps.session}>
      <CartProvider>
        <ChakraProvider>
          <NextNprogress color="#29D"></NextNprogress>
          <AnimateSharedLayout>
          <motion.div
            // transition={spring}
            key={router.pathname}
            initial={{ opacity: 0 }}
            animate={{  opacity: 1 }}
            exit={{  opacity: 0 }}
            id="page-transition-container"
          >

          <Component {...pageProps} />
          </motion.div>
          </AnimateSharedLayout>
        </ChakraProvider>
      </CartProvider>
    </Provider>
  );
}

export default MyApp;
