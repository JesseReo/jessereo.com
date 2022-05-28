import Link from "next/link";

function Navighation() {
  return (
    <ul>
      <li>
        <Link href="/home">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/bio">
          <a>Bio</a>
        </Link>
      </li>
      <li>
        <Link href="/videos">
          <a>Videos</a>
        </Link>
      </li>
      <li>
        <Link href="/photos">
          <a>Photos</a>
        </Link>
      </li>
      <li>
        <Link href="/dj">
          <a>DJ</a>
        </Link>
      </li>
      <li>
        <Link href="/tours">
          <a>Tours</a>
        </Link>
      </li>
      <li>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </li>
    </ul>
  );
}

export default Navighation;
