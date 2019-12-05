import { HeaderOther } from './header-other';
import { ControlType, applyPropertyControls } from 'property-controls';

export { HeaderOther };

applyPropertyControls(HeaderOther, {
  justifyContent: {
    type: ControlType.Enum,
    defaultValue: 'right',
    options: ['space-between', 'start', 'space-evenly']
  },
  sx: {
    type: ControlType.Style
  }
});

const linkControls = {
  children: {
    title: 'Text',
    type: ControlType.String,
    required: true
  },
  to: {
    title: 'URL',
    type: ControlType.String,
    defaultValue: '#!',
    required: true
  },
  sx: {
    type: ControlType.Style
  }
};

applyPropertyControls(HeaderOther.Logo, linkControls);
applyPropertyControls(HeaderOther.Link, linkControls);

// @ts-ignore
HeaderOther.usage = `
  <HeaderOther>
    <HeaderOther.Nav>
      <HeaderOther.Link to="/about">About</HeaderOther.Link>
      <HeaderOther.Link to="/blog">Blog</HeaderOther.Link>
    </HeaderOther.Nav>
  </HeaderOther>
`;
