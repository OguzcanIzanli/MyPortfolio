function IconWebhook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M4.876 13.61A4 4 0 1011 17h6" />
      <path d="M15.066 20.502A4 4 0 1017 13c-.706 0-1.424.179-2 .5L12 8" />
      <path d="M16 8a4 4 0 10-8 0c0 1.506.77 2.818 2 3.5L7 17" />
    </svg>
  );
}

export default IconWebhook;
