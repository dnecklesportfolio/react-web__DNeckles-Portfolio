import { css } from 'styled-components';

const sizes = {
// Extra small devices (portrait phones, less than 576px)
// No media query since this is the default in Bootstrap

  // Small devices (landscape phones, 576px and up)
  phone: 576,
  
  // Medium devices (tablets, 768px and up)
  tablet: 768,

  // Large devices (desktops, 992px and up)
  desktop: 992,

  // Extra large devices (large desktops, 1200px and up)
  widescreen: 1200
}

const media = Object.keys(sizes).reduce((finalMedia, size) => {
  return {
    ...finalMedia,
    [size]: function(...args) {
      return css`
        @media(min-width: ${sizes[size]}px) {
          ${css(...args)}
        }
      `;
    }
  };
}, {});

export default media;