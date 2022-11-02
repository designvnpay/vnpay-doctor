import React from 'react';
import {
    Page,Navbar,Link,Icon,Toolbar,Tabs, Tab,Block,Row,Col,Button,
    Subnavbar,Searchbar, List,
    ListItem,
    theme,
    Segmented,    
    Card,
  CardHeader,
  CardContent
} from 'framework7-react';

const BacSi = () => (
            <Page name="BacSi" className='bac-si page-search'>
              <Navbar className='show-border' title="Cơ xương khớp" backLink="Back">
              <Subnavbar className='show-icon'>
        <Segmented raised>
        <Searchbar
        disableButtonText="Hủy"
        placeholder="Tìm kiếm bác sĩ"
          searchContainer=".search-list"
          searchIn=".item-title"
          disableButton={!theme.aurora}
        ></Searchbar>
        </Segmented>
      </Subnavbar>
    </Navbar> 
        <List className="searchbar-not-found">
      <ListItem title="Không tìm thấy"></ListItem>
    </List>
    <List mediaList className="search-list searchbar-found search-list-style">
    <ListItem title="Bs. Lê Công Tuấn Anh" subtitle="Cơ xương khớp" text="Bệnh viện Hữu Nghị Việt Đức">
        <img className='ava img-64' slot="media" src="demo/ava3.jpg" width="64" />
        <img className='ava-logo' slot="media" src="svg/logo/ava-logo-viet-duc.svg" width="24" />
        <Link href="/bac-si-detail/" slot='after'><Icon icon="icon24 icons-ic24px-info"></Icon></Link>
        <Row slot='root' className='item-bottom'>
          <Col>
            <div className='font-size-12'>Phí dịch vụ</div>
            <div className='medium color-primary'>560,000đ</div>
            </Col>
            <Col>
            <Button className="min-width-100" fill color="primary-light">Đặt lịch khám</Button>
            </Col>            
          </Row>
      </ListItem>
        
    </List>
  </Page>
);
export default BacSi;