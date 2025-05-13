import { Header } from "@/stories/Header";
import Separator from "../../atoms/Separator";
import { Box } from "@mui/material";
import Footer from "../../organisms/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Separator />
      <Box padding={3}>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
