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
  } from 'framework7-react';

const SchedulePage = () => (
            <Page hideToolbarOnScroll pageContent={false} name="SchedulePage" className='schedule-page'>
    <Navbar title="Lịch khám" backLink="Back">
      <Subnavbar>
        <Segmented raised>
          <Button tabLink="#schedule-tab1" tabLinkActive>Chờ khám</Button>
          <Button tabLink="#schedule-tab2">Đã khám</Button>
          <Button tabLink="#schedule-tab3">Đã hủy</Button>
        </Segmented>
      </Subnavbar>
    </Navbar>    
    <Toolbar tabbar labels bottom>
    <Link className='icons-tab icons-tab1' tabLink="#view-home" iconIos="icons-tab1" text="Trang chủ" />
    <Link className='icons-tab icons-tab2' tabLink="#view-schedule" tabLinkActive iconIos="icons-tab2" text="Lịch khám" />
    <Link className='icons-tab icons-tab4' tabLink="#view-phonebook" iconIos="icons-tab4" text="Thông tin" />
  </Toolbar>
    <Tabs>
      <Tab id="schedule-tab1" tabActive className="page-content">
      <Block className='box-search'>
    <List mediaList className="search-list searchbar-found search-list-style search-list-bor bg-item-content-gray">
    <ListItem className='active' link="/schedule-detail-cho-kham-dang-xu-ly/" title="Bs. Lê Công Tuấn Anh" subtitle="Cơ xương khớp">
        <img className='ava img-64' slot="media" src="assets/vivnpay/demo/ava3.jpg" width="64" />
        <img className='ava-logo' slot="media" src="assets/vivnpay/svg/logo/ava-logo-viet-duc.svg" width="24" />
        <Link href="/schedule-detail-cho-kham-dang-xu-ly/" slot='root-start' className='item-top'>
        <Row className='item-bottom item-bottom-nobor'>
          <Col width="55">
            <div className='font-size-12 color-subtitle'>Người khám</div>
            <div className='medium'>Nguyễn Văn A</div>
            </Col>
            <Col width="45" className='text-right'>
            <span className="badge color-default">Đang xử lý</span>
            <Icon icon="icon24 icons-ic24px-arrow-right"></Icon>
            </Col>
          </Row>
          <Row noGap className='item-time'>            
        <Col className='col-left line-right'>
        <Button href="/schedule-detail-cho-kham-dang-xu-ly/" fill color='white-light'><Icon icon="icon24 icons-ic24px-calendar filter-white"></Icon> <span className='button-txt'>12/08/2022</span></Button>
        </Col>
        <Col className='col-right'>
        <Button href="/schedule-detail-cho-kham-dang-xu-ly/" fill color='white-light'><Icon icon="icon24 icons-ic24px-clock filter-white"></Icon> <span className='button-txt'>10-11 giờ</span></Button>
        </Col>
      </Row>
        </Link>    
        <div slot='subtitle'>
        <div className='subtitle-top color-main'>Bệnh viện Hữu Nghị Việt Đức</div>
        <div className='subtitle-bottom'>Số 105 giải phóng, Q.Đống đa Hà...</div>        
          </div>
      </ListItem>
      <ListItem className='active' link="/schedule-detail-cho-kham-da-dat-lich/" title="Bs. Lê Công Tuấn Anh" subtitle="Cơ xương khớp">
        <img className='ava img-64' slot="media" src="assets/vivnpay/demo/ava3.jpg" width="64" />
        <img className='ava-logo' slot="media" src="assets/vivnpay/svg/logo/ava-logo-viet-duc.svg" width="24" />
        <Link href="/schedule-detail-cho-kham-da-dat-lich/" slot='root-start' className='item-top'>
        <Row className='item-bottom item-bottom-nobor'>
          <Col width="55">
            <div className='font-size-12 color-subtitle'>Người khám</div>
            <div className='medium'>Nguyễn Văn A</div>
            </Col>
            <Col width="45" className='text-right'>
            <span className="badge color-success">Đã đặt lịch</span>
            <Icon icon="icon24 icons-ic24px-arrow-right"></Icon>
            </Col>
          </Row>
          <Row noGap className='item-time'>            
        <Col className='col-left line-right'>
        <Button href="/schedule-detail-cho-kham-da-dat-lich/" fill color='white-light'><Icon icon="icon24 icons-ic24px-calendar filter-white"></Icon> <span className='button-txt'>12/08/2022</span></Button>
        </Col>
        <Col className='col-right'>
        <Button href="/schedule-detail-cho-kham-da-dat-lich/" fill color='white-light'><Icon icon="icon24 icons-ic24px-clock filter-white"></Icon> <span className='button-txt'>10-11 giờ</span></Button>
        </Col>
      </Row>
        </Link>    
        <div slot='subtitle'>
        <div className='subtitle-top color-main'>Bệnh viện Hữu Nghị Việt Đức</div>
        <div className='subtitle-bottom'>Số 105 giải phóng, Q.Đống đa Hà...</div>        
          </div>
      </ListItem>
      <ListItem className='active' link="/schedule-detail-cho-kham-da-qua-han/" title="Bs. Lê Công Tuấn Anh" subtitle="Cơ xương khớp">
        <img className='ava img-64' slot="media" src="assets/vivnpay/demo/ava3.jpg" width="64" />
        <img className='ava-logo' slot="media" src="assets/vivnpay/svg/logo/ava-logo-viet-duc.svg" width="24" />
        <Link href="/schedule-detail-cho-kham-da-qua-han/" slot='root-start' className='item-top'>
        <Row className='item-bottom item-bottom-nobor'>
          <Col width="55">
            <div className='font-size-12 color-subtitle'>Người khám</div>
            <div className='medium'>Nguyễn Văn A</div>
            </Col>
            <Col width="45" className='text-right'>
            <span className="badge color-danger">Đã quá hạn</span>
            <Icon icon="icon24 icons-ic24px-arrow-right"></Icon>
            </Col>
          </Row>
          <Row noGap className='item-time'>            
        <Col className='col-left line-right'>
        <Button href="/schedule-detail-cho-kham-da-qua-han/" fill color='white-light'><Icon icon="icon24 icons-ic24px-calendar filter-white"></Icon> <span className='button-txt'>12/08/2022</span></Button>
        </Col>
        <Col className='col-right'>
        <Button href="/schedule-detail-cho-kham-da-qua-han/" fill color='white-light'><Icon icon="icon24 icons-ic24px-clock filter-white"></Icon> <span className='button-txt'>10-11 giờ</span></Button>
        </Col>
      </Row>
        </Link>    
        <div slot='subtitle'>
        <div className='subtitle-top color-main'>Bệnh viện Hữu Nghị Việt Đức</div>
        <div className='subtitle-bottom'>Số 105 giải phóng, Q.Đống đa Hà...</div>        
          </div>
      </ListItem>
      <ListItem className='active' link="/schedule-detail-cho-kham1/" title="Bs. Lê Công Tuấn Anh" subtitle="Cơ xương khớp">
        <img className='ava img-64' slot="media" src="assets/vivnpay/demo/ava3.jpg" width="64" />
        <img className='ava-logo' slot="media" src="assets/vivnpay/svg/logo/ava-logo-viet-duc.svg" width="24" />
        <Link href="/schedule-detail-cho-kham1/" slot='root-start' className='item-top'>
        <Row className='item-bottom item-bottom-nobor'>
          <Col width="55">
            <div className='font-size-12 color-subtitle'>Người khám</div>
            <div className='medium'>Nguyễn Văn A</div>
            </Col>
            <Col width="45" className='text-right'>
            <Icon icon="icon24 icons-ic24px-arrow-right"></Icon>
            </Col>
          </Row>
          <Row noGap className='item-time'>            
        <Col className='col-left line-right'>
        <Button href="/schedule-detail-cho-kham1/" fill color='white-light'><Icon icon="icon24 icons-ic24px-calendar filter-white"></Icon> <span className='button-txt'>12/08/2022</span></Button>
        </Col>
        <Col className='col-right'>
        <Button href="/schedule-detail-cho-kham1/" fill color='white-light'><Icon icon="icon24 icons-ic24px-clock filter-white"></Icon> <span className='button-txt'>10-11 giờ</span></Button>
        </Col>
      </Row>
        </Link>    
        <div slot='subtitle'>
        <div className='subtitle-top color-main'>Bệnh viện Hữu Nghị Việt Đức</div>
        <div className='subtitle-bottom'>Số 105 giải phóng, Q.Đống đa Hà...</div>        
          </div>
          <Link href="/schedule-detail-cho-kham1/" slot='root-end' className='list-bottom'>
          <Row className='box-state bg-default border-radius4'>
          <Col width="80">
            <div className='font-size-14'><Icon icon="icon24 icons-ic24px-chart filter-primary"></Icon> <span className='button-txt'>Liệu trình đã khám</span></div>
            </Col>
            <Col width="20" className='text-right'>
            <div className='bold font-size-14 color-primary'>4/5</div>
            </Col>            
          </Row>
          </Link>
            
      </ListItem>
      <ListItem className='active' link="/schedule-detail-cho-kham2/" title="Bs. Lê Công Tuấn Anh" subtitle="Cơ xương khớp">
        <img className='ava img-64' slot="media" src="assets/vivnpay/demo/ava3.jpg" width="64" />
        <img className='ava-logo' slot="media" src="assets/vivnpay/svg/logo/ava-logo-viet-duc.svg" width="24" />
        <Link href="/schedule-detail-cho-kham2/" slot='root-start' className='item-top'>
        <Row className='item-bottom item-bottom-nobor'>
          <Col width="55">
            <div className='font-size-12 color-subtitle'>Người khám</div>
            <div className='medium'>Nguyễn Văn A</div>
            </Col>
            <Col width="45" className='text-right'>
            <span className="badge badge-white">Chưa đặt lịch</span>
            <Icon icon="icon24 icons-ic24px-arrow-right"></Icon>
            </Col>
          </Row>
          <Row noGap className='item-time'>            
        <Col className='col-left line-right'>
        <Button href="/schedule-detail-cho-kham2/" fill color='white-light'><Icon icon="icon24 icons-ic24px-calendar filter-white"></Icon> <span className='button-txt'>12/08/2022</span></Button>
        </Col>
        <Col className='col-right'>
        <Button href="/schedule-detail-cho-kham2/" fill color='white-light'><Icon icon="icon24 icons-ic24px-clock filter-white"></Icon> <span className='button-txt'>10-11 giờ</span></Button>
        </Col>
      </Row>
        </Link>    
        <div slot='subtitle'>
        <div className='subtitle-top color-main'>Bệnh viện Hữu Nghị Việt Đức</div>
        <div className='subtitle-bottom'>Số 105 giải phóng, Q.Đống đa Hà...</div>        
          </div>
          <Link href="/schedule-detail-cho-kham2/" slot='root-end' className='list-bottom'>
          <Row className='box-state bg-default border-radius4'>
          <Col width="80">
            <div className='font-size-14'><Icon icon="icon24 icons-ic24px-chart filter-primary"></Icon> <span className='button-txt'>Liệu trình đã khám</span></div>
            </Col>
            <Col width="20" className='text-right'>
            <div className='bold font-size-14 color-primary'>4/5</div>
            </Col>            
          </Row>
          </Link>            
      </ListItem>
      <ListItem className='active' link="/schedule-detail-cho-kham3/" title="Bs. Lê Công Tuấn Anh" subtitle="Cơ xương khớp">
        <img className='ava img-64' slot="media" src="assets/vivnpay/demo/ava3.jpg" width="64" />
        <img className='ava-logo' slot="media" src="assets/vivnpay/svg/logo/ava-logo-viet-duc.svg" width="24" />
        <Link href="/schedule-detail-cho-kham3/" slot='root-start' className='item-top'>
        <Row className='item-bottom item-bottom-nobor'>
          <Col width="55">
            <div className='font-size-12 color-subtitle'>Người khám</div>
            <div className='medium'>Nguyễn Văn A</div>
            </Col>
            <Col width="45" className='text-right'>
            <span className="badge color-success">Đã đặt lịch</span>
            <Icon icon="icon24 icons-ic24px-arrow-right"></Icon>
            </Col>
          </Row>
          <Row noGap className='item-time'>            
        <Col className='col-left line-right'>
        <Button href="/schedule-detail-cho-kham3/" fill color='white-light'><Icon icon="icon24 icons-ic24px-calendar filter-white"></Icon> <span className='button-txt'>12/08/2022</span></Button>
        </Col>
        <Col className='col-right'>
        <Button href="/schedule-detail-cho-kham3/" fill color='white-light'><Icon icon="icon24 icons-ic24px-clock filter-white"></Icon> <span className='button-txt'>10-11 giờ</span></Button>
        </Col>
      </Row>
        </Link>    
        <div slot='subtitle'>
        <div className='subtitle-top color-main'>Bệnh viện Hữu Nghị Việt Đức</div>
        <div className='subtitle-bottom'>Số 105 giải phóng, Q.Đống đa Hà...</div>        
          </div>
          <Link href="/schedule-detail-cho-kham3/" slot='root-end' className='list-bottom'>
          <Row className='box-state bg-default border-radius4'>
          <Col width="80">
            <div className='font-size-14'><Icon icon="icon24 icons-ic24px-chart filter-primary"></Icon> <span className='button-txt'>Liệu trình đã khám</span></div>
            </Col>
            <Col width="20" className='text-right'>
            <div className='bold font-size-14 color-primary'>4/5</div>
            </Col>            
          </Row>
          </Link>            
      </ListItem>
      <ListItem className='active' link="/schedule-detail-cho-kham4/" title="Bs. Lê Công Tuấn Anh" subtitle="Cơ xương khớp">
        <img className='ava img-64' slot="media" src="assets/vivnpay/demo/ava3.jpg" width="64" />
        <img className='ava-logo' slot="media" src="assets/vivnpay/svg/logo/ava-logo-viet-duc.svg" width="24" />
        <Link href="/schedule-detail-cho-kham4/" slot='root-start' className='item-top'>
        <Row className='item-bottom item-bottom-nobor'>
          <Col width="55">
            <div className='font-size-12 color-subtitle'>Người khám</div>
            <div className='medium'>Nguyễn Văn A</div>
            </Col>
            <Col width="45" className='text-right'>
            <span className="badge color-default">Đang xử lý</span>
            <Icon icon="icon24 icons-ic24px-arrow-right"></Icon>
            </Col>
          </Row>
          <Row noGap className='item-time'>            
        <Col className='col-left line-right'>
        <Button href="/schedule-detail-cho-kham4/" fill color='white-light'><Icon icon="icon24 icons-ic24px-calendar filter-white"></Icon> <span className='button-txt'>12/08/2022</span></Button>
        </Col>
        <Col className='col-right'>
        <Button href="/schedule-detail-cho-kham4/" fill color='white-light'><Icon icon="icon24 icons-ic24px-clock filter-white"></Icon> <span className='button-txt'>10-11 giờ</span></Button>
        </Col>
      </Row>
        </Link>    
        <div slot='subtitle'>
        <div className='subtitle-top color-main'>Bệnh viện Hữu Nghị Việt Đức</div>
        <div className='subtitle-bottom'>Số 105 giải phóng, Q.Đống đa Hà...</div>        
          </div>
          <Link href="/schedule-detail-cho-kham4/" slot='root-end' className='list-bottom'>
          <Row className='box-state bg-default border-radius4'>
          <Col width="80">
            <div className='font-size-14'><Icon icon="icon24 icons-ic24px-chart filter-primary"></Icon> <span className='button-txt'>Liệu trình đã khám</span></div>
            </Col>
            <Col width="20" className='text-right'>
            <div className='bold font-size-14 color-primary'>4/5</div>
            </Col>            
          </Row>
          </Link>            
      </ListItem>
      <ListItem className='active' link="/schedule-detail-cho-kham5/" title="Bs. Lê Công Tuấn Anh" subtitle="Cơ xương khớp">
        <img className='ava img-64' slot="media" src="assets/vivnpay/demo/ava3.jpg" width="64" />
        <img className='ava-logo' slot="media" src="assets/vivnpay/svg/logo/ava-logo-viet-duc.svg" width="24" />
        <Link href="/schedule-detail-cho-kham5/" slot='root-start' className='item-top'>
        <Row className='item-bottom item-bottom-nobor'>
          <Col width="55">
            <div className='font-size-12 color-subtitle'>Người khám</div>
            <div className='medium'>Nguyễn Văn A</div>
            </Col>
            <Col width="45" className='text-right'>
            <span className="badge color-danger">Đã quá hạn</span>
            <Icon icon="icon24 icons-ic24px-arrow-right"></Icon>
            </Col>
          </Row>
          <Row noGap className='item-time'>            
        <Col className='col-left line-right'>
        <Button href="/schedule-detail-cho-kham5/" fill color='white-light'><Icon icon="icon24 icons-ic24px-calendar filter-white"></Icon> <span className='button-txt'>12/08/2022</span></Button>
        </Col>
        <Col className='col-right'>
        <Button href="/schedule-detail-cho-kham5/" fill color='white-light'><Icon icon="icon24 icons-ic24px-clock filter-white"></Icon> <span className='button-txt'>10-11 giờ</span></Button>
        </Col>
      </Row>
        </Link>    
        <div slot='subtitle'>
        <div className='subtitle-top color-main'>Bệnh viện Hữu Nghị Việt Đức</div>
        <div className='subtitle-bottom'>Số 105 giải phóng, Q.Đống đa Hà...</div>        
          </div>
          <Link href="/schedule-detail-cho-kham5/" slot='root-end' className='list-bottom'>
          <Row className='box-state bg-default border-radius4'>
          <Col width="80">
            <div className='font-size-14'><Icon icon="icon24 icons-ic24px-chart filter-primary"></Icon> <span className='button-txt'>Liệu trình đã khám</span></div>
            </Col>
            <Col width="20" className='text-right'>
            <div className='bold font-size-14 color-primary'>4/5</div>
            </Col>            
          </Row>
          </Link>            
      </ListItem>     
    </List>
    </Block>
      </Tab>
      <Tab id="schedule-tab2" className="page-content">
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
    <ListItem className='default-border' link="/schedule-detail-da-kham/" title="Bs. Lê Công Tuấn Anh" subtitle="Cơ xương khớp">
        <img className='ava img-64' slot="media" src="assets/vivnpay/demo/ava3.jpg" width="64" />
        <img className='ava-logo' slot="media" src="assets/vivnpay/svg/logo/ava-logo-viet-duc.svg" width="24" />
        <Link href="/schedule-detail-da-kham/" slot='root-start' className='item-top'>
        <Row className='item-bottom item-bottom-nobor'>
          <Col width="55">
            <div className='font-size-12 color-subtitle'>Người khám</div>
            <div className='medium'>Nguyễn Văn A</div>
            </Col>
            <Col width="45" className='text-right'>
            <Icon icon="icon24 icons-ic24px-arrow-right"></Icon>
            </Col>
          </Row>
          <Row noGap className='item-time'>            
        <Col className='col-left line-right'>
        <Button href="/schedule-detail-da-kham/" fill color='white-light'><Icon icon="icon24 icons-ic24px-calendar filter-white"></Icon> <span className='button-txt'>12/08/2022</span></Button>
        </Col>
        <Col className='col-right'>
        <Button href="/schedule-detail-da-kham/" fill color='white-light'><Icon icon="icon24 icons-ic24px-clock filter-white"></Icon> <span className='button-txt'>10-11 giờ</span></Button>
        </Col>
      </Row>
        </Link>    
        <div slot='subtitle'>
        <div className='subtitle-top color-main'>Bệnh viện Hữu Nghị Việt Đức</div>
        <div className='subtitle-bottom'>Số 105 giải phóng, Q.Đống đa Hà...</div>        
          </div>
          <Link href="/schedule-detail-da-kham/" slot='root-end' className='list-bottom'>
          <Row className='box-state bg-green border-radius4'>
          <Col width="80">
            <div className='font-size-14'><Icon icon="icon24 icons-ic24px-check ic-mask color-green"></Icon> <span className='button-txt color-green'>Liệu trình đã khám</span></div>
            </Col>
            <Col width="20" className='text-right'>
            <div className='bold font-size-14 color-green'>4/5</div>
            </Col>            
          </Row>
          </Link>
            
      </ListItem>
      <ListItem className='default-border' link="/schedule-detail-da-kham-1buoi/" title="Bs. Lê Công Tuấn Anh" subtitle="Cơ xương khớp">
        <img className='ava img-64' slot="media" src="assets/vivnpay/demo/ava3.jpg" width="64" />
        <img className='ava-logo' slot="media" src="assets/vivnpay/svg/logo/ava-logo-viet-duc.svg" width="24" />
        <Link href="/schedule-detail-da-kham-1buoi/" slot='root-start' className='item-top'>
        <Row className='item-bottom item-bottom-nobor'>
          <Col width="55">
            <div className='font-size-12 color-subtitle'>Người khám</div>
            <div className='medium'>Nguyễn Văn A</div>
            </Col>
            <Col width="45" className='text-right'>
            <Icon icon="icon24 icons-ic24px-arrow-right"></Icon>
            </Col>
          </Row>
          <Row noGap className='item-time'>            
        <Col className='col-left line-right'>
        <Button href="/schedule-detail-da-kham-1buoi/" fill color='white-light'><Icon icon="icon24 icons-ic24px-calendar filter-white"></Icon> <span className='button-txt'>12/08/2022</span></Button>
        </Col>
        <Col className='col-right'>
        <Button href="/schedule-detail-da-kham-1buoi/" fill color='white-light'><Icon icon="icon24 icons-ic24px-clock filter-white"></Icon> <span className='button-txt'>10-11 giờ</span></Button>
        </Col>
      </Row>
        </Link>    
        <div slot='subtitle'>
        <div className='subtitle-top color-main'>Bệnh viện Hữu Nghị Việt Đức</div>
        <div className='subtitle-bottom'>Số 105 giải phóng, Q.Đống đa Hà...</div>        
          </div>
      </ListItem>    
    </List>
    </Block>
      </Tab>
      <Tab id="schedule-tab3" className="page-content">
      <Block className='box-search'>
    <List mediaList className="search-list searchbar-found search-list-style search-list-bor bg-item-content-gray">
      <ListItem className='default-border' link="/schedule-detail-da-huy-1buoi/" title="Bs. Lê Công Tuấn Anh" subtitle="Cơ xương khớp">
        <img className='ava img-64' slot="media" src="assets/vivnpay/demo/ava3.jpg" width="64" />
        <img className='ava-logo' slot="media" src="assets/vivnpay/svg/logo/ava-logo-viet-duc.svg" width="24" />
        <Link href="/schedule-detail-da-huy-1buoi/" slot='root-start' className='item-top'>
        <Row className='item-bottom item-bottom-nobor'>
          <Col width="55">
            <div className='font-size-12 color-subtitle'>Người khám</div>
            <div className='medium'>Nguyễn Văn A</div>
            </Col>
            <Col width="45" className='text-right'>
            <Icon icon="icon24 icons-ic24px-arrow-right"></Icon>
            </Col>
          </Row>
          <Row noGap className='item-time'>            
        <Col className='col-left line-right'>
        <Button href="/schedule-detail-da-huy-1buoi/" fill color='white-light'><Icon icon="icon24 icons-ic24px-calendar filter-white"></Icon> <span className='button-txt'>12/08/2022</span></Button>
        </Col>
        <Col className='col-right'>
        <Button href="/schedule-detail-da-huy-1buoi/" fill color='white-light'><Icon icon="icon24 icons-ic24px-clock filter-white"></Icon> <span className='button-txt'>10-11 giờ</span></Button>
        </Col>
      </Row>
        </Link>    
        <div slot='subtitle'>
        <div className='subtitle-top color-main'>Bệnh viện Hữu Nghị Việt Đức</div>
        <div className='subtitle-bottom'>Số 105 giải phóng, Q.Đống đa Hà...</div>        
          </div>
      </ListItem>
      <ListItem className='default-border' link="/schedule-detail-da-huy1/" title="Bs. Lê Công Tuấn Anh" subtitle="Cơ xương khớp">
        <img className='ava img-64' slot="media" src="assets/vivnpay/demo/ava3.jpg" width="64" />
        <img className='ava-logo' slot="media" src="assets/vivnpay/svg/logo/ava-logo-viet-duc.svg" width="24" />
        <Link href="/schedule-detail-da-huy1/" slot='root-start' className='item-top'>
        <Row className='item-bottom item-bottom-nobor'>
          <Col width="55">
            <div className='font-size-12 color-subtitle'>Người khám</div>
            <div className='medium'>Nguyễn Văn A</div>
            </Col>
            <Col width="45" className='text-right'>
            <span className="badge color-default">Đang xử lý</span>
            <Icon icon="icon24 icons-ic24px-arrow-right"></Icon>
            </Col>
          </Row>
          <Row noGap className='item-time'>            
        <Col className='col-left line-right'>
        <Button href="/schedule-detail-da-huy1/" fill color='white-light'><Icon icon="icon24 icons-ic24px-calendar filter-white"></Icon> <span className='button-txt'>12/08/2022</span></Button>
        </Col>
        <Col className='col-right'>
        <Button href="/schedule-detail-da-huy1/" fill color='white-light'><Icon icon="icon24 icons-ic24px-clock filter-white"></Icon> <span className='button-txt'>10-11 giờ</span></Button>
        </Col>
      </Row>
        </Link>    
        <div slot='subtitle'>
        <div className='subtitle-top color-main'>Bệnh viện Hữu Nghị Việt Đức</div>
        <div className='subtitle-bottom'>Số 105 giải phóng, Q.Đống đa Hà...</div>        
          </div>
          <Link href="/schedule-detail-da-huy1/" slot='root-end' className='list-bottom'>
          <Row className='box-state bg-default border-radius4'>
          <Col width="80">
            <div className='font-size-14'><Icon icon="icon24 icons-ic24px-chart filter-primary"></Icon> <span className='button-txt'>Liệu trình đã khám</span></div>
            </Col>
            <Col width="20" className='text-right'>
            <div className='bold font-size-14 color-primary'>4/5</div>
            </Col>            
          </Row>
          </Link>            
      </ListItem>
      <ListItem className='default-border' link="/schedule-detail-da-huy2/" title="Bs. Lê Công Tuấn Anh" subtitle="Cơ xương khớp">
        <img className='ava img-64' slot="media" src="assets/vivnpay/demo/ava3.jpg" width="64" />
        <img className='ava-logo' slot="media" src="assets/vivnpay/svg/logo/ava-logo-viet-duc.svg" width="24" />
        <Link href="/schedule-detail-da-huy2/" slot='root-start' className='item-top'>
        <Row className='item-bottom item-bottom-nobor'>
          <Col width="55">
            <div className='font-size-12 color-subtitle'>Người khám</div>
            <div className='medium'>Nguyễn Văn A</div>
            </Col>
            <Col width="45" className='text-right'>
            <span className="badge color-warning">Chờ hoàn</span>
            <Icon icon="icon24 icons-ic24px-arrow-right"></Icon>
            </Col>
          </Row>
          <Row noGap className='item-time'>            
        <Col className='col-left line-right'>
        <Button href="/schedule-detail-da-huy2/" fill color='white-light'><Icon icon="icon24 icons-ic24px-calendar filter-white"></Icon> <span className='button-txt'>12/08/2022</span></Button>
        </Col>
        <Col className='col-right'>
        <Button href="/schedule-detail-da-huy2/" fill color='white-light'><Icon icon="icon24 icons-ic24px-clock filter-white"></Icon> <span className='button-txt'>10-11 giờ</span></Button>
        </Col>
      </Row>
        </Link>    
        <div slot='subtitle'>
        <div className='subtitle-top color-main'>Bệnh viện Hữu Nghị Việt Đức</div>
        <div className='subtitle-bottom'>Số 105 giải phóng, Q.Đống đa Hà...</div>        
          </div>
          <Link href="/schedule-detail-da-huy2/" slot='root-end' className='list-bottom'>
          <Row className='box-state bg-default border-radius4'>
          <Col width="80">
            <div className='font-size-14'><Icon icon="icon24 icons-ic24px-chart filter-primary"></Icon> <span className='button-txt'>Liệu trình đã khám</span></div>
            </Col>
            <Col width="20" className='text-right'>
            <div className='bold font-size-14 color-primary'>4/5</div>
            </Col>            
          </Row>
          </Link>            
      </ListItem>
      <ListItem className='default-border' link="/schedule-detail-da-huy3/" title="Bs. Lê Công Tuấn Anh" subtitle="Cơ xương khớp">
        <img className='ava img-64' slot="media" src="assets/vivnpay/demo/ava3.jpg" width="64" />
        <img className='ava-logo' slot="media" src="assets/vivnpay/svg/logo/ava-logo-viet-duc.svg" width="24" />
        <Link href="/schedule-detail-da-huy3/" slot='root-start' className='item-top'>
        <Row className='item-bottom item-bottom-nobor'>
          <Col width="55">
            <div className='font-size-12 color-subtitle'>Người khám</div>
            <div className='medium'>Nguyễn Văn A</div>
            </Col>
            <Col width="45" className='text-right'>
            <span className="badge color-success">Đã hoàn</span>
            <Icon icon="icon24 icons-ic24px-arrow-right"></Icon>
            </Col>
          </Row>
          <Row noGap className='item-time'>            
        <Col className='col-left line-right'>
        <Button href="/schedule-detail-da-huy3/" fill color='white-light'><Icon icon="icon24 icons-ic24px-calendar filter-white"></Icon> <span className='button-txt'>12/08/2022</span></Button>
        </Col>
        <Col className='col-right'>
        <Button href="/schedule-detail-da-huy3/" fill color='white-light'><Icon icon="icon24 icons-ic24px-clock filter-white"></Icon> <span className='button-txt'>10-11 giờ</span></Button>
        </Col>
      </Row>
        </Link>    
        <div slot='subtitle'>
        <div className='subtitle-top color-main'>Bệnh viện Hữu Nghị Việt Đức</div>
        <div className='subtitle-bottom'>Số 105 giải phóng, Q.Đống đa Hà...</div>        
          </div>
          <Link href="/schedule-detail-da-huy3/" slot='root-end' className='list-bottom'>
          <Row className='box-state bg-default border-radius4'>
          <Col width="80">
            <div className='font-size-14'><Icon icon="icon24 icons-ic24px-chart filter-primary"></Icon> <span className='button-txt'>Liệu trình đã khám</span></div>
            </Col>
            <Col width="20" className='text-right'>
            <div className='bold font-size-14 color-primary'>4/5</div>
            </Col>            
          </Row>
          </Link>            
      </ListItem> 
      <ListItem className='default-border' link="/schedule-detail-da-huy4/" title="Bs. Lê Công Tuấn Anh" subtitle="Cơ xương khớp">
        <img className='ava img-64' slot="media" src="assets/vivnpay/demo/ava3.jpg" width="64" />
        <img className='ava-logo' slot="media" src="assets/vivnpay/svg/logo/ava-logo-viet-duc.svg" width="24" />
        <Link href="/schedule-detail-da-huy4/" slot='root-start' className='item-top'>
        <Row className='item-bottom item-bottom-nobor'>
          <Col width="55">
            <div className='font-size-12 color-subtitle'>Người khám</div>
            <div className='medium'>Nguyễn Văn A</div>
            </Col>
            <Col width="45" className='text-right'>
            <span className="badge color-dely">Từ chối hoàn</span>
            <Icon icon="icon24 icons-ic24px-arrow-right"></Icon>
            </Col>            
          </Row>
          <Row noGap className='item-time'>            
        <Col className='col-left line-right'>
        <Button href="/schedule-detail-da-huy4/" fill color='white-light'><Icon icon="icon24 icons-ic24px-calendar filter-white"></Icon> <span className='button-txt'>12/08/2022</span></Button>
        </Col>
        <Col className='col-right'>
        <Button href="/schedule-detail-da-huy4/" fill color='white-light'><Icon icon="icon24 icons-ic24px-clock filter-white"></Icon> <span className='button-txt'>10-11 giờ</span></Button>
        </Col>
      </Row>
        </Link>    
        <div slot='subtitle'>
        <div className='subtitle-top color-main'>Bệnh viện Hữu Nghị Việt Đức</div>
        <div className='subtitle-bottom'>Số 105 giải phóng, Q.Đống đa Hà...</div>        
          </div>
          <Link href="/schedule-detail-da-huy4/" slot='root-end' className='list-bottom'>
          <Row className='box-state bg-default border-radius4'>
          <Col width="80">
            <div className='font-size-14'><Icon icon="icon24 icons-ic24px-chart filter-primary"></Icon> <span className='button-txt'>Liệu trình đã khám</span></div>
            </Col>
            <Col width="20" className='text-right'>
            <div className='bold font-size-14 color-primary'>4/5</div>
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