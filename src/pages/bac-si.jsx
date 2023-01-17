import React from 'react';
import {  
    Searchbar, List,
    ListItem,
    theme,
  Page,
  Navbar,NavRight,Link,Icon,
  Subnavbar,
  Segmented,
  Button,Toolbar,
  Tabs,
  Tab,
  Block,Row,Col,
  Card,
CardHeader,
CardContent,
} from 'framework7-react';

const BacSi = () => (
<Page hideToolbarOnScroll pageContent={false} name="ChuyenKhoa" className='chuyen-khoa'>
    <Navbar title="Bệnh viện Đa khoa Quốc tế Vinmec" backLink="Back">
      <Subnavbar>
        <Segmented raised>
          <Button tabLink="#tab-bs1">
          Thông tin
          </Button>
          <Button tabLink="#tab-bs2" tabLinkActive>Bác sĩ</Button>
        </Segmented>
      </Subnavbar>
      <NavRight>
    <Link iconOnly>
    <Link><Icon icon="icon24 icons-ic24px-heart"></Icon></Link>
    </Link>
  </NavRight>
    </Navbar>    

    <Tabs>
      <Tab id="tab-bs1" className="page-content tab-toolbar">
      <Block className='block-none'>
      <Card className="card-pic border-radius-0">
      <CardHeader className="no-border no-padding">
      <div className='pic'>
              <img src="assets/vivnpay/demo/img2.png" width="100%" />
              </div>
              <div className='logo-facilities center-64'>
              <img src="assets/vivnpay/svg/logo/logo-vinmec.svg" width="64" />
              </div> 
      </CardHeader>
      <CardContent className='align-items-start text-center'>
      <div className='col color-main'>
                <div className='medium title'>Bệnh viện Đa khoa Quốc tế Vinmec</div>
                <div className='font-size-12 color-subtitle'>458 Minh Khai, Khu đô thị Times City, Hai Bà Trưng, ...</div>
                </div>
      </CardContent>
    </Card>
      </Block>
      <Block className='block-none box-white'>
      <Card className="card-pic box-shadow-0">
      <CardHeader className="no-border align-items-center">
        <Col className='white-space-normal'><div className="medium title">Giới thiệu</div></Col>
        <Col><Link className='font-size-14 regula'><Icon icon="icon24 icons-ic24px-document filter-primary"></Icon> <span>Chi phí dịch vụ</span></Link></Col>
      </CardHeader>
      <CardContent>
        <p>
        Bệnh viện Hữu nghị Việt Đức ngày nay được thành lập từ năm 1902 cùng với sự ra đời của Trường Y khoa Đông Dương, tiền thân của Trường Đại học Y Hà Nội. Từ năm 1904 Bệnh viện chuyển về vị trí hiện tại với tên gọi Nhà thương bảo hộ (Hôpital indigène du Protectorat). Bệnh viện mang các tên gọi khác nhau qua từng giai đoạn lịch sử của đất nước... 
         <Link>xem thêm</Link>
        </p>
      </CardContent>
    </Card>
      </Block>
      <Block className='block-none box-white'>
      <Card className="card-pic box-shadow-0">
      <CardHeader className="no-border align-items-center">
        <Col className='white-space-normal'><div className="medium title">Chuyên khoa</div></Col>
        <Col><Link className='font-size-14 regula'><span>Xem tất cả</span></Link></Col>
      </CardHeader>
      <CardContent>
      <Row className='list-col3'>
      <Link href="/chuyen-khoa-detail/" className='col-33'>
        <div className='display-block text-center'>
        <img className='radius-default' src="assets/vivnpay/demo/pic1.jpg" width="100%" />
        <div className='font-size-12 color-main'>Tai, Mũi, Họng</div>
        </div>        
      </Link>
      <Link href="/chuyen-khoa-detail/" className='col-33'>
        <div className='display-block text-center'>
        <img className='radius-default' src="assets/vivnpay/demo/pic1.jpg" width="100%" />
        <div className='font-size-12 color-main'>Phẫu thuật tiêu hóa</div>
        </div>        
      </Link>
      <Link href="/chuyen-khoa-detail/" className='col-33'>
        <div className='display-block text-center'>
        <img className='radius-default' src="assets/vivnpay/demo/pic1.jpg" width="100%" />
        <div className='font-size-12 color-main'>Bệnh lý thần kinh</div>
        </div>        
      </Link>
      <Link href="/chuyen-khoa-detail/" className='col-33'>
        <div className='display-block text-center'>
        <img className='radius-default' src="assets/vivnpay/demo/pic1.jpg" width="100%" />
        <div className='font-size-12 color-main'>Bệnh tim mạch và lồng ngực</div>
        </div>        
      </Link>
      <Link href="/chuyen-khoa-detail/" className='col-33'>
        <div className='display-block text-center'>
        <img className='radius-default' src="assets/vivnpay/demo/pic1.jpg" width="100%" />
        <div className='font-size-12 color-main'>Ngoại sinh và trẻ sơ sinh</div>
        </div>        
      </Link>
      <Link href="/chuyen-khoa-detail/" className='col-33'>
        <div className='display-block text-center'>
        <img className='radius-default' src="assets/vivnpay/demo/pic1.jpg" width="100%" />
        <div className='font-size-12 color-main'>Bệnh lý tiêu hóa</div>
        </div>        
      </Link>
      </Row>
      </CardContent>
    </Card>
      </Block>
      <Block className='block-none box-white'>
      <Card className="card-pic box-shadow-0">
      <CardHeader className="no-border align-items-center">
        <Col className='white-space-normal'><div className="medium title">Hình ảnh</div></Col>
        <Col><Link className='font-size-14 regula'><span>Xem tất cả</span></Link></Col>
      </CardHeader>
      <CardContent>
      <Row>
      <Link href="/chuyen-khoa-detail/" className='col-33'>
        <div className='display-block text-center'>
        <img className='radius-default' src="assets/vivnpay/demo/pic2.jpg" width="100%" />
        </div>        
      </Link>
      <Link href="/chuyen-khoa-detail/" className='col-33'>
        <div className='display-block text-center'>
        <img className='radius-default' src="assets/vivnpay/demo/pic3.jpg" width="100%" />
        </div>        
      </Link>
      <Link href="/chuyen-khoa-detail/" className='col-33'>
        <div className='display-block text-center'>
        <img className='radius-default' src="assets/vivnpay/svg/pic-default.svg" width="100%" />
        </div>        
      </Link>
      <Link href="/chuyen-khoa-detail/" className='col-33'>
        <div className='display-block text-center'>
        <img className='radius-default' src="assets/vivnpay/demo/pic4.jpg" width="100%" />
        </div>        
      </Link>
      <Link href="/chuyen-khoa-detail/" className='col-33'>
        <div className='display-block text-center'>
        <img className='radius-default' src="assets/vivnpay/demo/pic5.jpg" width="100%" />
        </div>        
      </Link>
      <Link href="/chuyen-khoa-detail/" className='col-33'>
      
      </Link>
      </Row>
      </CardContent>
    </Card>
      </Block>
      <Toolbar bottom className='button-bottom'>
    <Button href="/chuyen-khoa/" className="width-100" fill>Đặt khám</Button>
  </Toolbar>
      </Tab>
      <Tab id="tab-bs2" tabActive className="page-content bg-white">
      <Block className='box-search'>
    <Searchbar
        disableButtonText="Hủy"
        placeholder="Tìm kiếm bác sĩ"
          searchContainer=".search-list"
          searchIn=".item-title"
          disableButton={!theme.aurora}
        ></Searchbar>
        <List className="searchbar-not-found">
      <ListItem title="Không tìm thấy"></ListItem>
    </List>
    <List mediaList className="search-list searchbar-found search-list-style search-list-bor">
    <ListItem title="Bs. Lê Công Tuấn Anh" subtitle="Cơ xương khớp" text="Bệnh viện Hữu Nghị Việt Đức">
        <img className='ava img-64' slot="media" src="assets/vivnpay/demo/ava3.jpg" width="64" />
        <img className='ava-logo' slot="media" src="assets/vivnpay/svg/logo/ava-logo-viet-duc.svg" width="24" />
        <Link href="/bac-si-detail/" slot='after'><Icon icon="icon24 icons-ic24px-info"></Icon></Link>
        <Row slot='root' className='item-bottom'>
          <Col>
            <div className='font-size-14'>Phí dịch vụ</div>
            <div className='medium color-primary'>560,000<sub>đ</sub></div>
            </Col>
            <Col>
            <Button href="/dat-lich-kham/" fill color="default">Đặt lịch khám</Button>
            </Col>            
          </Row>
      </ListItem>
      <ListItem title="Bs. Lê Công Tuấn Anh" subtitle="Cơ xương khớp" text="Bệnh viện Hữu Nghị Việt Đức">
        <img className='ava img-64' slot="media" src="assets/vivnpay/demo/ava4.jpg" width="64" />
        <img className='ava-logo' slot="media" src="assets/vivnpay/svg/logo/ava-logo-viet-duc.svg" width="24" />
        <Link href="/bac-si-detail/" slot='after'><Icon icon="icon24 icons-ic24px-info"></Icon></Link>
        <Row slot='root' className='item-bottom'>
          <Col>
            <div className='font-size-14'>Phí dịch vụ</div>
            <div className='medium color-primary'>560,000<sub>đ</sub></div>
            </Col>
            <Col>
            <Button href="/dat-lich-kham/" fill color="default">Đặt lịch khám</Button>
            </Col>            
          </Row>
      </ListItem>
      <ListItem title="Bs. Lê Công Tuấn Anh" subtitle="Cơ xương khớp" text="Bệnh viện Hữu Nghị Việt Đức">
        <img className='ava img-64' slot="media" src="assets/vivnpay/demo/ava5.jpg" width="64" />
        <img className='ava-logo' slot="media" src="assets/vivnpay/svg/logo/ava-logo-viet-duc.svg" width="24" />
        <Link href="/bac-si-detail/" slot='after'><Icon icon="icon24 icons-ic24px-info"></Icon></Link>
        <Row slot='root' className='item-bottom'>
          <Col>
            <div className='font-size-14'>Phí dịch vụ</div>
            <div className='medium color-primary'>560,000<sub>đ</sub></div>
            </Col>
            <Col>
            <Button href="/dat-lich-kham/" fill color="default">Đặt lịch khám</Button>
            </Col>            
          </Row>
      </ListItem>
      <ListItem title="Bs. Lê Công Tuấn Anh" subtitle="Cơ xương khớp" text="Bệnh viện Hữu Nghị Việt Đức">
        <img className='ava img-64' slot="media" src="assets/vivnpay/demo/ava6.jpg" width="64" />
        <img className='ava-logo' slot="media" src="assets/vivnpay/svg/logo/ava-logo-viet-duc.svg" width="24" />
        <Link href="/bac-si-detail/" slot='after'><Icon icon="icon24 icons-ic24px-info"></Icon></Link>
        <Row slot='root' className='item-bottom'>
          <Col>
            <div className='font-size-14'>Phí dịch vụ</div>
            <div className='medium color-primary'>560,000<sub>đ</sub></div>
            </Col>
            <Col>
            <Button href="/dat-lich-kham/" fill color="default">Đặt lịch khám</Button>
            </Col>            
          </Row>
      </ListItem>
      <ListItem title="Bs. Lê Công Tuấn Anh" subtitle="Cơ xương khớp" text="Bệnh viện Hữu Nghị Việt Đức">
        <img className='ava img-64' slot="media" src="assets/vivnpay/demo/ava7.jpg" width="64" />
        <img className='ava-logo' slot="media" src="assets/vivnpay/svg/logo/ava-logo-viet-duc.svg" width="24" />
        <Link href="/bac-si-detail/" slot='after'><Icon icon="icon24 icons-ic24px-info"></Icon></Link>
        <Row slot='root' className='item-bottom'>
          <Col>
            <div className='font-size-14'>Phí dịch vụ</div>
            <div className='medium color-primary'>560,000<sub>đ</sub></div>
            </Col>
            <Col>
            <Button href="/dat-lich-kham/" fill color="default">Đặt lịch khám</Button>
            </Col>            
          </Row>
      </ListItem>
      <ListItem title="Bs. Lê Công Tuấn Anh" subtitle="Cơ xương khớp" text="Bệnh viện Hữu Nghị Việt Đức">
        <img className='ava img-64' slot="media" src="assets/vivnpay/demo/ava4.jpg" width="64" />
        <img className='ava-logo' slot="media" src="assets/vivnpay/svg/logo/ava-logo-viet-duc.svg" width="24" />
        <Link href="/bac-si-detail/" slot='after'><Icon icon="icon24 icons-ic24px-info"></Icon></Link>
        <Row slot='root' className='item-bottom'>
          <Col>
            <div className='font-size-14'>Phí dịch vụ</div>
            <div className='medium color-primary'>560,000<sub>đ</sub></div>
            </Col>
            <Col>
            <Button href="/dat-lich-kham/" fill color="default">Đặt lịch khám</Button>
            </Col>            
          </Row>
      </ListItem>
        
    </List>
    </Block>    
      </Tab>
    </Tabs>
  </Page>
);
export default BacSi;