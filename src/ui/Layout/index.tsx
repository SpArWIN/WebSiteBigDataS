
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { HeaderC } from "../../Pages/Header";

export const MainLayout = () => {
  return (
    <Layout style={{ minHeight: "98vh" }}>
      <Layout.Content>
        <HeaderC/>
        <Outlet />
      </Layout.Content>
    </Layout>
  );
};
