import { rem } from "polished";
import { css } from "styled-components";

export const sizes = css`
  --content-max-width: 1200px;
  --column-gap: ${rem(24)};
  --row-gap: ${rem(16)};

  --size-none: 0;
  --size-xtiny: ${rem(4)};
  --size-tiny: ${rem(8)};
  --size-small: ${rem(12)};
  --size-mini: ${rem(16)};
  --size-base: ${rem(24)};
  --size-medium: ${rem(32)};
  --size-large: ${rem(48)};
  --size-xlarge: ${rem(64)};
`;
