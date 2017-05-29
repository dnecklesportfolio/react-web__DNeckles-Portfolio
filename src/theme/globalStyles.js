import { injectGlobal } from 'styled-components';

injectGlobal`
@font-face {
    font-family: 'GeosansLightRegular';
    src: url('src/assets/fonts/geosanslight-webfont.eot');
    src: url('src/assets/fonts/geosanslight-webfont.eot?#iefix') format('embedded-opentype'), url('src/assets/fonts/geosanslight-webfont.woff') format('woff'), url('src/assets/fonts/geosanslight-webfont.ttf') format('truetype'), url('src/assets/fonts/geosanslight-webfont.svg#GeosansLightRegular') format('svg');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Goudy-Old-Style';
    src: url('src/assets/fonts/Goudy-Old-Style-T-OT_21139.eot');
    src: local('☺'), url('src/assets/fonts/Goudy-Old-Style-T-OT_21139.woff') format('woff'), url('src/assets/fonts/Goudy-Old-Style-T-OT_21139.ttf') format('truetype'), url('src/assets/fonts/Goudy-Old-Style-T-OT_21139.svg') format('svg');
    font-weight: normal;
    font-style: normal;
}

  body {
      font-family: Arial, "Lucida Grande", sans-serif;
      font-size: 16px;
      line-height: 1.1;
      position: relative;
  }
`;