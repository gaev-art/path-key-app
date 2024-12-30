import { Container } from '@/components/shared/container';
import { Title } from '@/components/shared/title';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="min-h-screen bg-white rounded-3xl flex items-center">
      <Container className="mt-5 sm:max-w-[380px] w-11/12">
        <Title
          text="Auth"
          size="lg"
          className="font-extrabold text-center"
        />
        <Input />
        <Container className="mt-5 text-center">
          <Button variant="outline">Submit</Button>
        </Container>
      </Container>
    </main>
  );
}
