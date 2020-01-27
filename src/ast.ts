import {transform} from '@babel/core';
import reactPreset from '@babel/preset-react';

export function parseAst(code: string) {
  let {code: output} = transform(code, {
    presets: [reactPreset],
  });

  output = output
    .substring(output.indexOf('export default') + 'export default'.length)
  output = output.substring(0, output.length - 1) + '()';
  output = output.replace(/(\n|\s+)/g, '');
  output = output.replace(/(React\.createElement)\(([\w\.]+)\,/g, (...args) => {
    return `${args[1]}('${args[2]}',`
  });
  output = `const React = {createElement: (el, props, ...children) => ({type: el, props, children})};${output}`;
  const root = eval(output);
  return root.children;
}
