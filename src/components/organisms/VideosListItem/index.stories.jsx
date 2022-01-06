import React from 'react';
import VideosListItem from '.';
import video from './sampleData.json';

export default { title: 'organisms/VideosListItem' };

export const videoListItem = () => <VideosListItem video={video} />;

// 追加する
export const videoListItemWithFavoriteButton = () => (
  <VideosListItem video={video} withFavoriteButton />
);
