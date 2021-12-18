const sizes = {
  mobile: '630px',
  tablet: '940px',
  laptop: '1440px',
  desktop: '1800px',
};

export const device = {
  mobile: `(max-width: ${sizes.mobile})`,
  tablet: `(max-width: ${sizes.tablet})`,
  laptop: `(max-width: ${sizes.laptop})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

export default device;
