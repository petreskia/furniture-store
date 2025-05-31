interface WidgetProps {
  number: string;
  text: string;
}

export default function widget({ number, text }: WidgetProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <p className="text-5xl font-bold">{number}</p>
      <span className="whitespace-break-spaces text-center opacity-50">
        {text}
      </span>
    </div>
  );
}
