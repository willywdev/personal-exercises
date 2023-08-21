export default function Link({ className, href, children }) {
  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
}
