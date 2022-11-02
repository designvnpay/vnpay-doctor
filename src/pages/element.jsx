import React from 'react';
import {
  Page,Navbar,NavLeft,NavTitle,NavTitleLarge,NavRight,Link,Icon,Badge,Toolbar,Tabs, Tab,Block,BlockTitle,List,ListItem,Row,Col,Swiper, SwiperSlide,Button,
  Card,
  CardHeader,
  CardContent,
  CardFooter
} from 'framework7-react';

const Element = () => (
<Page name="element" className='element'>
  <Navbar className='header-tran'>
    <NavLeft>
      <Link><Icon icon="icon24 icons-ic24px-back"></Icon></Link>
    </NavLeft>
    <NavTitle className='text-center'>home</NavTitle>
    <NavRight>  
    <Link><Icon icon="icon24 icons-ic24px-search"></Icon></Link>
    <Link><Icon icon="icon24 icons-ic24px-help"></Icon></Link>
    </NavRight>
  </Navbar>

    {/* Page content */}
    <BlockTitle>Danh mục</BlockTitle>
    <List>
    <ListItem link="/typo/" title="Typo"/>
    <ListItem link="/icons/" title="Icons"/>
    <ListItem link="/form/" title="Form, List, Badge"/>
    <ListItem link="/button/" title="Button"/>
      <ListItem link="/accordion/" title="Accordion"/>
      <ListItem link="/action-sheet/" title="Action Sheet"/>
    </List>

</Page>
);
export default Element;