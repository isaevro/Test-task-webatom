import ContentLoader from 'react-content-loader'

const Skeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={200}
      height={271}
      viewBox="0 0 205 260"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <rect x="37" y="30" rx="0" ry="0" width="142" height="83" />
      <rect x="37" y="144" rx="0" ry="0" width="142" height="13" />
      <rect x="37" y="159" rx="0" ry="0" width="142" height="15" />
      <rect x="37" y="200" rx="0" ry="0" width="34" height="11" />
      <rect x="37" y="215" rx="0" ry="0" width="83" height="14" />
      <rect x="147" y="200" rx="0" ry="0" width="30" height="29" />
    </ContentLoader>
  )
}

export default Skeleton
