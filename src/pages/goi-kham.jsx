import React from 'react';
import {
  Page,Navbar,NavRight,Link,Icon,Badge,Block,BlockTitle,Row,Col,
  Card,
  CardHeader,
  CardContent,
  CardFooter
} from 'framework7-react';

const GoiKham = () => (
<Page name="GoiKham" className='goikham'>
<Navbar title="GoiKham" backLink="Back">

<NavRight>
    <Link iconOnly>
    <Link href="/home-search/"><Icon icon="icon24 icons-ic24px-search"></Icon></Link>
    </Link>
  </NavRight>
</Navbar>

    {/* Page content */}
    <Block>
      <BlockTitle>
        <Row>
        <Col width="70" className='white-space-normal'>Card pic</Col>
        <Col width="30" className='text-right'><Link className='font-size-14 regula'>Xem tất cả</Link></Col>
        </Row>
      </BlockTitle>
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
                <div>Bệnh viện Đa khoa Quốc tế Vinmec</div>
                <div className='font-size-12 color-subtitle'>458 Minh Khai, Khu đô thị Times City, Hai Bà Trưng, ...</div>
                </div>
      </CardContent>
    </Card>
    </Block> 
    <Block>
      <BlockTitle>
        <Row>
        <Col width="70" className='white-space-normal'>Card pic</Col>
        <Col width="30" className='text-right'><Link className='font-size-14 regula'>Xem tất cả</Link></Col>
        </Row>
      </BlockTitle>
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
                <div>Bệnh viện Đa khoa Quốc tế Vinmec</div>
                <div className='font-size-12 color-subtitle'>458 Minh Khai, Khu đô thị Times City, Hai Bà Trưng, ...</div>
                </div>
      </CardContent>
      <CardFooter>
        <Link className=''><Icon icon="icon24 icons-ic24px-eye"></Icon> <span class="color-main">Xem</span></Link>
        <Link><Icon icon="icon24 icons-ic24px-delete"></Icon> <span class="color-main">Xóa</span></Link>
        <Link><Icon icon="icon24 icons-ic24px-share2"></Icon> <span class="color-main">Chi tiết</span></Link>
      </CardFooter>
    </Card>
    </Block>   

</Page>
);
export default GoiKham;