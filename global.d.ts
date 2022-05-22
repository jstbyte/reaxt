import { NextPage } from 'next';

declare global {
  type NPage = NextPage & { getLayout?: (page: ReactElement) => ReactElement };
}
