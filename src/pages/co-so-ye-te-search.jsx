import React from 'react';
import {
    Page,Navbar,NavLeft,NavTitle,NavTitleLarge,NavRight,Link,Icon,Badge,Toolbar,Tabs, Tab,Block,BlockTitle,Row,Col,Swiper, SwiperSlide,Button,
    Subnavbar,
    Searchbar,
    List,
    ListItem,
    theme,
} from 'framework7-react';

const CoSoYteSearch = () => (
<Page name="CoSoYteSearch" className='searchbar-style'>
<Navbar backLink="Back">
    <Navbar>
      <Subnavbar className='top0 subnavbar-small hiddren-icon' inner={false}>
        <Searchbar
        disableButtonText="Hủy"
        placeholder="Tìm kiếm"
          searchContainer=".search-list"
          searchIn=".item-title"
          disableButton={!theme.aurora}
        ></Searchbar>
      </Subnavbar>
    </Navbar>        
    <NavRight>  
    <Link><Icon icon="icon24 icons-ic24px-location"></Icon></Link>
    </NavRight>
  </Navbar>
    <List className="searchbar-not-found">
      <ListItem title="Không tìm thấy"></ListItem>
    </List>
    <List mediaList className="search-list searchbar-found search-list-style">
    <ListItem link="/co-so-ye-te-detail/" title="Bệnh viện Bạch Mai" text="8 Giải Phóng, Phương Mai, Đống Đa, Hà Nội">
        <img className='ava' slot="media" src="assets/vivnpay/svg/ava-default.svg" width="40" />
        </ListItem>
        <ListItem link="/co-so-ye-te-detail/" title="Bệnh viện Bạch Mai - Cơ sở 2" text="129 Phủ Lý, Hà Nam">
        <img className='ava' slot="media" src="assets/vivnpay/svg/ava-default.svg" width="40" />
        </ListItem>
        <ListItem link="/co-so-ye-te-detail/" title="Bệnh viện Đa khoa Quốc tế Vinmec" text="458 Minh Khai, Khu đô thị Times City, Hai Bà Trưng, ...">
        <img className='ava' slot="media" src="assets/vivnpay/svg/logo/logo-vinmec.svg" width="40" />
        </ListItem>
        <ListItem link="/co-so-ye-te-detail/" title="Bệnh Viện Phụ Sản Hà Nội" text="129 Phủ Lý, Hà Nam">
        <img className='ava' slot="media" src="assets/vivnpay/svg/ava-default.svg" width="40" />
        </ListItem>
        <ListItem link="/co-so-ye-te-detail/" title="Bệnh viện Bạch Mai" text="8 Giải Phóng, Phương Mai, Đống Đa, Hà Nội">
        <img className='ava' slot="media" src="assets/vivnpay/svg/ava-default.svg" width="40" />
        </ListItem>
        <ListItem link="/co-so-ye-te-detail/" title="Bệnh viện Bạch Mai - Cơ sở 2" text="129 Phủ Lý, Hà Nam">
        <img className='ava' slot="media" src="assets/vivnpay/svg/ava-default.svg" width="40" />
        </ListItem>
        <ListItem link="/co-so-ye-te-detail/" title="Bệnh viện Đa khoa Quốc tế Vinmec" text="458 Minh Khai, Khu đô thị Times City, Hai Bà Trưng, ...">
        <img className='ava' slot="media" src="assets/vivnpay/svg/logo/logo-vinmec.svg" width="40" />
        </ListItem>
        <ListItem link="/co-so-ye-te-detail/" title="Bệnh Viện Phụ Sản Hà Nội" text="129 Phủ Lý, Hà Nam">
        <img className='ava' slot="media" src="assets/vivnpay/svg/ava-default.svg" width="40" />
        </ListItem>
        <ListItem link="/co-so-ye-te-detail/" title="Bệnh viện Bạch Mai" text="8 Giải Phóng, Phương Mai, Đống Đa, Hà Nội">
        <img className='ava' slot="media" src="assets/vivnpay/svg/ava-default.svg" width="40" />
        </ListItem>
        <ListItem link="/co-so-ye-te-detail/" title="Bệnh viện Bạch Mai - Cơ sở 2" text="129 Phủ Lý, Hà Nam">
        <img className='ava' slot="media" src="assets/vivnpay/svg/ava-default.svg" width="40" />
        </ListItem>
        <ListItem link="/co-so-ye-te-detail/" title="Bệnh viện Đa khoa Quốc tế Vinmec" text="458 Minh Khai, Khu đô thị Times City, Hai Bà Trưng, ...">
        <img className='ava' slot="media" src="assets/vivnpay/svg/logo/logo-vinmec.svg" width="40" />
        </ListItem>
        <ListItem link="/co-so-ye-te-detail/" title="Bệnh Viện Phụ Sản Hà Nội" text="129 Phủ Lý, Hà Nam">
        <img className='ava' slot="media" src="assets/vivnpay/svg/ava-default.svg" width="40" />
        </ListItem>
        
    </List>

</Page>
);
export default CoSoYteSearch;