import React from 'react';
import {
  Page,Navbar,NavRight,Link,Icon,Block,
  Card,
  CardHeader,
  CardContent,
} from 'framework7-react';

const CoSoYte = () => (
<Page name="CoSoYte" className='cosoyte'>
<Navbar title="Cơ sở y tế" backLink="Back" subtitle='2430 bệnh viện và phòng khám'>

<NavRight>
    <Link iconOnly>
    <Link href="/co-so-ye-te-search/"><Icon icon="icon24 icons-ic24px-search"></Icon></Link>
    </Link>
  </NavRight>
</Navbar>
    {/* Page content */}
    <Block className='mt16'>
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
    <Link href="/co-so-ye-te-detail/">
    <Card className="card-pic">
      <CardHeader className="no-border no-padding">
      <div className='pic'>
              <img src="demo/bv-back-mai.jpg" width="100%" />
              </div>
              <div className='logo-facilities'>
              <img src="svg/logo/logo-bach-mai.svg" width="40" />
              </div> 
      </CardHeader>
      <CardContent className='align-items-start'>
      <div className='col color-main'>
                <div className='medium title'>Bệnh Viện Bạch Mai</div>
                <div className='font-size-12 color-subtitle'>458 Minh Khai, Khu đô thị Times City, Hai Bà Trưng, ...</div>
                </div>
      </CardContent>
    </Card>
    </Link>
    <Link href="/co-so-ye-te-detail/">
    <Card className="card-pic">
      <CardHeader className="no-border no-padding">
      <div className='pic'>
              <img src="demo/bv-phu-san.jpg" width="100%" />
              </div>
              <div className='logo-facilities'>
              <img src="svg/logo/logo-vinmec.svg" width="40" />
              </div> 
      </CardHeader>
      <CardContent className='align-items-start'>
      <div className='col color-main'>
                <div className='medium title'>Bệnh Viện Phụ Sản Hà Nội</div>
                <div className='font-size-12 color-subtitle'>458 Minh Khai, Khu đô thị Times City, Hai Bà Trưng, ...</div>
                </div>
      </CardContent>
    </Card>
    </Link>
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
    <Link href="/co-so-ye-te-detail/">
    <Card className="card-pic">
      <CardHeader className="no-border no-padding">
      <div className='pic'>
              <img src="demo/bv-back-mai.jpg" width="100%" />
              </div>
              <div className='logo-facilities'>
              <img src="svg/logo/logo-bach-mai.svg" width="40" />
              </div> 
      </CardHeader>
      <CardContent className='align-items-start'>
      <div className='col color-main'>
                <div className='medium title'>Bệnh Viện Bạch Mai</div>
                <div className='font-size-12 color-subtitle'>458 Minh Khai, Khu đô thị Times City, Hai Bà Trưng, ...</div>
                </div>
      </CardContent>
    </Card>
    </Link>
    <Link href="/co-so-ye-te-detail/">
    <Card className="card-pic">
      <CardHeader className="no-border no-padding">
      <div className='pic'>
              <img src="demo/bv-phu-san.jpg" width="100%" />
              </div>
              <div className='logo-facilities'>
              <img src="svg/logo/logo-vinmec.svg" width="40" />
              </div> 
      </CardHeader>
      <CardContent className='align-items-start'>
      <div className='col color-main'>
                <div className='medium title'>Bệnh Viện Phụ Sản Hà Nội</div>
                <div className='font-size-12 color-subtitle'>458 Minh Khai, Khu đô thị Times City, Hai Bà Trưng, ...</div>
                </div>
      </CardContent>
    </Card>
    </Link>
    </Block>   

</Page>
);
export default CoSoYte;