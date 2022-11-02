import React from 'react';
import {
  Page,
  Navbar,
  NavRight,
  Link,
  Icon,
  Badge,
  Popover,
  Breadcrumbs,
  BreadcrumbsItem,
  BreadcrumbsSeparator,
  BreadcrumbsCollapsed,
  List,
  ListInput,
  ListItem,
  Toggle,
  BlockTitle,
  Row,
  Button,
  Range,
  Block
} from 'framework7-react';

const FormPage = () => (
  <Page name="form" className='bg-white'>
    <Navbar title="Buttons" backLink="Back">
    <NavRight>
        <Link iconOnly>
          <Icon ios="f7:person_circle_fill" aurora="f7:person_circle_fill" md="material:person">
            <Badge color="red">5</Badge>
          </Icon>
        </Link>
      </NavRight>
    </Navbar>
    <BlockTitle>Buttons</BlockTitle>
    <Block>
      <Row tag="p">
        <Button className="col">Button</Button>
        <Button className="col" fill>Button Fill</Button>
      </Row>
      <Row tag="p">
        <Button className="col" raised>Button</Button>
        <Button className="col" raised fill>Button</Button>
      </Row>
      <Row tag="p">
        <Button className="col" round>Button Round</Button>
        <Button className="col" round fill>Button Round</Button>
      </Row>
      <Row tag="p">
        <Button className="col" outline>Button Outline</Button>
        <Button className="col" round outline>Button Outline Round</Button>
      </Row>
      <Row tag="p">
        <Button className="col" small outline>Button Small</Button>
        <Button className="col" small round outline>Button Small Round</Button>
      </Row>
      <Row tag="p">
        <Button className="col" small fill>Button Small</Button>
        <Button className="col" small round fill>Button Small Round</Button>
      </Row>
      <Row tag="p">
        <Button className="col" large raised>Button Large</Button>
        <Button className="col" large fill raised>Button Large</Button>
      </Row>
      <Row tag="p">
        <Button className="col" large fill raised color="red">Large Red</Button>
        <Button className="col" large fill raised color="green">Large Green</Button>
      </Row>
    </Block>

    <BlockTitle>Text Button with Icon</BlockTitle>
    <Block>
    <Row tag="p">    
    <Button className="col" fill><Icon icon="icon24 icons-ic24px-download2 filter-white"></Icon> <span className='button-txt'>Button</span></Button>
    <Button className="col" fill color='dark'><Icon icon="icon24 icons-ic24px-download2 filter-white"></Icon> <span className='button-txt'>Button</span></Button>
    <Button disabled className="col" fill><Icon icon="icon24 icons-ic24px-download2 filter-white"></Icon> <span className='button-txt'>Button</span></Button>
      </Row>
      <Row tag="p">
    <Button className="col button-bor color-main"><Icon icon="icon24 icons-ic24px-download"></Icon> <span className='button-txt'>Button</span></Button>
    <Button className="col" outline><Icon icon="icon24 icons-ic24px-download filter-primary"></Icon> <span className='button-txt'>Button</span></Button>
    <Button className="col" fill><Icon icon="icon24 icons-ic24px-download filter-white"></Icon> <span className='button-txt'>Button</span></Button>
      </Row>

    </Block>
    

    <BlockTitle>Tone Button</BlockTitle>
    <Block>
    <Row tag="p">
      <Button className="col" fill color="default">Button</Button>
      <Button className="col" fill color="success">Button</Button>
      <Button className="col" fill color="warning">Button</Button>
      <Button className="col" fill color="danger">Button</Button>
      </Row>
    </Block>
    

    
    

  </Page>
);

export default FormPage;
