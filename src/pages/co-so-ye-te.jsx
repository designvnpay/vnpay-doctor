import React from 'react';
import {
  Page,Navbar,NavRight,Link,Icon,Block,
  Card,Searchbar, List,
  ListItem,
  CardHeader,
  CardContent,theme, Button,CardFooter, Row, Col
} from 'framework7-react';

const CoSoYte = () => (
<Page name="CoSoYte" className='cosoyte page-search bg-white'>
<Navbar title="Cơ sở y tế" backLink="Back">

<NavRight>
    <Link className='location-button' href="/dia-diem-search/"><Icon icon="icon24 icons-ic24px-location-active"></Icon>
    <span className="text-location">Hà Nội</span>
    </Link>
  </NavRight>
</Navbar>
    {/* Page content */}
    <Block className='box-search'>
    <Searchbar
        disableButtonText="Hủy"
        placeholder="Tìm kiếm bệnh viện"
          searchContainer=".search-list"
          searchIn=".card"
          disableButton={!theme.aurora}
        ></Searchbar>
        <List className="searchbar-not-found">
      <ListItem>
      <Block className='box-blank text-center' style={{
          //display:'none',
        }}>
      <p className='mb0'>
      <img src="assets/vivnpay/svg/icon/ic-not-found.svg" width="220" />
      </p>
      <p className='medium font-size-16 mb12 mt0'>
      Không tìm thấy cơ sở y tế
      </p>
    </Block>
      </ListItem>
    </List>
    <List mediaList className="search-list search-card searchbar-found search-list-style search-list-bor">
    <ListItem href="/co-so-ye-te-detail/" title="Bệnh Viện Hữu Nghị Việt Đức" text="458 Minh Khai, Khu đô thị Times City">
    <img className='ava img-48' slot="media" src="assets/vivnpay/svg/logo/logo-vinmec.svg" width="64" />
    <div className='listitem-footer' slot='root-end'>
    <Button href="/chuyen-khoa/" className="width-100" fill color="default">Đặt khám</Button>
    </div>    
    </ListItem>
    <ListItem href="/co-so-ye-te-detail/" title="Bệnh Viện Hữu Nghị Việt Đức" text="458 Minh Khai, Khu đô thị Times City">
    <img className='ava img-48' slot="media" src="assets/vivnpay/svg/logo/logo-vinmec.svg" width="64" />
    <div className='listitem-footer' slot='root-end'>
    <Button href="/chuyen-khoa/" className="width-100" fill color="default">Đặt khám</Button>
    </div>    
    </ListItem>
    <ListItem href="/co-so-ye-te-detail/" title="Bệnh Viện Hữu Nghị Việt Đức" text="458 Minh Khai, Khu đô thị Times City">
    <img className='ava img-48' slot="media" src="assets/vivnpay/svg/logo/logo-vinmec.svg" width="64" />
    <div className='listitem-footer' slot='root-end'>
    <Button href="/chuyen-khoa/" className="width-100" fill color="default">Đặt khám</Button>
    </div>    
    </ListItem>
    <ListItem href="/co-so-ye-te-detail/" title="Bệnh Viện Hữu Nghị Việt Đức" text="458 Minh Khai, Khu đô thị Times City">
    <img className='ava img-48' slot="media" src="assets/vivnpay/svg/logo/logo-vinmec.svg" width="64" />
    <div className='listitem-footer' slot='root-end'>
    <Button href="/chuyen-khoa/" className="width-100" fill color="default">Đặt khám</Button>
    </div>    
    </ListItem>
    <ListItem href="/co-so-ye-te-detail/" title="Bệnh Viện Hữu Nghị Việt Đức" text="458 Minh Khai, Khu đô thị Times City">
    <img className='ava img-48' slot="media" src="assets/vivnpay/svg/logo/logo-vinmec.svg" width="64" />
    <div className='listitem-footer' slot='root-end'>
    <Button href="/chuyen-khoa/" className="width-100" fill color="default">Đặt khám</Button>
    </div>    
    </ListItem>
    <ListItem href="/co-so-ye-te-detail/" title="Bệnh Viện Hữu Nghị Việt Đức" text="458 Minh Khai, Khu đô thị Times City">
    <img className='ava img-48' slot="media" src="assets/vivnpay/svg/logo/logo-vinmec.svg" width="64" />
    <div className='listitem-footer' slot='root-end'>
    <Button href="/chuyen-khoa/" className="width-100" fill color="default">Đặt khám</Button>
    </div>    
    </ListItem>
    </List>
    </Block>
    

</Page>
);
export default CoSoYte;