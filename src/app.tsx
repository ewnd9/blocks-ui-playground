import React from 'react';
import BlocksEditor from 'blocks-ui';
import * as defaultBlocks from '@blocks/blocks';
import {HeaderOther} from './blocks/header-other-block';
import {CardBlock} from './blocks/material/card/card-block';

const JSX = `
import React from 'react'
import { HeaderBasic } from '@blocks/blocks'

export default () => (
  <Blocks.Root>
    <HeaderBasic>
      <HeaderBasic.Logo to="/">Hello</HeaderBasic.Logo>
      <HeaderBasic.Nav>
        <HeaderBasic.Link to="/about">About</HeaderBasic.Link>
        <HeaderBasic.Link to="/blog">Blog</HeaderBasic.Link>
        <HeaderBasic.Link to="/contact">Contact</HeaderBasic.Link>
      </HeaderBasic.Nav>
    </HeaderBasic>
  </Blocks.Root>
)
`;

const customBlocks = {
  HeaderOther,
  CardBlock,
};
const blocks = { ...defaultBlocks, ...customBlocks };

export const Editor = () => <BlocksEditor src={JSX} blocks={blocks} />;
