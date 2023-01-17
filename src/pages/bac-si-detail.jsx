import React from 'react';
import {
    Page,
    Navbar,NavRight,Link,Icon,NavTitle,
    Button,Toolbar,
    Block,Col,
    Card,
  CardHeader,
  CardContent,
  } from 'framework7-react';

const BacSiDetail = () => (
            <Page name="BacSiDetail" className='bac-si-detail page-non-top'>
    <Navbar large backLink="Back" className='header-tran icon-bg-white'>
    <NavTitle className='text-center'>
    Bs. Lê Công Tuấn Anh
    </NavTitle>
      <NavRight>
    <Link iconOnly>
    <Link><Icon icon="icon24 icons-ic24px-heart"></Icon></Link>
    </Link>
  </NavRight>
    </Navbar>
    <Toolbar bottom className='button-bottom'>
          <Col>
            <div className='font-size-14'>Phí dịch vụ</div>
            <div className='medium color-primary'>560,000<sub>đ</sub></div>
            </Col>
            <Col>
            <Button href="/dat-lich-kham/" className="min-width-100" fill color="primary-light">Đặt lịch khám</Button>
            </Col>            
  </Toolbar>   
    <Block className='block-none'>
      <Card className="card-pic border-radius-0">
      <CardHeader className="no-border no-padding">
      <div className='pic'>
              <img src="assets/vivnpay/demo/img2.png" width="100%" />
              </div>
              <div className='logo-facilities center-64'>
              <img src="assets/vivnpay/demo/ava3.jpg" width="64" />
              </div> 
      </CardHeader>
      <CardContent className='align-items-start text-center'>
      <div className='col color-main'>
                <div className='font-size-20 medium title'>Bs. Lê Công Tuấn Anh</div>
                <div className='font-size-14 color-subtitle'>Cơ xương khớp</div>
                <div className='font-size-14 color-subtitle'>Bệnh viện Hữu Nghị Việt Đức</div>
                </div>
      </CardContent>
    </Card>
      </Block>
      <Block className='block-none box-white'>
      <Card className="card-pic box-shadow-0">
      <CardHeader className="no-border align-items-center">
        <div className="medium title">Thông tin chung</div>   
      </CardHeader>
      <CardContent className='p3 list-mb-16'>
      <div>
        <p>Chuyên khoa</p>
        <p className='color-subtitle'>Tai Mũi Họng</p>
        </div>
        <div>
        <p>Ngoại ngữ</p>
        <p className='color-subtitle'>Tiếng Anh – B2 châu Âu</p>
        </div>
        <div>
        <p>Lĩnh vực chuyên sâu</p>
        <p className='color-subtitle'>Mũi – xoang, polyp mũi</p>
        </div>
      </CardContent>
    </Card>
      </Block>
      <Block className='block-none box-white'>
      <Card className="card-pic box-shadow-0">
      <CardHeader className="no-border align-items-center">
        <div className="medium title">Quá trình đào tạo</div>   
      </CardHeader>
      <CardContent className='p3 list-mb-16'>
      <div>
        <p className='medium color-primary'>1992</p>
        <p className='color-subtitle'>Tốt nghiệp Bác sỹ Đa khoa, Đại học Y Hà Nội</p>
        </div>
        <div>
        <p className='medium color-primary'>1994</p>
        <p className='color-subtitle'>Tốt nghiệp Bác sỹ chuyên khoa Tai Mũi Họng</p>
        </div>
        <div>
        <p className='medium color-primary'>2002</p>
        <p className='color-subtitle'>Tốt nghiệp Thạc sỹ  chuyên ngành Tai Mũi Họng, Đại học Y Hà Nội</p>
        </div>
        <div>
        <p className='medium color-primary'>2012</p>
        <p className='color-subtitle'>Tốt nghiệp Bác sỹ Đa khoa, Đại học Y Hà Nội</p>
        </div>
        <div>
        <p className='medium color-primary'>2022</p>
        <p className='color-subtitle'>Đã được công nhận là Bác sỹ Cao Cấp theo các tiêu chuẩn của Bộ Y tế và Bộ Nội vụ.</p>
        </div>
        <hr></hr>
        <p>Đã tham gia nhiều khóa học chuyên sâu về các lĩnh vực trong chuyên khoa  Tai Mũi Họng ở trong nước và quốc tế.</p>
        <hr>
        </hr>
        <p>Đã tham gia nhiều đề tài nghiên cứu khoa học về các lĩnh vực trong chuyên khoa  Tai Mũi Họng.</p>
      </CardContent>
    </Card>
      </Block>
  </Page>
);
export default BacSiDetail;