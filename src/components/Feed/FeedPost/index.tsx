import Link from 'next/link';
import { FeedPostContainer, FeedPostFooter, FeedPostHeader } from './styles';

export default function FeedPost() {
  return (
    <FeedPostContainer>
      <FeedPostHeader>
        <p>
          <Link href="/johndoe/openai-lanca-gpt-4-google-abre-vagas-machine-learning">OpenAI lança GPT-4 e Google abre vagas para Machine Learning</Link>
        </p>
      </FeedPostHeader>

      <FeedPostFooter>
        <span>0 votos</span>
        <span>0 comentários</span>
        <span>
          <Link href="/johndoe">johndoe</Link>
        </span>
        <span>há 1 hora</span>
      </FeedPostFooter>
    </FeedPostContainer>
  );
}
