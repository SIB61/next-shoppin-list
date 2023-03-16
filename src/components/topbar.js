import Link from "next/link";
import { memo } from "react";

function TopBar({ loggedIn, cartCount }) {
  return (
    <div className="navbar bg-base-100 px-10">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-2xl">My Shop</a>
      </div>
      <div className="flex-none">
        {loggedIn ? (
        <p>Welcome to My Shop</p>
        ) : (
          <div>
            <Link href="/login" className="btn btn-ghost text-xl">Login</Link>
            <Link href="/registration" className="btn btn-ghost text-xl">Register</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(TopBar);
