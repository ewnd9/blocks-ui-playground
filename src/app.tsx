import React from 'react';
import qs from 'qs';
import BlocksEditor from 'blocks-ui';
import * as defaultBlocks from '@blocks/react';
import debounce from 'lodash/debounce';

import { HeaderOther } from './blocks/header-other-block';
import { CardBlock } from './blocks/material/card/card-block';
import { parseAst } from './ast';

const JSX = getInitialJSX();
const customBlocks = {
  HeaderOther,
  CardBlock
};
const blocks = { ...defaultBlocks, ...customBlocks };
const setHashDebounced = debounce(hash => {
  location.hash = hash;
});

let code;

export const Editor = () => (
  <div style={{ position: 'relative' }}>
    <button
      style={{ position: 'absolute', left: '50%' }}
      onClick={e => {
        console.log(parseAst(code));
      }}
    >
      copy json
    </button>

    <div>
      <BlocksEditor
        src={JSX}
        blocks={blocks}
        onChange={_code => {
          code = _code;
          const hash = qs.stringify({ code: encodeURIComponent(code) });

          if (hash !== location.hash) {
            setHashDebounced(hash);
          }
        }}
      />
    </div>
  </div>
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
    import React from "react";
    export default () => (
      <Blocks.Root>
        <CardBlock text="Card Block"></CardBlock>
      </Blocks.Root>
    );
  `;
}


