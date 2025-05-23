import { Layout, Grid } from 'antd';
import HeaderBar from './components/HeaderBar';
import Services from './components/Services';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Home from './components/Home';
import LifeLine from './components/LifeLine';
import Gallery from './components/Gallery';

const { Content, Footer } = Layout;
const { useBreakpoint } = Grid;

export default function App() {
  const screens = useBreakpoint();
  let maxWidthPixels: number;
  if (screens.xxl) maxWidthPixels = 2560;      
  else if (screens.xl) maxWidthPixels = 1920;   
  else if (screens.lg) maxWidthPixels = 1440;   
  else maxWidthPixels = 1200;                   

  return (
    <Layout>
      <HeaderBar />
      <Content id= "home" style={{ padding: '100px 50px', maxWidth: maxWidthPixels, margin: 'auto', width: '100%' }}>
        <Home />
        <LifeLine />
        <Services />
        {/*<Gallery />*/}
        <Testimonials />
        <Contact />
      </Content>
      <Footer style={{ textAlign: 'center', background: '#001529', color: '#fff' }}>
        ©2025 Kur- und Naturheilpraxis Meßmer
      </Footer>
    </Layout>
  );
}
