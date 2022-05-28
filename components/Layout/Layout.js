import Navigation from "../Navigation";
import PageContainer from "../PageContainer";
import Logo from "../Logo";

export default function Layout({ children }) {
  return (
    <PageContainer>
      <Navigation />
      <Logo />
      {children}
    </PageContainer>
  );
}
