import { CardBlock } from './card';
import { ControlType, applyPropertyControls } from 'property-controls';

export { CardBlock };

applyPropertyControls(CardBlock, {
  text: {
    type: ControlType.String,
    defaultValue: 'right',
  },
});

// @ts-ignore
CardBlock.usage = `
  <CardBlock text="erterter"></CardBlock>
`;
