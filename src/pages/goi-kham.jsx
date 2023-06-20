import React from 'react';
import {
    Page,Navbar,Link,Icon,Block,Row,Col,Button,
    Searchbar, List,
    ListItem,NavRight,
    theme,
} from 'framework7-react';

const GoiKham = () => (
            <Page name="GoiKham" className='goi-kham page-search bg-white'>
              <Navbar className='show-border' title="Gói khám" backLink="Back">
              <NavRight>
    <Link className='location-button' href="/dia-diem-search/"><Icon icon="icon24 icons-ic24px-location-active"></Icon>
    <span className="text-location">Hà Nội</span>
    </Link>
  </NavRight>
    </Navbar>
    <Block className='box-search'>
    <Searchbar
        disableButtonText="Hủy"
        placeholder="Tìm kiếm gói khám"
          searchContainer=".search-list"
          searchIn=".item-bottom"
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
    <List mediaList className="search-list searchbar-found search-list-style search-list-bor search-list-nopad">
    <ListItem href="/goi-kham-detail/">
        <img className='img-100' slot="after-title" src="assets/vivnpay/demo/pic-goi-kham1.jpg" width="100%" height="140" />
        <Row slot='root' className='item-bottom'>
        <Col width="70">
            <div className='medium'>Gói khám sức khỏe tổng quát</div>
            </Col>
            <Col width="30">
            <Button href="/goi-kham-detail/" fill color="default">Chọn</Button>
            </Col>            
          </Row>
      </ListItem>
      <ListItem href="/goi-kham-detail/">
        <img className='img-100' slot="after-title" src="assets/vivnpay/demo/pic-goi-kham2.jpg" width="100%" height="140" />
        <Row slot='root' className='item-bottom'>
        <Col width="70">
            <div className='medium'>Gói khám nhi</div>
            </Col>
            <Col width="30">
            <Button href="/goi-kham-detail/" fill color="default">Chọn</Button>
            </Col>            
          </Row>
      </ListItem>
      <ListItem href="/goi-kham-detail/">
        <img className='img-100' slot="after-title" src="assets/vivnpay/demo/pic-goi-kham3.jpg" width="100%" height="140" />
        <Row slot='root' className='item-bottom'>
        <Col width="70">
            <div className='medium'>Gói khám xương khớp</div>
            </Col>
            <Col width="30">
            <Button href="/goi-kham-detail/" fill color="default">Chọn</Button>
            </Col>            
          </Row>
      </ListItem>
      <ListItem href="/goi-kham-detail/">
        <img className='img-100' slot="after-title" src="assets/vivnpay/demo/pic-goi-kham4.jpg" width="100%" height="140" />
        <Row slot='root' className='item-bottom'>
        <Col width="70">
            <div className='medium'>Gói khám sức khỏe hậu Covid</div>
            </Col>
            <Col width="30">
            <Button href="/goi-kham-detail/" fill color="default">Chọn</Button>
            </Col>            
          </Row>
      </ListItem>
      <ListItem href="/goi-kham-detail/">
        <img className='img-100' slot="after-title" src="assets/vivnpay/demo/pic-goi-kham5.jpg" width="100%" height="140" />
        <Row slot='root' className='item-bottom'>
        <Col width="70">
            <div className='medium'>Khám tim mạch</div>
            </Col>
            <Col width="30">
            <Button href="/goi-kham-detail/" fill color="default">Chọn</Button>
            </Col>            
          </Row>
      </ListItem>
    </List>
    </Block>
  </Page>
);
export default GoiKham;