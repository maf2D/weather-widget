export type NextErrorPageProps = {
  error: Error & {
    digest?: string;
    message?: string;
  };
  reset: () => void;
};
