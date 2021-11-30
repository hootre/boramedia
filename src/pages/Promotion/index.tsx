import { useRouter } from 'next/router'

function RedirectPage({ }) {
  const router = useRouter()
  // Make sure we're in the browser
  if (typeof window !== 'undefined') {
    router.push('/');
    return; 
  }
}

RedirectPage.getInitialProps = (ctx: { res: { writeHead: (arg0: number, arg1: { Location: string; }) => void; end: () => void; }; }) => {
  // We check for ctx.res to make sure we're on the server.
  if (ctx.res) {
    ctx.res.writeHead(302, { Location: '/' });
    ctx.res.end();
  }
  return { };
}

export default RedirectPage