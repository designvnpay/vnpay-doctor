import React from 'react';
import {
    Page,
    Navbar,Link,Icon,
    Subnavbar,
    Segmented,
    Button,Toolbar,
    Tabs,
    Tab,
    Block,Row,Col,
    List,
    ListItem,
    Card,
  CardHeader,
  CardContent,
  } from 'framework7-react';

const SchedulePage = () => (
            <Page hideToolbarOnScroll pageContent={false} name="SchedulePage" className='schedule-page'>
    <Navbar title="Lịch khám" backLink="Back">
      <Subnavbar>
        <Segmented raised>
          <Button tabLink="#schedule-tab1" tabLinkActive>
          Sắp khám
          </Button>
          <Button tabLink="#schedule-tab2">Đã khám</Button>
          <Button tabLink="#schedule-tab3">Đã hủy</Button>
        </Segmented>
      </Subnavbar>
    </Navbar>    
    <Toolbar tabbar labels bottom>
    <Link className='icons-tab icons-tab1' tabLink="#view-home" iconIos="icons-tab1" text="Trang chủ" />
    <Link className='icons-tab icons-tab2' tabLink="#view-schedule" tabLinkActive iconIos="icons-tab2" text="Lịch khám" />
    <Link className='icons-tab icons-tab3' tabLink="#view-favourite" iconIos="icons-tab3" text="Yêu thích" />
    <Link className='icons-tab icons-tab4' tabLink="#view-phonebook" iconIos="icons-tab4" text="Thông tin" />
  </Toolbar>
    <Tabs>
      <Tab id="schedule-tab1" tabActive className="page-content tab-toolbar">
      <Block className='box-search'>
    <List mediaList className="search-list searchbar-found search-list-style search-list-bor bg-item-content-gray">
    <ListItem className='active' link="/schedule-detail/" title="Bs. Lê Công Tuấn Anh" subtitle="Cơ xương khớp">
        <img className='ava img-64' slot="media" src="assets/vivnpay/demo/ava3.jpg" width="64" />
        <img className='ava-logo' slot="media" src="assets/vivnpay/svg/logo/ava-logo-viet-duc.svg" width="24" />
        <Link href="/schedule-detail/" slot='root-start' className='item-top'>
        <Row className='item-bottom item-bottom-nobor'>
          <Col width="55">
            <div className='font-size-12 color-subtitle'>Bệnh nhân</div>
            <div className='medium'>Nguyễn Văn A</div>
            </Col>
            <Col width="45" className='text-right'>
            <Icon icon="icon32 icons-ic32px-arrow-right"></Icon>
            </Col>            
          </Row>
          <Row noGap className='item-time'>            
        <Col className='col-left line-right'>
        <Button fill color='white-light'><Icon icon="icon24 icons-ic24px-calendar filter-white"></Icon> <span className='button-txt'>12/08/2022</span></Button>
        </Col>
        <Col className='col-right'>
        <Button fill color='white-light'><Icon icon="icon24 icons-ic24px-clock filter-white"></Icon> <span className='button-txt'>10-11 giờ</span></Button>
        </Col>
      </Row>
        </Link>
        <div slot='subtitle'>
        <div className='subtitle-top color-main'>Bệnh viện Hữu Nghị Việt Đức</div>
        <div className='subtitle-bottom'>Số 105 giải phóng, Q.Đống đa, TP.Hà nội</div>        
          </div>    
      </ListItem>     
    </List>
    </Block>
      </Tab>
      <Tab id="schedule-tab2" className="page-content bg-white">
      <Block className='box-blank text-center' style={{
          display:'none',
        }}>
      <p>
      <img src="assets/vivnpay/svg/icon/ic-not-found.svg" width="220" />
      </p>
      <p>
      Quý khách chưa có lịch sử khám
      </p>
      <p><Button Link="/" fill>Đặt khám ngay</Button></p>
    </Block>
      <Block className='box-search'>      
    <List mediaList className="search-list searchbar-found search-list-style search-list-bor bg-item-content-gray">
    <ListItem link="/schedule-detail2/" title="Bs. Lê Công Tuấn Anh" subtitle="Cơ xương khớp" text="Bệnh viện Hữu Nghị Việt Đức">
        <img className='ava img-64' slot="media" src="assets/vivnpay/demo/ava3.jpg" width="64" />
        <img className='ava-logo' slot="media" src="assets/vivnpay/svg/logo/ava-logo-viet-duc.svg" width="24" />
        <Link href="/schedule-detail2/" slot='root-start' className='item-top'>
        <Row className='item-bottom item-bottom-nobor'>
          <Col width="55">
            <div className='font-size-12 color-subtitle'>Bệnh nhân</div>
            <div className='medium'>Nguyễn Văn A</div>
            </Col>
            <Col width="45" className='text-right'>
            <span className="badge color-success mr6">Đã khám</span>
            <Icon icon="icon32 icons-ic32px-arrow-right"></Icon>
            </Col>            
          </Row>
        </Link>        
      </ListItem>     
    </List>
    </Block>
      </Tab>
      <Tab id="schedule-tab3" className="page-content bg-white">
      <Block className='box-blank text-center' style={{
          display:'none',
        }}>
      <p>
      <img src="assets/vivnpay/svg/icon/ic-not-found.svg" width="220" />
      </p>
      <p>
      Quý khách chưa có lịch sử khám
      </p>
      <p><Button Link="/" fill>Đặt khám ngay</Button></p>
    </Block>
      <Block className='box-search'>      
    <List mediaList className="search-list searchbar-found search-list-style search-list-bor bg-item-content-gray">
    <ListItem className='active' link="/schedule-detail/" title="Bs. Lê Công Tuấn Anh" subtitle="Cơ xương khớp" text="Bệnh viện Hữu Nghị Việt Đức">
        <img className='ava img-64' slot="media" src="assets/vivnpay/demo/ava3.jpg" width="64" />
        <img className='ava-logo' slot="media" src="assets/vivnpay/svg/logo/ava-logo-viet-duc.svg" width="24" />
        <Link href="/schedule-detail/" slot='root-start' className='item-top'>
        <Row className='item-bottom item-bottom-nobor'>
          <Col width="55">
            <div className='font-size-12 color-subtitle'>Bệnh nhân</div>
            <div className='medium'>Nguyễn Văn A</div>
            </Col>
            <Col width="45" className='text-right'>
            <span className="badge color-default mr6">Sắp khám</span>
            <Icon icon="icon32 icons-ic32px-arrow-right"></Icon>
            </Col>
          </Row>
          <Row noGap className='item-time'>            
        <Col className='col-left line-right'>
        <Button fill color='white-light'><Icon icon="icon24 icons-ic24px-calendar filter-white"></Icon> <span className='button-txt'>12/08/2022</span></Button>
        </Col>
        <Col className='col-right'>
        <Button fill color='white-light'><Icon icon="icon24 icons-ic24px-clock filter-white"></Icon> <span className='button-txt'>10-11 giờ</span></Button>
        </Col>
      </Row>
        </Link>       
      </ListItem>
    <ListItem link="/schedule-detail2/" title="Bs. Lê Công Tuấn Anh" subtitle="Cơ xương khớp" text="Bệnh viện Hữu Nghị Việt Đức">
        <img className='ava img-64' slot="media" src="assets/vivnpay/demo/ava3.jpg" width="64" />
        <img className='ava-logo' slot="media" src="assets/vivnpay/svg/logo/ava-logo-viet-duc.svg" width="24" />
        <Link href="/schedule-detail2/" slot='root-start' className='item-top'>
        <Row className='item-bottom item-bottom-nobor'>
          <Col width="55">
            <div className='font-size-12 color-subtitle'>Bệnh nhân</div>
            <div className='medium'>Nguyễn Văn A</div>
            </Col>
            <Col width="45" className='text-right'>
            <span className="badge color-success mr6">Đã khám</span>
            <Icon icon="icon32 icons-ic32px-arrow-right"></Icon>
            </Col>            
          </Row>
        </Link>        
      </ListItem>
      <ListItem link="/schedule-detail3/" title="Bs. Lê Công Tuấn Anh" subtitle="Cơ xương khớp" text="Bệnh viện Hữu Nghị Việt Đức">
        <img className='ava img-64' slot="media" src="assets/vivnpay/demo/ava3.jpg" width="64" />
        <img className='ava-logo' slot="media" src="assets/vivnpay/svg/logo/ava-logo-viet-duc.svg" width="24" />
        <Link href="/schedule-detail3/" slot='root-start' className='item-top'>
        <Row className='item-bottom item-bottom-nobor'>
          <Col width="55">
            <div className='font-size-12 color-subtitle'>Bệnh nhân</div>
            <div className='medium'>Nguyễn Văn A</div>
            </Col>
            <Col width="45" className='text-right'>
            <span className="badge color-danger mr6">Đã hủy</span>
            <Icon icon="icon32 icons-ic32px-arrow-right"></Icon>
            </Col>            
          </Row>
        </Link>        
      </ListItem>
      <ListItem link="/schedule-detail3/" title="Gói khám tổng quát" text="Bệnh viện Hữu Nghị Việt Đức">
        <img className='ava img-64' slot="media" src="assets/vivnpay/demo/ava8.jpg" width="64" />
        <img className='ava-logo' slot="media" src="assets/vivnpay/svg/logo/ava-logo-viet-duc.svg" width="24" />
        <Link href="/schedule-detail2/" slot='root-start' className='item-top'>
        <Row className='item-bottom item-bottom-nobor'>
          <Col width="55">
            <div className='font-size-12 color-subtitle'>Bệnh nhân</div>
            <div className='medium'>Nguyễn Văn A</div>
            </Col>
            <Col width="45" className='text-right'>
            <span className="badge color-success mr6">Đang xử lý</span>
            <Icon icon="icon32 icons-ic32px-arrow-right"></Icon>
            </Col>            
          </Row> 
        </Link>             
      </ListItem>        
    </List>
    </Block>
      </Tab>
    </Tabs>
  </Page>
);
export default SchedulePage;