import React, { useState, useEffect } from 'react';
import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface StoryItem {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  timestamp: string;
  images: string[];
  likes: number;
}

const RepostStory: React.FC = () => {
  const [stories, setStories] = useState<StoryItem[]>([]);

  useEffect(() => {
    // Mock Data
    const mockData: StoryItem[] = [
      {
        id: '1',
        user: { name: 'Natthaphat', avatar: 'https://i.pravatar.cc/150?u=1' },
        timestamp: '2 hours ago',
        images: ['https://picsum.photos/seed/1/600/800', 'https://picsum.photos/seed/2/600/800'],
        likes: 124
      },
      {
        id: '2',
        user: { name: 'Gemini Agent', avatar: 'https://i.pravatar.cc/150?u=2' },
        timestamp: '5 hours ago',
        images: ['https://picsum.photos/seed/3/600/800'],
        likes: 89
      }
    ];
    setStories(mockData);
  }, []);

  return (
    <div className="max-w-md mx-auto py-4 px-2 sm:px-0">
      <header className="sticky top-0 bg-white/80 backdrop-blur-md z-10 p-4 border-b mb-4 flex justify-between items-center rounded-b-xl shadow-sm">
        <h1 className="text-xl font-bold text-indigo-600">Repost Story</h1>
        <MoreHorizontal className="text-gray-500" />
      </header>

      <div className="space-y-6 pb-20">
        {stories.map(item => (
          <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-material border border-gray-100">
            {/* Header */}
            <div className="p-4 flex items-center space-x-3">
              <img src={item.user.avatar} className="w-10 h-10 rounded-full border-2 border-indigo-100" alt="avatar" />
              <div>
                <p className="font-semibold text-sm">{item.user.name}</p>
                <p className="text-xs text-gray-400">{item.timestamp}</p>
              </div>
            </div>

            {/* Carousel */}
            <div className="aspect-[3/4] bg-gray-200">
              <Swiper className="h-full w-full">
                {item.images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img src={img} className="w-full h-full object-cover" alt="story content" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Actions */}
            <div className="p-4 flex justify-between items-center">
              <div className="flex space-x-6">
                <button className="flex items-center space-x-1 text-gray-600 hover:text-red-500 transition-colors">
                  <Heart size={22} />
                  <span className="text-sm font-medium">{item.likes}</span>
                </button>
                <button className="text-gray-600 hover:text-indigo-500 transition-colors">
                  <MessageCircle size={22} />
                </button>
                <button className="text-gray-600 hover:text-green-500 transition-colors">
                  <Share2 size={22} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fixed Footer for Mobile */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t p-3 flex justify-around items-center max-w-md mx-auto shadow-2xl rounded-t-2xl z-20">
        <div className="w-8 h-8 rounded-lg bg-indigo-600"></div>
        <div className="w-8 h-8 rounded-lg bg-gray-200"></div>
        <div className="w-8 h-8 rounded-lg bg-gray-200"></div>
      </nav>
    </div>
  );
};

export default RepostStory;
