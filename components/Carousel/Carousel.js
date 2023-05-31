import React, { useCallback, useEffect, useRef, useState } from "react";
import smoothscroll from "smoothscroll-polyfill";
import ArrowSvg from "./images/arrow.svg";
import { Item, Items, Next, Outer, Pagination, Prev } from "./_components";
import { styled } from "styled-components";

const Carousel = (props) => {
  const [cycle, setCycle] = useState(props.cycle);
  const [percentageScrolled, setPercentageScrolled] = useState(0);
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const outerElemRef = useRef(null);
  const scrollElemRef = useRef(null);
  const slideDuration = props.slideDuration || 5000;

  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  const goTo = useCallback((left) => {
    if (scrollElemRef.current === null) return;
    toggleScrollSnap(left); // fix webkit bug
    scrollElemRef.current.scroll({
      left: left,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    if (outerElemRef.current === null || scrollElemRef.current === null) return;

    const outerElem = outerElemRef.current;
    const scrollElem = scrollElemRef.current;
    let cycleInterval;

    if (cycle) {
      cycleInterval = setInterval(() => {
        const nextSlide =
          scrollElem.scrollLeft >=
          scrollElem.scrollWidth - scrollElem.offsetWidth
            ? 0
            : scrollElem.scrollLeft + scrollElem.offsetWidth;
        toggleScrollSnap(nextSlide);
        goTo(nextSlide);
      }, slideDuration);
    }

    function handleScroll() {
      const pc = getScrollPercentX(scrollElem);
      setIsStart(pc == 0);
      setIsEnd(pc == 100);
      setPercentageScrolled(pc);
    }

    function getScrollPercentX(scrollElem) {
      const scrollLeft = scrollElem.scrollLeft;
      const scrollWidth = scrollElem.scrollWidth - scrollElem.clientWidth;
      const percent = Math.floor((scrollLeft / scrollWidth) * 100);
      return percent;
    }

    function handleMouseEnter() {
      if (!props.cycle) return;
      setCycle(false);
    }

    function handleMouseOut() {
      if (!props.cycle) return;
      setCycle(true);
    }

    scrollElem.addEventListener("scroll", handleScroll);
    outerElem.addEventListener("mouseenter", handleMouseEnter);
    outerElem.addEventListener("mouseleave", handleMouseOut);

    return () => {
      scrollElem.removeEventListener("scroll", handleScroll);
      outerElem.removeEventListener("mouseenter", handleMouseEnter);
      outerElem.removeEventListener("mouseleave", handleMouseOut);
      if (cycleInterval) clearTimeout(cycleInterval);
    };
  }, [props.cycle, cycle, slideDuration, goTo]);

  function goNext() {
    if (scrollElemRef.current === null) return;
    const newLeft =
      scrollElemRef.current.scrollLeft + scrollElemRef.current.offsetWidth;
    goTo(newLeft);
    pauseCycle();
  }

  function goPrev() {
    if (scrollElemRef.current === null) return;
    const newLeft =
      scrollElemRef.current.scrollLeft - scrollElemRef.current.offsetWidth;
    goTo(newLeft);
    pauseCycle();
  }

  function pauseCycle() {
    if (!cycle) return;
    setCycle(false);
    setTimeout(() => {
      setCycle(true);
    }, slideDuration);
  }

  /* webkit bug:
   * `scroll behavior: smooth` does not work together with `css scroll-snap-type: mandatory`.
   * this function toggles scroll-snap during transition
   */
  function toggleScrollSnap(newLeft) {
    if (scrollElemRef.current === null) return;
    scrollElemRef.current.style.scrollSnapType = "none";
    const finishedScrollingCallback = setInterval(() => {
      if (scrollElemRef.current?.scrollLeft === newLeft) {
        scrollElemRef.current.style.removeProperty("scroll-snap-type");
        clearInterval(finishedScrollingCallback);
      }
    }, 100);
  }

  return (
    <>
      <Outer className="carousel" ref={outerElemRef}>
        <Items className="carousel__items" ref={scrollElemRef}>
          {props.data.map((item, i) => (
            <Item
              className={`carousel__item carousel_item_${i}`}
              key={`carousel-item-${i}`}
              aspectRatio={props.aspectRatio}
            >
              {item}
            </Item>
          ))}
        </Items>

        {props.prevNextButtons && (
          <>
            <Prev
              className="carousel__prev"
              onClick={goPrev}
              $active={!isStart}
            >
              <ArrowSvg />
            </Prev>
            <Next className="carousel__next" onClick={goNext} $active={!isEnd}>
              <ArrowSvg />
            </Next>
          </>
        )}

        {props.pagination && (
          <Pagination
            className="carousel__pagination"
            totaItems={props.data.length}
            percentageScrolled={percentageScrolled}
            width={scrollElemRef?.current?.scrollWidth || 0}
            goTo={goTo}
          />
        )}
      </Outer>
    </>
  );
};

export default Carousel;

export const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  aspect-ratio: ${(props) => props.aspectRatio ?? "unset"};
`;
