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
      <ListItem title="Toàn quốc" value="Toàn quốc" name="radio-location" radio radioIcon="end"></ListItem>
      <ListItem title="Hà Nội" value="Toàn quốc" name="radio-location" radio radioIcon="end" defaultChecked></ListItem>
      <ListItem title="TP. Hồ Chí Minh" value="Toàn quốc" name="radio-location" radio radioIcon="end"></ListItem>
      <ListItem title="Đà Nẵng" value="Toàn quốc" name="radio-location" radio radioIcon="end"></ListItem>
      <ListItem title="Đà Nẵng" value="Toàn quốc" name="radio-location" radio radioIcon="end"></ListItem>
      <ListItem title="An Giang" value="Toàn quốc" name="radio-location" radio radioIcon="end"></ListItem>
      <ListItem title="Bắc Giang" value="Toàn quốc" name="radio-location" radio radioIcon="end"></ListItem>
      <ListItem title="Bắc Kạn" value="Toàn quốc" name="radio-location" radio radioIcon="end"></ListItem>
      <ListItem title="Bạc Liêu" value="Toàn quốc" name="radio-location" radio radioIcon="end"></ListItem>
      <ListItem title="Bà Rịa Vũng Tàu" value="Toàn quốc" name="radio-location" radio radioIcon="end"></ListItem>
      <ListItem title="Buôn Ma Thuột" value="Toàn quốc" name="radio-location" radio radioIcon="end"></ListItem>
      <ListItem title="Bình Định" value="Toàn quốc" name="radio-location" radio radioIcon="end"></ListItem>
      <ListItem title="Đà Nẵng" value="Toàn quốc" name="radio-location" radio radioIcon="end"></ListItem>
      <ListItem title="An Giang" value="Toàn quốc" name="radio-location" radio radioIcon="end"></ListItem>
      <ListItem title="Bắc Giang" value="Toàn quốc" name="radio-location" radio radioIcon="end"></ListItem>
      <ListItem title="Bắc Kạn" value="Toàn quốc" name="radio-location" radio radioIcon="end"></ListItem>
      <ListItem title="Bạc Liêu" value="Toàn quốc" name="radio-location" radio radioIcon="end"></ListItem>
      <ListItem title="Bà Rịa Vũng Tàu" value="Toàn quốc" name="radio-location" radio radioIcon="end"></ListItem>
      <ListItem title="Buôn Ma Thuột" value="Toàn quốc" name="radio-location" radio radioIcon="end"></ListItem>
      <ListItem title="Bình Định" value="Toàn quốc" name="radio-location" radio radioIcon="end"></ListItem>
    </List>

</Page>
);
export default HomesearchDiaDiem;