import ContentLoader from 'react-content-loader';

export const TitleSkeleton = (
  <ContentLoader
    backgroundColor="#7e7e7ec5"
    foregroundColor="#d1d1d1b0"
    speed={2}
    style={{ borderRadius: '5px', height: '40px', width: '100%' }}
  >
    <rect height="40px" rx="0" ry="0" width="100%" />
  </ContentLoader>
);

export const ArticleSkeleton = (
  <ContentLoader
    backgroundColor="#7e7e7ec5"
    foregroundColor="#d1d1d1b0"
    style={{ borderRadius: '5px', height: '360px', width: '100%' }}
  >
    <rect height="20" rx="4" ry="4" width="100%" x="0" y="13" />
    <rect height="20" rx="4" ry="4" width="70%" x="0" y="45" />
    <rect height="20" rx="4" ry="4" width="100%" x="0" y="77" />
    <rect height="20" rx="4" ry="4" width="100%" x="0" y="109" />
    <rect height="20" rx="4" ry="4" width="40%" x="0" y="141" />
  </ContentLoader>
);
