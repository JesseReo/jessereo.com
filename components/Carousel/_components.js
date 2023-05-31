import styled from "styled-components";

export const Outer = styled.div`
  position: relative;
`;

export const Items = styled.div`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;

  /* try hide scrollbars */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export const Item = styled.div`
  width: 100%;
  flex: 0 0 100%;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  aspect-ratio: ${(props) => props.aspectRatio ?? "unset"};
`;

const PrevNext = styled.div.attrs(() => {})`
  position: absolute;
  top: 50%;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: #fff;
  transform: translateY(-50%);
  opacity: ${(props) => (props.$active ? "0.5" : "0")};
  pointer-events: ${(props) => (props.$active ? "auto" : "none")};
  cursor: pointer;
  transition: opacity 300ms ease;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 20px;
    height: 20px;
  }

  &:hover {
    opacity: 1;
  }
`;

export const Prev = styled(PrevNext)`
  left: 16px;
  img,
  svg {
    transform: rotate(-90deg);
  }
`;

export const Next = styled(PrevNext)`
  right: 16px;
  img,
  svg {
    transform: rotate(90deg);
  }
`;

export const Pagination = (props) => {
  const pcStep = 100 / (props.totaItems - 1);
  const leftStep = props.width / props.totaItems;
  let slideMap = [{ pc: 0, left: 0 }];

  for (let i = 0; i < props.totaItems - 1; i++) {
    const pc = slideMap[i].pc + pcStep;
    const left = slideMap[i].left + leftStep;
    const newd = { pc: pc, left: left };
    slideMap.push(newd);
  }

  return (
    <PaginationOuter className="carousel__pagination">
      <PagintationInner>
        {slideMap.map((value, i) => {
          return (
            <PaginationItem
              key={i}
              className={`carousel__pagination-item carousel__pagination-item-${i}`}
              $active={props.percentageScrolled === Math.floor(slideMap[i].pc)}
              onClick={() => {
                console.log("clicked");
                props.goTo(slideMap[i].left);
              }}
            >
              •
            </PaginationItem>
          );
        })}
      </PagintationInner>
    </PaginationOuter>
  );
};

const PaginationOuter = styled.div`
  position: absolute;
  bottom: 8px;
  width: 100%;
  cursor: default;
`;

const PagintationInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  line-height: 8px;
`;

const PaginationItem = styled.div.attrs(() => {})`
  padding: 0 8px;
  color: #fff;
  opacity: ${(props) => (props.$active ? 1 : 0.5)};
  transition: opacity 300ms ease;
  cursor: pointer;
`;
