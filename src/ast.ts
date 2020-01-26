import * as parser from '@babel/parser';
// import generate from '@babel/generator';

const babelOpts = {
  // parse in strict mode and allow module declarations
  sourceType: 'module',
  plugins: [
    'estree',
    'flowComments',
    'typescript',
    'doExpressions',
    'objectRestSpread',
    'decorators-legacy',
    'classProperties',
    'classPrivateProperties',
    'classPrivateMethods',
    'exportDefaultFrom',
    'exportNamespaceFrom',
    'asyncGenerators',
    'functionBind',
    'functionSent',
    'dynamicImport',
    'numericSeparator',
    'optionalChaining',
    'importMeta',
    'bigInt',
    'optionalCatchBinding',
    'throwExpressions',
    'nullishCoalescingOperator',
    'jsx'
  ]
};

export function parseAst(code: string) {
  const ast = parser.parse(code, babelOpts as any);

  const root: any = ast.program.body.find(
    _ => _.type === 'ExportDefaultDeclaration'
  );

  const blocks = root.declaration.body.children
    .filter(child => child.type === 'JSXElement')
    .map(child => child);

  const json = blocks.map(({ openingElement: el }) => ({
    type: el.name.name,
    props: el.attributes.reduce((acc, { name, value }) => {
      // const ast = {
      //   type: 'File',
      //   program: {
      //     type: 'Program',
      //     sourceType: 'module',
      //     interpreter: null,
      //     body: [
      //       {
      //         type: 'ExpressionStatement',
      //         expression: value
      //       }
      //     ]
      //   }
      // };

      // acc[name.name] = generate(ast, babelOpts as any).code;
      acc[name.name] = value.value;
      return acc;
    }, {})
  }));

  console.log(JSON.stringify(json, null, 2));
  return ast;
}
