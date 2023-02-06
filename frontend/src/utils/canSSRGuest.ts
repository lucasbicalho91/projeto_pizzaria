import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import { parseCookies } from 'nookies'

//funcao poara paginas que só pode ser acessadas por visitantes

export function canSSRGuest<P>(fn: GetServerSideProps<P>) {
  return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {

    const cookies = parseCookies(ctx);

    // Se tentar acessar a página porém tendo já um login salvo redirecionamos
    if (cookies['@nextauth.token']) {
      return {
        redirect:{
          destination: '/dashboard',
          permanent: false
        }
      }
    }

      return await fn(ctx);
  }

}