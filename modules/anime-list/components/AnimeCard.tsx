import Image from 'next/image';
import router from 'next/router';
import React from 'react';

interface AnimeCardProps {
  id: string;
  title: string;
  score: number;
  src: string;
  status: string;
}

const AnimeCard = ({ id, title, score, src, status }: AnimeCardProps) => {
  const handleNavigateToDetailsPage = async () => {
    await router.push(`/anime/${id}`);
  };

  return (
    <div>
      <Image
        onClick={handleNavigateToDetailsPage}
        className="rounded-lg cursor-pointer"
        width={160}
        height={260}
        src={src}
      />
      <br />

      <h2 className="text-sm text-center border-b-[1px] border-dotted mb-1 pb-1">{title}</h2>

      <div className="flex text-xs justify-between">
        <span className="capitalize">{status.toLowerCase()}</span>
        <span>
          ⭐️ <span className="text-yellow-300 font-bold">{score || '?'}</span>/100
        </span>
      </div>
    </div>
  );
};

export default AnimeCard;
