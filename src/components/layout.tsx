import Head from "next/head";

interface LayoutProps {
  title?: string;
}

const Layout: React.FC<LayoutProps> = props => (
  <div className="h-screen bg-gradient-to-br from-blue-500 to-green-500">
    <Head>
      <title>{props.title}</title>
    </Head>
    <main>{props.children}</main>
  </div>
);

export default Layout;
