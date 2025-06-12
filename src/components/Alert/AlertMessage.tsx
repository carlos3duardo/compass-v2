interface AlertMessageProps {
  message: string | undefined;
}

export function AlertMessage({ message }: AlertMessageProps) {
  return <h3 className="text-sm font-semibold">{message}</h3>;
}
