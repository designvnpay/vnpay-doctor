import React from 'react';
import {
  Page,
  Navbar,
  NavRight,
  Link,
  Icon,
  Badge,
  Row,
  Col,
  Block
} from 'framework7-react';

const FormPage = () => (
  <Page name="Icons">
    <Navbar title="Icons" backLink="Back">

    <NavRight>
        <Link iconOnly>
          <Icon ios="f7:person_circle_fill" aurora="f7:person_circle_fill" md="material:person">
            <Badge color="red">5</Badge>
          </Icon>
        </Link>
      </NavRight>
    </Navbar>
    <Block>
    <p className='font-size-12'>12px Regular</p>
    <p className='font-size-12 medium'>12px Medium</p>
    <p className='font-size-12 semibold'>12px Semibold</p>
    </Block>
    <Block>
    <p className='font-size-14'>14px Regular</p>
    <p className='font-size-14 medium'>14px Medium</p>
    <p className='font-size-14 semibold'>14px Semibold</p>
    </Block>
    <Block>
    <p className='font-size-16'>16px Regular</p>
    <p className='font-size-16 medium'>16px Medium</p>
    <p className='font-size-16 semibold'>16px Semibold</p>
    </Block>
    <Block>
    <p className='font-size-18'>18px Regular</p>
    <p className='font-size-18 medium'>18px Medium</p>
    <p className='font-size-18 semibold'>18px Semibold</p>
    </Block>
    <Block>
    <p className='font-size-20'>20px Regular</p>
    <p className='font-size-20 medium'>20px Medium</p>
    <p className='font-size-20 semibold'>20px Semibold</p>
    </Block>
    <Block>
    <p className='font-size-24'>24px Regular</p>
    <p className='font-size-24 medium'>24px Medium</p>
    <p className='font-size-24 semibold'>24px Semibold</p>
    </Block>
    <Block>
    <p className='font-size-32'>32px Regular</p>
    <p className='font-size-32 medium'>32px Medium</p>
    <p className='font-size-32 semibold'>32px Semibold</p>
    </Block>
    <Block>
    <p className='font-size-40'>40px Regular</p>
    <p className='font-size-40 medium'>40px Medium</p>
    <p className='font-size-40 semibold'>40px Semibold</p>
    </Block>
    
        

  </Page>
);

export default FormPage;
