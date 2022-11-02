import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Page,Navbar,NavLeft,NavTitle,NavTitleLarge,NavRight,Link,Icon,Badge,Toolbar,Tabs, Tab,Block,BlockTitle,List,ListItem,Row,Col,Swiper, SwiperSlide,Button,
  Card,
  CardHeader,
  CardContent,Accordion,
  CardFooter,
} from 'framework7-react';

const HomePage = () => (
<Page name="home" className='homepage'>
<Navbar large sliding={false} className='header-tran navbar-show-title'>
    <NavLeft>
      <Link><Icon icon="icon24 icons-ic24px-back"></Icon></Link>
    </NavLeft>
    <NavTitle className='text-center'>
Home
    </NavTitle>
    <NavRight>  
    <Link href="/home-search/"><Icon icon="icon24 icons-ic24px-search"></Icon></Link>
    <Link><Icon icon="icon24 icons-ic24px-help"></Icon></Link>
    </NavRight>
  </Navbar>
  <Toolbar tabbar labels bottom>
    <Link className='icons-tab icons-tab1' tabLink="#view-home" tabLinkActive iconIos="icons-tab1" text="Trang chủ" />
    <Link className='icons-tab icons-tab2' tabLink="#view-schedule" iconIos="icons-tab2" text="Lịch khám" />
    <Link className='icons-tab icons-tab3' tabLink="#view-favourite" iconIos="icons-tab3" text="Yêu thích" />
    <Link className='icons-tab icons-tab4' tabLink="#view-phonebook" iconIos="icons-tab4" text="Danh bạ" />
  </Toolbar>
    {/* Page content */}
    <Swiper pagination className='swiper-home'>
    <SwiperSlide>
        <div className='box-banner relative'>
        <img src="svg/banner/banner-home1.png" width="100%" />      
      <Block className='box-banner-txt'>
      <Row>
        <Col><BlockTitle className='white-space-auto font-size-24 bold line-height-32'>Chăm sóc sức khỏe toàn diện</BlockTitle></Col>
      </Row>
      </Block>
        </div>      
      </SwiperSlide>
      <SwiperSlide>
        <div className='box-banner relative'>
        <img src="svg/banner/banner-home1.png" width="100%" />      
      <Block className='box-banner-txt'>
      <Row>
        <Col><BlockTitle className='white-space-auto font-size-24 bold line-height-32'>Đăng ký gói khám sức khỏe</BlockTitle></Col>
      </Row>
      </Block>
        </div>      
      </SwiperSlide>
    </Swiper>
  <Button as="a" variant="primary">
    Button as link
  </Button>
  <Button as="a" variant="success">
    Button as link
  </Button>
    <Accordion>
            <div className="accor">
              <div className="head">Head 1</div>
              <div className="body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </div>
            </div>
            <div className="accor">
              <div className="head">Head 2</div>
              <div className="body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </div>
            </div>
          </Accordion>
    <Block className='box-item-home box box-bor'>
    <Block className='box-cont'>
      <Row noGap>
      <Col>
        <Link href="/co-so-ye-te/" className='color-main display-block text-center'><Icon icon="icon64 icons-ic64px-health-facilities"></Icon>
        <div className='font-size-16 medium pt8'>Cơ sở y tế</div>
        </Link>
        </Col>
        <Col>
        <Link href="/goi-kham/" className='color-main display-block text-center'><Icon icon="icon64 icons-ic64px-package"></Icon>
        <div className='font-size-16 medium pt8'>Gói khám</div>
        </Link>
        </Col>
      </Row>
      </Block>
      </Block>

      <Block className='box-item box-package'>
      <BlockTitle>
        <Row>
        <Col width="70" className='white-space-normal'>Gói khám nổi bật</Col>
        <Col width="30" className='text-right'><Link className='font-size-14 regula'>Xem tất cả</Link></Col>
        </Row>
      </BlockTitle>
      <Swiper pagination className='swiper-default'>
      <SwiperSlide>
          <Card className="card-pic">
            <CardContent className='no-padding'>
            <img src="demo/img1.png" width="100%" />
            </CardContent>
            <CardFooter className='align-items-center no-border'>
              <div className='col color-main'>Gói khám sức khỏe hậu Covid</div>
              <Button className="col min-width-100" fill color="primary-light">Đặt  khám</Button>
            </CardFooter>
          </Card>                
      </SwiperSlide>
      <SwiperSlide>
          <Card className="card-pic">
            <CardContent className='no-padding'>
            <img src="demo/img2.png" width="100%" />
            </CardContent>
            <CardFooter className='align-items-center no-border'>
              <div className='col color-main'>Gói khám sức khỏe hậu Covid</div>
              <Button className="col min-width-100" fill color="primary-light">Đặt  khám</Button>
            </CardFooter>
          </Card>                
      </SwiperSlide>
    </Swiper>
    </Block>
    <Block className='box-item box-facilities'>
      <BlockTitle>
        <Row>
        <Col width="70" className='white-space-normal'>Cơ sở y tế</Col>
        <Col width="30" className='text-right'><Link className='font-size-14 regula'>Xem tất cả</Link></Col>
        </Row>
      </BlockTitle>
      <Swiper pagination className='swiper-default'>
      <SwiperSlide>
        <Link href="/co-so-ye-te-detail/">
        <Card className="card-pic">
      <CardHeader className="no-border no-padding">
      <div className='pic'>
              <img src="demo/img2.png" width="100%" />
              </div>
              <div className='logo-facilities'>
              <img src="svg/logo/logo-vinmec.svg" width="40" />
              </div> 
      </CardHeader>
      <CardContent className='align-items-start'>
      <div className='col color-main'>
                <div className='medium title'>Bệnh viện Đa khoa Quốc tế Vinmec</div>
                <div className='font-size-12 color-subtitle'>458 Minh Khai, Khu đô thị Times City, Hai Bà Trưng, ...</div>
                </div>
      </CardContent>
    </Card>
          </Link>           
      </SwiperSlide>
      <SwiperSlide>
        <Link href="/co-so-ye-te-detail/">
        <Card className="card-pic">
      <CardHeader className="no-border no-padding">
      <div className='pic'>
              <img src="demo/img2.png" width="100%" />
              </div>
              <div className='logo-facilities'>
              <img src="svg/logo/logo-vinmec.svg" width="40" />
              </div> 
      </CardHeader>
      <CardContent className='align-items-start'>
      <div className='col color-main'>
                <div className='medium title'>Bệnh viện Đa khoa Quốc tế Vinmec</div>
                <div className='font-size-12 color-subtitle'>458 Minh Khai, Khu đô thị Times City, Hai Bà Trưng, ...</div>
                </div>
      </CardContent>
    </Card>
          </Link>           
      </SwiperSlide>
    </Swiper>
    </Block>
    <BlockTitle>Element</BlockTitle>
    <List>
    <ListItem link="/typo/" title="Typo"/>
    <ListItem link="/icons/" title="Icons"/>
    <ListItem link="/form/" title="Form, List, Badge"/>
    <ListItem link="/card/" title="Card"/>
    <ListItem link="/button/" title="Button"/>
      <ListItem link="/accordion/" title="Accordion"/>
      <ListItem link="/action-sheet/" title="Action Sheet"/>
    </List>    

</Page>
);
export default HomePage;