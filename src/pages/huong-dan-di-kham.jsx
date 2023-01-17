import React from 'react';
import {
  Page,
  Navbar,
  List,
  Link,
  NavRight,Icon,
  AccordionContent,
  Block,ListItem, Button

} from 'framework7-react';

export default () => ( 
    
  <Page>
    <Navbar title="Hướng dẫn đi khám" backLink="Back">
<NavRight>
    <Link iconOnly><Icon icon="icon24 icons-ic24px-phone"></Icon></Link>
  </NavRight>
</Navbar>

      
<Block className='block-none box-white'></Block>
<Block className='block-none box-white'>
<List accordionList className='no-margin'>
      <ListItem className='accordion-item-opened' accordionItem title="Bước 1: Thủ tục khám">
        <AccordionContent className='color-sub'>
          <Block>
          <p>
          • Quý khách đến Quầy tiếp nhận
            </p>
            <p>
            • Đưa <span className='color-main text-upper'>Phiếu khám bệnh</span> cho nhân viên để được quét mã QR làm thủ tục khám
            </p>
          </Block>
        </AccordionContent>
      </ListItem>
    </List>
</Block>
<Block className='block-none box-white'>
<List accordionList className='no-margin'>
      <ListItem className='accordion-item-opened' accordionItem title="Bước 2: Nhận phiếu khám">
        <AccordionContent className='color-sub'>
          <Block>
          <p>
          • Nhận phiếu khám bệnh và STT tại buồng khám
            </p>
          </Block>
        </AccordionContent>
      </ListItem>
    </List>
</Block>
<Block className='block-none box-white'>
<List accordionList className='no-margin'>
      <ListItem className='accordion-item-opened' accordionItem title="Bước 3: Vào khám">
        <AccordionContent className='color-sub'>
          <Block>
          <p>
          • Chờ khám theo số STT đã được ghi trên phiếu khám bệnh.
            </p>
            <p>
            • Vào khám khi được thông báo
            </p>
          </Block>
        </AccordionContent>
      </ListItem>
    </List>
</Block>
<Block className='block-none box-white'>
<List accordionList className='no-margin'>
      <ListItem className='accordion-item-opened' accordionItem title="Bước 4: Xét nghiệm">
        <AccordionContent className='color-sub'>
          <Block>
          <p>
          • Nhận phiếu chỉ định xét nghiệm từ bác sĩ khám.
            </p>
            <p>
            • Đến nơi xét nghiệm, nộp phiếu chỉ định xét nghiệm và chờ đến lượt.
            </p>
          </Block>
        </AccordionContent>
      </ListItem>
    </List>
</Block>
<Block className='block-none box-white'>
<List accordionList className='no-margin'>
      <ListItem className='accordion-item-opened' accordionItem title="Bước 5: Quay lại phòng khám">
        <AccordionContent className='color-sub'>
          <Block>
          <p>
          • Quay về buồng khám, chờ đến lượt khám lại với các kết quả xét nghiệm.
            </p>
            <p>
            • Nhận chỉ định điều trị, đơn thuốc và đến nơi làm thủ tục chi trả viện phí hoặc đồng chi trả bảo hiểm y tế 
            </p>
          </Block>
        </AccordionContent>
      </ListItem>
    </List>
</Block>
  </Page>
    
  
);