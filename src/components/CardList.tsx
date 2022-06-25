import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const [image, setImage] = useState<string>();
  const { isOpen, onClose, onOpen } = useDisclosure();

  function handleViewImage(url: string): void {
    onOpen();
    setImage(url);
  }

  return (
    <>
      <SimpleGrid columns={3} spacing="40px">
        {cards.map(card => {
          return (
            <Card
              data={{
                title: card.title,
                ts: card.ts,
                url: card.url,
                description: card.description,
              }}
              viewImage={url => handleViewImage(url)}
              key={card.id}
            />
          );
        })}
      </SimpleGrid>

      <ModalViewImage isOpen={isOpen} imgUrl={image} onClose={onClose} />
    </>
  );
}
