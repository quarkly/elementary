export default {
  margin: {
    alias: 'm',
    scale: 'space',
    transformer: 'space',
    type: ['number', 'string'],
  },
  marginTop: {
    alias: 'mt',
    scale: 'space',
    transformer: 'space',
    type: ['number', 'string'],
  },
  marginRight: {
    alias: 'mr',
    scale: 'space',
    transformer: 'space',
    type: ['number', 'string'],
  },
  marginBottom: {
    alias: 'mb',
    scale: 'space',
    transformer: 'space',
    type: ['number', 'string'],
  },
  marginLeft: {
    alias: 'ml',
    scale: 'space',
    transformer: 'space',
    type: ['number', 'string'],
  },
  padding: {
    alias: 'p',
    scale: 'space',
    transformer: 'space',
    type: ['number', 'string'],
  },
  paddingTop: {
    alias: 'pt',
    scale: 'space',
    transformer: 'space',
    type: ['number', 'string'],
  },
  paddingRight: {
    alias: 'pr',
    scale: 'space',
    transformer: 'space',
    type: ['number', 'string'],
  },
  paddingBottom: {
    alias: 'pb',
    scale: 'space',
    transformer: 'space',
    type: ['number', 'string'],
  },
  paddingLeft: {
    alias: 'pl',
    scale: 'space',
    transformer: 'space',
    type: ['number', 'string'],
  },
  fontSize: {
    alias: 'fz',
    type: ['number', 'string'],
  },
  color: {
    alias: 'c',
    variant: 'colors',
    type: 'string',
  },
  fontFamily: {
    alias: 'ff',
    variant: 'fonts',
    type: 'string',
  },
  textAlign: {
    alias: 'ta',
    type: 'string',
  },
  lineHeight: {
    alias: 'lh',
    type: ['number', 'string'],
  },
  fontWeight: {
    alias: 'fw',
    type: ['number', 'string'],
  },
  fontStyle: {
    alias: 'fs',
    type: 'string',
  },
  letterSpacing: {
    alias: 'lts',
    type: ['number', 'string'],
  },
  display: {
    alias: 'd',
    type: 'string',
  },
  width: {
    alias: 'w',
    transformer: 'width',
    type: ['number', 'string'],
  },
  maxWidth: {
    alias: 'maw',
    transformer: 'pixel',
    type: ['number', 'string'],
  },
  minWidth: {
    alias: 'miw',
    transformer: 'pixel',
    type: ['number', 'string'],
  },
  height: {
    alias: 'h',
    transformer: 'pixel',
    type: ['number', 'string'],
  },
  maxHeight: {
    alias: 'mah',
    transformer: 'pixel',
    type: ['number', 'string'],
  },
  minHeight: {
    alias: 'mih',
    transformer: 'pixel',
    type: ['number', 'string'],
  },
  sizeWidth: {
    type: 'string',
  },
  sizeHeight: {
    type: 'string',
  },
  ratioPadding: {
    type: ['number', 'string'],
  },
  ratio: {
    type: ['number', 'string'],
  },
  verticalAlign: {
    alias: 'va',
    type: 'string',
  },
  alignItems: {
    alias: 'ai',
    type: 'string',
  },
  alignContent: {
    alias: 'ac',
    type: 'string',
  },
  justifyItems: {
    alias: 'ji',
    type: 'string',
  },
  justifyContent: {
    alias: 'jc',
    type: 'string',
  },
  flexWrap: {
    alias: 'fxw',
    type: 'string',
  },
  flexBasis: {
    alias: 'fxb',
    transformer: 'width',
    type: 'string',
  },
  flexDirection: {
    alias: 'fxd',
    type: 'string',
  },
  flex: {
    alias: 'fx',
    type: 'string',
  },
  justifySelf: {
    alias: 'js',
    type: 'string',
  },
  alignSelf: {
    alias: 'as',
    type: 'string',
  },
  order: {
    alias: 'ord',
    type: 'string',
  },
  gridGap: { type: 'string', scale: 'space', transformer: 'pixel' },
  gridColumnGap: { type: 'string', scale: 'space', transformer: 'pixel' },
  gridRowGap: { type: 'string', scale: 'space', transformer: 'pixel' },
  gridColumn: { type: 'string' },
  gridRow: { type: 'string' },
  gridAutoFlow: { type: 'string' },
  gridAutoColumns: { type: 'string' },
  gridAutoRows: { type: 'string' },
  gridTemplateColumns: { type: 'string' },
  gridTemplateRows: { type: 'string' },
  gridTemplateAreas: { type: 'string' },
  gridArea: { type: 'string' },
  border: {
    alias: 'bd',
    type: 'string',
  },
  borderTop: {
    alias: 'bdt',
    type: 'string',
  },
  borderRight: {
    alias: 'bdr',
    type: 'string',
  },
  borderBottom: {
    alias: 'bdb',
    type: 'string',
  },
  borderLeft: {
    alias: 'bdl',
    type: 'string',
  },
  borders: {
    type: 'string',
  },
  borderColor: {
    alias: 'bdc',
    variant: 'colors',
    type: 'string',
  },
  borderRadius: {
    alias: 'bdrs',
    transformer: 'pixel',
    type: 'string',
  },
  boxShadow: {
    alias: 'bxsh',
    variant: 'shadows',
    type: 'string',
  },
  opacity: {
    alias: 'op',
    type: ['number', 'string'],
  },
  overflow: {
    alias: 'ov',
    type: 'string',
  },
  background: {
    alias: 'bg',
    type: 'string',
  },
  backgroundColor: {
    alias: 'bgc',
    variant: 'colors',
    type: 'string',
  },
  backgroundImage: {
    alias: 'bgi',
    type: 'string',
  },
  backgroundPosition: {
    alias: 'bgp',
    type: 'string',
  },
  backgroundRepeat: {
    alias: 'bgr',
    type: 'string',
  },
  backgroundSize: {
    alias: 'bgsz',
    type: 'string',
  },
  position: {
    alias: 'pos',
    type: 'string',
  },
  zIndex: {
    alias: 'z',
    type: 'number',
  },
  top: {
    alias: 't',
    transformer: 'pixel',
    type: ['number', 'string'],
  },
  right: {
    alias: 'r',
    transformer: 'pixel',
    type: ['number', 'string'],
  },
  bottom: {
    alias: 'b',
    transformer: 'pixel',
    type: ['number', 'string'],
  },
  left: {
    alias: 'l',
    transformer: 'pixel',
    type: ['number', 'string'],
  },
};
