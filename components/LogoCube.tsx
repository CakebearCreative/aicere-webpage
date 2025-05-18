'use client';

export default function LogoCube() {
  return (
    <div className="relative h-6 w-6">
      <div className="absolute h-5 w-5 rounded-sm bg-gradient-to-br from-purple-600 to-pink-500 shadow-lg transform rotate-3"></div>
      <div className="absolute h-5 w-5 rounded-sm bg-gradient-to-br from-pink-500 to-green-500 shadow-lg transform -rotate-3"></div>
    </div>
  );
} 