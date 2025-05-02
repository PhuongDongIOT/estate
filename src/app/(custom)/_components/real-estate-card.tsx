// components/RealEstateCard.tsx

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface RealEstateCardProps {
  title: string;
  description: string;
  imageUrl: string; // Hoặc có thể là một component SVG
}

const RealEstateCard: React.FC<RealEstateCardProps> = ({ title, description, imageUrl }) => {
  return (
    <Card className="max-w-sm mx-auto">
      <CardHeader className="flex flex-col items-center p-4">
        <div className="w-20 h-20 md:w-32 md:h-32 rounded-md overflow-hidden mb-4">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        </div>
        <CardTitle className="text-2xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className='px-4'>
        <CardDescription className="text-center line-clamp-3">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default RealEstateCard;