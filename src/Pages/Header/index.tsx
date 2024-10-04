import { Drawer, Menu } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi"; 
import { HomeOutlined, DatabaseOutlined, CodeOutlined } from '@ant-design/icons'; 
import './header.css';
export const HeaderC = () => {
   const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
  return (
    <>
      <div className="menu-icon" onClick={showDrawer}>
        <FiMenu size={30} />
      </div>
      <Drawer
        title="Big data by Balykin"
        style={{ fontSize: 25 }}
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <Menu mode="inline" className="ant-menu" style={{ fontSize: 20 }}> 
          <Menu.Item key="home" icon={<HomeOutlined />}>
            <Link to="/">Главная</Link>
          </Menu.Item>
          <Menu.Item key="bigdata" icon={<DatabaseOutlined />}>
            <Link to="/bigdata">О больших данных</Link>
          </Menu.Item>
          <Menu.Item key="developer" icon={<CodeOutlined />}>
            <Link to="/developer">Разработчик</Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </>
  );
};

