import React from 'react';
import {
    Page,Navbar,NavLeft,NavTitle,NavTitleLarge,NavRight,Icon,Badge,Toolbar,Tabs, Tab,Block,BlockTitle,Row,Col,Swiper, SwiperSlide,Button,
    Subnavbar,Link,
    Searchbar,
    List,Chip,
    ListItem,
    theme
} from 'framework7-react';

const HomesearchDiaDiem = () => (
<Page name="HomesearchDiaDiem" className='searchbar-style'>
<Navbar backLink="Back" className='no-border'>
    <Navbar>
    <Subnavbar className='top0 subnavbar-small hiddren-icon' inner={false}>
        <Searchbar
        disableButtonText="Hủy"
        placeholder="Tìm kiếm tỉnh/thành phố"
          searchContainer=".search-list"
          searchIn=".item-title"
          disableButton={!theme.aurora}
        >          
        </Searchbar>       
      </Subnavbar>
    </Navbar>        
  </Navbar>
    <List className="searchbar-not-found">
      <ListItem title="Không tìm thấy"></ListItem>
    </List>
    <List mediaList className='search-list title-normal searchbar-found search-list-style'>
      <ListItem href="/home-search/" title="Toàn quốc"></ListItem>
      <ListItem href="/home-search/" title="Hà Nội"></ListItem>
      <ListItem href="/home-search/" title="TP. Hồ Chí Minh"></ListItem>
      <ListItem href="/home-search/" title="Đà Nẵng"></ListItem>
      <ListItem href="/home-search/" title="Đà Nẵng"></ListItem>
      <ListItem href="/home-search/" title="An Giang"></ListItem>
      <ListItem href="/home-search/" title="Bắc Giang"></ListItem>
      <ListItem href="/home-search/" title="Bắc Kạn"></ListItem>
      <ListItem href="/home-search/" title="Bạc Liêu"></ListItem>
      <ListItem href="/home-search/" title="Bà Rịa Vũng Tàu"></ListItem>
      <ListItem href="/home-search/" title="Buôn Ma Thuột"></ListItem>
      <ListItem href="/home-search/" title="Bình Định"></ListItem>
      <ListItem href="/home-search/" title="Đà Nẵng"></ListItem>
      <ListItem href="/home-search/" title="An Giang"></ListItem>
      <ListItem href="/home-search/" title="Bắc Giang"></ListItem>
      <ListItem href="/home-search/" title="Bắc Kạn"></ListItem>
      <ListItem href="/home-search/" title="Bạc Liêu"></ListItem>
      <ListItem href="/home-search/" title="Bà Rịa Vũng Tàu"></ListItem>
      <ListItem href="/home-search/" title="Buôn Ma Thuột"></ListItem>
      <ListItem href="/home-search/" title="Bình Định"></ListItem>
    </List>

</Page>
);
export default HomesearchDiaDiem;