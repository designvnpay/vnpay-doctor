import React from 'react';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Row,
  Col,
  Button
} from 'framework7-react';

const FavouritePage = () => (
  <Page name="FavouritePage" className='favouritepage'>
    {/* Top Navbar */}
    <Navbar large sliding={false}>
      <NavLeft>
        <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="left" />
      </NavLeft>
      <NavTitle sliding>FavouritePage</NavTitle>
      <NavTitleLarge>FavouritePage</NavTitleLarge>
    </Navbar>
    <Toolbar tabbar labels bottom>
    <Link className='icons-tab icons-tab1' tabLink="#view-home" iconIos="icons-tab1" text="Trang chủ" />
    <Link className='icons-tab icons-tab2' tabLink="#view-schedule" iconIos="icons-tab2" text="Lịch khám" />
    <Link className='icons-tab icons-tab3' tabLink="#view-favourite" tabLinkActive iconIos="icons-tab3" text="Yêu thích" />
    <Link className='icons-tab icons-tab4' tabLink="#view-phonebook" iconIos="icons-tab4" text="Danh bạ" />
  </Toolbar>

    {/* Page content */}
    <BlockTitle>Danh mục</BlockTitle>
    <List>
    <ListItem link="/typo/" title="Typo"/>
    <ListItem link="/icons/" title="Icons"/>
    <ListItem link="/form/" title="Form"/>
    <ListItem link="/button/" title="Button"/>
      <ListItem link="/accordion/" title="Accordion"/>
      <ListItem link="/action-sheet/" title="Action Sheet"/>
    </List> 
  </Page>
);
export default FavouritePage;