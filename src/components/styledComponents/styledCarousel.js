import styled from "styled-components";
import {Carousel} from "antd";

 const SCarousel = styled(Carousel)`
  &.slick-slider {
    display: flex !important;
    gap: 5px;
  }
`

export default SCarousel;