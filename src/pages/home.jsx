import React from 'react';
import {
  Page,Navbar,NavLeft,NavTitle,NavRight,Link,Icon,Toolbar,Block,BlockTitle,List,ListItem,Row,Col,Swiper, SwiperSlide,Button,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from 'framework7-react';
const HomePage = () => (
<Page name="home" className='homepage'>
<Navbar large sliding={false} className='header-tran navbar-show-title'>
    <NavLeft>
      <Link><Icon icon="icon24 icons-ic24px-back"></Icon></Link>
    </NavLeft>
    <NavTitle className='text-center'>
    Dịch vụ y tế
    </NavTitle>
    <NavRight>  
    <Link href="/home-search/" to="/home-search"><Icon icon="icon24 icons-ic24px-search"></Icon></Link>
    <Link href="/tro-giup/"><Icon icon="icon24 icons-ic24px-help"></Icon></Link>
    </NavRight>
  </Navbar>
  <Toolbar tabbar labels bottom>
    <Link className='icons-tab icons-tab1' tabLink="#view-home" tabLinkActive iconIos="icons-tab1" text="Trang chủ" />
    <Link className='icons-tab icons-tab2' tabLink="#view-schedule" iconIos="icons-tab2" text="Lịch khám" />
    <Link className='icons-tab icons-tab3' tabLink="#view-favourite" iconIos="icons-tab3" text="Yêu thích" />
    <Link className='icons-tab icons-tab4' tabLink="#view-phonebook" iconIos="icons-tab4" text="Thông tin" />
  </Toolbar>
    {/* Page content */}
    <Swiper pagination className='swiper-home'>
      <SwiperSlide>
        <div className='box-banner relative'>
        <img src="assets/vivnpay/demo/banner/banner-home1.png" width="100%" />      
      <Block className='box-banner-txt'>
      <Row>
        <Col><BlockTitle className='white-space-auto font-size-24 bold line-height-32'>Cho cuộc sống mạnh khỏe hơn</BlockTitle></Col>
      </Row>
      </Block>
        </div>      
      </SwiperSlide>
    </Swiper>
    <Block className='box-item-home box box-bor'>
    <Block className='box-item-home-top box'>
    <div className='font-size-14 color-white'>Đặt khám theo</div>
    </Block>

    <Block className='box-cont'>
      <Row noGap>
      <Col>
        <Link href="/co-so-ye-te/" className='color-main display-block text-center'><Icon icon="icon56 icons-ic64px-health-facilities"></Icon>
        <div className='font-size-16 medium pt8'>Cơ sở y tế</div>
        </Link>
        </Col>
        <Col>
        <Link href="/goi-kham/" className='color-main display-block text-center'><Icon icon="icon56 icons-ic64px-package"></Icon>
        <div className='font-size-16 medium pt8'>Gói khám</div>
        </Link>
        </Col>
      </Row>
      </Block>
      </Block>
    
    <Block className='box-search box-schedule'> 
    <BlockTitle className='block'>
        <Row>
        <Col width="70" className='white-space-normal'>Lịch khám sắp tới</Col>
        <Col width="30" className='text-right'><Link href="/schedule/" className='font-size-14 regula'>Xem tất cả</Link></Col>
        </Row>
      </BlockTitle>           
    <List mediaList className="search-list searchbar-found search-list-style search-list-bor bg-item-content-gray">
    <ListItem className='active' link="/schedule-detail/" title="Bs. Lê Công Tuấn Anh" subtitle="Cơ xương khớp" text="Bệnh viện Hữu Nghị Việt Đức">
        <img className='ava img-64' slot="media" src="assets/vivnpay/demo/ava3.jpg" width="64" />
        <img className='ava-logo' slot="media" src="assets/vivnpay/svg/logo/ava-logo-viet-duc.svg" width="24" />
        <Link href="/schedule-detail/" slot='root-start' className='item-top'>
        <Row className='item-bottom item-bottom-nobor'>
          <Col width="60">
            <div className='font-size-12 color-subtitle'>Bệnh nhân</div>
            <div className='medium'>Nguyễn Văn A</div>
            </Col>
            <Col width="40" className='text-right'>
            <Link className='width-auto'><Icon icon="icon24 icons-ic24px-add filter-white"></Icon></Link>
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
    </List>
    </Block>

      <Block className='box-item box-package'>
      <BlockTitle>
        <Row>
        <Col width="70" className='white-space-normal'>Gói khám nổi bật</Col>
        <Col width="30" className='text-right'><Link href="/goi-kham/" className='font-size-14 regula'>Xem tất cả</Link></Col>
        </Row>
      </BlockTitle>
      <Swiper pagination className='swiper-default'>
      <SwiperSlide>
          <Card className="card-pic">
            <CardContent className='no-padding'>
            <img src="assets/vivnpay/demo/img1.png" width="100%" />
            </CardContent>
            <CardFooter className='align-items-center no-border'>
              <div className='col color-main'>Gói khám sức khỏe hậu Covid</div>
              <Button href="/goi-kham-detail/" className="col min-width-100" fill color="default">Đặt  khám</Button>
            </CardFooter>
          </Card>                
      </SwiperSlide>
      <SwiperSlide>
          <Card className="card-pic">
            <CardContent className='no-padding'>
            <img src="assets/vivnpay/demo/img2.png" width="100%" />
            </CardContent>
            <CardFooter className='align-items-center no-border'>
              <div className='col color-main'>Gói khám sức khỏe hậu Covid</div>
              <Button className="col min-width-100" fill color="default">Đặt  khám</Button>
            </CardFooter>
          </Card>                
      </SwiperSlide>
    </Swiper>
    </Block>
    <Block className='box-item box-facilities'>
      <BlockTitle>
        <Row>
        <Col width="70" className='white-space-normal'>Cơ sở y tế</Col>
        <Col width="30" className='text-right'><Link href="/co-so-ye-te/" className='font-size-14 regula'>Xem tất cả</Link></Col>
        </Row>
      </BlockTitle>
      <Swiper pagination className='swiper-default'>
      <SwiperSlide>
        <Link href="/co-so-ye-te-detail/">
        <Card className="card-pic">
      <CardHeader className="no-border no-padding">
      <div className='pic'>
              <img src="assets/vivnpay/demo/img2.png" width="100%" />
              </div>
              <div className='logo-facilities'>
              <img src="assets/vivnpay/svg/logo/logo-vinmec.svg" width="40" />
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
              <img src="assets/vivnpay/demo/img2.png" width="100%" />
              </div>
              <div className='logo-facilities'>
              <img src="assets/vivnpay/svg/logo/logo-vinmec.svg" width="40" />
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
    <Block className='box-item box-wait' style={{
          display:'',
        }}>
      <BlockTitle>
        <Row>
        <Col width="70" className='white-space-normal'>Giao dịch đang chờ bạn</Col>
        <Col width="30" className='text-right'><Link href="/co-so-ye-te/" className='font-size-14 regula'>Xóa tất cả</Link></Col>
        </Row>
      </BlockTitle>
      <Swiper speed={500} slidesPerView={1.2} spaceBetween={16} className='swiper-2'>
      <SwiperSlide>
      <List mediaList className="search-list searchbar-found search-list-style search-list-bor">
    <ListItem className='no-margin' title="Bs. Lê Công Tuấn Anh" subtitle="Cơ xương khớp" text="Bệnh viện Hữu Nghị Việt Đức">
        <img className='ava img-64' slot="media" src="assets/vivnpay/demo/ava3.jpg" width="64" />
        <img className='ava-logo' slot="media" src="assets/vivnpay/svg/logo/ava-logo-viet-duc.svg" width="24" />
        <Link slot='after'><Icon icon="icon24 icons-ic24px-add"></Icon></Link>
        <Row slot='root' className='item-bottom'>
          <Col>
            <div className='font-size-14'>Phí dịch vụ</div>
            <div className='medium color-primary'>560,000<sub>đ</sub></div>
            </Col>
            <Col>
            <Button href="/xac-nhan-thong-tin/" fill color="default">Thanh toán</Button>
            </Col>            
          </Row>
      </ListItem>
      </List>          
      </SwiperSlide>
      <SwiperSlide>
      <List mediaList className="search-list searchbar-found search-list-style search-list-bor">
    <ListItem className='no-margin' title="Bs. Đào Công tuấn" subtitle="Cơ xương khớp" text="Bệnh viện Hữu Nghị Việt Đức">
        <img className='ava img-64' slot="media" src="assets/vivnpay/demo/ava4.jpg" width="64" />
        <img className='ava-logo' slot="media" src="assets/vivnpay/svg/logo/ava-logo-viet-duc.svg" width="24" />
        <Link slot='after'><Icon icon="icon24 icons-ic24px-add"></Icon></Link>
        <Row slot='root' className='item-bottom'>
          <Col>
            <div className='font-size-14'>Phí dịch vụ</div>
            <div className='medium color-primary'>560,000<sub>đ</sub></div>
            </Col>
            <Col>
            <Button href="/xac-nhan-thong-tin/" fill color="default">Thanh toán</Button>
            </Col>            
          </Row>
      </ListItem>
      </List>          
      </SwiperSlide>
    </Swiper>
    </Block>
</Page>
);
export default HomePage;