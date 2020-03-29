import React from 'react';
import Cover from './components/Cover/Cover';
import Navbar from './components/NavigationBar';
import ProjectSection from './components/ProjectSection/ProjectSection';
import Footer from './components/Footer';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import { createGlobalStyle } from 'styled-components';
import { device } from './variables';

const GlobalStyle = createGlobalStyle`
*{
  margin:0px;
  padding:0px;
}
html{
  font-size:10px;
}

@media ${device.mobileS}{
  html {
    font-size: 12px;
  }
}
@media ${device.mobileM}{
  html {
    font-size: 12px;
  }
}
@media ${device.mobileL}{
  html {
    font-size: 12px;
  }
}
@media ${device.tablet}{
  html {
    font-size: 14px;
  }
}
@media ${device.laptop}{
  html {
    font-size: 16px;
  }
}
@media ${device.laptopL}{
  html {
    font-size: 16px;
  }
}
@media ${device.desktop}{
  html {
    font-size: 18px;
  }
}
`;

export default function App() {
  return (
    <div className='page_wrapper'>
      <GlobalStyle />
      <Cover />
      <Navbar />
      <ProjectSection />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
