import React from 'react';
import {
    Page,
    Navbar,
    List,
    ListItem,
    Button,Toolbar,
    Block,Row,Col,Link,PageContent,
    Card,Icon,Sheet,
  CardHeader,
  CardContent
  } from 'framework7-react';

const XacNhanThongTin = () => (
            <Page name="XacNhanThongTin" className='xac-nhan-thong-tin'>
                <Navbar backLink="Back" title='Xác nhận thông tin'></Navbar>
                <Toolbar bottom className='button-bottom'>
        <Row className='width-100'>
            <Col className='button-bottom-after'>
            <Button href="/ket-qua-thanh-toan-goi/" fill color="primary-light">Thanh toán</Button>
            </Col>
        </Row>
  </Toolbar>
  <Block className='block-none box-white'>
      <Card className="card-pic box-shadow-0">
      <CardHeader className="no-border align-items-center">
      <Col width="70" className='white-space-normal'><div className="medium title">Thông tin</div></Col>
      <Col width="30" className='badge-small'><span className="badge color-success">Đã lưu</span></Col>
      </CardHeader>
      <CardContent>
      <List className='list-cont'>
      <ListItem title="Họ tên" after="Nguyễn Văn A"></ListItem>
      <ListItem title="Giới tính" after="Nam"></ListItem>
      <ListItem title="Ngày tháng năm sinh" after="04/07/1990"></ListItem>
      <ListItem title="Số điện thoại" after="0948807484"></ListItem>
      <ListItem className='align-items-start' title="Địa chỉ" after="Số 24 ngõ 154 Lĩnh Nam, Phường Lĩnh Nam, Quận Hoàng Mai, Hà Nội"></ListItem>
      </List>
      </CardContent>
    </Card>
      </Block>
      <Block className='block-none box-white'>
      <Card className="card-pic box-shadow-0">
      <CardHeader className="no-border align-items-center">
      <Col className='white-space-normal'><div className="medium title">Thông tin đặt khám</div></Col>
      </CardHeader>
      <CardContent>
  <List mediaList className="">
  <ListItem className='listitem-bor'>
  <div slot='title' className="title regula white-space-normal">Khám sức khỏe tổng quát cơ bản cho nam</div>
        <img className='img-48 border-radius-8' slot="media" src="assets/vivnpay/demo/pic-goi-kham-detail1.jpg" width="48" />
        <Link sheetOpen=".sheet-default" slot='after'><Icon icon="icon24 icons-ic24px-info"></Icon></Link>
      </ListItem>
  </List>
      <List className='list-cont'>
      <ListItem title="Bệnh viện" after="Bệnh viện hữu nghị Việt Đức"></ListItem>      
      <ListItem title="Thời gian khám" after="21/04/2022 09:45 "></ListItem>
      <ListItem title="Dịch vụ bảo hiểm" after="Bảo hiểm tự nguyện "></ListItem>
      <ListItem className='listitem-total' title="Phí dịch vụ">
      <div className="item-after"><span>500,000<sub>đ</sub></span></div>
      </ListItem>
      </List>
      </CardContent>
    </Card>
      </Block>
      <Block className='block-none box-white'>
      <Card className="card-pic box-shadow-0">
      <CardHeader className="no-border align-items-center">
      <Col className='white-space-normal'><div className="medium title">Mô tả triệu chứng</div></Col>
      </CardHeader>
      <CardContent>
      <List className='list-cont'>
      <ListItem className='color-main' title="Mắt cá chân sưng to, tấy. Đau họng sốt cao Di chuyển khó khăn">
      </ListItem>
      </List>
      </CardContent>
    </Card>
      </Block>
      <Block className='block-none box-white'>
      <Card className="card-pic box-shadow-0">
      <CardHeader className="no-border align-items-center">
      <Col className='white-space-normal'><div className="medium title">Thông tin xuất hóa đơn</div></Col>
      </CardHeader>
      <CardContent>
      <List className='list-cont'>
      <ListItem title="Tên doanh nghiệp" after="ABC"></ListItem>
      <ListItem title="Số điện thoại" after="0948807484"></ListItem>
      <ListItem title="Mã số thuế" after="123456"></ListItem>
      <ListItem className='align-items-start' title="Địa chỉ doanh nghiệp" after="22 Láng Hạ"></ListItem>
      <ListItem title="Email nhận hóa đơn" after="abc@mail.com"></ListItem>
      </List>
      </CardContent>
    </Card>
      </Block>
      <Block className='block-none box-white'>
      <Card className="card-pic box-shadow-0">
      <CardHeader className="no-border align-items-center">
      <Col className='white-space-normal'><div className="medium title">Thông tin thanh toán</div></Col>
      </CardHeader>
      <CardContent>
      <List className='list-cont'>
      <ListItem title="Tiền dịch vụ" after="500,000đ"></ListItem>
      <ListItem title="Tổng tiền thanh toán" className='listitem-total listitem-nobor'>
<div className="item-after item-after-custom">
<span className='display-block'>500,000<sub>đ</sub></span>
<span className="item-text display-block">Giá đã bao gồm VAT</span>
</div>
</ListItem>
      </List>
      <List className='list-form'>      
      <ListItem className='text-no-ellipsis listitem-checkbox'
        checkbox        
        name="my-checkbox"
        value="dieu-khoan"
      >
        <div slot='title'>Tôi đồng ý với các <Link sheetOpen=".sheet-dieu-khoan">điều khoản của dịch vụ</Link></div>
      </ListItem>
      </List>     
      </CardContent>
    </Card>
      </Block>
      <Sheet
        className="sheet-dieu-khoan"
        style={{ height: 'calc(100vh - 2em)', '--f7-sheet-bg-color': '#fff' }}
        swipeToClose
        backdrop
      >
        <Toolbar>
          <div className="left medium">Điều khoản điều kiện của dịch vụ</div>
          <div className="right">
            <Link sheetClose><Icon icon="icon24 icons-ic24px-close"></Icon></Link>
          </div>
        </Toolbar>
        {/*  Scrollable sheet content */}
        <PageContent>
            <Block className='color-sub font-light font-size-14'>
              <p>
                <b className='semibold color-main'>Giới thiệu</b>
              </p>
              <p>Chúng tôi, Công ty Cổ phần Giải pháp thanh toán Việt Nam, đơn vị sở hữu và vận hành “Nền tảng Y tế Chăm sóc sức khỏe toàn diện VNCare” bao gồm hệ thống ứng dụng di động. VNCare cung cấp nền tảng công nghệ để bệnh nhân thuận tiện trong việc đặt lịch dịch vụ y tế với bác sĩ và cơ sở y tế. Bằng việc truy cập hoặc sử dụng dịch vụ của VNCare, bạn hoàn toàn đồng ý theo các điều khoản, điều kiện dưới đây.
 </p><p>
 Chúng tôi duy trì quyền thay đổi hoặc điều chỉnh bất kỳ điều khoản và điều kiện nào dưới đây. Mọi sửa đổi nếu có sẽ có hiệu lực ngay lập tức sau khi đăng tải trên hệ thống trang này."</p>
              <p><b className='semibold color-main'>Thông tin người cung cấp dịch vụ “Khám chữa bệnh”</b></p>
              <p>Hệ thống VNCare đăng tải thông tin và lịch khám của bác sỹ, dịch vụ y tế và cơ sở y tế. Các thông tin về bác sĩ, dịch vụ y tế, cơ sở y tế (gọi chung là “Người cung cấp dịch vụ Khám chữa bệnh”) được cung cấp bởi chính “Người cung cấp dịch vụ Khám chữa bệnh” và các nguồn thông tin tin cậy khác do chúng tôi lựa chọn biên tập.
 </p><p>
 Chúng tôi cố gắng tìm hiểu và lựa chọn thông tin chính xác để đăng tải trên hệ thống. Tuy nhiên, chúng tôi không đủ điều kiện xác minh sự chính xác tuyệt đối của thông tin đã đăng tải."</p>
 <p><b className='semibold color-main'>Dịch vụ đặt lịch khám trực tuyến</b></p>
              <p>"VNCare cung cấp nền tảng công nghệ, phương tiện để kết nối bệnh nhân và bác sĩ, cơ sở y tế. Qua đó cung cấp dịch vụ đặt lịch khám trực tuyến.
 </p><p>
 Bệnh nhân lựa chọn bác sĩ, dịch vụ hoặc cơ sở y tế phù hợp trên hệ thống VNCare để đặt lịch khám. VNCare không phải là người cung cấp dịch vụ y tế và cũng không đại diện cho bất kỳ “Người cung cấp dịch vụ khám chữa bệnh” nào. Vai trò duy nhất của chúng tôi là tạo ra các công cụ, phương tiện để cung cấp “dịch vụ đặt lịch khám trực tuyến”."</p>
              <p><b className='semibold color-main'>Sai lệch thời gian & hủy lịch khám</b></p>
              <p>Lịch hẹn khám qua hệ thống VNCare và thời gian khám thực tế có thể khác so với lịch hẹn ban đầu do đặc thù của hoạt động khám chữa bệnh. Chúng tôi cố gắng để giảm thiểu sự sai lệch về thời gian và giảm thiểu thời gian chờ đợi của người bệnh.
 </p><p>
 Lịch hẹn khám có thể bị hủy hoặc thay đổi đột xuất vì một lý do nào đó, ví dụ như bác sĩ có công việc đột xuất. Việc này có thể xảy ra, nhất là với các bác sĩ, chuyên gia giỏi có lịch trình phức tạp và đặc thù.
 </p><p>
 Tuy nhiên, vì một lý do nào đó, chẳng hạn như lỗi đường truyền hoặc sai lệch thông tin, bạn có thể không nhận được thông báo kịp thời. Trong trường hợp này, VNCare mong nhận được thông tin từ người bệnh để chúng tôi có thể sắp xếp lịch khám bổ sung phù hợp với yêu cầu của bạn."</p>
              <p><b className='semibold color-main'>Trường hợp bệnh nhân Cấp cứu</b></p>
              <p>"VNCare KHÔNG phù hợp trong các trường hợp bệnh nhân cấp cứu. Nếu gặp trường hợp khẩn cấp chúng tôi khuyến nghị bạn (hoặc người thân) không nên sử dụng dịch vụ đặt lịch khám VNCare.
              </p><p>
 Bạn nên gọi số cấp cứu y tế 115 hoặc đến cơ sở y tế gần nhất để được thăm khám kịp thời."</p>
              <p><b className='semibold color-main'>Quyền miễn trừ</b></p>
              <p>VNCare cung cấp “dịch vụ đặt lịch khám”, chúng tôi không cung cấp dịch vụ y tế và không đại diện cho bất kỳ “Người cung cấp dịch vụ khám chữa bệnh” nào. Chúng tôi không chịu trách nhiệm về chất lượng, hiệu quả khám chữa bệnh, chi phí, giá cả dịch vụ mà bạn nhận được từ “Người cung cấp dịch vụ khám chữa bệnh”.
 </p><p>
 Chúng tôi cũng không chịu trách nhiệm pháp lý liên quan đến hoạt động khám chữa bệnh của “người cung cấp dịch vụ khám chữa bệnh”."</p>
 <p><b className='semibold color-main'>Giới hạn trách nhiệm pháp lý</b></p>
              <p>Chúng tôi chịu trách nhiệm pháp lý về những gì không thể bị loại trừ theo quy định của pháp luật Việt Nam.
 
 Những phát sinh (nếu có) liên quan tới việc sử dụng dịch vụ đặt lịch khám VNCare sẽ được hỗ trợ như mục “vai trò của VNCare”"</p>

              <p><b className='semibold color-main'>Thông báo</b></p>
              <p>Chúng tôi sẽ gửi cho bạn thông báo qua ứng dụng (Apps),tin nhắn SMS, email, dịch vụ OTT cho bạn về vấn đề mà bạn có thể quan tâm. Bạn có thể bỏ đăng ký bằng cách liên hệ với chúng tôi hoặc bằng cách sử dụng lựa chọn hủy bỏ đăng ký trong các bản cập nhật email, tin nhắn, hoặc từ chối thông tin mà chúng tôi gửi cho bạn.</p>

              <p><b className='semibold color-main'>Khiếu nại</b></p>
              <p>Nhằm không ngừng nâng cao chất lượng dịch vụ và trải nghiệm tốt hơn cho người dùng, chúng tôi mong nhận được những ý kiến phản hồi hoặc khiếu nại về chất lượng dịch vụ.
 </p>
 <p className='color-main'>
 Xin vui lòng liên hệ:
 </p><p className='color-main'>
 Công ty Cổ phần Giải pháp Thanh toán Việt Nam
 </p><p className='color-main'>
 ĐKKD số: 0102182292, Sở KH-ĐT Hà Nội cấp ngày: 07/03/2007, đăng ký thay đổi lần thứ 22, ngày: 24/11/2022.
 </p><p className='color-main'>
 Địa chỉ: Tầng 8, Số 22, Phố Láng Hạ, Phường Quận Đống Đa, Thành phố Hà Nội
 </p><p className='color-main'>
 Tel: 02437764668"</p>

            </Block>          
        </PageContent>
      </Sheet>
  </Page>
);
export default XacNhanThongTin;