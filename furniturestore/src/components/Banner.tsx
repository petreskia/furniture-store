import Button from "./ui/button";

export default function Banner() {
  return (
    <div className="custom-banner relative">
      <div className="banner-content absolute">
        <h1>
          Discover Timeless Comfort for <br />
          Every Corner of Your Home
        </h1>
        <p className="text-sm font-normal opacity-60 mt-3">
          Transform your home with stylish, durable, and comfortable furniture
          designed to elevate your living
        </p>
        <Button text="Shop Now" className="mt-8" />
      </div>
    </div>
  );
}
