


import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { useGetUser } from '@/actions/user' ;

const SecretSSR = () => {

    const { data, loading } = useGetUser() ;
  return (
    <BaseLayout user={user} loading={loading}>
      <BasePage>
      <h1>I am Secret Page - Hello {user.name}</h1>
      </BasePage>
    </BaseLayout>
  )
}

export default SecretSSR;
