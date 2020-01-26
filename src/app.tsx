import React from 'react';
import qs from 'qs';
import BlocksEditor from 'blocks-ui';
import * as defaultBlocks from '@blocks/react';
import debounce from 'lodash/debounce';

import { HeaderOther } from './blocks/header-other-block';
import { CardBlock } from './blocks/material/card/card-block';

const JSX = getInitialJSX();
const customBlocks = {
  HeaderOther,
  CardBlock
};
const blocks = { ...defaultBlocks, ...customBlocks };
const setHashDebounced = debounce(hash => {
  location.hash = hash;
});

export const Editor = () => (
  <BlocksEditor
    src={JSX}
    blocks={blocks}
    onChange={code => {
      const hash = qs.stringify({code: encodeURIComponent(code)});

      if (hash !== location.hash) {
        setHashDebounced(hash);
      }
    }}
  />
);

function getInitialJSX() {
  try {
    const params = qs.parse(location.hash.slice(1));
    const code = params.code && decodeURIComponent(params.code);

    if (code) {
      return code;
    }
  } catch (err) {
    console.error(err);
  }

  return `
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
}
