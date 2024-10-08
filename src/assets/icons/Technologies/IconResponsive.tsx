function IconResponsive(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M4 6v10h5v-4a2 2 0 012-2h5a2 2 0 012 2v4h2V6H4M0 20v-2h4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h4v2h-6a2 2 0 01-2 2h-5a2 2 0 01-2-2H0m11.5 0a.5.5 0 00-.5.5.5.5 0 00.5.5.5.5 0 00.5-.5.5.5 0 00-.5-.5m4 0a.5.5 0 00-.5.5.5.5 0 00.5.5.5.5 0 00.5-.5.5.5 0 00-.5-.5M13 20v1h1v-1h-1m-2-8v7h5v-7h-5z" />
    </svg>
  );
}

export default IconResponsive;
