import React from 'react';
import {
    Page,Navbar,NavLeft,NavTitle,NavTitleLarge,NavRight,Link,Icon,Badge,Toolbar,Tabs, Tab,Block,BlockTitle,Row,Col,Swiper, SwiperSlide,Button,
    Subnavbar,
    Searchbar,
    List,Chip,
    ListItem,
    theme
} from 'framework7-react';

const HomeSearch = () => (
<Page name="HomeSearch" className='searchbar-location'>
<Navbar backLink="Back" className='no-border'>
    <Navbar>
    <Subnavbar className='top0 subnavbar-small hiddren-icon' inner={false}>
        <Searchbar
        disableButtonText="Hủy"
        placeholder="Tìm kiếm"
          searchContainer=".search-list"
          searchIn=".item-title"
          disableButton={!theme.aurora}
        >          
        </Searchbar>       
      </Subnavbar>
    </Navbar>        
    <NavRight>  
    <Link href="/dia-diem-search/"><Icon icon="icon24 icons-ic24px-location"></Icon></Link>
    </NavRight>
  </Navbar>
  <Toolbar top className='toolbar-top'>
  <Swiper speed={500} slidesPerView={4} spaceBetween={8} className='swiper-search'>
        <SwiperSlide>
    <Chip href="/" text="Cơ sở y tế" />  
      </SwiperSlide>
      <SwiperSlide>
    <Chip text="Bác sĩ" />  
      </SwiperSlide>
      <SwiperSlide>
    <Chip text="Chuyên khoa" />  
      </SwiperSlide>
      <SwiperSlide>
    <Chip Link="/dia-diem-search/" text="Địa điểm" />  
      </SwiperSlide>
      <SwiperSlide>
    <Chip text="Bác sĩ" />  
      </SwiperSlide>
      <SwiperSlide>
    <Chip text="Cơ sở y tế" />  
      </SwiperSlide>
    </Swiper>  
  </Toolbar>
    <List className="searchbar-not-found">
      <ListItem title="Không tìm thấy"></ListItem>
    </List>
    <List mediaList className="search-list searchbar-found search-list-style">
    <ListItem link="/" title="Bệnh viện Bạch Mai" text="8 Giải Phóng, Phương Mai, Đống Đa, Hà Nội">
        <img className='ava' slot="media" src="assets/vivnpay/svg/ava-default.svg" width="40" />
        </ListItem>
        <ListItem link="/" title="Khám bạch cầu máu" text="Bệnh viện Bạch Mai">
        <img className='ava' slot="media" src="assets/vivnpay/demo/ava1.jpg" width="40" />
        <img className='ava-logo' slot="media" src="assets/vivnpay/svg/ava-default.svg" width="16" />
        </ListItem>
        <ListItem link="/" title="Bs.PGS Nguyễn Trúc Bạch" subtitle="Khoa tim mạch" text="Bệnh viện Bạch Mai">
        <img className='ava' slot="media" src="assets/vivnpay/demo/ava2.jpg" width="40" />
        <img className='ava-logo' slot="media" src="assets/vivnpay/svg/ava-default.svg" width="16" />
        </ListItem>
        <ListItem link="/" title="Bs.PGS Nguyễn Trúc Bạch" subtitle="Khoa tim mạch" text="Bệnh viện Bạch Mai">
        <img className='ava' slot="media" src="assets/vivnpay/demo/ava2.jpg" width="40" />
        <img className='ava-logo' slot="media" src="assets/vivnpay/svg/ava-default.svg" width="16" />
        </ListItem>
        <ListItem link="/" title="Bs.PGS Nguyễn Trúc Bạch" subtitle="Khoa tim mạch" text="Bệnh viện Bạch Mai">
        <img className='ava' slot="media" src="assets/vivnpay/demo/ava2.jpg" width="40" />
        <img className='ava-logo' slot="media" src="assets/vivnpay/svg/ava-default.svg" width="16" />
        </ListItem>
        <ListItem link="/" title="Bs.PGS Nguyễn Trúc Bạch" subtitle="Khoa tim mạch" text="Bệnh viện Bạch Mai">
        <img className='ava' slot="media" src="assets/vivnpay/demo/ava2.jpg" width="40" />
        <img className='ava-logo' slot="media" src="assets/vivnpay/svg/ava-default.svg" width="16" />
        </ListItem>
        <ListItem link="/" title="Bs.PGS Nguyễn Trúc Bạch" subtitle="Khoa tim mạch" text="Bệnh viện Bạch Mai">
        <img className='ava' slot="media" src="assets/vivnpay/demo/ava2.jpg" width="40" />
        <img className='ava-logo' slot="media" src="assets/vivnpay/svg/ava-default.svg" width="16" />
        </ListItem>
        <ListItem link="/" title="Bs.PGS Nguyễn Trúc Bạch" subtitle="Khoa tim mạch" text="Bệnh viện Bạch Mai">
        <img className='ava' slot="media" src="assets/vivnpay/demo/ava2.jpg" width="40" />
        <img className='ava-logo' slot="media" src="assets/vivnpay/svg/ava-default.svg" width="16" />
        </ListItem>
        <ListItem link="/" title="Bs.PGS Nguyễn Trúc Bạch" subtitle="Khoa tim mạch" text="Bệnh viện Bạch Mai">
        <img className='ava' slot="media" src="assets/vivnpay/demo/ava2.jpg" width="40" />
        <img className='ava-logo' slot="media" src="assets/vivnpay/svg/ava-default.svg" width="16" />
        </ListItem>
        <ListItem link="/" title="Bs.PGS Nguyễn Trúc Bạch" subtitle="Khoa tim mạch" text="Bệnh viện Bạch Mai">
        <img className='ava' slot="media" src="assets/vivnpay/demo/ava2.jpg" width="40" />
        <img className='ava-logo' slot="media" src="assets/vivnpay/svg/ava-default.svg" width="16" />
        </ListItem>
        <ListItem link="/" title="Bs.PGS Nguyễn Trúc Bạch" subtitle="Khoa tim mạch" text="Bệnh viện Bạch Mai">
        <img className='ava' slot="media" src="assets/vivnpay/demo/ava2.jpg" width="40" />
        <img className='ava-logo' slot="media" src="assets/vivnpay/svg/ava-default.svg" width="16" />
        </ListItem>
        <ListItem link="/" title="Bs.PGS Nguyễn Trúc Bạch" subtitle="Khoa tim mạch" text="Bệnh viện Bạch Mai">
        <img className='ava' slot="media" src="assets/vivnpay/demo/ava2.jpg" width="40" />
        <img className='ava-logo' slot="media" src="assets/vivnpay/svg/ava-default.svg" width="16" />
        </ListItem>
        <ListItem link="/" title="Bs.PGS Nguyễn Trúc Bạch" subtitle="Khoa tim mạch" text="Bệnh viện Bạch Mai">
        <img className='ava' slot="media" src="assets/vivnpay/demo/ava2.jpg" width="40" />
        <img className='ava-logo' slot="media" src="assets/vivnpay/svg/ava-default.svg" width="16" />
        </ListItem>
    </List>

</Page>
);
export default HomeSearch;