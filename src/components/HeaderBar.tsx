import { useState } from 'react';
import { Layout, Grid, Menu, Drawer, Button, Typography } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { animateScroll as scroll } from 'react-scroll';
import logo from '../assets/logo.png';

const { Header } = Layout;
const { useBreakpoint } = Grid;
const { Text } = Typography;

export default function HeaderBar() {
  const screens = useBreakpoint();
  const [drawerVisible, setDrawerVisible] = useState(false);

  // Logo- und Padding-Größen nach Breakpoint
  const logoSize = screens.xs ? 80 : screens.sm ? 100 : screens.lg ? 120 : 140;
  const paddingVertical = screens.xs ? 8 : screens.sm ? 12 : 16;

  // Styles für Desktop vs. Mobile Menu
  const desktopLinkStyle = { color: '#fff', fontWeight: 'bold' };
  const mobileLinkStyle = { color: '#000' };

  // Menü-Items: Home scrollt ganz nach oben, Styles je nach Anzeige
  const menuItems = [
    {
      key: 'home',
      label: (
        <span
          onClick={() => scroll.scrollToTop({ duration: 500 })}
          style={screens.md ? desktopLinkStyle : mobileLinkStyle}
        >
          Home
        </span>
      )
    },
    {
      key: 'services',
      label: (
        <span
          onClick={() => {
            const el = document.getElementById('services');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          style={screens.md ? desktopLinkStyle : mobileLinkStyle}
        >
          Leistungen
        </span>
      )
    },
    {
      key: 'testimonials',
      label: (
        <span
          onClick={() => {
            const el = document.getElementById('testimonials');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          style={screens.md ? desktopLinkStyle : mobileLinkStyle}
        >
          Erfahrungen
        </span>
      )
    },
    {
      key: 'contact',
      label: (
        <span
          onClick={() => {
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          style={screens.md ? desktopLinkStyle : mobileLinkStyle}
        >
          Kontakt
        </span>
      )
    }
  ];

  return (
    <Header
      style={{
        position: 'fixed',
        top: 0,
        zIndex: 1000,
        width: '100%',
        background: 'linear-gradient(90deg, #5f663b, #05212A)',
        padding: `${paddingVertical}px 50px`,
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      {/* Logo & Title */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={logo}
          alt="Logo"
          style={{ width: logoSize, height: 'auto', marginRight: 12 }}
        />
        <Text style={{ color: '#fff', fontSize: logoSize / 4, fontWeight: 'bold' }}>
          Praxis Meßmer
        </Text>
      </div>

      {/* Desktop Menu */}
      {screens.md ? (
        <Menu
          mode="horizontal"
          theme="dark"
          items={menuItems}
          style={{
            background: 'transparent',
            border: 'none',
            flex: 1,
            justifyContent: 'flex-end',
            paddingRight: 50
          }}
        />
      ) : (
        /* Mobile Drawer */
        <>
          <Button
            type="text"
            icon={<MenuOutlined style={{ color: '#fff', fontSize: 24 }} />}
            onClick={() => setDrawerVisible(true)}
          />
          <Drawer
            title={
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src={logo}
                  alt="Logo"
                  style={{ width: logoSize * 0.8, height: 'auto', marginRight: 8 }}
                />
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                  Praxis Meßmer
                </Text>
              </div>
            }
            placement="right"
            onClose={() => setDrawerVisible(false)}
            visible={drawerVisible}
            bodyStyle={{ padding: 0 }}
          >
            <Menu
              mode="inline"
              theme="light"
              defaultSelectedKeys={["home"]}
              items={menuItems}
              onClick={({ key }) => {
                setDrawerVisible(false);
                if (key === 'home') scroll.scrollToTop({ duration: 500 });
              }}
            />
          </Drawer>
        </>
      )}
    </Header>
  );
}
