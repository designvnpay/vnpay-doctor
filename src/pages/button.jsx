import React, { useState } from 'react';
import {
  Page,
  Navbar,
  NavRight,
  Link,
  Icon,
  Badge,
  Row,
  Button,
  BlockTitle,
  Block,
  Col,
  Segmented
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
    <BlockTitle>Fill Buttons</BlockTitle>
      <Block strong>
        <Row>
          <Col>
            <Button fill>Button</Button>
          </Col>
          <Col>
            <Button fill>Button</Button>
          </Col>
          <Col>
            <Button fill round>
              Round
            </Button>
          </Col>
        </Row>
      </Block>

      <BlockTitle>Outline Buttons</BlockTitle>
      <Block strong>
        <Row>
          <Col>
            <Button outline>Button</Button>
          </Col>
          <Col>
            <Button outline>Button</Button>
          </Col>
          <Col>
            <Button outline round>
              Round
            </Button>
          </Col>
        </Row>
      </Block>

      <BlockTitle>Raised Buttons</BlockTitle>
      <Block strong>
        <Row tag="p">
          <Col tag="span">
            <Button raised>Button</Button>
          </Col>
          <Col tag="span">
            <Button raised fill>
              Fill
            </Button>
          </Col>
          <Col tag="span">
            <Button raised outline>
              Outline
            </Button>
          </Col>
        </Row>
        <Row tag="p">
          <Col tag="span">
            <Button raised round>
              Round
            </Button>
          </Col>
          <Col tag="span">
            <Button raised fill round>
              Fill
            </Button>
          </Col>
          <Col tag="span">
            <Button raised outline round>
              Outline
            </Button>
          </Col>
        </Row>
      </Block>

      <BlockTitle>Segmented</BlockTitle>
      <Block strong>
        <Segmented raised tag="p">
          <Button>Button</Button>
          <Button>Button</Button>
          <Button active>Active</Button>
        </Segmented>
        <Segmented strong tag="p">
          <Button>Button</Button>
          <Button>Button</Button>
          <Button active>Active</Button>
        </Segmented>
        <Segmented tag="p">
          <Button outline>Outline</Button>
          <Button outline>Outline</Button>
          <Button outline active>
            Active
          </Button>
        </Segmented>
        <Segmented raised round tag="p">
          <Button round>Button</Button>
          <Button round>Button</Button>
          <Button round active>
            Active
          </Button>
        </Segmented>
        <Segmented round tag="p">
          <Button round outline>
            Outline
          </Button>
          <Button round outline>
            Outline
          </Button>
          <Button round outline active>
            Active
          </Button>
        </Segmented>
      </Block>

      <BlockTitle>Large Buttons</BlockTitle>
      <Block strong>
        <Row tag="p">
          <Col tag="span">
            <Button large>Button</Button>
          </Col>
          <Col tag="span">
            <Button large fill>
              Fill
            </Button>
          </Col>
        </Row>
        <Row tag="p">
          <Col tag="span">
            <Button large raised>
              Raised
            </Button>
          </Col>
          <Col tag="span">
            <Button large raised fill>
              Raised Fill
            </Button>
          </Col>
        </Row>
      </Block>

      <BlockTitle>Small Buttons</BlockTitle>
      <Block strong>
        <Row tag="p">
          <Col tag="span">
            <Button large small>
              Button
            </Button>
          </Col>
          <Col tag="span">
            <Button large small outline>
              Outline
            </Button>
          </Col>
          <Col tag="span">
            <Button large small fill>
              Fill
            </Button>
          </Col>
        </Row>
        <Row tag="p">
          <Col tag="span">
            <Button large small round>
              Button
            </Button>
          </Col>
          <Col tag="span">
            <Button large small outline round>
              Outline
            </Button>
          </Col>
          <Col tag="span">
            <Button large small fill round>
              Fill
            </Button>
          </Col>
        </Row>
      </Block>


      <BlockTitle>Color Buttons</BlockTitle>
      <Block strong>
        <Row>
          <Col>
            <Button color="red">Red</Button>
          </Col>
          <Col>
            <Button color="green">Green</Button>
          </Col>
          <Col>
            <Button color="blue">Blue</Button>
          </Col>
        </Row>
      </Block>

      <BlockTitle>Color Fill Buttons</BlockTitle>
      <Block strong>
        <Row>
          <Col>
            <Button fill color="red">
              Red
            </Button>
          </Col>
          <Col>
            <Button fill color="green">
              Green
            </Button>
          </Col>
          <Col>
            <Button fill color="blue">
              Blue
            </Button>
          </Col>
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
