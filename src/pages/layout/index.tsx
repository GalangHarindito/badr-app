import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import HeaderDashboard from "@components/dashboard/header";
import SideBar from "@components/dashboard/sideBar";
import PageContainer from "@components/dashboard/pageContainer";
import { menuItems } from "@helpers/menuItems";

interface LayoutInterface {
  children: ReactNode;
  titlePage?: String;
}

const Layout = ({ children, titlePage }: LayoutInterface) => {
  const router = useRouter();
  const [title, useTitle] = useState<String>("");

  const titleName = (path?: String) => {
    let title = "";
    switch (path) {
      case "/":
        title = "Order Management";
        break;
      case "/orderListDetail":
        title = "Order Detail";
      case "/orderCreate":
        title = "Add New Order";
        break;
      default:
    }
    return title;
  };

  useEffect(() => {
    useTitle(titleName(router.pathname));
  }, []);

  return (
    <div className=''>
      <HeaderDashboard />
      <div className='sidebar h-screen'>
        <SideBar menu={menuItems} />
        <PageContainer titlePage={title}>{children}</PageContainer>
      </div>
    </div>
  );
};

export default Layout;
