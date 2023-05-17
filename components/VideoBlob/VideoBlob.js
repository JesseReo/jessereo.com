import { useEffect, useRef } from "react";
import { spline } from "/node_modules/@georgedoescode/spline/spline.js";
import SimplexNoise from "simplex-noise";
import styles from "./VideoBlob.module.css";

export default function VideoBlob() {
  const pathRef = useRef();

  useEffect(() => {
    const path = document.querySelector(".video-blob path");

    let noiseStep = 0.005;
    const simplex = new SimplexNoise();
    const points = createPoints();

    function animate() {
      path.setAttribute("d", spline(points, 1, true));

      // for every point...
      for (let i = 0; i < points.length; i++) {
        const point = points[i];

        // return a pseudo random value between -1 / 1 based on this point's current x, y positions in "time"
        const nX = noise(point.noiseOffsetX, point.noiseOffsetX);
        const nY = noise(point.noiseOffsetY, point.noiseOffsetY);

        // map this noise value to a new value, somewhere between it's original location -20 and it's original location + 20
        const x = map(nX, -1, 1, point.originX - 10, point.originX + 10);
        const y = map(nY, -1, 1, point.originY - 10, point.originY + 10);

        // update the point's current coordinates
        point.x = x;
        point.y = y;

        // progress the point's x, y values through "time"
        point.noiseOffsetX += noiseStep;
        point.noiseOffsetY += noiseStep;
      }

      requestAnimationFrame(animate);
    }

    function map(n, start1, end1, start2, end2) {
      return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
    }

    function noise(x, y) {
      return simplex.noise2D(x, y);
    }

    function createPoints() {
      const points = [];
      // how many points do we need
      const numPoints = 6;
      // used to equally space each point around the circle
      const angleStep = (Math.PI * 2) / numPoints;
      // the radius of the circle
      const rad = 75;

      for (let i = 1; i <= numPoints; i++) {
        // x & y coordinates of the current point
        const theta = i * angleStep;

        const x = 100 + Math.cos(theta) * rad;
        const y = 100 + Math.sin(theta) * rad;

        // store the point's position
        points.push({
          x: x,
          y: y,
          // we need to keep a reference to the point's original point for when we modulate the values later
          originX: x,
          originY: y,
          // more on this in a moment!
          noiseOffsetX: Math.random() * 1,
          noiseOffsetY: Math.random() * 1,
        });
      }

      return points;
    }

    path.addEventListener("mouseover", () => {
      noiseStep = 0.01;
    });

    path.addEventListener("mouseleave", () => {
      noiseStep = 0.005;
    });

    animate();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <video className={styles.video} autoPlay muted loop>
          <source src="/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
        </video>

        <svg className={`${styles.svg} video-blob`} viewBox="0 0 1000 1000">
          <clipPath id="hommus">
            <path ref={pathRef} d=""></path>
          </clipPath>
        </svg>
      </div>
    </>
  );
}
