import {TypographyEl} from '../componets'
import Layout from '../componets/Layout';

export default function Home() {
  return (
    <Layout title="главная" description='описание Home'>
      <TypographyEl teg="h1" classN="span">
        Home
      </TypographyEl>
    </Layout>
  );
}
