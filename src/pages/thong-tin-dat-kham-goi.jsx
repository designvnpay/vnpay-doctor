import React from 'react';
import {
    Page,
    Navbar,NavRight,Link,Icon,NavTitle,
    List,
    ListItem,BlockTitle,
    Button,Toolbar,
    Block,Row,Col,
    Card,Sheet,
  CardHeader,Chip,
  CardContent,
  ListInput,PageContent,
  Toggle
  } from 'framework7-react';

const ThongTinDatKham = () => (
            <Page name="ThongTinDatKham" className='thong-tin-dat-kham'>
                <Navbar title="Thông tin đặt khám" backLink="Back">
</Navbar>
    <Toolbar bottom className='button-bottom min-height-120'>
        <Row className='width-100'>
        <Col width="50">
            <div className='font-size-14 medium'>Tổng tiền thanh toán</div>
            </Col>
            <Col width="50" className='text-right'>
            <div className='semibold color-primary font-size-20'>500,000<sub>đ</sub> </div>
            <div className='color-subtitle font-size-12'>Giá đã bao gồm VAT</div>         
            </Col>
            <Col className='button-bottom-after'>
            <Button href="/xac-nhan-thong-tin-goi/" fill color="primary-light">Tiếp tục</Button>
            </Col>
        </Row>
  </Toolbar>
      <Block className='block-none box-white mb0'>
      <Card className="card-pic box-shadow-0">
      <CardHeader className="no-border align-items-center">
        <Col className='white-space-normal'><div className="medium title">Thông tin người khám</div></Col>
        <Col><Link className='font-size-14 regula' sheetOpen=".sheet-contract">Chọn thông tin</Link></Col>
      </CardHeader>
      <Sheet
        className="sheet-contract"
        style={{ height: 'auto', '--f7-sheet-bg-color': '#fff' }}
        swipeToClose
        backdrop
      >
        <Toolbar>
          <div className="left medium">Chọn thông tin</div>
          <div className="right">
            <Link sheetClose><Icon icon="icon24 icons-ic24px-close"></Icon></Link>
          </div>
        </Toolbar>
        {/*  Scrollable sheet content */}
        <PageContent>
            <Block>
            <List mediaList className='list-col-justify list-radio-icon list-radio no-border list-mb-16'>
            <ListItem className='col-50'
        radio
        defaultChecked
        name="media-radio"
        value="1"
        title="Nguyễn Văn A"
        subtitle="20/08/1985"  
        text="0948807484" 
      >
        <Chip className='chip-small mb10' slot="before-title" outline text="Tôi" color="black" />
      </ListItem>
      <ListItem className='col-50'
        radio
        name="media-radio"
        value="1"
        title="Nguyễn Văn A"
        subtitle="20/08/1985"
        text="0948807484"    
      >
        <Chip className='chip-small mb10' slot="before-title" outline text="Con" color="orange" />
      </ListItem>
      <ListItem className='col-50'
        radio
        name="media-radio"
        value="1"
        title="Nguyễn Văn A"
        subtitle="20/08/1985" 
        text="0948807484"   
      >
        <Chip className='chip-small mb10' slot="before-title" outline text="Chồng" color="red" />
      </ListItem>
      <ListItem className='col-50'
        radio
        name="media-radio"
        value="1"
        title="Nguyễn Văn A"
        subtitle="20/08/1985"  
        text="0948807484"  
      >
        <Chip className='chip-small mb10' slot="before-title" outline text="Khác" color="blue" />
      </ListItem>

      
    </List>
    <Button sheetClose fill color="primary-light">Xác nhận</Button>

            </Block>          
        </PageContent>
      </Sheet>
      <CardContent>
      <List noHairlinesMd className='list-form'>
      <ListInput
        label="Họ và tên"
        type="text"
        placeholder="Nhập họ và tên"
    info="Thông tin ghi chú"
    errorMessage="Quý khách không để trống!"
    required
    validate

        clearButton
      ><span slot='label' className='clred'> *</span>
      </ListInput>
      <ListItem className='label-custom'>
        <div className="item-title item-label">Giới tính <span className='clred'>*</span></div>  
      </ListItem>
      <ListItem className='radio-custom1 radio-custom'
        radio
        radioIcon="start"
        title="Nam"
        name="radio-start"
        defaultChecked
      ></ListItem>
      <ListItem className='radio-custom2 radio-custom'
        radio
        radioIcon="start"
        title="Nữ"
        name="radio-start"
      ></ListItem>
      <ListInput
      label="Ngày tháng năm sinh"
    type="datepicker"
    placeholder="Ngày tháng năm sinh"
    className="icon-right icon-date"
    readonly
    calendarParams={{
      openIn: 'customModal', header: true, title:'Chọn', footer: true, dateFormat: 'dd MM yyyy'
    }}>
  <span slot='label' className='clred'> *</span>
  </ListInput>
  <ListInput
        label="Số điện thoại"
        type="text"
        defaultValue=""
        placeholder="Nhập số điện thoại"
        info="Thông tin ghi chú"
    errorMessage="Quý khách không để trống, Chỉ nhập số!"
        required
      validate
      pattern="[0-9]*"
        clearButton
        className="icon-right"
      >
        <span slot='label' className='clred'> *</span>    
        <div className="icons" slot="inner-end">
        <Icon icon="icon24 icons-ic24px-phone"></Icon>        
        </div>        
      </ListInput>
      <ListItem title="Tỉnh/Thành phố" smartSelect smartSelectParams={{
            pageTitle: 'Tỉnh/Thành phố', openIn: 'popup',searchbar: true, searchbarPlaceholder: 'Chọn Tỉnh/Thành phố',closeOnSelect:true,
            
             }}>
              <span slot='title' className='clred'>*</span>
        <select name="form" placeholder='Chọn Tỉnh/Thành phố'>
        <option value="Option1">Hà Nội</option>
          <option value="Option2">Option 2</option>
          <option value="Option3">Option 3</option>
        </select>
      </ListItem>
      <ListItem title="Quận/Huyện" smartSelect smartSelectParams={{
            pageTitle: 'Quận/Huyện', openIn: 'popup',searchbar: true, searchbarPlaceholder: 'Chọn Quận/Huyện',closeOnSelect:true,
            
             }}>
              <span slot='title' className='clred'> *</span>
        <select name="form" placeholder='Chọn Quận/Huyện'>
        <option value="Option1">Hà Nội</option>
          <option value="Option2">Option 2</option>
          <option value="Option3">Option 3</option>
        </select>
      </ListItem>
      <ListItem title="Phường/Xã" smartSelect smartSelectParams={{
            pageTitle: 'Phường/Xã', openIn: 'popup',searchbar: true, searchbarPlaceholder: 'Chọn Phường/Xã',closeOnSelect:true,
            
             }}>
              <span slot='title' className='clred'> *</span>
        <select name="form" placeholder='Chọn Phường/Xã'>
        <option value="Option1">Hà Nội</option>
          <option value="Option2">Option 2</option>
          <option value="Option3">Option 3</option>
        </select>
      </ListItem>
      <ListInput
        type="textarea"
        label="Chi tiết địa chỉ"
        defaultValue="Số 01, Đường Nguyễn Trí Thanh, Tổ dân phố Thắng lợi, Phường Thắng Lợi"
        placeholder="Nhập địa chỉ"
        resizable
      ><span slot='label' className='clred'> *</span></ListInput>
    </List>    
      </CardContent>
    </Card>
      </Block>
      <Block className='block-none box-white list-item-bor'>
      <List className='list-form no-margin list-check'>
    <ListItem className='text-no-ellipsis list-item-info'
        checkbox 
        name="my-checkbox"
        value="info-save"
        title="Lưu thông tin"
      >
        <Block slot='content' className='box-hidden'>
        <List className='list-form'>
      <ListItem title="Mối quan hệ" smartSelect smartSelectParams={{
            pageTitle: 'Mối quan hệ', openIn: 'popup',searchbar: true, searchbarPlaceholder: 'Chọn Mối quan hệ',closeOnSelect:true,
            
             }}>
        <select name="form" placeholder='Chọn Mối quan hệ'>
        <option value="Option1">Chồng</option>
          <option value="Option2">Con</option>
          <option value="Option3">Vợ</option>
          <option value="Option4">Khác</option>
        </select>
        <div slot='root' className="item-footer mb12">Để trống nếu là chính mình</div>
      </ListItem>
    </List>
      </Block>
      </ListItem>
    </List>
    </Block>
    <Block className='block-none box-white'>
      <Card className="card-pic box-shadow-0">
      <CardHeader className="no-border align-items-center">
        <Col className='white-space-normal'><div className="medium title">Dịch vụ bảo hiểm</div></Col>
      </CardHeader>
      <CardContent>
      <List className='list-nobor list-size14'>
      <ListItem
        checkbox
        name="my-checkbox"
        value="Sử dụng Bảo hiểm y tế"
        title="Sử dụng Bảo hiểm y tế"
      ></ListItem>
      <ListItem
        checkbox
        name="my-checkbox"
        value="Sử dụng Bảo hiểm tự nguyện"
        title="Sử dụng Bảo hiểm tự nguyện"
      ></ListItem>
    </List>  
      </CardContent>
    </Card>
      </Block>
      <Block className='block-none box-white'>
      <Card className="card-pic box-shadow-0">
      <CardHeader className="no-border align-items-center">
        <Col className='white-space-normal'><div className="medium title">Triệu chứng</div></Col>
      </CardHeader>
      <CardContent>
      <List className='list-nobor'>
      <ListInput
        type="textarea"
        label="Mô tả triệu chứng"
        defaultValue="Mắt cá chân sưng to, tấy. Đau họng sốt cao"
        placeholder="Nhập mô tả triệu chứng"
        resizable
      ></ListInput>     
    </List>  
      </CardContent>
    </Card>
      </Block>
      <Block className='block-none box-white'>
      <List className='list-form no-margin list-check'>
    <ListItem className='text-no-ellipsis list-item-info checkbox-right'
        checkbox
        defaultChecked 
        name="info-invoice"
        value="info-invoice"
        title="Xuất hóa đơn"
      >
        <Block slot='root' className='box-hidden' style={{ display: 'block', opacity: '1', height: 'auto' }}>
        <List className='list-form'>
        <ListInput
        label="Tên doanh nghiệp"
        type="text"
        placeholder="Nhập tên doanh nghiệp"
        defaultValue="ABC"
        clearButton
      >
        <span slot='label' className='clred'> *</span>
      </ListInput>
      <ListInput
        label="Mã số thuế"
        type="text"
        placeholder="Nhập mã số thuế *"
        defaultValue="123456"
        clearButton
      >
        <span slot='label' className='clred'> *</span>
      </ListInput>
      <ListInput
        label="Địa chỉ doanh nghiệp"
        type="text"
        placeholder="Nhập địa chỉ doanh nghiệp"
        defaultValue="22 Láng Hạ"
        clearButton
      >
        <span slot='label' className='clred'> *</span>
      </ListInput>
      <ListInput
        label="Email nhận hóa đơn"
        type="text"
        placeholder="Nhập email nhận hóa đơn"
        defaultValue="Abc@mail.com"
        clearButton
      >
        <span slot='label' className='clred'> *</span>
      </ListInput>

    </List>
      </Block>
      </ListItem>
    </List>
    </Block>
    <div className='space'></div><div className='space'></div><div className='space8'></div>
  </Page>
);
export default ThongTinDatKham;