import Button from "./ui/button";

export default function Banner() {
  return (
    <div className="custom-banner relative flex items-center justify-center h-[400px] bg-cover bg-center text-white">
      <div className="banner-content">
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
