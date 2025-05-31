import Widget from "./ui/widget";

export default function Widgets() {
  return (
    <div className="widgets flex justify-between items-center flex-wrap gap-4 w-full mx-auto my-6 md:my-15">
      <Widget number="900+" text={`Products that we \nhave created`} />
      <Widget number="21K+" text={`Happy & loyal \ncustomers`} />
      <Widget number="95%" text={`Customers purchase \n& return again`} />
      <Widget number="400+" text={`Unique Design \nwe crafted`} />
    </div>
  );
}
